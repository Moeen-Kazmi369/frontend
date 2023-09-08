"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import HamburgerMenu from "./HambugerMenu";
import { useGlobalState } from "./GlobalStateProvider";
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
  const{isOpenMenu} = useGlobalState()

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
        .custom_background{
          background: black; /* Old browsers */
          background: -moz-linear-gradient(-45deg, #414141 0%, #000000 100%); /* FF3.6-15 */
          background: -webkit-linear-gradient(-45deg, #414141 0%, #000000 100%); /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(135deg, #414141 0%, #000000 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        }
        
        `
      }
    </style>
      <section className="flex lg:justify-center justify-between custom_background ">
        <div className="self-center w-full max-w-7xl">
          <div className="flex lg:flex-row justify-between items-center border-b-2">
            <div className="w-[25%] p-2">
            <Image
            src={'/logo.png'}
            width={500}
            height={500}
            alt="logo"
            className="h-full w-[300px]"
            />
            {/* <span className="text-black -mt-6 ml-6 font-medium w-full text-xs">HUNTER CODER</span> */}
            </div>
            <div className='block lg:hidden z-50'>
          <HamburgerMenu/>
            </div>
            <div className={`${isOpenMenu? 'fixed':'hidden'} right-0 z-40 lg:hidden bg-white py-5 px-6 h-[400px] top-0`}>
            <ul className="flex flex-col h-full lg:hidden justify-between lg:w-[70%] items-center text-[18px] font-semibold">
              <li className="hover:underline underline-offset-4 hover:test decoration-2 decoration-black py-2 rounded-lg px-5">
                <Link href="/" className="hover:text-black">Home</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
                <Link href="/about" className="hover:text-black">About</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
                <Link href="/services" className="hover:text-black">Services</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
                <Link href="/contact" className="hover:text-black">Contact</Link>
              </li>
              <button
                className="hover:bg-black bg-white border border-gray-800 py-1 rounded-lg px-3">
                <Link href="/login" className="flex hover:text-black">Login Now</Link>
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
            <ul className="hidden md:hidden lg:flex justify-around lg:w-[70%] items-center text-[18px] font-semibold">
              <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
                <Link href="/about" className="hover:text-white">About</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
                <Link href="/services" className="hover:text-white">Services</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
                <Link href="/contact" className="hover:text-white">Contact</Link>
              </li>
              <button 
                className="hover:bg-black bg-white border border-gray-800 py-1 rounded-lg px-3">
                <Link href="/login" className="flex hover:text-black">Login Now</Link>
              </button>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
