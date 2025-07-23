"use client";

import Navigation from "@/app/components/menu-items/navigation-user";
import { useState } from "react";

export default function Cuti() {
  const [selectedCuti, setSelectedCuti] = useState("");

  const handleChange = (e) => {
    setSelectedCuti(e.target.value);
  };

  return (
    <>
      <div className="mb-4">
        <div className="w-full p-4 bg-[#77A4C4] dark:bg-[#567f9f] grid grid-cols-2 items-center font-bold dark:border-gray-600">
          <div className="flex gap-1">
            <svg className="w-5 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
            </svg>
            <div className="flex justify-center text-white">Pengajuan Cuti</div>
          </div>
          <div className="flex justify-end">
            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
        </div>
        <div className="p-4 m-4">
          <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Alasan Cuti
          </label>
          <div className="relative mb-6">
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 ps-4 placeholder:text-xs placeholder:italic text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tulis alasan Anda..."
            />
          </div>

          <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Tanggal
          </label>
          <div className="relative mb-6">
            <input
              type="date"
              id="input-group-2"
              className="bg-gray-50 border border-gray-300 ps-4 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Tipe Cuti
          </label>
          <div className="relative mb-6">
            <select
              id="tipeCuti"
              name="tipeCuti"
              value={selectedCuti}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">-- Pilih Tipe Cuti --</option>
              <option value="1">Sakit</option>
              <option value="2">Liburan</option>
              <option value="3">Hamil</option>
              <option value="4">Ayah</option>
              <option value="5">Kedukaan</option>
              <option value="6">Kompensasi</option>
              <option value="6">Pendidikan</option>
            </select>
          </div>

          {selectedCuti === "1" && (
            <>
              <label htmlFor="keteranganSakit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Keterangan Sakit
              </label>
              <div className="relative mb-6">
                <input
                  type="text"
                  id="keteranganSakit"
                  placeholder="Tulis jenis sakit Anda..."
                  className="bg-gray-50 border border-gray-300 ps-4 placeholder:text-xs placeholder:italic text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <label htmlFor="keteranganSakit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Surat Keterangan Sakit
              </label>
              <div className="relative mb-6 flex">
                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              </div>
            </>
          )}

          {selectedCuti && selectedCuti !== "1" && (
            <>
              <label htmlFor="keteranganCuti" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Keterangan Cuti Tambahan
              </label>
              <div className="relative mb-6">
                <input
                  type="text"
                  id="keteranganCuti"
                  placeholder="Tulis kenapa cuti Anda harus diterima..."
                  className="bg-gray-50 border border-gray-300 ps-4 placeholder:text-xs placeholder:italic text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </>
          )}

          <div className="relative flex justify-center mb-6">
            <button className="transition-colors duration-500 py-2.5 px-4 bg-[#567f9f]  rounded-full font-bold hover:bg-blue-800 text-white m-2">Submit</button>
          </div>
        </div>
      </div>
      <Navigation />
    </>
  );
}
