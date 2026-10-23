import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { BookingProvider } from "@/context/BookingContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingActions from "@/components/FloatingActions";
import PageLoader from "@/components/PageLoader";
import {
  getBusinessSchema,
  getWebSiteSchema,
  getFaqSchema,
  getDwarkaDarshanTripSchema,
  SITE_URL,
} from "@/utils/seoStructuredData";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dwarkesh Tour | Dwarka & Somnath Darshan Tour Service",
    template: "%s | Dwarkesh Tour",
  },
  description:
    "Official website of Dwarkesh Tour & Riksha Service (Teen Batti Chowk, Dwarka, Gujarat). Complete Dwarka Darshan (8 sacred places) & Somnath coastal tour by Auto Riksha & 4-Wheeler Car. Direct WhatsApp booking & fixed rates.",
  keywords: [
    "Dwarkesh Tour",
    "Dwarkesh Riksha",
    "Dwarka Darshan Auto Riksha",
    "Dwarka Darshan 8 Places",
    "Teen Batti Chowk Dwarka",
    "Ashokbhai Chavda Dwarka",
    "Dwarka Darshan Tour Package",
    "Somnath Darshan Riksha",
    "Nageshwar Bet Dwarka Tour",
    "Shivrajpur Beach Rickshaw Dwarka",
    "Dwarka Darshan taxi booking",
    "Dwarka local tour travels",
    "Dwarka darshan car rental",
    "dwarkadarshantour.com",
    "द्वारका दर्शन",
    "દ્વારકા દર્શન રીક્ષા",
    "દ્વારકા ટૂર",
  ],
  authors: [{ name: "Ashokbhai Chavda - Dwarkesh Tour", url: SITE_URL }],
  creator: "Ashokbhai Chavda",
  publisher: "Dwarkesh Tour",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dwarkesh Tour | Dwarka & Somnath Darshan Tour Service",
    description:
      "Complete Dwarka Darshan (8 sacred places) & Somnath coastal tour. Auto Riksha & 4-Wheeler Car available as per family size. Direct booking with Ashokbhai Chavda at Teen Batti Chowk, Dwarka.",
    url: SITE_URL,
    siteName: "Dwarkesh Tour",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dwarkesh Tour - Dwarka & Somnath Darshan Tour Service",
      },
      {
        url: "/logo.jpg",
        width: 1024,
        height: 1024,
        alt: "Dwarkesh Tour Official Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwarkesh Tour | Dwarka & Somnath Darshan Tour Service",
    description:
      "Complete 8 sacred places Dwarka Darshan & Somnath tour by Auto Riksha and 4-Wheeler Car. Teen Batti Chowk, Dwarka. Book on WhatsApp.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "travel",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#d97706",
};

export default function RootLayout({ children }) {
  const businessSchema = getBusinessSchema();
  const websiteSchema = getWebSiteSchema();
  const faqSchema = getFaqSchema();
  const dwarkaTripSchema = getDwarkaDarshanTripSchema();

  return (
    <html lang="en">
      <head>
        {/* Core Structured Data for SEO, GEO, AEO & AI Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(dwarkaTripSchema),
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          <BookingProvider>
            <PageLoader />
            <Navbar />
            <main style={{ minHeight: "80vh" }}>{children}</main>
            <Footer />
            <BookingModal />
            <FloatingActions />
          </BookingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
