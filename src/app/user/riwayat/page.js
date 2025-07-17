"use client";
import Navigation from "@/app/components/menu-items/navigation-user";
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

  const Riwayat = [
    {
      id: 1,
      tanggal: "20 Juli 2025",
      waktuMasuk: "07.43",
      waktuPulang: "17.00",
      keterangan: "Hadir",
      background: "bg-green-500",
    },
    {
      id: 2,
      tanggal: "19 Juli 2025",
      waktuMasuk: "07.50",
      waktuPulang: "17.08",
      keterangan: "Hadir",
      background: "bg-green-500",
    },
    {
      id: 3,
      tanggal: "18 Juli 2025",
      waktuMasuk: "07.43",
      waktuPulang: "-",
      keterangan: "Kurang",
      background: "bg-yellow-600",
    },
    {
      id: 4,
      tanggal: "17 Juli 2025",
      waktuMasuk: "-",
      waktuPulang: "-",
      keterangan: "Nihil",
      background: "bg-red-700",
    },
    {
      id: 6,
      tanggal: "16 Juli 2025",
      waktuMasuk: "07.00",
      waktuPulang: "17.01",
      keterangan: "Hadir",
      background: "bg-green-500",
    },
    {
      id: 7,
      tanggal: "15 Juli 2025",
      waktuMasuk: "07.43",
      waktuPulang: "17.30",
      keterangan: "Hadir",
      background: "bg-green-500",
    },
    {
      id: 8,
      tanggal: "14 Juli 2025",
      waktuMasuk: "07.13",
      waktuPulang: "17.44",
      keterangan: "Hadir",
      background: "bg-green-500",
    },
    {
      id: 9,
      tanggal: "13 Juli 2025",
      waktuMasuk: "07.40",
      waktuPulang: "17.23",
      keterangan: "Hadir",
      background: "bg-green-500",
    },
    {
      id: 10,
      tanggal: "12 Juli 2025",
      waktuMasuk: "07.39",
      waktuPulang: "17.05",
      keterangan: "Hadir",
      background: "bg-green-500",
    },
  ];
  return (
    <>
      <div className="mb-4">
        <div className="w-full p-4 bg-[#77A4C4] dark:bg-[#567f9f] justify-center items-center font-bold dark:border-gray-600">
          <div className="flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="20" height="20" viewBox="0 0 24 24">
              <g fill="none">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M10.5 6a2.5 2.5 0 0 1 2.495 2.336L13 8.5v4.605l4.455.606a4 4 0 0 1 3.54 3.772l.005.202V18a8 8 0 0 1-.77 3.43a1 1 0 0 1-1.807-.86a6 6 0 0 0 .57-2.265L19 18v-.315a2 2 0 0 0-1.621-1.964l-.183-.027l-4.431-.603a2 2 0 0 1-1.759-1.827L11 13.105V8.5a.5.5 0 0 0-.992-.09L10 8.5V17a1 1 0 0 1-1.78.625l-.332-.407l-.303-.354c-.579-.657-1.001-1.02-1.36-1.203a1.2 1.2 0 0 0-.694-.137l-.141.02l2.504 5.009a1 1 0 0 1-1.73.996l-.058-.102l-2.777-5.553c-.36-.72-.093-1.683.747-2.028c1.043-.427 2.034-.506 3.055.012q.333.17.654.414l.215.17V8.5A2.5 2.5 0 0 1 10.5 6m0-4a6.5 6.5 0 0 1 6.255 8.272a1 1 0 1 1-1.924-.544a4.5 4.5 0 1 0-8.34.817a1 1 0 0 1-1.782.91A6.5 6.5 0 0 1 10.5 2"
                />
              </g>
            </svg>
            <div className="flex justify-center text-white">Riwayat Absensi</div>
          </div>
        </div>
        <div className="full-w flex justify-center items-center gap-18 bg-[#dcecf8] py-1 px-1">
          <div className="flex items-center">
            <svg className="w-5 h-5  dark:text-white text-blue-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs ml-2 text-blue-900 dark:text-white font-semibold">25 Agustus 2025</span>
          </div>
          <div className="flex justify-right">
            <button
              onClick={() => {
                setIsDateOpen(true);
              }}
              className="bg-white border-2 border-blue-900 text-blue-900 py-0.5 px-5 text-xs rounded-full "
            >
              Pilih Tanggal
            </button>
          </div>
        </div>

        <div className="px-4">
          <div className="my-7"></div>
          <div className="flex py-6 px-4">
            <div className="rounded-l-lg bg-[#F3C200] flex text-lg text-[#F3C200]">
              <span>0</span>
              <span>0</span>
            </div>
            <div className="bg-[#FFF4CF] rounded-r-lg w-full px-4 py-2 grid grid-rows-5">
              <span className="text-xl text-[#F3C200] font-bold">Pulang</span>
              <span className="text-[13px] font-semibold mt-2 text-gray-800">12 Agustus 2025 17:23:33</span>
              <span className="text-[13px] font-light mt-2 text-gray-800">Head Office Fl. 3</span>
              <span className="text-[13px]  font-light text-gray-800">Tepat Waktu</span>
              <div className="flex justify-end ">
                <span className="italic text-xs font-extralight mt-2 mr-2 text-green-500">Berhasil</span>
              </div>
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
                <div className="bg-gray-200 rounded-sm text-gray-900 p-4">
                  <div className="flex flex-col">
                    <div className="text-sm">Tanggal</div>
                    <div className="font-bold">{selectedItem.tanggal}</div>
                    <div className="mt-3"></div>
                    <div className="text-sm">Keterangan</div>
                    <div className="pr-8 mr-10 mt-1">
                      <div className={`flex justify-center py-1 ${selectedItem.background} text-white rounded-lg`}>{selectedItem.keterangan}</div>
                    </div>
                    <div className="flex mt-3 gap-9 justify">
                      <div className="flex flex-col justify-center">
                        <div className="text-sm">Waktu Masuk</div>
                        <div className="font-bold flex justify-center mt-1 rounded-sm">{selectedItem.waktuMasuk}</div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="text-sm">Waktu Keluar</div>
                        <div className="font-bold flex justify-center mt-1 rounded-sm">{selectedItem.waktuPulang}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-content mt-3 justify-center"></div>
                </div>
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
                  <div className="flex justify-end gap-2">
                    <button className="px-3 py-1 rounded bg-gray-600 text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>
                      Batal
                    </button>
                    <button className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-950">Simpan</button>
                  </div>
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
