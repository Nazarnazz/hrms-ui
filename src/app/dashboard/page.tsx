"use client";
// import Navbar from "@/app/components/menu-items/navbar";
// import Sidebar from "@/app/components/menu-items/sidebar";
import Layout from "@/app/components/menu-items/layout";
import PieChartClient from "@/components/piecharts/piecharts";

import { useState, useRef } from "react";

export default function Dashboard() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const dropdownRef = useRef(null);

  const Locations = [{ label: "Head Office Fl. 3" }, { label: "Head Office Fl. 4" }, { label: "Head Office Fl. 5" }, { label: "Workshop" }, { label: "Site A" }, { label: "Site B" }];

  return (
    <Layout>
      {/* <Navbar /> */}
      {/* <Sidebar /> */}

      <div className="p-4">
        <div className="p-4 rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
              <div className="text-lg font-bold">Situs Usaha</div>
              <div className="text-sm p-2 rounded-full bg-blue-500">103</div>
            </div>
            <div className="flex flex-col items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
              <div className="text-lg font-bold">Titik Lokasi</div>
              <div className="text-sm p-2 rounded-full bg-green-600">103</div>
            </div>
            <div className="flex flex-col items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
              <div className="text-lg font-bold">Total Karyawan</div>
              <div className="text-sm p-2 rounded-full bg-yellow-700">1333</div>
            </div>
          </div>
          {Locations.map((item) => (
            <>
              <button key={item.label} className={`w-full ${isLocationOpen ? "mb-0" : "mb-4"}`} onClick={() => setIsLocationOpen(!isLocationOpen)} aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <div className={`w-full py-2 px-4 bg-purple-200 ${isLocationOpen ? "rounded-t-lg" : "rounded-lg"} hover:bg-purple-300 text-gray-900`} ref={dropdownRef}>
                  {item.label}
                </div>
              </button>
              <div className={`overflow-hidden transition-all delay-100 duration-500 ease-in-out mb-4 rounded-sm bg-gray-50 dark:bg-gray-800 ${isLocationOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="w-full h-full">
                  <PieChartClient />
                </div>
              </div>
            </>
          ))}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                </svg>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
