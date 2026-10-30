import {
  getBreadcrumbSchema,
  getSomnathDarshanTripSchema,
  SITE_URL,
} from "@/utils/seoStructuredData";

export const metadata = {
  title: "Dwarka to Somnath Darshan Coastal Tour | Car & Riksha Package",
  description:
    "Coastal highway pilgrimage from Dwarka to Somnath Jyotirling. Visit Harsiddhi Temple, Mul Dwarka, Sudama Temple, Gandhi Birthplace (Kirti Mandir), and Bhalka Tirth. Comfortable 4-wheeler cars and rickshaws.",
  keywords: [
    "Dwarka Riksha",
    "Dwarkesh Riksha",
    "Dwarka Tour Service",
    "Dwarkesh Riksha Service",
    "Ashokbhai Chavda",
    "Dwarka to Somnath tour",
    "Somnath Darshan cab",
    "Somnath tour package from Dwarka",
    "Harsiddhi temple tour",
    "Mul Dwarka darshan",
    "Sudama temple Porbandar taxi",
    "Bhalka Tirth tour",
    "Somnath Jyotirling pilgrimage car",
  ],
  alternates: {
    canonical: "/somnath-darshan",
  },
  openGraph: {
    title: "Dwarka to Somnath Darshan Coastal Tour | Dwarkesh Riksha",
    description:
      "Journey along Saurashtra's coastal trail from Dwarka to the first Jyotirlinga at Somnath. Auto Ricksha & 4-Wheeler Car options available.",
    url: `${SITE_URL}/somnath-darshan`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dwarka to Somnath Darshan Coastal Tour",
      },
    ],
  },
};

export default function SomnathDarshanLayout({ children }) {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Somnath Darshan", url: "/somnath-darshan" },
  ]);
  const somnathSchema = getSomnathDarshanTripSchema();

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
          __html: JSON.stringify(somnathSchema),
        }}
      />
      {children}
    </>
  );
}
