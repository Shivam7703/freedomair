import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

/* Main Wrapper */
function Buttonmain({ href, text }: { href: string; text: string }) {
  const isTel = href.startsWith("tel:");

  if (isTel) {
    return (
      <a href={href} className="w-max inline-block group/btn">
        <Button text={text} />
      </a>
    );
  }

  return (
    <Link href={href} className="w-max inline-block group/btn">
      <Button text={text} />
    </Link>
  );
}

export default Buttonmain;

/* Button UI */
export const Button = ({ text }: { text: string }) => {
  return (
    <div className="relative flex items-center font1 gap-4 p-2 pr-5 text-white text-base md:text-lg rounded-full overflow-hidden shadow-lg shadow-color2/30 hover:shadow-xl hover:shadow-color2/40 transition-all duration-300">
      
      {/* Background Layers */}
      <div className="absolute inset-0 bg-color2" />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-900 w-0 group-hover/btn:w-full transition-all duration-500 ease-out" />

      {/* Icon */}
      <div className="relative z-10">
        <IoIosArrowRoundForward
          className="text-color2 text-3xl md:text-4xl bg-white rounded-full
                     transition-all duration-300
                     group-hover/btn:bg-color2
                     group-hover/btn:text-white
                     group-hover/btn:rotate-45"
        />
      </div>

      {/* Text */}
      <span className="relative z-10 pr-2 font-semibold">
        {text}
      </span>

      {/* Shine Effect */}
      <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
};
