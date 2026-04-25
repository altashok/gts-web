
"use client";

import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

/**
 * Client-side wrapper for Google reCAPTCHA v3 / Enterprise.
 * `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` enables reCAPTCHA.
 * Set `NEXT_PUBLIC_RECAPTCHA_USE_ENTERPRISE=true` only when using Enterprise keys.
 */
export function ReCaptchaProvider({ children }: { children: React.ReactNode }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const useEnterprise = process.env.NEXT_PUBLIC_RECAPTCHA_USE_ENTERPRISE === "true";

  if (!siteKey) {
    console.warn("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not configured. reCAPTCHA is disabled.");
    return <>{children}</>;
  }

  return (
    <GoogleReCaptchaProvider 
      reCaptchaKey={siteKey}
      useEnterprise={useEnterprise}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
