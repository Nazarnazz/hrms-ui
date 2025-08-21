"use client";

import Layout from "@/app/components/menu-items/layout";
import { SearchBarNoButton } from "@/app/components/admin/searchbar";
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from "@/app/components/admin/table";
import { Dialog, DialogActions, DialogBody, DialogTitle } from "@/app/components/admin/dialog";
import { Input, Label } from "@/app/components/admin/input";
import { useState, useEffect } from "react";

// import Link from "next/link";
// import Image from "next/image";
import { Pagination } from "@/app/components/admin/pagination";
import { Breadcrumb } from "@/app/components/admin/breadcrumb";

export default function Department() {
  const Department = [
    {
      id: 1,
      label: "IT",
      description: "Deskripsi ada di sini",
    },
    {
      id: 2,
      label: "LPG",
      description: "Deskripsi ada di sini",
    },
    {
      id: 3,
      label: "General Admin",
      description: "Deskripsi ada di sini",
    },
    {
      id: 4,
      label: "Purchasing",
      description: "Deskripsi ada di sini",
    },
    {
      id: 5,
      label: "Sawit",
      description: "Deskripsi ada di sini",
    },
    {
      id: 6,
      label: "Asset",
      description: "Deskripsi ada di sini",
    },
  ];

  //modal edit
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  //hapus
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  //sorting by first_name di awal dengan order ascending
  const [sortBy, setSortBy] = useState("label");
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
  const filteredAndSortedDepartment = [...Department]
    .filter((item) => {
      const q = searchTerm.toLowerCase();
      return item.label.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
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
  const [itemsPerPage, setItemsPerPage] = useState(10); // default 10, bisa diubah user

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedDepartment = filteredAndSortedDepartment.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredAndSortedDepartment.length / itemsPerPage);

  // reset ke halaman pertama kalau search berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // reset ke halaman pertama kalau jumlah per halaman berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  //Loading
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading selama 1 detik
    setTimeout(() => {
      setData(paginatedDepartment); // Ambil dari data lokal
      setIsLoading(false); // Selesai loading
    }, 100);
  });

  return (
    <>
      <Layout>
        <div className="p-4 mt-12">
          <Breadcrumb>/ Employees / Departments</Breadcrumb>
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
              <span className="text-[20px] mt-4 ">Departments</span>
              <SearchBarNoButton searchTerm={searchTerm} setSearchTerm={setSearchTerm} className="placeholder:italic placeholder:text-sm" placeholder={`Cari Kode, Nama Perusahaan`} />
              <div className="py-4 rounded-lg dark:border-gray-700 ">
                <div className="flex">
                  <div className="inline-block">
                    <div className="flex items-center gap-1 mb-2 border border-gray-200 shadow italic px-1 rounded dark:bg-gray-800 bg-blue-50">
                      <span className="text-xs">Tampilkan:</span>
                      <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))} className="rounded p-1 text-xs">
                        <option className="dark:bg-gray-600 bg-blue-50" value={5}>
                          5
                        </option>
                        <option className="dark:bg-gray-600 bg-blue-50" value={10}>
                          10
                        </option>
                        <option className="dark:bg-gray-600 bg-blue-50" value={25}>
                          25
                        </option>
                        <option className="dark:bg-gray-600 bg-blue-50" value={50}>
                          50
                        </option>
                        <option className="dark:bg-gray-600 bg-blue-50" value={100}>
                          100
                        </option>
                      </select>
                      <span className="text-xs">per halaman</span>
                    </div>
                  </div>
                  <div className="inline-block ml-auto">
                    <div className="pe-4">
                      <button
                        onClick={() => {
                          setIsAddOpen(true);
                        }}
                        className="items-center border border-gray-200 shadow dark:bg-gray-800 dark:hover:bg-gray-500 text-white px-3 rounded-lg bg-[#436cb2] hover:bg-[#5783cf]"
                      >
                        <div className="flex py-1 gap-2">
                          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          <span className="text-xs">Tambah</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeader>#NO</TableHeader>
                        <TableHeader>
                          <div className="flex items-center">
                            Nama
                            <svg onClick={() => handleSort("label")} className="w-3 h-3 ms-1.5 hover:text-blue-900 dark:hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                          </div>
                        </TableHeader>
                        <TableHeader>Deskripsi</TableHeader>
                        <TableHeader>
                          <span className="sr-only">action</span>
                        </TableHeader>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((item, index) => (
                        <TableRow key={item.id}>
                          <TableCell>{startIndex + index + 1}</TableCell>
                          <TableCell>{item.label}</TableCell>
                          <TableCell>{item.description}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex gap-3">
                              <button
                                onClick={() => {
                                  setIsEditOpen(true);
                                }}
                                className="hover:bg-blue-200 bg-blue-50 border dark:bg-gray-800 border-blue-600 rounded group"
                              >
                                <svg className="w-6 h-6 text-blue-700  group-hover:text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                  <path
                                    fillRule="evenodd"
                                    d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z"
                                    clipRule="evenodd"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                              <button
                                onClick={() => {
                                  setIsDeleteOpen(true);
                                }}
                                className="bg-red-50 border border-red-600 dark:bg-gray-800 hover:bg-red-200 rounded group"
                              >
                                <svg className="w-6 h-6 text-red-600 group-hover:text-red-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                  <path
                                    fillRule="evenodd"
                                    d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                            </div>
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
      {/* Modal Tambah  */}
      <Dialog open={isAddOpen} onClose={() => setIsAddOpen(false)}>
        <DialogTitle>Tambah Data</DialogTitle>
        <hr className="border-1" />
        <DialogBody>
          <fieldset className="mt-2 py-5 flex items-center gap-6">
            <Label htmlFor="name">Nama Department</Label>
            <Input type="text" name="name" id="name" className="ps-4" placeholder="..." required={true} />
          </fieldset>
          <fieldset className="py-3 items-center">
            <Label htmlFor="name">Description</Label>
            <textarea type="text" name="name" id="name" className="ps-4 bg-gray-200 rounded-sm w-full" placeholder="..." required={true} />
          </fieldset>
        </DialogBody>
        <DialogActions>
          <div className="flex">
            <button className="px-10 py-1.5 rounded bg-gray-600 text-white hover:bg-gray-400" onClick={() => setIsAddOpen(false)}>
              Batal
            </button>
          </div>
          <div className="flex justify-end">
            <button className="px-10 py-1.5 rounded bg-[#508DA7] text-white hover:bg-[#6db7d4]">Tambahkan</button>
          </div>
        </DialogActions>
      </Dialog>
      {/* Modal Edit  */}
      <Dialog open={isEditOpen} onClose={() => setIsEditOpen(false)}>
        <DialogTitle>Update Data</DialogTitle>
        <hr className="border-1" />
        <DialogBody>
          <fieldset className="mt-2 py-5 flex items-center gap-6">
            <Label htmlFor="name">Nama Perusahaan</Label>
            <Input type="text" name="name" id="name" className="ps-4" placeholder="PT. MPP" required={true} />
          </fieldset>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <fieldset>
                <Label htmlFor="department" className="mb-2">
                  Kode
                </Label>
                <Input type="text" name="department" id="department" className="ps-4" placeholder="MPP-PKK" required={true} />
              </fieldset>
            </div>
            <div>
              <fieldset>
                <Label className="mb-2" htmlFor="method">
                  Status
                </Label>
                <Input type="text" name="method" id="method" className="ps-4" placeholder="Nonaktif" required={true} />
              </fieldset>
            </div>
          </div>
        </DialogBody>
        <DialogActions>
          <div className="flex">
            <button className="px-10 py-1.5 rounded bg-gray-600 text-white hover:bg-gray-400" onClick={() => setIsEditOpen(false)}>
              Batal
            </button>
          </div>
          <div className="flex justify-end">
            <button className="px-10 py-1.5 rounded bg-[#508DA7] text-white hover:bg-[#6db7d4]">Simpan</button>
          </div>
        </DialogActions>
      </Dialog>

      {/* Dialog hapus */}
      <Dialog open={isDeleteOpen} onClose={() => setIsDeleteOpen(false)}>
        <DialogTitle className="text-red-500">Hapus Data</DialogTitle>
        <hr className="border-1 text-red-500" />
        <DialogBody>
          <Label className={`py-3 text-red-500`}>Data ini akan dihapus dan Anda tidak dapat melihatnya lagi.</Label>
        </DialogBody>
        <DialogActions>
          <div className="flex">
            <button className="px-10 py-1.5 rounded bg-gray-600 text-white hover:bg-gray-400" onClick={() => setIsDeleteOpen(false)}>
              Batal
            </button>
          </div>
          <div className="flex justify-end">
            <button className="px-10 py-1.5 rounded bg-[#a75050] text-white hover:bg-[#d46d6d]" onClick={() => setIsDeleteConfirmOpen(true) && setIsDeleteOpen(false)}>
              Hapus
            </button>
          </div>
        </DialogActions>
      </Dialog>

      {/* Konfirmasi hapus */}
      <Dialog open={isDeleteConfirmOpen} onClose={() => setIsDeleteConfirmOpen(false)}>
        <DialogTitle>Hapus Data</DialogTitle>
        <hr className="border-1" />
        <DialogBody>
          <Label className={`py-3`}>Anda Yakin?</Label>
        </DialogBody>
        <DialogActions>
          <div className="flex">
            <button className="px-10 py-1.5 rounded bg-gray-600 text-white hover:bg-gray-400" onClick={() => setIsDeleteConfirmOpen(false)}>
              Batal
            </button>
          </div>
          <div className="flex justify-end">
            <button className="px-10 py-1.5 rounded bg-[#a75050] text-white hover:bg-[#d46d6d]">Ya</button>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
}
