'use client'
import Link from 'next/link'
import React from 'react'
import {RiTwitterXLine} from 'react-icons/ri'
const Social_Icons = () => {
  return (
    <main className='fixed right-0 left-[90vw] top-[70vh] z-50 bottom-[10vh]'>
         <div className='flex flex-col space-y-2 w-full items-center'>
              <Link
                href="#"
                className="rounded-full w-6 h-6 pt-[5px] pl-[5px] bg-black text-white text-center"
              >
                <RiTwitterXLine className='text-center'/>
              </Link>
              <Link
                href="#"
                className="rounded-full w-6 h-6 bg-[#f04f65] text-white text-center pt-[3px] md:p-0"
              >
                <i className="fa fa-instagram"></i>
              </Link>
              <Link
                href="#"
                className="rounded-full w-6 h-6 bg-blue-500 text-white text-center pt-[3px] md:p-0"
              >
                <i className="fa fa-facebook"></i>
              </Link>
              <Link
                href="#"
                className="rounded-full w-6 h-6 bg-blue-500 text-white text-center pt-[3px] md:p-0"
              >
                <i className="fa fa-linkedin"></i>
              </Link>
              <Link
                href="#"
                className="rounded-full w-6 h-6 bg-green-500 text-white text-center pt-[3px] md:p-0"
              >
                <i className="fa fa-whatsapp"></i>
              </Link>
                </div>
    </main>
  )
}

export default Social_Icons;