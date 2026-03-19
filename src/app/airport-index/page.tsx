
import AirportIndex from '@/components/air/main'
import Banner from '@/components/global/banner'
import { aboutBanner, airport} from '@/data/homeData'
import React from 'react'

function page() {
  return (
    <>
      <Banner img ={aboutBanner?.img}
title={"Airport Index"}
para={"Comprehensive data and details of airports worldwide to streamline flight planning and operational efficiency for every operator."}
slug={"airport-index"}/>
<AirportIndex airports={airport}/>
 </>
  )
}

export default page
