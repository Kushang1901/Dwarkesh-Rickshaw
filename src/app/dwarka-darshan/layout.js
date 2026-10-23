import {
  getBreadcrumbSchema,
  getDwarkaDarshanTripSchema,
  SITE_URL,
} from "@/utils/seoStructuredData";

export const metadata = {
  title: "Dwarka Darshan Tour (8 Sacred Places) | Auto Riksha & Car Service",
  description:
    "Complete 8 places Dwarka Darshan tour package: Nageshwar Jyotirling, Bet Dwarka, Gopi Talab, Rukmini Temple, Shivrajpur Blue Flag Beach, and Bhadkeshwar Mahadev. Daily morning & afternoon shifts.",
  keywords: [
    "Dwarka Darshan",
    "Dwarka 8 places tour",
    "Nageshwar Jyotirling Riksha",
    "Bet Dwarka auto rickshaw tour",
    "Shivrajpur Beach Rickshaw Dwarka",
    "Gopi Talab Dwarka tour",
    "Rukmini temple tour Dwarka",
    "Bhadkeshwar Mahadev Dwarka",
    "Dwarka Darshan tour timings",
    "Dwarka Darshan package price",
  ],
  alternates: {
    canonical: "/dwarka-darshan",
  },
  openGraph: {
    title: "Dwarka Darshan Tour (8 Sacred Places) | Dwarkesh Tour",
    description:
      "Visit all 8 sacred places in Dwarka with local expert guide Ashokbhai Chavda. Auto Rickshaws and 4-Wheeler Cars available.",
    url: `${SITE_URL}/dwarka-darshan`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dwarka Darshan 8 Sacred Places Tour",
      },
    ],
  },
};

export default function DwarkaDarshanLayout({ children }) {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Dwarka Darshan", url: "/dwarka-darshan" },
  ]);
  const tripSchema = getDwarkaDarshanTripSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumb),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(tripSchema),
        }}
      />
      {children}
    </>
  );
}
