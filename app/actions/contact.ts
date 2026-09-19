"use server";

import nodemailer from "nodemailer";

// Helper to prevent HTML injection from form inputs breaking the email layout
const escapeHtml = (unsafe: string) => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export async function submitContactForm(formData: FormData) {
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;
  const turnstileToken = formData.get("cf-turnstile-response") as string;

  if (!email || !subject || !message) {
    return { error: "All fields are required" };
  }

  if (!turnstileToken) {
    return { error: "Please complete the security check" };
  }
// Verify Turnstile Token
  const verifyEndpoint = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
  const verifyResponse = await fetch(verifyEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${turnstileToken}`,
  });

  const verifyJson = await verifyResponse.json();

  if (!verifyJson.success) {
    console.error("Turnstile verification failed:", verifyJson);
    return { error: "Security check failed. Please try again." };
  }


  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "long",
  });

  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message);

  const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="color-scheme" content="light dark">
      <meta name="supported-color-schemes" content="light dark">
      <style>
        /* Base Dark Mode Overrides */
        @media (prefers-color-scheme: dark) {
          body, .wrapper { background-color: #121212 !important; color: #e5e5e5 !important; }
          .card { background-color: #1e1e1e !important; border-color: #333333 !important; }
          .header-title { color: #ffffff !important; }
          .label { color: #a3a3a3 !important; }
          .value { color: #f5f5f5 !important; }
          .message-box { background-color: #171717 !important; border-color: #333333 !important; color: #e5e5e5 !important; }
          .footer-text { color: #737373 !important; }
          .divider { background-color: #333333 !important; }
        }
      </style>
    </head>
    <body class="wrapper" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f5f5f5; color: #171717; margin: 0; padding: 0; -webkit-font-smoothing: antialiased;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5;" class="wrapper">
        <tr>
          <td align="center" style="padding: 40px 20px;">
            
            <!-- Main Card -->
            <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" class="card" style="max-width: 600px; background-color: #ffffff; border: 1px solid #e5e5e5; border-radius: 8px; overflow: hidden; text-align: left;">
              
              <!-- Header -->
              <tr>
                <td style="padding: 24px 32px; border-bottom: 1px solid #e5e5e5;" class="divider">
                  <h2 class="header-title" style="margin: 0; font-size: 18px; font-weight: 600; color: #171717;">New Portfolio Inquiry</h2>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 32px;">
                  
                  <p class="label" style="margin: 0 0 4px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #737373; font-weight: 600;">Reply-To Email</p>
                  <p class="value" style="margin: 0 0 20px 0; font-size: 14px; font-weight: 500; color: #171717;">
                    <a href="mailto:${safeEmail}" style="color: #3b82f6; text-decoration: none;">${safeEmail}</a>
                  </p>
                  
                  <p class="label" style="margin: 0 0 4px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #737373; font-weight: 600;">Subject</p>
                  <p class="value" style="margin: 0 0 20px 0; font-size: 14px; font-weight: 500; color: #171717;">${safeSubject}</p>
                  
                  <p class="label" style="margin: 0 0 4px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #737373; font-weight: 600;">Received On</p>
                  <p class="value" style="margin: 0 0 24px 0; font-size: 13px; color: #171717;">${timestamp}</p>
                  
                  <p class="label" style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #737373; font-weight: 600;">Message</p>
                  <div class="message-box" style="background-color: #fafafa; border: 1px solid #e5e5e5; border-radius: 6px; padding: 16px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #171717;">${safeMessage}</div>

                </td>
              </tr>
            </table>

            <!-- Footer -->
            <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px;">
              <tr>
                <td align="center" style="padding: 24px 0;">
                  <p class="footer-text" style="margin: 0; font-size: 12px; color: #a3a3a3;">Sent securely from your portfolio contact form.</p>
                </td>
              </tr>
            </table>

          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      replyTo: email,
      to: process.env.CONTACT_EMAIL,
      subject: `Portfolio Contact: ${subject}`,
      text: `Message from: ${email}\nDate: ${timestamp}\n\n${message}`, // Fallback for plain-text email clients
      html: htmlTemplate,
    });

    return { success: true };
  } catch (error) {
    console.error("Mail error:", error);
    return { error: "Internal server error. Message not sent." };
  }
}