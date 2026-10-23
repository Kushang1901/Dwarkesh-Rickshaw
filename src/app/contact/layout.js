import { getBreadcrumbSchema, SITE_URL } from "@/utils/seoStructuredData";

export const metadata = {
  title: "Contact & WhatsApp Booking | Teen Batti Chowk, Dwarka",
  description:
    "Contact Dwarkesh Tour and Ashokbhai Chavda directly. Stand location: Teen Batti Chowk, Dwarka, Gujarat. Call or WhatsApp +91 99981 51725 for instant tour booking & inquiries.",
  keywords: [
    "Contact Dwarkesh Tour",
    "Dwarka rickshaw stand contact number",
    "Ashokbhai Chavda Dwarka phone number",
    "Teen Batti Chowk Dwarka tour contact",
    "Dwarka tour booking WhatsApp",
    "Dwarka taxi contact number",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & WhatsApp Booking | Dwarkesh Tour Dwarka",
    description:
      "Direct WhatsApp and phone booking with Ashokbhai Chavda at Teen Batti Chowk, Dwarka. Call +91 99981 51725.",
    url: `${SITE_URL}/contact`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Dwarkesh Tour Dwarka",
      },
    ],
  },
};

export default function ContactLayout({ children }) {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact Us", url: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumb),
        }}
      />
      {children}
    </>
  );
}
