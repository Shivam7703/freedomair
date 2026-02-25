
import Visionary from '@/components/about/visionary'
import WhyChoose2 from '@/components/about/whychoose2'
import Banner from '@/components/global/banner'
import Testimonials from '@/components/global/testimonial'
import AboutSection from '@/components/home/AboutSection'
import { aboutBanner} from '@/data/homeData'
import React from 'react'

function page() {
  return (
    <>
      <Banner img ={aboutBanner?.img}
title={aboutBanner.title}
para={aboutBanner.para}
slug={aboutBanner.slug}/>
<AboutSection/>
<Visionary/>

<WhyChoose2/>
      <Testimonials/>

    </>
  )
}

export default page
