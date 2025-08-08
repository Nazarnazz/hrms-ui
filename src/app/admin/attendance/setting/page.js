"use client";

import Layout from "@/app/components/menu-items/layout";
import { SearchBar } from "@/app/components/admin/searchbar";
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from "@/app/components/admin/table";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
// import Image from "next/image";
import { IconExport, IconPrint } from "@/app/components/admin/icon";
import { Pagination } from "@/app/components/admin/pagination";

export default function Setting() {
  const dropdownRef = useRef(null);

  const Divisi = [
    {
      id: 1,
      label: "IT",
    },
    {
      id: 2,
      label: "LPG",
    },
    {
      id: 3,
      label: "General Admin",
    },
    {
      id: 4,
      label: "Purchasing",
    },
    {
      id: 5,
      label: "Sawit",
    },
    {
      id: 6,
      label: "Asset",
    },
  ];

  const Riwayat = [
    {
      id: 1,
      nama: "Nazar Aulia",
      divisi: "IT",
      masuk: "07:43",
      keluar: "17:02",
      method: "both",
      notes: "keterangan lain",
      status: "hadir",
      face_in: "model-1-masuk.png",
      face_out: "model-1-pulang.png",
      tanggal: "12 Juli 2025",
    },
    {
      id: 2,
      nama: "Alfian Sujantan",
      divisi: "Asset",
      masuk: "07:43",
      keluar: "17:02",
      method: "both",
      notes: "keterangan lain",
      status: "hadir",
      face_in: "model-2-masuk.png",
      face_out: "model-2-pulang.png",
      tanggal: "16 Juli 2025",
    },
    {
      id: 3,
      nama: "Wita Wiwiwi",
      divisi: "General Admin",
      masuk: "07:43",
      keluar: "17:02",
      method: "gps",
      notes: "keterangan lain",
      status: "hadir",
      face_in: "foto_muka.jpg",
      face_out: "foto_muka.jpg",
      tanggal: "13 Juli 2025",
    },
    {
      id: 4,
      nama: "Zeanda Hendro",
      divisi: "LPG",
      masuk: "07:43",
      keluar: "17:02",
      method: "face",
      notes: "keterangan lain",
      status: "hadir",
      face_in: "model-4-masuk.png",
      face_out: "foto_muka.jpg",
      tanggal: "14 Juli 2025",
    },
    {
      id: 5,
      nama: "Fiki Papipu",
      divisi: "Purchasing",
      masuk: "07:43",
      keluar: "17:02",
      method: "face",
      notes: "keterangan lain",
      status: "hadir",
      face_in: "model-3-masuk.png",
      face_out: "foto_muka.jpg",
      tanggal: "12 Juli 2025",
    },
  ];

  const statusColorMap = {
    both: "bg-pink-600",
    face: "bg-blue-600",
    gps: "bg-yellow-600",
  };

  //searching
  const [searchTerm, setSearchTerm] = useState("");

  //sorting by tanggal di awal dengan order descending
  const sortBy = useState("name");
  const sortOrder = useState("desc");

  //untuk tombol handle sort yang arrow arah atas bawah - mengubah sort order dari descending ke ascending atau sebaliknya
  // const handleSort = (column) => {
  //   if (sortBy === column) {
  //     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  //   } else {
  //     setSortBy(column);
  //     setSortOrder("asc");
  //   }
  // };

  //konversi integer ke nama bulan dalam bahasa indonesia
  const convertToDate = (dateString) => {
    const months = {
      Januari: 0,
      Februari: 1,
      Maret: 2,
      April: 3,
      Mei: 4,
      Juni: 5,
      Juli: 6,
      Agustus: 7,
      September: 8,
      Oktober: 9,
      November: 10,
      Desember: 11,
    };

    const [day, monthName, year] = dateString.split(" ");
    return new Date(year, months[monthName], day);
  };

  //variabel sort yang akan terhubung dengan data
  const filteredAndSortedRiwayat = [...Riwayat]
    .filter((item) => {
      const q = searchTerm.toLowerCase();
      return item.nama.toLowerCase().includes(q);
    })
    .sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      if (sortBy === "tanggal") {
        valA = convertToDate(valA);
        valB = convertToDate(valB);
      }

      if (typeof valA === "string" && sortBy !== "tanggal") {
        return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }

      return sortOrder === "asc" ? valA - valB : valB - valA;
    });

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // jumlah data per halaman

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedRiwayat = filteredAndSortedRiwayat.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredAndSortedRiwayat.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const [isOpen, setIsOpen] = useState(false);

  //Loading
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading selama 1 detik
    setTimeout(() => {
      setData(paginatedRiwayat); // Ambil dari data lokal
      setIsLoading(false); // Selesai loading
    }, 100);
  });

  return (
    <>
      <Layout>
        <div className="p-4 mt-12">
          <div className="py-1 full-w text-[11px] mb-2 bg-[#e1ecf5] dark:bg-gray-500 font-light rounded-full">
            <span className="ps-6">
              <Link href="/admin/dashboard/" className="hover:text-blue-500">
                Home
              </Link>{" "}
              / Attendance / Setting
            </span>
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center py-10">
              <div role="status">
                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
              <div className="ml-3 text-center text-gray-500 mt-2">Memuat data...</div>
            </div>
          ) : (
            <div>
              <span className="text-[20px] mt-4 ">Pengaturan</span>
              <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
                <div>
                  <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
                <div className="hidden md:flex md:col-span-2 gap-2 md:justify-end relative">
                  <div className="justify-center flex items-center py-2">
                    <input type="month" className="bg-[#e8edf1] rounded-lg py-1 ps-6 pe-6 text-gray-900" />
                  </div>
                  <div className="py-2">
                    <button
                      id="dropdownDefaultButton"
                      onClick={() => setIsOpen(!isOpen)}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="button"
                    >
                      Cari Divisi{" "}
                      <svg className="w-2 h-2 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                      </svg>
                    </button>
                  </div>
                  {isOpen && (
                    <div id="dropdown" ref={dropdownRef} className={`border-1 border-blue-100 right-0 z-20 ${isOpen ? "block absolute top-full" : "hidden"}  bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
                      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                        {Divisi.map((item) => (
                          <li key={item.id}>
                            <a href="#" className="block px-4 py-1 border-gray-200 hover:bg-blue-600 hover:text-white text-xs dark:hover:bg-gray-600 dark:hover:text-white">
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-end">
                  <IconExport />
                  <IconPrint />
                </div>
              </div>
              <div className="py-4 rounded-lg dark:border-gray-700 ">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeader rowSpan={2} className="text-center">
                          #No
                        </TableHeader>
                        <TableHeader rowSpan={2} className="text-center">
                          Nama
                        </TableHeader>
                        <TableHeader colSpan={3} className="text-center">
                          Jadwal
                        </TableHeader>
                        <TableHeader rowSpan={2} className="whitespace-nowrap text-center">
                          Toleransi
                        </TableHeader>
                        <TableHeader rowSpan={2} className="whitespace-nowrap text-center">
                          Method
                        </TableHeader>
                        <TableHeader rowSpan={2} className="text-center">
                          <span className="sr-only">Action</span>
                        </TableHeader>
                      </TableRow>
                      <TableRow>
                        <TableHeader className="whitespace-nowrap text-center">Hari Kerja</TableHeader>
                        <TableHeader className="whitespace-nowrap text-center">Jam Masuk</TableHeader>
                        <TableHeader className="whitespace-nowrap text-center">Jam Pulang</TableHeader>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((item, index) => (
                        <TableRow key={item.id}>
                          <TableHeader>{startIndex + index + 1}</TableHeader>
                          <TableCell className="whitespace-nowrap">{item.nama}</TableCell>
                          <TableCell className="text-center">
                            <span className="bg-blue-500 p-1 text-white rounded-md">Senin</span>, <span className="bg-yellow-500 p-1 text-white rounded-md">Selasa</span>, <span className="bg-green-500 p-1 text-white rounded-md">Rabu</span>,{" "}
                            <span className="bg-pink-500 p-1 text-white rounded-md">Kamis</span>, <span className="bg-gray-500 p-1 text-white rounded-md">Jumat</span>, <span className="bg-purple-500 p-1 text-white rounded-md">Sabtu</span>,{" "}
                            <span className=" bg-orange-500 p-1 text-white rounded-md">Minggu</span>
                          </TableCell>
                          <TableCell className="text-center">{item.masuk}</TableCell>
                          <TableCell className="text-center">{item.keluar}</TableCell>
                          <TableCell className="text-center">10 Minutes</TableCell>
                          <TableCell className="text-center">
                            <span className={`rounded-md text-white text-[11px] p-1 inline-block ${statusColorMap[item.method]} `}>{item.method}</span>
                          </TableCell>
                          <TableCell className="text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                              Edit
                            </a>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} />
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}
