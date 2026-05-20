
import Banner from '@/components/global/banner'
import InfoRegulation from '@/components/info/secone'
import { aboutBanner} from '@/data/homeData'
import React from 'react'

function page() {
  return (
    <>
      <Banner img ={aboutBanner?.img}
title={"Info & Regulations"}
para={ "Minimum time frames, clearance procedures, and compliance requirements for operations in Indian airspace."}
slug={"Info-Regulations"}/>
       <InfoRegulation/>
 </>
  )
}

export default page
