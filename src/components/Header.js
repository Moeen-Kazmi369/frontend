"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
const titles = [
  "CodeMastersHub",
  "DevConnectPro",
  "TechScriptCentral",
  "ByteCraftersForum",
  "ProgInnovateNetwork",
  "CodeSavvyExchange",
  "DevInsightHub",
  "TheCodingNexus",
  "TechAlgorithmsForum",
  "ProgEnthusiastHub",
  "CodeCraftsmanship",
  "TechGeniusExchange",
  "DevOpsSolutions",
  "ByteWiseCommunity",
  "AlgorithmAlchemy",
  "CodeArchitectsHub",
  "ProgExpertConnect",
  "TechInventiveForum",
  "CodePioneersHub"
];
const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedtitle, setDisplayedtitle] = useState(titles[currentIndex]);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newIndex = (currentIndex + 1) % titles.length;
      setCurrentIndex(newIndex);
      setDisplayedtitle(titles[newIndex]);
      setShowAnimation(true);

      // Clear animation class after the animation duration
      setTimeout(() => {
        setShowAnimation(false);
      }, 5000); // Adjust this timing based on your animation duration
    }, 6500);

    return () => clearTimeout(timer);
  }, [currentIndex, titles]);
  return (
    <>
    <style jsx>
      {
        `
        .animate-title {
          transition: transform 1.5s ease-out, opacity 1.5s ease-out;
          transform: translateX(0) translateY(-30px);
          opacity: 0;
        }
        
        .animate-slide {
          transform: translateX(0) translateY(0);
          opacity: 1;
        }
        
        `
      }
    </style>
      <section className="flex lg:justify-center justify-between ">
        <div className="self-center w-full max-w-7xl">
          <div className="flex lg:flex-row justify-between items-center border-b-2">
            <div className="w-[25%] flex flex-col">
            <h1 className={`uppercase pl-5 py-4 text-xl font-sans font-bold  animate-title ${showAnimation ? 'animate-slide' : ''}`}>
              {displayedtitle}
            </h1>
            {/* <span className="text-black -mt-6 ml-6 font-medium w-full text-xs">HUNTER CODER</span> */}
            </div>
            <div className='block lg:hidden z-50'>
          Menu
            </div>
            <div className={`hidden right-0 z-40 lg:hidden bg-white py-5 px-6 h-[400px] top-0`}>
            <ul className="flex flex-col h-full lg:hidden justify-between lg:w-[70%] items-center text-[18px] font-semibold">
              <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
                <Link href="/services">Services</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
                <Link href="/contact">Contact</Link>
              </li>
              <button
                className="hover:bg-black hover:text-white bg-white border border-gray-800 py-1 rounded-lg px-3">
                <Link href="#" className="flex">Login Now</Link>
              </button>
             <div>
             {" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500"
              >
                <i className="fa fa-twitter"></i>
              </a>{" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <i className="fa fa-instagram"></i>
              </a>
              </div>
              <div>
              {" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <i className="fa fa-facebook"></i>
              </a>{" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <i className="fa fa-linkedin"></i>
              </a>{" "}
                </div>
              </ul>
            </div>
            <ul className="lg:flex justify-around lg:w-[70%] items-center text-[18px] font-semibold">
              <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
                <Link href="/services">Services</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
                <Link href="/contact">Contact</Link>
              </li>
              <button 
                className="hover:bg-black hover:text-white bg-white border border-gray-800 py-1 rounded-lg px-3">
                <Link href="#" className="flex">Login Now</Link>
              </button>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
