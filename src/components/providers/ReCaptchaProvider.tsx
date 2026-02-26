
"use client";

import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

/**
 * Client-side wrapper for Google reCAPTCHA Enterprise.
 * Configured with the Enterprise script and specific site key.
 */
export function ReCaptchaProvider({ children }: { children: React.ReactNode }) {
  return (
    <GoogleReCaptchaProvider 
      reCaptchaKey="6LdxOW4sAAAAAJwOjSMVJAFBGaxv3wCtIOuh-qgK"
      useEnterprise={true}
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
