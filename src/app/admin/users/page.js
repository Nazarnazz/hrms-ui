"use client";

import Layout from "@/app/components/menu-items/layout";
import { SearchBar } from "@/app/components/admin/searchbar";
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from "@/app/components/admin/table";
import { useState, useEffect } from "react";

// import Link from "next/link";
// import Image from "next/image";
import { Pagination } from "@/app/components/admin/pagination";
import { Breadcrumb } from "@/app/components/admin/breadcrumb";
import { IconExport, IconPrint } from "@/app/components/admin/icon";

export default function Users() {
  const Pengguna = [
    {
      id: 1,
      email: "nazar@gmail.com",
      first_name: "nazar",
      last_name: "aulia",
      username: "nazar_aulia",
      join_start: "11 Agustus 2015",
      join_end: "9 Desember 2018",
    },
    {
      id: 2,
      email: "ayu@gmail.com",
      first_name: "ayu",
      last_name: "ayuyu",
      username: "ayu_ayuyu",
      join_start: "11 Mei 2016",
      join_end: "31 Januari 2019",
    },
    {
      id: 3,
      email: "lala@gmail.com",
      first_name: "lala",
      last_name: "metal",
      username: "lala_metal",
      join_start: "11 Agustus 2015",
      join_end: "12 Mei 2020",
    },
    {
      id: 4,
      email: "rumi@gmail.com",
      first_name: "rumi",
      last_name: "aulia",
      username: "rumi_aulia",
      join_start: "11 Oktober 2014",
      join_end: "3 Februari 2019",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  //sorting by first_name di awal dengan order descending
  const [sortBy, setSortBy] = useState("first_name");
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

  //variabel sort yang akan terhubung dengan data
  const filteredAndSortedPengguna = [...Pengguna]
    .filter((item) => {
      const q = searchTerm.toLowerCase();
      return item.first_name.toLowerCase().includes(q) || item.last_name.toLowerCase().includes(q) || item.username.toLowerCase().includes(q);
    })
    .sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      return sortOrder === "asc" ? valA - valB : valB - valA;
    });

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // jumlah data per halaman

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedPengguna = filteredAndSortedPengguna.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredAndSortedPengguna.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <>
      <Layout>
        <div className="p-4 mt-12">
          <Breadcrumb>/ Users</Breadcrumb>
          <span className="text-[20px] mt-4 ">Akun Pengguna</span>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
            <div>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <div className="hidden md:block"></div>
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
                    <TableHeader>#NO</TableHeader>
                    <TableHeader>
                      <div className="flex items-center">
                        Email
                        <svg onClick={() => handleSort("email")} className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </div>
                    </TableHeader>
                    <TableHeader>
                      <div className="flex items-center">
                        First Name
                        <svg onClick={() => handleSort("first_name")} className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </div>
                    </TableHeader>
                    <TableHeader>
                      <div className="flex items-center">
                        Last Name
                        <svg onClick={() => handleSort("last_name")} className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </div>
                    </TableHeader>
                    <TableHeader>
                      <div className="flex items-center">
                        Username
                        <svg onClick={() => handleSort("username")} className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </div>
                    </TableHeader>
                    <TableHeader>Joined From</TableHeader>
                    <TableHeader>Joined End</TableHeader>
                    <TableHeader>
                      <span className="sr-only">action</span>
                    </TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedPengguna.map((item, index) => (
                    <TableRow key={item.id}>
                      <TableCell>{startIndex + index + 1}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.first_name}</TableCell>
                      <TableCell>{item.last_name}</TableCell>
                      <TableCell>{item.username}</TableCell>
                      <TableCell>{item.join_start}</TableCell>
                      <TableCell>{item.join_end}</TableCell>
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
