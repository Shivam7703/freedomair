"use client";

// Import required modules
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { banner } from "@/assets";
import { sliderText } from "@/utils/motion";
import Link from "next/link";

export default function Banner({ title, para, img, slug }: any) {


  return (
    <>
      <div className="bg-color1 font1 pb-7">
        <AnimatePresence>
          <div className="w-[90vw] mx-auto md:rounded-[50px] overflow-hidden rounded-2xl h-max relative">
            <Image
              className="w-full h-[44vh] md:h-[40vh] min-h-[440px] lg:h-[32vw] object-cover object-center"
              src={img || banner}
              alt="sliding image"
              loading="lazy"
            />
            <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-60  text-white">
              <motion.div
                variants={sliderText} // Using the sliderText motion variants
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ easings: ["easeIn", "easeOut"] }}
                className=" flex flex-col justify-center items-center h-full max-md:p-[8%] w-full text-center"
              >
                <motion.h2 className="lg:text-8xl font-medium mb-8 text-5xl">
                  {title}
                </motion.h2>

                <motion.p className="md:text-lg text-sm max-w-2xl">
                  {" "}
                  {para}
                </motion.p>

                <motion.p className="py-3 w-max mt-7 bg-[#00000046] backdrop-blur-sm text-sm rounded-3xl px-6">
                  <Link href={"/"}>Home </Link>&nbsp;/ &nbsp;{" "}
                  <Link
                    className="text-yellow3 hover:text-color2 font-bold"
                    href={"#"}
                  >
                    {slug.slice(0, 22)}...
                  </Link>
                </motion.p>
              </motion.div>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </>
  );
}
