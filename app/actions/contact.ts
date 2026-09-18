"use server";

import nodemailer from "nodemailer";

export async function submitContactForm(formData: FormData) {
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!email || !subject || !message) {
    return { error: "All fields are required" };
  }

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
      text: `Message from: ${email}\n\n${message}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Mail error:", error);
    return { error: "Internal server error. Message not sent." };
  }
}
