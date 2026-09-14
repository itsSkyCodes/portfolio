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
    return { status: 200, body: { ok: true, message: SUCCESS_MESSAGE } };
  }

  const ipLimit = rateLimit(`ip:${ip}`, 5, 15 * 60 * 1000);
  const emailLimit = rateLimit(`email:${parsed.data.email.toLowerCase()}`, 3, 60 * 60 * 1000);
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

  try {
    await sendContactEmail(parsed.data);
  } catch (error) {
    console.error("Contact delivery failed", error instanceof Error ? error.message : "Unknown error");
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
