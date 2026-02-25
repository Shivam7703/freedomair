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
import { MdAttachEmail,  } from "react-icons/md";
import { FaClockRotateLeft,  FaLocationDot } from "react-icons/fa6";
import { social } from "@/data/homeData";
import Buttonmain from "../global/button";

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
                className="w-[180px] object-contain"
              />
            </Link>
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
    <div className="flex gap-6">

<a href={"/"} className="w-max">
  <div className="flex gap-2 group relative text-zinc-800 hover:text-color2 items-center flex-row h-full">
                   <BiSolidPhoneCall className=" text-5xl p-3 group-hover:bg-zinc-800 text-white bg-color2 duration-200 rounded-full" />
                              <p className="text-lg !leading-snug"> <span className="text-black ml-1 font1 font-medium"> Call Now</span> <br /> +91 1234566770</p>
                 </div>
</a>
</div>
  );
}
