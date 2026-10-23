import { OWNER_INFO, DWARKA_DARSHAN, SOMNATH_DARSHAN, FAQS } from "../data/toursData.js";

export const SITE_URL = "https://www.dwarkadarshantour.com";

/**
 * Main LocalBusiness / TravelAgency Schema
 * Crucial for Google Local Knowledge Graph, Google Maps, and SERP business cards.
 */
export function getBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness", "TouristInformationCenter"],
    "@id": `${SITE_URL}/#business`,
    name: "Dwarkesh Tour",
    alternateName: [
      "Dwarkesh Riksha",
      "Dwarkesh Tour Service",
      "Dwarka Darshan Auto Riksha & Car Service",
      "Dwarkesh Darshan Tour",
      "Dwarka Tour Travels",
    ],
    url: SITE_URL,
    logo: `${SITE_URL}/logo.jpg`,
    image: [
      `${SITE_URL}/logo.jpg`,
      `${SITE_URL}/og-image.jpg`,
      `${SITE_URL}/hero-bg-2.jpg`,
    ],
    description:
      "Official website of Dwarkesh Tour & Rickshaw Service based at Teen Batti Chowk, Dwarka, Gujarat. Providing complete 8 sacred places Dwarka Darshan and coastal Somnath Darshan tours with Auto Rickshaw and 4-Wheeler Car options.",
    telephone: "+91-99981-51725",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Google Pay, PhonePe, Paytm",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Teen Batti Chowk",
      addressLocality: "Dwarka",
      addressRegion: "Gujarat",
      postalCode: "361335",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.2442,
      longitude: 68.9685,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "06:00",
        closes: "21:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: OWNER_INFO.name,
      jobTitle: "Owner & Lead Tour Guide",
    },
    areaServed: [
      { "@type": "City", name: "Dwarka" },
      { "@type": "AdministrativeArea", name: "Devbhumi Dwarka" },
      { "@type": "Place", name: "Bet Dwarka" },
      { "@type": "Place", name: "Shivrajpur Beach" },
      { "@type": "City", name: "Porbandar" },
      { "@type": "City", name: "Somnath" },
      { "@type": "AdministrativeArea", name: "Gujarat" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: OWNER_INFO.rating || "4.9",
      reviewCount: (OWNER_INFO.reviewsCount || "250").replace("+", ""),
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pilgrimage and Sightseeing Tours",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dwarka Darshan Tour (8 Sacred Places)",
            description:
              "Visit Nageshwar Jyotirling, Bet Dwarka, Gopi Talab, Rukmini Temple, Shivrajpur Blue Flag Beach, Bhadkeshwar Mahadev, Sunset Point, and Geeta Mandir.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Somnath Darshan Coastal Pilgrimage",
            description:
              "Journey from Dwarka to Somnath Jyotirling visiting Harsiddhi Temple, Mul Dwarka, Sudama Temple, Kirti Mandir, and Bhalka Tirth.",
          },
        },
      ],
    },
    sameAs: [
      OWNER_INFO.googleMapsUrl,
      "https://wa.me/919998151725",
    ],
  };
}

/**
 * WebSite Schema with SearchAction
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Dwarkesh Tour",
    alternateName: "Dwarkesh Tour & Travels Official Website",
    inLanguage: ["en-IN", "hi-IN", "gu-IN"],
    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
  };
}

/**
 * FAQPage Schema (AEO & AI Search Snippets)
 */
export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/**
 * TouristTrip Schema for Dwarka Darshan (8 Sacred Places)
 */
export function getDwarkaDarshanTripSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${SITE_URL}/dwarka-darshan#tour`,
    name: "Dwarka Darshan - Complete 8 Sacred Places Tour",
    description:
      "Comprehensive pilgrimage tour of Dwarka covering Nageshwar Jyotirling, Bet Dwarka, Gopi Talab, Rukmini Temple, Shivrajpur Beach, Bhadkeshwar Mahadev, Sunset Point, and Geeta Mandir by Auto Rickshaw or 4-Wheeler Car.",
    touristType: ["Pilgrim", "Family", "Tourist"],
    provider: {
      "@id": `${SITE_URL}/#business`,
    },
    itinerary: {
      "@type": "ItemList",
      numberOfItems: DWARKA_DARSHAN.places.length,
      itemListElement: DWARKA_DARSHAN.places.map((place, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "TouristAttraction",
          name: place.name,
          alternateName: place.nameHindi,
          description: place.description,
          image: place.image ? `${SITE_URL}${place.image}` : undefined,
        },
      })),
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "1000",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        description: "Auto Riksha & 4-Wheeler Car as per Number of Persons",
      },
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
    },
  };
}

/**
 * TouristTrip Schema for Somnath Darshan
 */
export function getSomnathDarshanTripSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${SITE_URL}/somnath-darshan#tour`,
    name: "Dwarka to Somnath Darshan Coastal Pilgrimage",
    description:
      "Scenic coastal highway pilgrimage from Dwarka to Somnath Jyotirling visiting Harsiddhi Temple, Mul Dwarka, Sudama Temple, Gandhi Birth Place (Kirti Mandir), Bhalka Tirth, and Somnath Temple.",
    provider: {
      "@id": `${SITE_URL}/#business`,
    },
    itinerary: {
      "@type": "ItemList",
      numberOfItems: SOMNATH_DARSHAN.places.length,
      itemListElement: SOMNATH_DARSHAN.places.map((place, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "TouristAttraction",
          name: place.name,
          alternateName: place.nameHindi,
          description: place.description,
        },
      })),
    },
  };
}

/**
 * Breadcrumb Schema
 */
export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}
