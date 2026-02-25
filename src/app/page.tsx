import AboutSection from "@/components/home/AboutSection";
import Blogs from "@/components/home/blog";
import BannerSlider from "@/components/home/HomeBanner";
import ServiceSlider from "@/components/home/services";
import WhyChoose from "@/components/home/whychoose";
import Project from "@/components/home/projects";
import Homeoxes from "@/components/home/boxes";
import WorkProcess from "@/components/home/workprocess";
import Latest from "@/components/home/latest";
import CountDown from "@/components/global/Contdown";
import Craft from "@/components/home/crafting";
import Faqs from "@/components/home/Faqs";
import Testimonials from "@/components/global/testimonial";

export default function Home() {
  return (
    <>
      <BannerSlider/>
            <AboutSection/>
      <ServiceSlider/>
      {/* <Homeoxes/>
      <Latest/>
      <Project/>
      <Blogs/> */}
      
      <CountDown/>
      <Craft/>
      <WorkProcess/>
      <WhyChoose/>
      <Faqs/>
      {/* <HowweWork aboutdata={howwork}/> */}
      {/* <ServiceSlider  data={ourService}/> */}
      {/* <WhyChoose/> */}
      <Testimonials/>
      {/* <Project/> */}

      {/* <Blogs/> */}
    </>
  );
}
