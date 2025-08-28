"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="embla relative w-full">
      <div className="embla__viewport overflow-hidden px-3 pb-3 pt-5" ref={emblaRef}>
        <div className="embla__container flex gap-6">
          <div className=" flex-[0_0_13%]  bg-blue-100 dark:bg-[#0d0f20] border dark:border-white shadow shadow-gray-600 dark:shadow-white rounded-lg px-3 py-5 flex flex-col items-center justify-center">
            <span className="text-xs">Active Employees</span>
            <span className="text-lg font-bold mt-2">1280</span>
          </div>
          <div className=" flex-[0_0_13%]  bg-blue-100 dark:bg-[#0d0f20] border dark:border-white shadow shadow-gray-600 dark:shadow-white rounded-lg px-3 py-5 flex flex-col items-center justify-center">
            <span className="text-xs">Today Attendance</span>
            <span className="text-lg font-bold mt-2">1180</span>
          </div>
          <div className=" flex-[0_0_13%]  bg-blue-100 dark:bg-[#0d0f20] border dark:border-white shadow shadow-gray-600 dark:shadow-white rounded-lg px-3 py-5 flex flex-col items-center justify-center">
            <span className="text-xs">Today Attendance</span>
            <span className="text-lg font-bold mt-2">1180</span>
          </div>
          <div className=" flex-[0_0_13%]  bg-blue-100 dark:bg-[#0d0f20] border dark:border-white shadow shadow-gray-600 dark:shadow-white rounded-lg px-3 py-5 flex flex-col items-center justify-center">
            <span className="text-xs">Today Attendance</span>
            <span className="text-lg font-bold mt-2">1180</span>
          </div>
          <div className=" flex-[0_0_13%]  bg-blue-100 dark:bg-[#0d0f20] border dark:border-white shadow shadow-gray-600 dark:shadow-white rounded-lg px-3 py-5 flex flex-col items-center justify-center">
            <span className="text-xs">Today Attendance</span>
            <span className="text-lg font-bold mt-2">1180</span>
          </div>
          <div className=" flex-[0_0_13%]  bg-blue-100 dark:bg-[#0d0f20] border dark:border-white shadow shadow-gray-600 dark:shadow-white rounded-lg px-3 py-5 flex flex-col items-center justify-center">
            <span className="text-xs">Payroll This Month</span>
            <span className="text-lg font-bold mt-2">270</span>
          </div>
          <div className=" flex-[0_0_13%]  bg-blue-100 dark:bg-[#0d0f20] border dark:border-white shadow shadow-gray-600 dark:shadow-white rounded-lg px-3 py-5 flex flex-col items-center justify-center">
            <span className="text-xs">Payroll This Month</span>
            <span className="text-lg font-bold mt-2">270</span>
          </div>
          <div className=" flex-[0_0_13%]  bg-blue-100 dark:bg-[#0d0f20] border dark:border-white shadow shadow-gray-600 dark:shadow-white rounded-lg px-3 py-5 flex flex-col items-center justify-center">
            <span className="text-xs">Payroll This Month</span>
            <span className="text-lg font-bold mt-2">270</span>
          </div>
          <div className=" flex-[0_0_13%]  bg-blue-100 dark:bg-[#0d0f20] border dark:border-white shadow shadow-gray-600 dark:shadow-white rounded-lg px-3 py-5 flex flex-col items-center justify-center">
            <span className="text-xs">Payroll This Month</span>
            <span className="text-lg font-bold mt-2">270</span>
          </div>
          <div className=" flex-[0_0_13%]  bg-blue-100 dark:bg-[#0d0f20] border dark:border-white shadow shadow-gray-600 dark:shadow-white rounded-lg px-3 py-5 flex flex-col items-center justify-center">
            <span className="text-xs">Payroll This Month</span>
            <span className="text-lg font-bold mt-2">270</span>
          </div>
        </div>
      </div>

      {/* Prev Button */}
      <button type="button" onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-900/40 dark:bg-gray-300/30 hover:bg-blue-700/40 dark:hover:bg-gray-100/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70 focus:outline-none">
          <svg className="w-3 h-3 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Next Button */}
      <button type="button" onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-900/40 dark:bg-gray-300/30 hover:bg-blue-700/40 dark:hover:bg-gray-100/60 focus:ring-4 focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-3 h-3 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
