import { banner } from '@/assets'
import Banner from '@/components/global/banner'
import Project from '@/components/home/projects'
import React from 'react'

function page() {
  return (
    <>
      <Banner img ={banner}
title={"All Projects"}
para={"View our completed and ongoing projects showcasing quality engineering, precision execution, and dependable infrastructure solutions"}
slug={"projects"}/>
      <Project/>

    </>
  )
}

export default page
