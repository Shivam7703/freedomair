import Contactform from '@/components/contact/form'
import Banner from '@/components/global/banner'
import { contactBanner } from '@/data/homeData'
import React from 'react'

function page() {
  return (
    <>
       <Banner img ={contactBanner?.img}
            title={contactBanner.title}
            para={contactBanner.para}
            slug={contactBanner.slug}/>
            <Contactform/>
    </>
  )
}

export default page
