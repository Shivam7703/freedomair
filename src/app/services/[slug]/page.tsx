import Banner from '@/components/global/banner';
import Servicedetails from '@/components/service/service-details';
import { Servicedata } from '@/data/homeData';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

// Generate static paths for all services
export async function generateStaticParams() {
  return Servicedata.service.map((service: any) => {
    const slug = service.title.trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-+|-+$/g, "");
    return { slug };
  });
}

export default function Page({ params }: Props) {
  const decodedSlug = decodeURIComponent(params.slug).toLowerCase();

  const singleService = Servicedata.service.find((service: any) => {
    const serviceSlug = service.title.trim()
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-+|-+$/g, "");
    return serviceSlug === decodedSlug;
  });

  if (!singleService) {
    notFound();
  }

  return (
    <>
      <Banner
        img={singleService.img}
        title={singleService.title}
        para={singleService.text}
        slug={`services / ${singleService.title.toLowerCase()}`}
      />
      <Servicedetails service={singleService} />
    </>
  );
}
