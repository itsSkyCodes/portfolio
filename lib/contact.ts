import "server-only";

import { sendContactEmail } from "@/lib/brevo";
import { rateLimit } from "@/lib/rate-limit";
import {
  contactSchema,
  fieldErrorsFromZod,
  isLikelySpam,
  type ContactResponse,
} from "@/lib/validations";

const SUCCESS_MESSAGE = "Message sent successfully. Thanks for reaching out!";

type SubmitResult = {
  status: number;
  body: ContactResponse;
  retryAfterSeconds?: number;
};

/**
 * Validate, rate-limit, and deliver a contact submission.
 * Spam-like requests receive a success response and are not emailed.
 */
export async function submitContact(input: unknown, ip: string): Promise<SubmitResult> {
  const parsed = contactSchema.safeParse(input);

  if (!parsed.success) {
    return {
      status: 400,
      body: {
        ok: false,
        message: "Please correct the highlighted fields.",
        fieldErrors: fieldErrorsFromZod(parsed.error),
      },
    };
  }

  if (isLikelySpam(parsed.data)) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[contact] Spam flag triggered in development mode; proceeding anyway to allow local testing.");
    } else {
      return { status: 200, body: { ok: true, message: SUCCESS_MESSAGE } };
    }
  }

  const isLocal = !ip || ip === "unknown" || ip === "127.0.0.1" || ip === "::1" || ip === "localhost";
  const isDev = process.env.NODE_ENV !== "production";

  if (!isDev && !isLocal) {
    const ipLimit = rateLimit(`ip:${ip}`, 10, 15 * 60 * 1000);
    const emailLimit = rateLimit(`email:${parsed.data.email.toLowerCase()}`, 5, 60 * 60 * 1000);
    const limited = !ipLimit.success ? ipLimit : !emailLimit.success ? emailLimit : null;

    if (limited) {
      return {
        status: 429,
        retryAfterSeconds: limited.retryAfterSeconds,
        body: {
          ok: false,
          message: "Too many messages. Please try again in a few minutes.",
        },
      };
    }
  }

  try {
    await sendContactEmail(parsed.data);
    console.info(`[contact] Message from ${parsed.data.email} successfully sent via Brevo.`);
  } catch (error) {
    console.error("Contact delivery failed:", error instanceof Error ? error.message : "Unknown error");
    const unconfigured = error instanceof Error && error.message.startsWith("Missing environment variable");
    return {
      status: unconfigured ? 503 : 502,
      body: {
        ok: false,
        message: unconfigured
          ? "The contact form is not configured yet. Please email directly."
          : "The message could not be sent. Please try again or email directly.",
      },
    };
  }

  return { status: 200, body: { ok: true, message: SUCCESS_MESSAGE } };
}
