import type { Metadata } from "next";
import {  Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { footer } from "@/data/homeData";


const  noto_serif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font2",
});

export const metadata: Metadata = {
  title: "FreedomeAirServices",
  description: "Developed in Next.js",
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
        <Header />
        {children}
        <Footer footer={footer} />
      </body>
    </html>
  );
}
