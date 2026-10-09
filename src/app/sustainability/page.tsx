// app/sustainability/page.tsx  (confirm the folder name; your file header says "OEM")

import type { Metadata } from "next";
import Banner from "@/components/global/banner";
import Homeoxes from "@/components/home/boxes";
import Sustainability from "@/components/sustain/Sustainability";
import { aboutBanner } from "@/data/homeData";
import React from "react";

const TITLE = "Responsible Aviation Support – Freedom Air Services";
const DESCRIPTION =
  "How Freedom Air Services cuts idle time and unnecessary movements through efficient permit planning and well-timed ground handling across India.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/sustainability" },
  // Remove this robots block only after the page content is cleaned of unverified claims
  robots: { index: false, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/sustainability",
    siteName: "Freedom Air Services",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Freedom Air Services" }],
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
    { "@type": "ListItem", position: 2, name: "Responsible Aviation Support", item: "https://freedomair.in/sustainability" },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Banner
        img={aboutBanner?.img}
        title="
Sustainability
"
        para="Promoting Sustainable Aviation Practices for Efficient and Responsible Air Operations"

        slug="sustainability"
      />
      <Homeoxes />
      <Sustainability />
    </>
  );
}