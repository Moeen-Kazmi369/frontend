'use client'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
export default function Pagination() {
  return (
    <div className="w-[98.7vmax] flex justify-center items-center">
          <button
            // disabled={currentPage === 1}
            // onClick={() => handlePageChange(currentPage - 1)}
            className="bg-slate-200 ml-4 p-2 pl-4 pr-4 hover:bg-slate-500 hover:border-2 hover:border-solid hover:border-black transition-all duration-[0.5s] ease-in-out text-lg font-semibold text-black"
          >
            Previous
          </button>
          {/* {Array.from(Array(totalPages), (_, i) => ( */}
            <button
              // key={i}
              // onClick={() => handlePageChange(i + 1)}
              className={
                // currentPage === i + 1
                   "bg-slate-200 ml-4 p-2 pl-4 pr-4 hover:bg-slate-500 hover:border-2 hover:border-solid hover:border-black transition-all duration-[0.5s] ease-in-out text-lg font-semibold text-black"
                  //  "hidden"
              }
            >
              {/* {i + 1} */}
              1
            </button>
          {/* ))} */}
          <button
            // disabled={currentPage === totalPages}
            // onClick={() => handlePageChange(currentPage + 1)}
            className="bg-slate-200 ml-4 p-2 pl-4 pr-4 hover:bg-slate-500 hover:border-2 hover:border-solid hover:border-black transition-all duration-[0.5s] ease-in-out text-lg font-semibold text-black"
          >
            Next
          </button>
        </div>
  )
}
