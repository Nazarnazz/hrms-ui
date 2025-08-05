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
                  {paginatedRiwayat.map((item, index) => (
                    <TableRow key={item.id}>
                      <TableHeader>{startIndex + index + 1}</TableHeader>
                      <TableCell className="whitespace-nowrap">{item.nama}</TableCell>
                      <TableCell className="text-center">Senin, Selasa, Rabu, Kamis, Jumat, Sabtu</TableCell>
                      <TableCell className="text-center">{item.masuk}</TableCell>
                      <TableCell className="text-center">{item.keluar}</TableCell>
                      <TableCell className="text-center">10 Minutes</TableCell>
                      <TableCell className="text-center">{item.method}</TableCell>
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
      </Layout>
    </>
  );
}
