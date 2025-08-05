"use client";

import Layout from "@/app/components/menu-items/layout";
import { SearchBar } from "@/app/components/admin/searchbar";
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from "@/app/components/admin/table";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
// import Image from "next/image";
import { Pagination } from "@/app/components/admin/pagination";

export default function DataKaryawan() {
  const dropdownRef = useRef(null);

  const Department = [
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
      department: "IT",
      jabatan: "Programmer",
      notes: "keterangan lain",
      status: "hadir",
      tanggal: "12 Juli 2025",
    },
    {
      id: 2,
      nama: "Alfian Sujantan",
      department: "Asset",
      jabatan: "Staff",
      notes: "keterangan lain",
      status: "hadir",
      tanggal: "16 Juli 2025",
    },
    {
      id: 3,
      nama: "Wita Wiwiwi",
      department: "General Admin",
      jabatan: "Staff",
      notes: "keterangan lain",
      status: "hadir",
      tanggal: "13 Juli 2025",
    },
    {
      id: 4,
      nama: "Zeanda Hendro",
      department: "LPG",
      jabatan: "Head Section",
      notes: "keterangan lain",
      status: "hadir",
      tanggal: "14 Juli 2025",
    },
    {
      id: 5,
      nama: "Fiki Papipu",
      department: "Purchasing",
      jabatan: "Head Section",
      notes: "keterangan lain",
      status: "hadir",
      tanggal: "12 Juli 2025",
    },
  ];

  //searching
  const [searchTerm, setSearchTerm] = useState("");

  //sorting by tanggal di awal dengan order descending
  const [sortBy, setSortBy] = useState("tanggal");
  const [sortOrder, setSortOrder] = useState("desc");

  //untuk tombol handle sort yang arrow arah atas bawah - mengubah sort order dari descending ke ascending atau sebaliknya
  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

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
      return item.nama.toLowerCase().includes(q) || item.department.toLowerCase().includes(q) || item.tanggal.toLowerCase().includes(q);
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
              / Employee / Data
            </span>
          </div>
          <span className="text-[20px] mt-4 ">Data Karyawan</span>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
            <div>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <div className="hidden md:flex gap-2 md:col-span-2 md:justify-end relative">
              <div className="justify-center flex items-center py-2">
                <input type="month" className="bg-[#e8edf1] rounded-lg py-1 ps-6 pe-6 text-gray-900" />
              </div>
              <div className="py-2">
                <button
                  id="dropdownDefaultButton"
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white bg-blue-700 whitespace-nowrap hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-sm rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Cari Department{" "}
                  <svg className="w-2 h-2 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
              </div>
              {isOpen && (
                <div id="dropdown" ref={dropdownRef} className={`border-1 border-blue-100 right-0 z-20 ${isOpen ? "block absolute top-full" : "hidden"}  bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                    {Department.map((item) => (
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
              <button className="bg-blue-100 dark:bg-gray-500 hover:bg-blue-300 dark:hover:bg-gray-600 rounded-md py-1 px-2 mr-2 text-gray-500">
                <svg className="w-6 h-6 text-blue-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 10V4a1 1 0 0 0-1-1H9.914a1 1 0 0 0-.707.293L5.293 7.207A1 1 0 0 0 5 7.914V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2M10 3v4a1 1 0 0 1-1 1H5m5 6h9m0 0-2-2m2 2-2 2"
                  />
                </svg>
              </button>
              <button className="bg-blue-100 dark:bg-gray-500 hover:bg-blue-300 dark:hover:bg-gray-600 rounded-md py-1 px-2 mr-2 text-gray-500">
                <svg className="w-6 h-6 text-blue-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="py-4 rounded-lg dark:border-gray-700 ">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeader>#No</TableHeader>
                    <TableHeader>Nama</TableHeader>
                    <TableHeader>
                      <div className="flex items-center">
                        Department
                        <svg onClick={() => handleSort("department")} className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </div>
                    </TableHeader>
                    <TableHeader>
                      <div className="flex items-center whitespace-nowrap">
                        Tanggal Join
                        <svg onClick={() => handleSort("tanggal")} className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </div>
                    </TableHeader>
                    <TableHeader>
                      <div className="flex items-center">Jabatan</div>
                    </TableHeader>
                    <TableHeader>
                      <div className="flex items-center">Status</div>
                    </TableHeader>
                    <TableHeader>
                      <span className="sr-only">Action</span>
                    </TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedRiwayat.map((item, index) => (
                    <TableRow key={item.id}>
                      <TableHeader>{startIndex + index + 1}</TableHeader>
                      <TableCell className="whitespace-nowrap">{item.nama}</TableCell>
                      <TableCell>{item.department}</TableCell>
                      <TableCell className="whitespace-nowrap">{item.tanggal}</TableCell>
                      <TableCell>{item.jabatan}</TableCell>
                      <TableCell>{item.status}</TableCell>
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
