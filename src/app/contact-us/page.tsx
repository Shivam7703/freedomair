// app/contact-us/page.tsx
import type { Metadata } from "next";
import Contactform from "@/components/contact/form";
import Banner from "@/components/global/banner";
import { contactBanner } from "@/data/homeData";
import React from "react";

const TITLE = "Contact Freedom Air Services – New Delhi";
const DESCRIPTION =
  "Request a permit or handling quote. Call or WhatsApp +91 88262 92951, email admin@freedomair.aero, or visit us in Lajpat Nagar II, New Delhi.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/contact-us",
    siteName: "Freedom Air Services",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contact Freedom Air Services" }],
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

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: TITLE,
    url: "https://freedomair.in/contact-us",
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": "https://freedomair.in/#business",
      name: "Freedom Air Services Pvt. Ltd.",
      telephone: "+91 88262 92951", // [Freedom Air to confirm]
      email: "admin@freedomair.aero",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Third Floor, C-49, Main Road, Lajpat Nagar II",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110024",
        addressCountry: "IN",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://freedomair.in/" },
      { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://freedomair.in/contact-us" },
    ],
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
        img={contactBanner?.img}
        title="Let's plan your next operation"
        para="Send us your flight details and we'll reply with requirements, timelines and a quote. For urgent requests, call or WhatsApp +91 88262 92951."
        slug={contactBanner.slug}
      />
      <Contactform />
    </>
  );
}