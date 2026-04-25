
'use server';

import nodemailer from 'nodemailer';

type EnrollmentValues = {
  studentName: string;
  age: string;
  level: string;
  parentName: string;
  email: string;
  phone: string;
  notes?: string;
};

/**
 * Handles the enrollment form submission.
 * Verifies the reCAPTCHA token and attempts to send an email notification.
 */
export async function submitEnrollment(values: EnrollmentValues, recaptchaToken: string) {
  try {
    if (!values?.studentName || !values?.parentName || !values?.email) {
      return { success: false, error: "Please fill in all required fields and try again." };
    }

    // 1. Verify reCAPTCHA token server-side
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret) {
      if (!recaptchaToken) {
        return { success: false, error: "Security check failed. Please refresh the page and try again." };
      }

      try {
        const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            secret: recaptchaSecret,
            response: recaptchaToken,
          }),
        });

        const recaptchaData = await recaptchaRes.json();

        if (!recaptchaData.success || (typeof recaptchaData.score === "number" && recaptchaData.score < 0.4)) {
          const codes = recaptchaData?.["error-codes"];
          console.error("reCAPTCHA verification failed:", { codes, recaptchaData });
          return {
            success: false,
            error:
              process.env.NODE_ENV !== "production"
                ? `Security check failed${codes ? ` (${codes.join(", ")})` : ""}.`
                : "Security check failed. Please try again.",
          };
        }
      } catch (error) {
        console.error("reCAPTCHA verification error:", error);
        return { success: false, error: "Security check is temporarily unavailable. Please try again." };
      }
    } else {
      console.warn("RECAPTCHA_SECRET_KEY is not configured. Skipping reCAPTCHA verification.");
    }

    // 2. Prepare the Email content
    const emailBody = `
      NEW ENROLLMENT ENQUIRY from Global Tamil School Website:
      
      Student Details:
      - Name: ${values.studentName}
      - Age: ${values.age}
      - Level: ${values.level}
      
      Parent Details:
      - Name: ${values.parentName}
      - Email: ${values.email}
      - Phone: ${values.phone}
      
      Additional Notes:
      ${values.notes || 'No additional notes provided.'}
      
      ---
      This is an automated notification from the Global Tamil School web portal.
    `;

    // 3. Email notification (best-effort)
    console.log("Attempting to send enrollment email for:", values.studentName);

    const emailAppPassword = process.env.EMAIL_APP_PASSWORD?.trim();
    if (!emailAppPassword) {
      console.warn("EMAIL_APP_PASSWORD environment variable is missing. Email not physically sent, but enrollment is accepted.");
      return { success: true };
    }

    try {
      // NOTE: In production, prefer SMTP_HOST/SMTP_PORT over Gmail service for reliability.
      const allowInsecureTls = process.env.EMAIL_ALLOW_INSECURE_TLS === "true";
      const smtpHost = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
      const smtpPort = Number(process.env.SMTP_PORT || 465);
      const smtpSecure =
        (process.env.SMTP_SECURE?.trim() ? process.env.SMTP_SECURE === "true" : undefined) ??
        smtpPort === 465;
      const emailUser = process.env.EMAIL_USER?.trim() || 'admin.globaltamilschool@gmail.com';

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: emailUser,
          // Gmail App Password
          pass: emailAppPassword,
        },
        tls: allowInsecureTls ? { rejectUnauthorized: false } : undefined,
      });

      await transporter.sendMail({
        from: `"Global Tamil School Enquiry" <${emailUser}>`,
        to: process.env.ENROLLMENT_TO_EMAIL?.trim() || "globaltamilschool@gmail.com",
        subject: `NEW ENROLLMENT: ${values.studentName}`,
        text: emailBody,
        replyTo: values.email
      });

      console.log("Enrollment email sent successfully!");
    } catch (error) {
      // Don't fail the user if the email provider is temporarily down/misconfigured.
      console.error("Enrollment email send failed (best-effort):", error);
      return { success: true };
    }

    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Enrollment action error:", error);
    return {
      success: false,
      error:
        process.env.NODE_ENV !== "production"
          ? `Internal error: ${message}`
          : "An internal error occurred while processing your enrollment.",
    };
  }
}
