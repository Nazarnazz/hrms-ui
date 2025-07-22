"use client";

import Layout from "@/app/components/menu-items/layout";
import { useState, useEffect } from "react";

export default function Riwayat() {
  // const [query, setQuery] = useState("");
  // const filteredData = users.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));

  const Riwayat = [
    {
      id: 1,
      nama: "Nazar",
      divisi: "IT",
      masuk: "07:43",
      keluar: "17:02",
      tanggal: "12 Juli 2025",
    },
    {
      id: 2,
      nama: "Alfian",
      divisi: "Asset",
      masuk: "07:43",
      keluar: "17:02",
      tanggal: "16 Juli 2025",
    },
    {
      id: 3,
      nama: "Wita",
      divisi: "General Admin",
      masuk: "07:43",
      keluar: "17:02",
      tanggal: "13 Juli 2025",
    },
    {
      id: 4,
      nama: "Zea",
      divisi: "LPG",
      masuk: "07:43",
      keluar: "17:02",
      tanggal: "14 Juli 2025",
    },
    {
      id: 5,
      nama: "Fiki",
      divisi: "Purchasing",
      masuk: "07:43",
      keluar: "17:02",
      tanggal: "12 Juli 2025",
    },
  ];

  // const sortedRiwayat = [...Riwayat].sort((a, b) => {
  //   const valA = a[sortBy];
  //   const valB = b[sortBy];

  //   if (typeof valA === "string") {
  //     return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
  //   }

  //   if (sortBy === "tanggal") {
  //     valA = convertToDate(valA);
  //     valB = convertToDate(valB);
  //   }

  //   if (typeof valA === "string" && sortBy !== "tanggal") {
  //     return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
  //   }

  //   return sortOrder === "asc" ? valA - valB : valB - valA;
  // });

  const [searchTerm, setSearchTerm] = useState("");

  const [sortBy, setSortBy] = useState("tanggal");
  const [sortOrder, setSortOrder] = useState("desc");
  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

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

  const filteredAndSortedRiwayat = [...Riwayat]
    .filter((item) => {
      const q = searchTerm.toLowerCase();
      return item.nama.toLowerCase().includes(q) || item.divisi.toLowerCase().includes(q) || item.tanggal.toLowerCase().includes(q);
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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // jumlah data per halaman

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedRiwayat = filteredAndSortedRiwayat.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredAndSortedRiwayat.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <>
      <Layout>
        <div className="p-4 mt-12">
          <div className="py-1 full-w text-[11px] mb-2 dark:bg-gray-500 font-light rounded-full">
            <span className="ml-2">Home / Riwayat /</span>
          </div>
          <span className="text-[20px] mt-4 ">Riwayat Absensi</span>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
            <div>
              <form>
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full p-2 ps-10 mt-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Cari"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 sm:bottom-1.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg sm:text-sm sm:px-4 px-2 py-1 text-[10px] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Cari
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden md:block"></div>
            <div className="flex items-center justify-end">
              <button className="bg-gray-200 dark:bg-gray-500 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md py-1 px-2 mr-2 text-gray-500">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 10V4a1 1 0 0 0-1-1H9.914a1 1 0 0 0-.707.293L5.293 7.207A1 1 0 0 0 5 7.914V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2M10 3v4a1 1 0 0 1-1 1H5m5 6h9m0 0-2-2m2 2-2 2"
                  />
                </svg>
              </button>
              <button className="bg-gray-200 dark:bg-gray-500 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md py-1 px-2 mr-2 text-gray-500">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-2 py-3">
                      #No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Nama
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex items-center">
                        Divisi
                        <svg onClick={() => handleSort("divisi")} className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex items-center">
                        Tanggal
                        <svg onClick={() => handleSort("tanggal")} className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex items-center">Masuk</div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex items-center">Keluar</div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedRiwayat.map((item, index) => (
                    <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th scope="row" className="px-4 py-4 font-bold text-gray-900 dark:text-white">
                        {startIndex + index + 1}
                      </th>
                      <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.nama}
                      </td>
                      <td className="px-6 py-4">{item.divisi}</td>
                      <td className="px-6 py-4">{item.tanggal}</td>
                      <td className="px-6 py-4">{item.masuk}</td>
                      <td className="px-6 py-4">{item.keluar}</td>
                      <td className="px-6 py-4 text-right">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-4 gap-2">
              <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-3 py-1 bg-gray-400 dark:bg-gray-600 hover:bg-gray-700 text-white rounded disabled:opacity-50">
                Prev
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <button key={i} onClick={() => setCurrentPage(i + 1)} className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-700 text-white" : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-700 text-white"}`}>
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-400 dark:bg-gray-600 text-white hover:bg-gray-700 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
