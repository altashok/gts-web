import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Global Tamil School team.",
  openGraph: {
    title: "Contact | Global Tamil School",
    description: "Get in touch with the Global Tamil School team.",
    url: "https://globaltamilschool.co.uk/contact",
    type: "website",
    siteName: "Global Tamil School",
    images: [
      {
        url: "/logo/GTS-Logo-Tam-black2.png",
        width: 1200,
        height: 630,
        alt: "Global Tamil School Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Global Tamil School",
    description: "Get in touch with the Global Tamil School team.",
    images: ["/logo/GTS-Logo-Tam-black2.png"],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
