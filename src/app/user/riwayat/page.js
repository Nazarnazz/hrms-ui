"use client";
import Navigation from "@/app/components/menu-items/navigation-user";
// import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from "@/app/components/element/dialog";
import { useState } from "react";
import Datepicker from "react-datepicker";
import { id } from "date-fns/locale";

// import Link from "next/link";
export default function Riwayat() {
  const [isDateOpen, setIsDateOpen] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleStartChange = (date) => {
    if (endDate && date > endDate) {
      setEndDate(date); // sesuaikan end date jika start > end
    }
    setStartDate(date);
  };

  const handleEndChange = (date) => {
    if (startDate && date < startDate) {
      setStartDate(date); // sesuaikan start date jika end < start
    }
    setEndDate(date);
  };

  const Riwayat = [
    {
      id: 1,
      tanggal: "20 Juli 2025",
      waktu: "17:23:00",
      keterangan: "Pulang",
      detail: "Tepat Waktu",
    },
    {
      id: 2,
      tanggal: "20 Juli 2025",
      waktu: "07:43:00",
      keterangan: "Masuk",
      detail: "Tepat Waktu",
    },
    {
      id: 3,
      tanggal: "19 Juli 2025",
      waktu: "17:11:00",
      keterangan: "Pulang",
      detail: "Tepat Waktu",
    },
    {
      id: 4,
      tanggal: "19 Juli 2025",
      waktu: "07:13:00",
      keterangan: "Masuk",
      detail: "Tepat Waktu",
    },
    {
      id: 5,
      tanggal: "17 Juli 2025",
      waktu: "17:03:00",
      keterangan: "Pulang",
      detail: "Tepat Waktu",
    },
    {
      id: 6,
      tanggal: "17 Juli 2025",
      waktu: "08:53:00",
      keterangan: "Masuk",
      detail: "Terlambat",
    },
    {
      id: 7,
      tanggal: "16 Juli 2025",
      waktu: "17:23:00",
      keterangan: "Pulang",
      detail: "Tepat Waktu",
    },
    {
      id: 8,
      tanggal: "16 Juli 2025",
      waktu: "07:53:00",
      keterangan: "Masuk",
      detail: "Tepat Waktu",
    },
    {
      id: 9,
      tanggal: "15 Juli 2025",
      waktu: "07:23:00",
      keterangan: "Masuk",
      detail: "Tepat Waktu",
    },
    {
      id: 10,
      tanggal: "14 Juli 2025",
      waktu: "07:41:00",
      keterangan: "Masuk",
      detail: "Tepat Waktu",
    },
  ];
  return (
    <>
      <div className="mb-4">
        <div className="w-full p-4 bg-[#77A4C4] dark:bg-[#567f9f] justify-center items-center font-bold dark:border-gray-600">
          <div className="flex gap-1">
            <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M12 8v4l3 3M3.22302 14C4.13247 18.008 7.71683 21 12 21c4.9706 0 9-4.0294 9-9 0-4.97056-4.0294-9-9-9-3.72916 0-6.92858 2.26806-8.29409 5.5M7 9H3V5"
              />
            </svg>
            <div className="flex justify-center text-white">Riwayat</div>
          </div>
        </div>
        <div className="full-w flex justify-center items-center gap-18 bg-[#dcecf8] py-1 px-1">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-blue-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs ml-2 text-blue-900 font-semibold">25 Agustus 2025</span>
          </div>
          <div className="flex justify-right">
            <button
              onClick={() => {
                setIsDateOpen(!isDateOpen);
              }}
              className="bg-white hover:bg-gray-200 border-1 border-blue-900 text-blue-900 py-0.5 px-5 text-xs rounded-full "
            >
              Pilih Tanggal
            </button>
          </div>
        </div>
        {isDateOpen && (
          <div className="px-5">
            <div className="justify-center px-6 flex gap-2 z-10 py-1 mx-auto mt-1 w-full max-w-screen-sm text-base flex-row items-center">
              <div className="pl-8">
                <label className="block mb-1 text-[10px] font-medium text-center text-gray-700 dark:text-white">Tanggal Mulai</label>
                <Datepicker
                  selected={startDate}
                  onChange={handleStartChange}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="dd MMMM yyyy"
                  locale={id}
                  placeholderText="Pilih tanggal mulai"
                  className="border text-[11px] text-center border-gray-300 rounded-lg"
                />
              </div>

              <div className="text-sm text-center mt-4">-</div>

              <div className="pr-8">
                <label className="block mb-1 text-[10px] text-center font-medium text-gray-700 dark:text-white">Tanggal Akhir</label>
                <Datepicker
                  selected={endDate}
                  onChange={handleEndChange}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  dateFormat="dd MMMM yyyy"
                  locale={id}
                  placeholderText="Pilih tanggal akhir"
                  className="border border-gray-300 rounded-lg text-[11px] text-center"
                />
              </div>
            </div>
          </div>
        )}

        <div className="px-4">
          <div className="my-7"></div>

          {/* Data Riwayat */}
          {Riwayat.map((item) => (
            <div key={item.id} className="flex py-1.5 px-4">
              <div className={`rounded-l-lg ${item.keterangan === "Masuk" ? "bg-[#0071F3] text-[#0071F3]" : "bg-[#F3C200] text-[#F3C200]"} flex text-lg`}>
                <span>0</span>
                <span>0</span>
              </div>
              <div className={`${item.keterangan === "Masuk" ? "bg-[#EBFFFB]" : "bg-[#FFF4CF]"} rounded-r-lg w-full py-1 px-4 flex flex-col`}>
                <div className="flex flex-col mt-1">
                  <span className={`text-lg ${item.keterangan === "Masuk" ? "text-[#0057DA]" : "text-[#ffc904]"}  font-bold`}>{item.keterangan}</span>
                  <span className="text-xs font-semibold mt-1 text-gray-800">
                    {item.tanggal} {item.waktu}
                  </span>
                  <span className="text-xs font-light mt-1 text-gray-800">Head Office Fl. 3</span>
                </div>
                <div className="flex justify-end items-center mb-2">
                  <span className={`italic text-xs font-extralight mr-2 ${item.detail === "Tepat Waktu" ? "text-green-500" : "text-red-500"}`}>{item.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Navigation />
      </div>
    </>
  );
}
