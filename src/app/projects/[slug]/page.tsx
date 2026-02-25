// app/visa/[slug]/page.tsx
import { notFound } from "next/navigation";
import {banner2} from "@/assets";
import React from "react";
import Banner from "@/components/global/banner";
import Projectdetail from "@/components/project/pro-detail";
import { projectData } from "@/data/homeData";

const visas = projectData.projects;

interface PageProps {
  params: {
    slug: string;
  };
}

// Helper function to create consistent SEO-friendly slugs
const createSlug = (title: string): string => {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // convert spaces & all symbols to "-"
    .replace(/^-+|-+$/g, ""); // remove leading/trailing "-"
};

// Generate static params for all visas
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return visas.map((visa: any) => ({
    slug: createSlug(visa.title),
  }));
}



export default function VisaPage({ params }: PageProps) {
  // Normalize slug from URL
  const decodedSlug = createSlug(decodeURIComponent(params.slug));

  // Find visa by slug
  const singleVisa = visas.find(
    (visa: any) => createSlug(visa.title) === decodedSlug
  );

  if (!singleVisa) {
    notFound();
  }

  return (
    <>
       <Banner
              img={banner2}
              title={singleVisa?.title.slice(0 , 25) + (singleVisa?.title.length > 25 ? "..." : "")}
              para={""}
              slug={`Projects / ${singleVisa?.title}`}
            />
            <Projectdetail data={singleVisa} />
    </>
  );
}
