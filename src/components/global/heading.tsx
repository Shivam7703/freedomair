"use client";
import { fadeUp } from '@/utils/motion'
import { motion } from 'framer-motion'
import React from 'react'

function Heading({title1, title2, title3, para}:any) {
  return (
    <motion.div
          className="text-center flex flex-col items-center gap-4 mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >{ title1 !="" && 

          <motion.div
            variants={fadeUp} custom={0}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full
                       border border-color2/30 bg-color2/8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-color2 animate-pulse" />
            <span className="text-color2 text-xs font-bold tracking-[0.2em] uppercase">
              {title1}
            </span>
          </motion.div>}

          <motion.h2
            variants={fadeUp} custom={1}
            className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl"
          >
            {title2}{" "}
            <span className="bg-gradient-to-r from-color2 to-yellow-500 bg-clip-text text-transparent">
              {title3}
            </span>
          </motion.h2>

          <motion.div
            variants={fadeUp} custom={2}
            className="h-[3px] w-16 rounded-full bg-gradient-to-r from-color2 to-yellow-400"
          />
{ para !="" && 
          <motion.p
            variants={fadeUp} custom={3}
            className="text-gray-700 text-base  max-w-2xl leading-relaxed"
          >
            {para}
          </motion.p>}
        </motion.div>
  )
}

export default Heading
