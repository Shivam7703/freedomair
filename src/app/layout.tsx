import type { Metadata } from "next";
import {  Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { footer } from "@/data/homeData";
import Popups from "@/components/global/pop";


const  noto_serif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font2",
});

export const metadata: Metadata = {
  title: "Freedom Air Services",
  description: "Freedom Air Services has supported airlines, charter and diplomatic flights in India since 1997. Meet the team behind our trip-support operations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${noto_serif.variable} text-black bg-white`}
      >
        <Header /><Popups/>
        {children}
        <Footer footer={footer} />
      </body>
    </html>
  );
}
