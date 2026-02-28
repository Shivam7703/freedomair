
import Banner from '@/components/global/banner'
import Homeoxes from '@/components/home/boxes'
import Sustainability from '@/components/sustain/Sustainability'
import {aboutBanner} from '@/data/homeData'
import React from 'react'

function page() {
  return (
    <>
      <Banner img ={aboutBanner?.img}
title={"Sustainability"}
para={"Designing Spaces With Expert Building and Interior Designs. Experience The Best Builders in Delhi!"}
slug={"sustainability"}/>
<Homeoxes/>
<Sustainability/>


    </>
  )
}

export default page
