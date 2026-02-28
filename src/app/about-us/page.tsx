
import CEOMessage from '@/components/about/Founder'
import Journey from '@/components/about/Journey'
import Team from '@/components/about/team'
import Banner from '@/components/global/banner'
import CountDown from '@/components/global/Contdown'
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
    </>
  )
}

export default page
