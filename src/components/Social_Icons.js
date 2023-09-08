import React from 'react'

const Social_Icons = () => {
  return (
    <main className='fixed right-0 left-[90vw] top-[70vh] z-50 bottom-[10vh]'>
         <div className='flex flex-col space-y-2 w-full items-center'>
             {" "}
              <a
                href="#"
                className="rounded-full w-6 h-6 bg-black text-white text-center pt-[3px] md:p-0"
              >
                <i className="fa fa-twitter"></i>
              </a>{" "}
              <a
                href="#"
                className="rounded-full w-6 h-6 bg-[#f04f65] text-white text-center pt-[3px] md:p-0"
              >
                <i className="fa fa-instagram"></i>
              </a>
              {" "}
              <a
                href="#"
                className="rounded-full w-6 h-6 bg-blue-500 text-white text-center pt-[3px] md:p-0"
              >
                <i className="fa fa-facebook"></i>
              </a>{" "}
              <a
                href="#"
                className="rounded-full w-6 h-6 bg-blue-500 text-white text-center pt-[3px] md:p-0"
              >
                <i className="fa fa-linkedin"></i>
              </a>{" "}
              <a
                href="#"
                className="rounded-full w-6 h-6 bg-green-500 text-white text-center pt-[3px] md:p-0"
              >
                <i className="fa fa-whatsapp"></i>
              </a>{" "}
                </div>
    </main>
  )
}

export default Social_Icons;