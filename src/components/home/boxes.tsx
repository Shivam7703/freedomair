import React from 'react'
import { BsBagCheck, BsPersonCheck, BsPersonFillCheck } from 'react-icons/bs'
import { HiOutlineHomeModern } from 'react-icons/hi2'
import { IoConstructOutline } from 'react-icons/io5'

function Homeoxes() {
    const boxesData = [{
        icon:<HiOutlineHomeModern />,
        title:"Design Excellence",
        para:"We create functional, aesthetic designs aligned with client vision, regulations, sustainability principles, and modern architectural standards."
    },
    {
        icon:<IoConstructOutline />,
        title:"Quality Construction",
        para:"Every project is executed using high-grade materials, skilled craftsmanship, and strict quality control to ensure long-lasting structural integrity."
    },
    {
        icon:<BsBagCheck />,
        title:"Project Management",
        para:"We manage timelines, budgets, and coordination efficiently, ensuring seamless execution from planning to completion without unnecessary delays."
    },
    {
        icon:<BsPersonCheck />,
        title:"Client-Centric Approach",
        para:"We prioritize clear communication, transparency, and collaboration to deliver solutions that meet expectations and exceed client satisfaction."
    },
]
  return (
    <section className=' lg:p-16 !pb-6 w-full p-6 mx-auto font1 bg-color1 flex flex-wrap justify-between gap-y-6 relative'>
     {boxesData.map((box, index) => (
  <div
    key={index}
    className="group md:w-[48%] lg:w-[23%] w-full
               rounded-2xl p-6
               bg-white
               border border-zinc-100
               shadow-md hover:shadow-lg 
               transition-all duration-500
               hover:-translate-y-2"
  >
   

    {/* Icon */}
    <div className="relative z-10 flex items-center justify-center mb-5">
      <div
        className="w-16 h-16 flex items-center justify-center
                   rounded-full
                   bg-color1 text-color2 text-4xl
                   shadow-inner
                   transition-all duration-500
                   group-hover:bg-color2 group-hover:text-white
                   group-hover:rotate-6"
      >
        {box.icon}
      </div>
    </div>

    {/* Title */}
    <h3
      className="relative z-10 text-center
                 text-lg md:text-xl font-semibold
                 text-zinc-800
                 group-hover:text-color2
                 transition duration-300"
    >
      {box.title}
    </h3>

    {/* Divider */}
    <div className="relative z-10 my-4 mx-auto h-[2px] w-12
                    bg-color2 rounded-full
                    group-hover:w-20
                    transition-all duration-500" />

    {/* Description */}
    <p
      className="relative z-10 text-center text-sm
                 text-color3 leading-relaxed"
    >
      {box.para}
    </p>
  </div>
))}

    </section>
  )
}

export default Homeoxes
