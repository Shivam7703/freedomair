// app/blogs/page.tsx
import type { Metadata } from "next";
import Banner from "@/components/global/banner";
import Blogs from "@/components/home/blog";
import { aboutBanner } from "@/data/homeData";
import React from "react";

const TITLE = "Aviation Insights & News – Freedom Air Services";
const DESCRIPTION =
  "Guides and updates on flight permits, airspace, fuel and ground handling in India from the Freedom Air team.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/blogs",
    siteName: "Freedom Air Services",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Freedom Air Services blog" }],
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
    { "@type": "ListItem", position: 2, name: "Blogs", item: "https://freedomair.in/blogs" },
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
        title="Aviation Insights & News"
        para="Practical guides and updates on flight permits, airspace, fuel and ground handling in India."
        slug="blogs"
      />
      <Blogs isHome={false} />
    </>
  );
}