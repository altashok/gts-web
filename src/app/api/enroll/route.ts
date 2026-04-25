import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type EnrollmentValues = {
  studentName: string;
  age: string;
  level: string;
  parentName: string;
  email: string;
  phone: string;
  notes?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { values?: EnrollmentValues; recaptchaToken?: string };
    const values = body?.values;
    const recaptchaToken = body?.recaptchaToken ?? "";

    if (!values?.studentName || !values?.parentName || !values?.email) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields and try again." },
        { status: 400 }
      );
    }

    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret) {
      if (!recaptchaToken) {
        return NextResponse.json(
          { success: false, error: "Security check failed. Please refresh the page and try again." },
          { status: 400 }
        );
      }

      try {
        const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: recaptchaSecret,
            response: recaptchaToken,
          }),
        });

        const recaptchaData = await recaptchaRes.json();
        if (!recaptchaData.success || (typeof recaptchaData.score === "number" && recaptchaData.score < 0.4)) {
          const codes = recaptchaData?.["error-codes"];
          console.error("reCAPTCHA verification failed:", { codes, recaptchaData });
          return NextResponse.json(
            {
              success: false,
              error:
                process.env.NODE_ENV !== "production"
                  ? `Security check failed${codes ? ` (${codes.join(", ")})` : ""}.`
                  : "Security check failed. Please try again.",
            },
            { status: 400 }
          );
        }
      } catch (error) {
        console.error("reCAPTCHA verification error:", error);
        return NextResponse.json(
          { success: false, error: "Security check is temporarily unavailable. Please try again." },
          { status: 503 }
        );
      }
    }

    const emailBody = `
New Enrollment Inquiry from Global Tamil School Website:

Student Details:
- Name: ${values.studentName}
- Age: ${values.age}
- Level: ${values.level}

Parent Details:
- Name: ${values.parentName}
- Email: ${values.email}
- Phone: ${values.phone}

Additional Notes:
${values.notes || "No additional notes provided."}

---
This is an automated notification from the Global Tamil School web portal.
`.trim();

    console.log("Attempting to send enrollment email for:", values.studentName);

    const emailAppPassword = process.env.EMAIL_APP_PASSWORD?.trim();
    if (!emailAppPassword) {
      console.warn("EMAIL_APP_PASSWORD missing. Accepting enrollment without sending email.");
      return NextResponse.json({ success: true, emailSent: false });
    }

    try {
      const emailUser = process.env.EMAIL_USER?.trim() || "admin.globaltamilschool@gmail.com";
      const enrollmentTo = process.env.ENROLLMENT_TO_EMAIL?.trim() || "globaltamilschool@gmail.com";
      console.log("Enrollment email to:", enrollmentTo);
      const allowInsecureTls = process.env.EMAIL_ALLOW_INSECURE_TLS === "true";
      const smtpHost = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
      const smtpPort = Number(process.env.SMTP_PORT || 465);
      const smtpSecure =
        (process.env.SMTP_SECURE?.trim() ? process.env.SMTP_SECURE === "true" : undefined) ??
        smtpPort === 465;

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: emailUser,
          pass: emailAppPassword,
        },
        tls: allowInsecureTls ? { rejectUnauthorized: false } : undefined,
      });

      await transporter.sendMail({
        from: `"Global Tamil School Web" <${emailUser}>`,
        to: enrollmentTo,
        subject: `New Enrollment: ${values.studentName}`,
        text: emailBody,
        replyTo: values.email,
      });

      console.log("Enrollment email sent successfully!");
      return NextResponse.json({ success: true, emailSent: true });
    } catch (error) {
      console.error("Enrollment email send failed (best-effort):", error);
      return NextResponse.json({
        success: true,
        emailSent: false,
        ...(process.env.NODE_ENV !== "production"
          ? { emailError: error instanceof Error ? error.message : String(error) }
          : {}),
      });
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Enrollment API error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          process.env.NODE_ENV !== "production"
            ? `Internal error: ${message}`
            : "An internal error occurred while processing your enrollment.",
      },
      { status: 500 }
    );
  }
}
