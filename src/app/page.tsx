import AboutSection from "@/components/home/AboutSection";
import Blogs from "@/components/home/blog";
import ServiceSlider from "@/components/home/services";
import WhyChoose from "@/components/home/whychoose";
import WorkProcess from "@/components/home/workprocess";
import CountDown from "@/components/global/Contdown";
import Craft from "@/components/home/crafting";
import Faqs from "@/components/home/Faqs";
import Testimonials from "@/components/global/testimonial";
import { Homeabout } from "@/data/homeData";
import HomeBanner from "@/components/home/HomeBanner";

export default function Home() {
  return (
    <>
      <HomeBanner/>
            <AboutSection data={Homeabout} isHome={true}/>
      <ServiceSlider/>
      {/* <CountDown/> */}
      <Craft/>
      <WorkProcess/>
      <WhyChoose/>
      <Faqs/>
    
      {/* <Testimonials/> */}
<Blogs isHome={true} />
    </>
  );
}
