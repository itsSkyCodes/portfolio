import { z } from "zod";

export const CONTACT_FIELDS = ["name", "email", "subject", "message"] as const;

export type ContactField = (typeof CONTACT_FIELDS)[number];

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name must be 80 characters or fewer."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .max(254, "Email must be 254 characters or fewer.")
    .refine((value) => z.email().safeParse(value).success, {
      message: "Enter a valid email address.",
    }),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(140, "Subject must be 140 characters or fewer."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message must be 2,000 characters or fewer."),
  company_url: z.string().optional(),
  b_hp_check: z.string().optional(),
  startedAt: z.number().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactFieldErrors = Partial<Record<ContactField, string>>;

export type ContactResponse = {
  ok: boolean;
  message: string;
  fieldErrors?: ContactFieldErrors;
};

/** Map a Zod failure to a single message per form field. */
export function fieldErrorsFromZod(error: z.ZodError): ContactFieldErrors {
  const fieldErrors: ContactFieldErrors = {};

  for (const issue of error.issues) {
    const key = issue.path[0];
    if (
      (key === "name" || key === "email" || key === "subject" || key === "message") &&
      !fieldErrors[key]
    ) {
      fieldErrors[key] = issue.message;
    }
  }

  return fieldErrors;
}

/** True when the honeypot was filled or the form was submitted unrealistically fast. */
export function isLikelySpam(input: Pick<ContactInput, "company_url" | "b_hp_check" | "startedAt" | "message">): boolean {
  if (input.company_url && input.company_url.trim().length > 0) {
    console.warn("[spam] company_url honeypot was filled:", input.company_url);
    return true;
  }

  if (input.b_hp_check && input.b_hp_check.trim().length > 0) {
    console.warn("[spam] b_hp_check honeypot was filled:", input.b_hp_check);
    return true;
  }

  if (process.env.NODE_ENV === "production" && typeof input.startedAt === "number") {
    const elapsed = Date.now() - input.startedAt;
    if (elapsed >= 0 && elapsed < 400) {
      console.warn("[spam] submitted unrealistically fast (elapsed ms):", elapsed);
      return true;
    }
  }

  const linkCount = input.message.match(/https?:\/\//gi)?.length ?? 0;
  if (linkCount > 4) {
    console.warn("[spam] too many links in message:", linkCount);
    return true;
  }

  return false;
}
