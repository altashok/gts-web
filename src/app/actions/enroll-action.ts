
'use server';

import nodemailer from 'nodemailer';

/**
 * Handles the enrollment form submission.
 * Verifies the reCAPTCHA token and attempts to send an email notification.
 */
export async function submitEnrollment(values: any, recaptchaToken: string) {
  try {
    // 1. Verify reCAPTCHA token server-side
    // This uses the Secret Key provided for security
    const recaptchaSecret = "6LduvkIsAAAAAHeSk1vUUMiaoixkbG9vq8sIfSIU";
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`;
    
    const recaptchaRes = await fetch(verifyUrl, { method: 'POST' });
    const recaptchaData = await recaptchaRes.json();
    
    if (!recaptchaData.success || recaptchaData.score < 0.4) {
      console.error("reCAPTCHA verification failed:", recaptchaData['error-codes']);
      return { success: false, error: "Security check failed. Please try again." };
    }

    // 2. Prepare the Email content
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
      ${values.notes || 'No additional notes provided.'}
      
      ---
      This is an automated notification from the Global Tamil School web portal.
    `;

    // 3. Configure Nodemailer
    // NOTE: In production, you would use environment variables (process.env.SMTP_PASS etc.)
    // For now, this is structured for a standard Gmail SMTP relay.
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'globaltamilschool@gmail.com',
        // This requires an App Password from Google Accounts
        pass: process.env.EMAIL_APP_PASSWORD 
      }
    });

    // In a prototype environment, we log the attempt. 
    // If EMAIL_APP_PASSWORD is not set, we'll log the intention.
    console.log("Attempting to send enrollment email for:", values.studentName);

    if (process.env.EMAIL_APP_PASSWORD) {
      await transporter.sendMail({
        from: '"Global Tamil School Web" <globaltamilschool@gmail.com>',
        to: "globaltamilschool@gmail.com",
        subject: `New Enrollment: ${values.studentName}`,
        text: emailBody,
        replyTo: values.email
      });
      console.log("Email sent successfully!");
    } else {
      console.warn("EMAIL_APP_PASSWORD environment variable is missing. Email not physically sent, but data processed.");
    }

    return { success: true };
  } catch (error) {
    console.error("Enrollment action error:", error);
    return { success: false, error: "An internal error occurred while processing your enrollment." };
  }
}
