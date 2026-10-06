// app/services/page.tsx
import type { Metadata } from "next";
import Journey from "@/components/about/Journey";
import Banner from "@/components/global/banner";
import Faqs from "@/components/home/Faqs";
import WorkProcess from "@/components/home/workprocess";
import Servicecards from "@/components/service/cards";
import { serviceBanner } from "@/data/homeData";
import React from "react";

const TITLE = "Aviation Services in India – Freedom Air Services";
const DESCRIPTION =
  "Permits, airport slots, ground handling, fuel, crew accommodation and catering for operators flying in India. One team, one point of contact.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/services",
    siteName: "Freedom Air Services",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Aviation services in India – Freedom Air Services" }],
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

const BASE = "https://freedomair.in";

const services = [
  { name: "Overfly and Landing Permit Assistance", slug: "overfly-and-landing-permit-assistance" },
  { name: "Airport Slots", slug: "airport-slots" },
  { name: "Ground Handling Arrangements", slug: "ground-handling-arrangements" },
  { name: "Aviation Fuel Provision", slug: "aviation-fuel-provision" },
  { name: "Crew Accommodation and Support", slug: "crew-accommodation-and-support" },
  { name: "On-site Gourmet Catering", slug: "on-site-gourmet-catering" },
  { name: "Customized Aviation Solutions", slug: "customized-aviation-solutions" },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Freedom Air Services – Aviation Services",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BASE}/services/${s.slug}`,
      name: s.name,
    })),
  },
];

export default function Page() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Banner
        img={serviceBanner?.img}
        title={serviceBanner.title}
        para={"Permits, airport slots, ground handling, fuel, crew support and catering for operators flying in India. One team, one point of contact."}
        slug={serviceBanner.slug}
      />
      <Servicecards />
      <WorkProcess />
      <Journey />
      <Faqs />
    </>
  );
}