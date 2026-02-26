
import CEOMessage from '@/components/about/Founder'
import Journey from '@/components/about/Journey'
import Team from '@/components/about/team'
import Visionary from '@/components/about/visionary'
import WhyChoose2 from '@/components/about/whychoose2'
import Banner from '@/components/global/banner'
import CountDown from '@/components/global/Contdown'
import Testimonials from '@/components/global/testimonial'
import AboutSection from '@/components/home/AboutSection'
import WhyChoose from '@/components/home/whychoose'
import { Aboutabout, aboutBanner} from '@/data/homeData'
import React from 'react'

function page() {
  return (
    <>
      <Banner img ={aboutBanner?.img}
title={aboutBanner.title}
para={aboutBanner.para}
slug={aboutBanner.slug}/>
<AboutSection data={Aboutabout} isHome={false}/>
<CEOMessage/>
<Journey/>
      <CountDown/>
      <WhyChoose/>
<Team/>
{/* <Visionary/>

<WhyChoose2/>
      <Testimonials/> */}

    </>
  )
}

export default page
