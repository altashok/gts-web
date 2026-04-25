
'use server';

import nodemailer from 'nodemailer';

/**
 * Handles the contact form submission.
 * Verifies the reCAPTCHA token and attempts to send an email notification.
 */
export async function submitContactForm(values: any, recaptchaToken: string) {
  try {
    // 1. Verify reCAPTCHA token server-side
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret) {
      const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: recaptchaSecret,
          response: recaptchaToken,
        }),
      });
      const recaptchaData = await recaptchaRes.json();

      if (!recaptchaData.success || recaptchaData.score < 0.4) {
        console.error("reCAPTCHA verification failed:", recaptchaData['error-codes']);
        return { success: false, error: "Security check failed. Please try again." };
      }
    } else {
      console.warn("RECAPTCHA_SECRET_KEY is not configured. Skipping reCAPTCHA verification.");
    }

    // 2. Prepare the Email content
    const emailBody = `
      New Contact Message from Global Tamil School Website:
      
      From: ${values.name}
      Email: ${values.email}
      Subject: ${values.subject}
      
      Message:
      ${values.message}
      
      ---
      This is an automated notification from the Global Tamil School web portal.
    `;

    // 3. Configure Nodemailer
    const allowInsecureTls = process.env.EMAIL_ALLOW_INSECURE_TLS === "true";
    const smtpHost = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpSecure =
      (process.env.SMTP_SECURE?.trim() ? process.env.SMTP_SECURE === "true" : undefined) ??
      smtpPort === 465;
    const emailUser = process.env.EMAIL_USER?.trim() || "web@globaltamilschool.co.uk";

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: emailUser,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
      tls: allowInsecureTls ? { rejectUnauthorized: false } : undefined,
    });

    console.log("Attempting to send contact email from:", values.name);

    if (process.env.EMAIL_APP_PASSWORD) {
      await transporter.sendMail({
        from: `"Global Tamil School Web" <${emailUser}>`,
        to: process.env.CONTACT_TO_EMAIL?.trim() || "globaltamilschool@gmail.com",
        subject: `CONTACT INQUIRY: ${values.subject}`,
        text: emailBody,
        replyTo: values.email
      });
      console.log("Contact email sent successfully!");
    } else {
      console.warn("EMAIL_APP_PASSWORD environment variable is missing. Email not physically sent.");
    }

    return { success: true };
  } catch (error) {
    console.error("Contact action error:", error);
    return { success: false, error: "An internal error occurred while sending your message." };
  }
}
