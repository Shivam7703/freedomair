import React from 'react'
import { BsBagCheck, BsPersonCheck, BsPersonFillCheck } from 'react-icons/bs'
import { GiEarthAfricaEurope, GiFuelTank, GiCheckMark, GiLightBulb } from 'react-icons/gi'
import { HiOutlineHomeModern } from 'react-icons/hi2'
import { IoConstructOutline } from 'react-icons/io5'

function Homeoxes() {
 const boxesData = [{
        icon:<GiEarthAfricaEurope />, // Eco-friendly/Global impact ke liye
        title:"Eco-Friendly Flight Operations",
        para:"We implement sustainable practices in aviation operations, including optimized fuel usage, emissions monitoring, and green flight planning to reduce environmental impact."
    },
    {
        icon:<GiFuelTank />, // Fuel/Resource management ke liye
        title:"Efficient Fuel & Resource Management",
        para:"By coordinating fuel, ground services, and logistics efficiently, we minimize waste and ensure resources are used responsibly without compromising operational excellence."
    },
    {
        icon:<GiCheckMark />, // Compliance/Standards ke liye
        title:"Regulatory Compliance & Green Standards",
        para:"Our operations fully comply with international aviation environmental regulations, carbon emission norms, and airport sustainability requirements, ensuring safe and eco-conscious air services."
    },
    {
        icon:<GiLightBulb />, // Innovation/Future ke liye
        title:"Innovation for a Greener Future",
        para:"We adopt advanced technologies, digital solutions, and eco-friendly practices to improve operational efficiency while contributing to sustainable and responsible aviation services worldwide."
    },
]
  return (
    <section className=' lg:px-16 sm:p-10 w-full p-6 mx-auto  flex flex-wrap justify-between gap-y-6 relative'>
      <div className='absolute w-full h-1/2 top-0 left-0 bg-color1 -z-10'/>
     {boxesData.map((box, index) => (
  <div
    key={index}
    className="group md:w-[48%] relative lg:w-[23%] w-full
               rounded-2xl p-6
               bg-white
               border border-zinc-100
               shadow-md hover:shadow-lg overflow-hidden 
               transition-all duration-500
               hover:-translate-y-2"
  >
   <div className="absolute w-20 h-20 bg-green-500/20 -left-20 -bottom-20 group-hover:rotate-[300deg] group-hover:scale-110 group-hover:left-0 group-hover:bottom-0 transition-all z-0 duration-700"/>


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
                    bg-gradient-to-br from-color2  via-color3 to-red-500 rounded-full
                    group-hover:w-20
                    transition-all duration-500" />

    {/* Description */}
    <p
      className="relative z-10 text-center text-lg
                 text-zinc-700 leading-relaxed"
    >
      {box.para}
    </p>
  </div>
))}

    </section>
  )
}

export default Homeoxes
