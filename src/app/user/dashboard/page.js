"use client";

import { useEffect, useState } from "react";
import Navigation from "@/app/components/menu-items/navigation-user";
import Image from "next/image";

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
          <span>WPR</span>
        </div>
        <div className="flex justify-center">
          <span className="text-[11px]">Absensi</span>
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
          <div className="grid grid-cols-2 justify-center text-center">
            <div className="grid grid-rows-2 mt-2 mb-6">
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

      <Navigation />
    </>
  );
}
