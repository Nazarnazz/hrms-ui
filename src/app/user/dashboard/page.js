"use client";

import { useEffect, useState } from "react";
import Navigation from "@/app/components/menu-items/navigation-user";
import Image from "next/image";
import dynamic from "next/dynamic";
const MapClient = dynamic(() => import("@/components/mapclient"), { ssr: false });

export default function Dashboard() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const jam = now.getHours().toString().padStart(2, "0");
      const menit = now.getMinutes().toString().padStart(2, "0");
      const detik = now.getSeconds().toString().padStart(2, "0");
      setTime(`${jam}:${menit}:${detik}`);
    };

    updateClock(); // Panggil sekali saat pertama kali render
    const interval = setInterval(updateClock, 1000); // Update tiap 1 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, []);

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();

      const hariList = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
      const bulanList = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

      const hari = hariList[now.getDay()];
      const tanggal = now.getDate().toString().padStart(2, "0");
      const bulan = bulanList[now.getMonth()];
      const tahun = now.getFullYear();

      setDate(`${hari}, ${tanggal} ${bulan} ${tahun}`);
    };

    updateDate();
    const interval = setInterval(updateDate, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full z-10 pt-4 px-4 pb-15 bg-[#77A4C4] dark:bg-[#567f9f] justify-center font-bold text-white">
        <div className="flex justify-center">
          <span className="text-[12px]">WPR</span>
        </div>
        <div className="flex justify-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
              <g fill="none">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M10.5 6a2.5 2.5 0 0 1 2.495 2.336L13 8.5v4.605l4.455.606a4 4 0 0 1 3.54 3.772l.005.202V18a8 8 0 0 1-.77 3.43a1 1 0 0 1-1.807-.86a6 6 0 0 0 .57-2.265L19 18v-.315a2 2 0 0 0-1.621-1.964l-.183-.027l-4.431-.603a2 2 0 0 1-1.759-1.827L11 13.105V8.5a.5.5 0 0 0-.992-.09L10 8.5V17a1 1 0 0 1-1.78.625l-.332-.407l-.303-.354c-.579-.657-1.001-1.02-1.36-1.203a1.2 1.2 0 0 0-.694-.137l-.141.02l2.504 5.009a1 1 0 0 1-1.73.996l-.058-.102l-2.777-5.553c-.36-.72-.093-1.683.747-2.028c1.043-.427 2.034-.506 3.055.012q.333.17.654.414l.215.17V8.5A2.5 2.5 0 0 1 10.5 6m0-4a6.5 6.5 0 0 1 6.255 8.272a1 1 0 1 1-1.924-.544a4.5 4.5 0 1 0-8.34.817a1 1 0 0 1-1.782.91A6.5 6.5 0 0 1 10.5 2"
                />
              </g>
            </svg>
          </span>
        </div>
      </div>
      <div className="relative z-20 -mt-11 px-5">
        <div className="w-full max-w-screen-sm mx-auto py-4 px-4 bg-[#DBE6FF] dark:bg-gray-950 dark:border-2 dark:border-[#77A4C4] rounded-md shadow-md shadow-gray-400 dark:shadow-gray-700">
          <div className="flex justify-center mb-1">
            <Image src="/assets/image/mrbean.jpg" width={70} height={70} className="dark:border-1 dark:border-white rounded-xl" alt="mrbean" />
          </div>
          <div className="text-lg font-bold text-center truncate">Muhammad Rizki</div>
          <div className="text-xs font-bold text-center">Admin</div>
        </div>
      </div>
      {/* <div className="px-6 flex rounded-md bg-white border-2 border-[#77A4C4] shadow-sm shadow-blue-400 mt-4 mx-5">
        <Image src="/assets/svg/calendar-55.svg" width={90} height={90} alt="calendar" />
        <span>20:20</span>
      </div> */}
      <div className="px-5">
        <div className="px-6 mx-auto w-full max-w-screen-sm flex justify-center gap-4 rounded-md bg-white dark:bg-gray-950 border-2 border-[#77A4C4] shadow-sm shadow-blue-400 mt-4">
          <Image src="/assets/svg/calendar-55.svg" width={90} height={90} alt="calendar" />
          <div className="grid grid-rows-2 mt-3">
            <span className="text-[30px] text-[#016D77] dark:text-white font-bold mt-2">{time}</span>
            <span className="text-[12px] text-[#016E87] dark:text-white text-center font-semibold truncate">{date}</span>
          </div>
        </div>
      </div>

      <div className="px-5">
        <div className="px-6 mx-auto w-full max-w-screen-sm rounded-md bg-white dark:bg-gray-950 border-2 border-[#DBE6FF] dark:border-[#77A4C4] shadow-md shadow-gray-400 dark:shadow-gray-700 mt-4">
          <div className="flex justify-center">
            <svg className="w-5 h-5 text-[#000757] mt-4 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span className="ml-1 mt-4 text-sm  font-semibold text-[#000757] dark:text-white">Waktu Presensi</span>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="grid grid-rows-2 mt-2 mb-6 text-right">
              <span className="font-semibold text-xs mb-1 text-[#000757] dark:text-white">Jam Masuk</span>
              <span className="font-semibold text-xs text-[#000757] dark:text-white">Jam Keluar</span>
            </div>
            <div className="grid grid-rows-2 mt-2 mb-6">
              <span className="font-semibold text-xs mb-1 text-[#000757] dark:text-white">06:00 - 08:00</span>
              <span className="font-semibold text-xs text-[#000757] dark:text-white">17:00 - 19:00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="flex justify-center">
          <button className="mx-auto px-6 py-3 transition-colors duration-200 font-bold max-w-screen-sm w-full bg-[#77A4C4] hover:bg-[#456175] rounded-full mt-4 text-white">
            <div className="flex justify-center gap-2">
              <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a28.076 28.076 0 0 1-1.091 9M7.231 4.37a8.994 8.994 0 0 1 12.88 3.73M2.958 15S3 14.577 3 12a8.949 8.949 0 0 1 1.735-5.307m12.84 3.088A5.98 5.98 0 0 1 18 12a30 30 0 0 1-.464 6.232M6 12a6 6 0 0 1 9.352-4.974M4 21a5.964 5.964 0 0 1 1.01-3.328 5.15 5.15 0 0 0 .786-1.926m8.66 2.486a13.96 13.96 0 0 1-.962 2.683M7.5 19.336C9 17.092 9 14.845 9 12a3 3 0 1 1 6 0c0 .749 0 1.521-.031 2.311M12 12c0 3 0 6-2 9"
                />
              </svg>
              <span>Lakukan Presensi</span>
            </div>
          </button>
        </div>
      </div>
      <div className="px-5 mb-5">
        <div className="px-6 mx-auto w-full max-w-screen-sm gap-4 rounded-md bg-white dark:bg-gray-950 border-2 border-[#77A4C4] shadow-sm shadow-blue-400 mt-4">
          <div className="flex justify-center">
            <span className="font-bold mt-4">Lokasi Perangkat</span>
          </div>

          {/* peta hanya di-render di browser; tidak mengganggu SSR */}
          <div className="my-2 h-[400px] bg-gray-300 rounded-md z-0">
            <MapClient />
          </div>
        </div>
      </div>

      <Navigation />
    </>
  );
}
