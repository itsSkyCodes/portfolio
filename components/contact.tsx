"use client";

import { Download, Loader2 } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";

import { Container, SectionHeading } from "@/components/section";
import { SocialLinks } from "@/components/social-links";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactCopy } from "@/data/portfolio";
import { site } from "@/data/site";
import {
  contactSchema,
  fieldErrorsFromZod,
  type ContactField,
  type ContactFieldErrors,
  type ContactResponse,
} from "@/lib/validations";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

/** Contact details and a Brevo-backed form. Submission stays on this page. */
export function Contact() {
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [values, setValues] = useState<FormState>(emptyForm);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function update(field: ContactField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const parsed = contactSchema.safeParse({
      ...values,
      b_hp_check: honeypot,
      startedAt,
    });

    if (!parsed.success) {
      setErrors(fieldErrorsFromZod(parsed.error));
      setStatus("error");
      setMessage("Please correct the highlighted fields.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await response.json()) as ContactResponse;

      if (!response.ok || !data.ok) {
        setErrors(data.fieldErrors ?? {});
        setStatus("error");
        setMessage(data.message || "The message could not be sent. Please try again.");
        return;
      }

      setValues(emptyForm);
      setHoneypot("");
      setErrors({});
      setStatus("success");
      setMessage(data.message || contactCopy.success);
    } catch {
      setStatus("error");
      setMessage("The message could not be sent. Please try again or email directly.");
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 border-t border-white/10 py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading id="contact-heading" index="08" eyebrow="Contact" title={contactCopy.title} />
          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {contactCopy.summary}
          </p>
          <address className="mt-8 space-y-3 text-sm not-italic text-foreground/90">
            <p>
              <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Email</span>
              <a className="mt-1 inline-block hover:text-accent" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>
              <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Phone</span>
              <a className="mt-1 inline-block hover:text-accent" href={site.phoneHref}>
                {site.phone}
              </a>
            </p>
            <p>
              <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Location</span>
              <span className="mt-1 inline-block">{site.location}</span>
            </p>
            <p>
              <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Resume</span>
              <a
                className="mt-1 inline-flex items-center gap-1.5 text-accent hover:underline"
                href={site.resume.url}
                download={site.resume.filename}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="size-3.5" aria-hidden />
                Download Resume (PDF)
              </a>
            </p>
          </address>
          <SocialLinks className="mt-6" showLabels />
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-7">
            {status === "success" ? (
              <div role="status" className="py-10">
                <p className="text-xl font-medium tracking-tight text-foreground">{contactCopy.success}</p>
                <button
                  type="button"
                  className="mt-6 text-sm text-muted hover:text-foreground"
                  onClick={() => {
                    setStatus("idle");
                    setMessage("");
                    setHoneypot("");
                    setStartedAt(Date.now());
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={onSubmit} className="space-y-5">
                <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
                  <label htmlFor="b_hp_check">Do not fill this field</label>
                  <input
                    id="b_hp_check"
                    name="b_hp_check"
                    type="text"
                    tabIndex={-1}
                    autoComplete="new-password"
                    value={honeypot}
                    onChange={(event) => setHoneypot(event.target.value)}
                  />
                </div>

                <Field id="name" label="Name" error={errors.name}>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    maxLength={80}
                    value={values.name}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    disabled={status === "loading"}
                    onChange={(event) => update("name", event.target.value)}
                  />
                </Field>
                <Field id="email" label="Email" error={errors.email}>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    maxLength={254}
                    value={values.email}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    disabled={status === "loading"}
                    onChange={(event) => update("email", event.target.value)}
                  />
                </Field>
                <Field id="subject" label="Subject" error={errors.subject}>
                  <Input
                    id="subject"
                    name="subject"
                    autoComplete="off"
                    maxLength={140}
                    value={values.subject}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    disabled={status === "loading"}
                    onChange={(event) => update("subject", event.target.value)}
                  />
                </Field>
                <Field id="message" label="Message" error={errors.message}>
                  <Textarea
                    id="message"
                    name="message"
                    maxLength={2000}
                    value={values.message}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    disabled={status === "loading"}
                    onChange={(event) => update("message", event.target.value)}
                  />
                </Field>

                {status === "error" && message ? (
                  <p role="alert" className="text-sm text-red-300">
                    {message}
                  </p>
                ) : null}

                <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
                  {status === "loading" ? (
                    <>
                      <Loader2 className="animate-spin motion-reduce:animate-none" aria-hidden />
                      Sending
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}
