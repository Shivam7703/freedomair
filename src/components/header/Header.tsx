"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { VscChromeClose } from "react-icons/vsc";
import { IoMenu} from "react-icons/io5";
import Image from "next/image";
import { logo } from "@/assets";
import { BiSolidPhoneCall } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { MdAttachEmail, MdPayment,  } from "react-icons/md";
import { FaClockRotateLeft,  FaLocationDot } from "react-icons/fa6";
import { social } from "@/data/homeData";
import Buttonmain from "../global/button";
import { motion } from "framer-motion";

const Header = ({ header }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [navItems, setNavItems] = useState<any[]>([]);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    // Split the pathname and get the last part
    const lastSegment = pathname?.split("/").filter(Boolean).pop();

    let path = `/${lastSegment || "home"}`;
    // Store the last word (segment) in the state
    setActiveItem(path);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setNavItems(header?.navItems || []);
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (href: string) => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="h-20 md:h-24 w-full bg-color1"></div>
      <header
        className={`fixed  top-0 left-0 w-screen z-50 transition-all font1 duration-300 
        ${isVisible ? "translate-y-0 bg-color1" : "-translate-y-full bg-white"}`}
      >
      
        <div className="hidden md:flex md:py-7  items-center justify-between  h-24  px-5 py-3 lg:px-20">
          <Link href={header?.href || "/"}>
            <Image
              src={logo}
              alt="logo"
              className="w-[35vw] max-w-60 my-2 object-contain "
            />
          </Link>
          <Menu
            navItemsArray={navItems}
            activeItemId={activeItem}
            onTop={isAtTop}
            onItemClick={handleNavItemClick}
          />
          <RightSide onTop={isAtTop} />
        </div>


        {/* Mobile Section */}
        <div
          className={`flex md:hidden w-screen items-center  justify-between h-20 px-3 bg-color1`}
        >
          <div className="flex items-center relative cursor-pointer text-3xl justify-between w-full">
            <Link href={header?.href || "/"}>
              <Image
                src={logo}
                alt="logo"
                className="w-[170px] object-contain"
              />         
            </Link>
                           <RightSide onTop={isAtTop} />

            {isMobileMenuOpen ? (
              <VscChromeClose
                onClick={handleMobileMenu}
                className="text-black"
              />
            ) : (
              <IoMenu onClick={handleMobileMenu} className="text-black" />
            )}
          </div>
          {/* <RightSide /> */}
        </div>

        {/* Mobile Menu */}

        <div
          className={`fixed h-screen left-0 top-20  md:hidden bg-color1 overflow-x-hidden duration-300 transition-all ${isMobileMenuOpen ? "!w-[88%]" : "!w-0"}`}
        >
          <MenuMobile
            onTop={isAtTop}
            // navItemsArray={navItems}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            activeItemId={activeItem}
            onItemClick={handleNavItemClick}
          />
        </div>
      </header>
    </>
  );
};

export default Header;


function RightSide(onTop: any) {
  return (
    <div className="flex items-center gap-2">

      {/* ── Pay Now ── */}
      <motion.a
        href="/payment"
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        className="group relative flex items-center gap-2.5
                   bg-gradient-to-br from-color2 to-yellow-500
                   px-5 py-2.5 rounded-full overflow-hidden
                   shadow-[0_4px_20px_rgba(var(--color2-rgb),0.35)]
                   hover:shadow-[0_8px_30px_rgba(var(--color2-rgb),0.5)]
                   transition-all duration-300"
      >
        {/* Shine sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                        -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

        <MdPayment className="text-white text-lg relative z-10" />
        <span className="text-white sm:text-sm text-xs  font-bold tracking-wide relative z-10 whitespace-nowrap">
          Pay Now
        </span>
      </motion.a>

      {/* ── Divider ── */}
      <div className="w-px h-9 bg-gray-500 mx-1 hidden sm:block" />

      {/* ── Call Now ── */}
      <motion.a
        href="tel:+911234566770"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.96 }}
        className="group flex items-center gap-2"
      >
        {/* Animated icon ring */}
        <div className="relative shrink-0">
          {/* Pulse ring */}
          <div className="absolute inset-0 rounded-full bg-color2/20
                          group-hover:scale-150 group-hover:opacity-0
                          transition-all duration-700 ease-out" />
          <div className="sm:w-11 sm:h-11 w-10 h-10 rounded-full bg-gradient-to-br from-color2 to-red-500
                          flex items-center justify-center text-white text-xl
                          shadow-[0_4px_16px_rgba(var(--color2-rgb),0.4)]
                          group-hover:shadow-[0_6px_24px_rgba(var(--color2-rgb),0.6)]
                          transition-shadow duration-300 relative z-10">
            <BiSolidPhoneCall />
          </div>
        </div>

        {/* Text */}
        <div className="hidden sm:flex flex-col font1">
          <span className="text-xs text-gray-600 uppercase tracking-[0.18em] font-semibold ml-2  leading-none">
            Call Us
          </span>
          <span className="text-base font-extrabold text-gray-700 group-hover:text-color2
                           transition-colors duration-300 leading-tight mt-1 whitespace-nowrap">
            +91 1234566770
          </span>
        </div>
      </motion.a>

    </div>
  );
}
