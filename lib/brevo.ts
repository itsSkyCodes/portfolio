import "server-only";

const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

export type ContactEmail = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * Send a contact notification through the Brevo transactional API.
 * Credentials are read from the server environment and never sent to the browser.
 */
export async function sendContactEmail(input: ContactEmail): Promise<void> {
  const apiKey = requiredEnv("BREVO_API_KEY");
  const senderEmail = requiredEnv("BREVO_SENDER_EMAIL");
  const recipientEmail = requiredEnv("BREVO_RECIPIENT_EMAIL");
  const senderName = process.env.BREVO_SENDER_NAME?.trim() || "Portfolio";

  const subject = sanitizeSubject(input.subject);
  const response = await fetch(BREVO_ENDPOINT, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: { email: senderEmail, name: senderName },
      to: [{ email: recipientEmail, name: "Shyam Kumar Yadav" }],
      replyTo: { email: input.email, name: input.name },
      subject: `[Portfolio] ${subject}`,
      htmlContent: renderHtml(input),
      textContent: renderText(input),
    }),
    signal: AbortSignal.timeout(12_000),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Brevo request failed (${response.status}): ${detail.slice(0, 300)}`);
  }
}

function requiredEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function sanitizeSubject(value: string): string {
  return value.replace(/[\r\n]+/g, " ").slice(0, 140);
}

function renderText(input: ContactEmail): string {
  return [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Subject: ${input.subject}`,
    "",
    input.message,
  ].join("\n");
}

function renderHtml(input: ContactEmail): string {
  return `
    <div style="font-family: Georgia, sans-serif; color: #1c1917; line-height: 1.5;">
      <p style="margin: 0 0 16px;">New message from the portfolio contact form.</p>
      <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(input.name)}</p>
      <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(input.email)}</p>
      <p style="margin: 0 0 16px;"><strong>Subject:</strong> ${escapeHtml(input.subject)}</p>
      <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(input.message)}</p>
    </div>
  `.trim();
}

/** Escape user content before it is placed in an HTML email. */
function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
