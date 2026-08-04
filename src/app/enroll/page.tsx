import type { Metadata } from "next";
import EnrollPageClient from "./EnrollPageClient";

export const metadata: Metadata = {
  title: "Course Enrollment",
  description: "Enroll for the Global Tamil School's Tamil Classes.",
  openGraph: {
    title: "Course Enrollment | Global Tamil School",
    description: "Enroll for the Global Tamil School's Tamil Classes.",
    url: "https://globaltamilschool.co.uk/enroll",
    type: "website",
    siteName: "Global Tamil School",
    images: [
      {
        url: "/logo/GTS-Logo-Tam-black2.png",
        width: 1200,
        height: 630,
        alt: "Global Tamil School Course Enrollment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Course Enrollment | Global Tamil School",
    description: "Enroll for the Global Tamil School's Tamil Classes.",
    images: ["/logo/GTS-Logo-Tam-black2.png"],
  },
};

export default function EnrollPage() {
  return <EnrollPageClient />;
}
