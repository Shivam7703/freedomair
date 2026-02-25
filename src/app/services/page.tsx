import Banner from "@/components/global/banner";
import Craft from "@/components/home/crafting";
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
      <Servicecards />
      <Craft />
      <WorkProcess />
    </>
  );
}

export default page;
