import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Global Tamil School team.",
  alternates: {
    canonical: 'https://globaltamilschool.co.uk/contact',
  },
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://globaltamilschool.co.uk/' },
              { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://globaltamilschool.co.uk/contact' },
            ],
          }),
        }}
      />
      <ContactPageClient />
    </>
  );
}
