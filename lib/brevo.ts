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
    "==================================================",
    "NEW PORTFOLIO INQUIRY",
    "==================================================",
    "",
    `From:    ${input.name}`,
    `Email:   ${input.email}`,
    `Subject: ${input.subject}`,
    "",
    "--------------------------------------------------",
    "MESSAGE",
    "--------------------------------------------------",
    input.message,
    "",
    "--------------------------------------------------",
    `Quick Reply: mailto:${input.email}?subject=Re:%20${encodeURIComponent(input.subject)}`,
    "",
    "This notification was sent from your portfolio contact form.",
    `Replying directly to this email will respond to ${input.name} <${input.email}>.`,
  ].join("\n");
}

function renderHtml(input: ContactEmail): string {
  const safeName = escapeHtml(input.name);
  const safeEmail = escapeHtml(input.email);
  const safeSubject = escapeHtml(input.subject);
  const safeMessage = escapeHtml(input.message);
  const mailtoUrl = `mailto:${encodeURIComponent(input.email)}?subject=${encodeURIComponent(`Re: ${input.subject}`)}`;
  const safeMailtoUrl = escapeHtml(mailtoUrl);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${safeSubject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; color: #0f172a;">
  <!-- Preheader preview in inbox -->
  <div style="display: none; max-height: 0px; overflow: hidden; font-size: 1px; line-height: 1px; color: #f1f5f9; opacity: 0;">
    New message from ${safeName} (${safeEmail}): ${safeSubject}
  </div>

  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="background-color: #f1f5f9; width: 100%; margin: 0; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="max-width: 580px; width: 100%; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);">
          
          <!-- Header Banner -->
          <tr>
            <td style="padding: 28px 32px 20px; border-bottom: 1px solid #e2e8f0; background: linear-gradient(to bottom, #ffffff, #fafafa);">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td>
                    <span style="display: inline-block; padding: 4px 10px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: #0284c7; background-color: #f0f9ff; border: 1px solid #bae6fd; border-radius: 9999px;">
                      Portfolio Inquiry
                    </span>
                    <h1 style="margin: 10px 0 4px; font-size: 20px; font-weight: 700; color: #0f172a; line-height: 1.3;">
                      New Contact Message
                    </h1>
                    <p style="margin: 0; font-size: 13px; color: #64748b; line-height: 1.4;">
                      Received via the contact form on your portfolio website.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 24px 32px 28px;">
              
              <!-- Sender Details Card -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #edf2f7; width: 70px; vertical-align: top;">
                    <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">From</span>
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #edf2f7; vertical-align: top;">
                    <strong style="font-size: 14px; font-weight: 600; color: #0f172a;">${safeName}</strong>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #edf2f7; vertical-align: top;">
                    <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Email</span>
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #edf2f7; vertical-align: top;">
                    <a href="mailto:${safeEmail}" style="font-size: 14px; font-weight: 500; color: #0284c7; text-decoration: none;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; vertical-align: top;">
                    <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Subject</span>
                  </td>
                  <td style="padding: 14px 18px; vertical-align: top;">
                    <span style="font-size: 14px; font-weight: 500; color: #334155;">${safeSubject}</span>
                  </td>
                </tr>
              </table>

              <!-- Message Section -->
              <div>
                <div style="margin-bottom: 8px;">
                  <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Message Content</span>
                </div>
                <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-left: 4px solid #0284c7; border-radius: 6px; padding: 18px 20px; font-size: 14px; line-height: 1.65; color: #1e293b; white-space: pre-wrap; word-break: break-word;">${safeMessage}</div>
              </div>

              <!-- Action Button -->
              <div style="margin-top: 26px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="border-radius: 6px; background-color: #0f172a; text-align: center;">
                      <a href="${safeMailtoUrl}" style="background-color: #0f172a; border: 1px solid #0f172a; border-radius: 6px; color: #ffffff; display: inline-block; font-size: 14px; font-weight: 600; padding: 12px 22px; text-decoration: none; text-align: center;">
                        Reply to ${safeName} &rarr;
                      </a>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Footer Notice -->
              <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #f1f5f9; text-align: center;">
                <p style="margin: 0 0 4px; font-size: 12px; color: #64748b; line-height: 1.5;">
                  This email was delivered via Brevo from your portfolio website.
                </p>
                <p style="margin: 0; font-size: 11px; color: #94a3b8; line-height: 1.5;">
                  Reply-To header is set to <a href="mailto:${safeEmail}" style="color: #64748b; text-decoration: underline;">${safeEmail}</a> for direct email responses.
                </p>
              </div>

            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
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
