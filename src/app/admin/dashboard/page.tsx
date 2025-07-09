"use client";
// import Navbar from "@/app/components/menu-items/navbar";
// import Sidebar from "@/app/components/menu-items/sidebar";
import { useState, useRef, useEffect } from "react";
import Layout from "@/app/components/menu-items/layout";
import PieChartClient from "@/components/piecharts/piecharts";

export default function Dashboard() {
  // const [isLocationOpen, setIsLocationOpen] = useState(false);
  // const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const Locations = [{ label: "Head Office Fl. 3" }, { label: "Head Office Fl. 4" }, { label: "Head Office Fl. 5" }, { label: "Workshop" }, { label: "Site A" }, { label: "Site B" }];

  const handleCheckboxChange = (label) => {
    setSelectedLocations((prev) => (prev.includes(label) ? prev.filter((loc) => loc !== label) : [...prev, label]));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Optional: tutup dropdown saat klik di luar area
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Layout>
      {/* <Navbar /> */}
      {/* <Sidebar /> */}

      <div className="p-4">
        <div className="p-4 rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col items-center justify-center h-24 rounded-sm bg-gray-100 dark:bg-gray-800">
              <div className="text-lg font-bold">Situs Usaha</div>
              <div className="text-sm p-2 rounded-full bg-blue-500">103</div>
            </div>
            <div className="flex flex-col items-center justify-center h-24 rounded-sm bg-gray-100 dark:bg-gray-800">
              <div className="text-lg font-bold">Titik Lokasi</div>
              <div className="text-sm p-2 rounded-full bg-green-600">103</div>
            </div>
            <div className="flex flex-col items-center justify-center h-24 rounded-sm bg-gray-100 dark:bg-gray-800">
              <div className="text-lg font-bold">Total Karyawan</div>
              <div className="text-sm p-2 rounded-full bg-yellow-700">1333</div>
            </div>
          </div>
          <div className="relative mb-6" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="w-full bg-blue-200 hover:bg-blue-300 text-gray-900 px-4 py-2 rounded-lg dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
              Grafik Absensi Per Titik ({selectedLocations.length})
            </button>

            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-lg max-h-60 overflow-y-auto">
                {Locations.map((item) => (
                  <label key={item.label} className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    <input type="checkbox" checked={selectedLocations.includes(item.label)} onChange={() => handleCheckboxChange(item.label)} className="mr-2" />
                    {item.label}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* PieChart Berdasarkan Lokasi */}
          {/* Tampilkan PieChart per lokasi */}
          {selectedLocations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {selectedLocations.map((loc) => (
                <div key={loc} className="bg-white mb-2 dark:bg-gray-800 p-8 rounded shadow">
                  <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{loc}</h2>
                  <PieChartClient location={loc} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">Silakan pilih lokasi untuk menampilkan data.</p>
          )}
          <div className="grid grid-cols-2 mt-6 gap-4 mb-4">
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
