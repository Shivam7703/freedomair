
import AirportIndex from '@/components/air/main'
import Banner from '@/components/global/banner'
import { aboutBanner, airport} from '@/data/homeData'
import React from 'react'

function page() {
  return (
    <>
      <Banner img ={aboutBanner?.img}
title={"Airport Index"}
para={aboutBanner.para}
slug={"airport-index"}/>
<AirportIndex airports={airport}/>
 </>
  )
}

export default page
