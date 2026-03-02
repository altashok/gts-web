
# Global Tamil School

This is the official web platform for **Global Tamil School**, dedicated to excellence in Tamil language education and cultural preservation.

## Getting Started

To explore the application, visit the home page at `src/app/page.tsx`.

## Environment Variables

Create a local `.env.local` file with the required secrets:

```env
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
EMAIL_APP_PASSWORD=your_gmail_app_password
```

- `RECAPTCHA_SECRET_KEY` is used only on the server for token verification.
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is used on the client to render reCAPTCHA.
- `EMAIL_APP_PASSWORD` is used by form actions to send email notifications.

## Key Features

- **Bilingual Support**: Full support for Tamil and English languages.
- **Cultural Curriculum**: Comprehensive learning paths for Tamil language, arts, and music.
- **Global Reach**: Serving students across the UK, USA, Canada, India, and more.
