// app/airport-index/page.tsx
import type { Metadata } from "next";
import AirportIndex from "@/components/air/main";
import Banner from "@/components/global/banner";
import { aboutBanner, airport } from "@/data/homeData";
import React from "react";

const TITLE = "Indian Airport Index – CIQ, Fuel & Slots";
const DESCRIPTION =
  "Operating hours, CIQ, slot, fuel and catering details for major Indian airports, for flight planning.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/airport-index" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/airport-index",
    siteName: "Freedom Air Services",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Indian Airport Index – Freedom Air Services" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://freedomair.in/" },
    { "@type": "ListItem", position: 2, name: "Airport Index", item: "https://freedomair.in/airport-index" },
  ],
};

// [Freedom Air to confirm] the date the airport data was last verified
const DATA_LAST_CHECKED = "October 2026";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Banner
        img={aboutBanner?.img}
        title="Airport Index"
        para="Key airport information, codes, facilities, and operational details to ensure smooth and efficient flight operations across destinations."
        slug="airport-index"
      />
      <AirportIndex airports={airport} />
     
    </>
  );
}