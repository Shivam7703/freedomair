// app/page.tsx
import type { Metadata } from "next";
import AboutSection from "@/components/home/AboutSection";
import Blogs from "@/components/home/blog";
import ServiceSlider from "@/components/home/services";
import WhyChoose from "@/components/home/whychoose";
import WorkProcess from "@/components/home/workprocess";
import Craft from "@/components/home/crafting";
import Faqs from "@/components/home/Faqs";
import { Homeabout } from "@/data/homeData";
import HomeBanner from "@/components/home/HomeBanner";
// import CountDown from "@/components/global/Contdown";
// import Testimonials from "@/components/global/testimonial";

const TITLE = "Freedom Air Services – Flight Permits & Ground Support India";
const DESCRIPTION =
  "Overfly and landing permits, airport slots, ground handling, fuel and crew support across India. New Delhi trip-support specialists since 1997.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
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

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://freedomair.in/#business",
  name: "Freedom Air Services Pvt. Ltd.",
  url: "https://freedomair.in",
  logo: "https://freedomair.in/logo.png", // put a logo file at public/logo.png
  image: "https://freedomair.in/og-image.jpg",
  description: DESCRIPTION,
  foundingDate: "1997",
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
  geo: { "@type": "GeoCoordinates", latitude: 28.5714385, longitude: 77.2383556 },
  areaServed: { "@type": "Country", name: "India" },
  sameAs: ["https://www.facebook.com/FreedomeAirServicesdelhi"], // confirm the real page URL
};

// Must match the visible FAQ text in components/home/Faqs
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can you arrange overflight and landing permits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Permit timelines depend on aircraft type, route, and authority requirements. However, with established regulatory coordination and updated compliance knowledge, most permits are processed efficiently, including urgent and short-notice requests whenever operationally feasible.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle last-minute operational changes or urgent flights?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we specialize in managing time-sensitive operations. Our team actively coordinates with airport authorities, ground handlers, and regulatory bodies to accommodate schedule revisions, technical stops, diversions, and priority flight movements without unnecessary delays.",
      },
    },
    {
      "@type": "Question",
      name: "Can you support both private jets and commercial airlines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We provide tailored aviation solutions for private operators, charter flights, cargo carriers, and commercial airlines. Each operation is handled according to aircraft category, mission purpose, and regulatory framework to ensure full compliance and efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "What makes your aviation coordination process reliable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our reliability comes from strong regulatory understanding, strategic airport partnerships, transparent communication, and real-time operational monitoring. This structured approach minimizes risks, avoids procedural delays, and ensures seamless execution from initial request to final flight completion.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeBanner />
      <AboutSection data={Homeabout} isHome={true} />
      <ServiceSlider />
      {/* <CountDown/> */}
      <Craft />
      <WorkProcess />
      <WhyChoose />
      <Faqs />
      {/* <Testimonials/> */}
      <Blogs isHome={true} />
    </>
  );
}