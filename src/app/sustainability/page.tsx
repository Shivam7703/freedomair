
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
para={"Promoting Sustainable Aviation Practices for Efficient and Responsible Air Operations"}
slug={"sustainability"}/>
<Homeoxes/>
<Sustainability/>


    </>
  )
}

export default page
