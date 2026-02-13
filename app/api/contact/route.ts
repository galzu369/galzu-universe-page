import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const recipientEmail = "galzuconsult@gmail.com";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.redirect(new URL("/?contact=error#contact", request.url), 303);
    }

    const senderEmail = process.env.CONTACT_EMAIL_USER;
    const senderPassword = process.env.CONTACT_EMAIL_APP_PASSWORD;

    if (!senderEmail || !senderPassword) {
      return NextResponse.redirect(new URL("/?contact=error#contact", request.url), 303);
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: senderEmail,
        pass: senderPassword,
      },
    });

    await transporter.sendMail({
      from: `Galzu Website <${senderEmail}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New website lead from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New website contact</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.redirect(new URL("/?contact=sent#contact", request.url), 303);
  } catch {
    return NextResponse.redirect(new URL("/?contact=error#contact", request.url), 303);
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
