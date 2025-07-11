"use client";
import Navigation from "@/app/components/menu-items/navigation-user";
import { useRouter } from "next/navigation";
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from "@/app/components/element/dialog";
import { useState } from "react";
import Datepicker from "react-datepicker";
import { id } from "date-fns/locale";

// import Link from "next/link";
export default function Riwayat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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

  const router = useRouter();
  const Riwayat = [
    {
      id: 1,
      tanggal: "20-07-2025",
      keterangan: "Hadir",
      background: "bg-green-500",
    },
    {
      id: 2,
      tanggal: "19-07-2025",
      keterangan: "Hadir",
      background: "bg-green-500",
    },
    {
      id: 3,
      tanggal: "18-07-2025",
      keterangan: "Kurang",
      background: "bg-yellow-600",
    },
    {
      id: 4,
      tanggal: "17-07-2025",
      keterangan: "Nihil",
      background: "bg-red-700",
    },
    {
      id: 6,
      tanggal: "16-07-2025",
      keterangan: "Hadir",
      background: "bg-green-500",
    },
    {
      id: 7,
      tanggal: "15-07-2025",
      keterangan: "Hadir",
      background: "bg-green-500",
    },
    {
      id: 8,
      tanggal: "14-07-2025",
      keterangan: "Hadir",
      background: "bg-green-500",
    },
    {
      id: 9,
      tanggal: "13-07-2025",
      keterangan: "Hadir",
      background: "bg-green-500",
    },
    {
      id: 10,
      tanggal: "12-07-2025",
      keterangan: "Hadir",
      background: "bg-green-500",
    },
  ];
  return (
    <>
      <div className="mb-4">
        <div className="w-full p-4 bg-gray-100 mb-6 dark:bg-gray-700 justify-center items-center font-bold dark:border-gray-600">Riwayat Absensi User</div>
        <div className="px-4">
          <div onClick={() => router.back()} className="my-4 flex">
            <svg className="w-6 h-6 text-gray-800 hover:underline dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9h13a5 5 0 0 1 0 10H7M3 9l4-4M3 9l4 4" />
            </svg>
            <span className="ml-1 hover:underline">return</span>
          </div>
          <div className="my-4">
            <div className="flex justify-content gap-4 justify-center">
              <div className="flex bg-blue-400 py-3 pr-6 pl-4 text-white rounded-lg text-sm">
                <svg className="w-4 h-4 mr-1 mt-0.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                  />
                </svg>
                Filter
              </div>
              <button
                onClick={() => {
                  setIsDateOpen(true);
                }}
                className=" bg-gray-200 dark:bg-gray-500 py-3 px-6 rounded-lg text-sm text-gray-600 dark:text-white"
              >
                <div className="flex">
                  Pilih Tanggal
                  <svg className="w-3 h-3 ms-1 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          {Riwayat.map((item) => (
            <div key={item.id} className="bg-gray-200 dark:bg-gray-400 mb-2 gap-3 mx-4 p-4 text-[12px] grid grid-cols-3 justify-content">
              <div className="flex justify-center py-1">{item.tanggal}</div>
              <div className={`flex justify-center py-1 ${item.background} text-white rounded-lg`}>{item.keterangan}</div>
              <div className="flex justify-center py-1">
                <button
                  onClick={() => {
                    setSelectedItem(item);
                    setIsOpen(true);
                  }}
                  className=" font-bold hover:underline text-blue-500 dark:text-blue-100 dark:hover:text-blue-500 "
                >
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          {selectedItem && (
            <>
              <DialogTitle>Riwayat Absensi</DialogTitle>
              <DialogDescription>Data lengkap terkait absensi</DialogDescription>
              <DialogBody>
                <div className="bg-gray-200 text-gray-900 p-4">{selectedItem.tanggal}</div>
                <div className="bg-gray-200 text-gray-900 p-4">{selectedItem.keterangan}</div>
              </DialogBody>
              <div className="sm:hidden">
                <div className="mt-6 grid grid-cols-2 gap-2">
                  <div className="justify">
                    <button className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700">Hapus</button>
                  </div>
                  <div className="flex justify-end gap-2">
                    <button className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-950">Simpan</button>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block">
                <DialogActions>
                  <button className="px-3 py-1 rounded bg-gray-600 text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>
                    Batal
                  </button>
                  <button className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-950">Simpan</button>
                </DialogActions>
              </div>
            </>
          )}
        </Dialog>
        <Dialog open={isDateOpen} onClose={() => setIsDateOpen(false)}>
          <>
            <DialogTitle>Pilih Tanggal</DialogTitle>
            <DialogDescription></DialogDescription>
            <DialogBody>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="w-full max-w-xs">
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">Tanggal Mulai</label>
                  <Datepicker selected={startDate} onChange={handleStartChange} selectsStart startDate={startDate} endDate={endDate} dateFormat="dd MMMM yyyy" locale={id} className="w-full border border-gray-300 rounded-lg p-2" />
                </div>
                <div className="text-gray-500 text-sm text-center sm:mt-7">sampai</div>
                <div className="w-full max-w-xs">
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">Tanggal Akhir</label>
                  <Datepicker
                    selected={endDate}
                    onChange={handleEndChange}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    dateFormat="dd MMMM yyyy"
                    locale={id}
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>
            </DialogBody>
            <DialogActions>
              <div className="mt-6 grid grid-cols-2 gap-2">
                <div className="justify">
                  <button className="px-3 py-1 rounded bg-gray-600 text-white hover:bg-gray-700" onClick={() => setIsDateOpen(false)}>
                    Batal
                  </button>
                </div>
                <div className="flex justify-end gap-2">
                  <button className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-950">Simpan</button>
                </div>
              </div>
            </DialogActions>
          </>
        </Dialog>
        <Navigation />
      </div>
    </>
  );
}
