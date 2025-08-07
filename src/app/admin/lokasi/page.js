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

export default function Worksite() {
  const Worksite = [
    {
      id: 1,
      id_company: "AKBID",
      name: "Yayasan",
      is_active: "true",
    },
    {
      id: 2,
      id_company: "WPR-SLR",
      name: "Workshop Fuel",
      is_active: "true",
    },
    {
      id: 3,
      id_company: "RDU",
      name: "Tambang Batu Bara",
      is_active: "true",
    },
    {
      id: 4,
      id_company: "MPP-AMP",
      name: "PT. MPP",
      is_active: "false",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  //sorting by first_name di awal dengan order ascending
  const [sortBy, setSortBy] = useState("name");
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
  const filteredAndSortedWorksite = [...Worksite]
    .filter((item) => {
      const q = searchTerm.toLowerCase();
      return item.name.toLowerCase().includes(q) || item.id_company.toLowerCase().includes(q);
    })
    .sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      if (typeof valA === "string") {
        return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }

      return sortOrder === "asc" ? valA - valB : valB - valA;
    });

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // jumlah data per halaman

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedWorksite = filteredAndSortedWorksite.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredAndSortedWorksite.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  //Loading
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading selama 1 detik
    setTimeout(() => {
      setData(paginatedWorksite); // Ambil dari data lokal
      setIsLoading(false); // Selesai loading
    }, 100);
  });

  return (
    <>
      <Layout>
        <div className="p-4 mt-12">
          <Breadcrumb>/ Worksite</Breadcrumb>
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
              <span className="text-[20px] mt-4 ">Worksites</span>
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
                        <TableHeader>Kode</TableHeader>
                        <TableHeader>
                          <div className="flex items-center">
                            Nama Perusahaan
                            <svg onClick={() => handleSort("name")} className="w-3 h-3 ms-1.5 hover:text-blue-900 dark:hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                          </div>
                        </TableHeader>
                        <TableHeader className="text-center">Status</TableHeader>
                        <TableHeader>
                          <span className="sr-only">action</span>
                        </TableHeader>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((item, index) => (
                        <TableRow key={item.id}>
                          <TableCell>{startIndex + index + 1}</TableCell>
                          <TableCell>{item.id_company}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell className="text-center">
                            <span className={`rounded-md text-white p-1 inline-block ${item.is_active === "true" ? "bg-green-500" : "bg-red-500"} `}>{item.is_active === "true" ? "Aktif" : "Nonaktif"}</span>
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
