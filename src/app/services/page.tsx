import Journey from "@/components/about/Journey";
import Banner from "@/components/global/banner";
import Faqs from "@/components/home/Faqs";
import WorkProcess from "@/components/home/workprocess";
import Servicecards from "@/components/service/cards";
import { serviceBanner } from "@/data/homeData";
import React from "react";

function page() {
  return (
    <>
      <Banner
        img={serviceBanner?.img}
        title={serviceBanner.title}
        para={serviceBanner.para}
        slug={serviceBanner.slug}
      />
<Servicecards/>    
      <WorkProcess />
          <Journey/>
            <Faqs/>
    </>
  );
}

export default page;
