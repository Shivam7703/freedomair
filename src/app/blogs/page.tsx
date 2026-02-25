import Banner from '@/components/global/banner'
import Blogs from '@/components/home/blog';
import React from 'react'

function page() {
  return (
    <>
      <Banner img ={""}
                  title="Our Blogs"
                  para="Explore design trends, construction tips, and creative solutions.
Your go-to source for transforming spaces beautifully."
                  slug="blogs"/>
                  <Blogs/>
                  
    </>
   
  )
}

export default page;
