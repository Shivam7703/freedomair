import Banner from '@/components/global/banner'
import Gallery from '@/components/home/gallery'
import React from 'react'

function page() {
  return (
    <div>
        <Banner img ={""}
title={"Gallery"}
para={"Explore our visual showcase of precision engineering, modern architecture, and innovative landscape design."}
slug={"/gallery"}/>
<Gallery/>
    </div>
  )
}

export default page
