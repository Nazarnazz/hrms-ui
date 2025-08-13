"use client";

import Layout from "@/app/components/menu-items/layout";
import { SearchBar } from "@/app/components/admin/searchbar";
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from "@/app/components/admin/table";
import { Dialog, DialogActions, DialogBody, DialogTitle } from "@/app/components/admin/dialog";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import * as XLSX from "xlsx";
import { Datepicker } from "flowbite";
import { Pagination } from "@/app/components/admin/pagination";
import { Input, Label } from "@/app/components/admin/input";

export default function Riwayat() {
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
      tanggal: "2025-07-12",
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
      tanggal: "2025-07-16",
    },
    {
      id: 3,
      nama: "Wita Wiwiwi",
      divisi: "General Admin",
      masuk: " - ",
      keluar: " - ",
      method: "gps",
      notes: "keterangan lain",
      status: "alfa",
      face_in: ".",
      face_out: ".",
      tanggal: "2025-07-13",
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
      tanggal: "2025-07-14",
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
      tanggal: "2025-07-12",
    },
  ];

  const [visibleColumns, setVisibleColumns] = useState(["Status", "Masuk", "Keluar"]);

  const allColumns = ["Status", "Masuk", "Keluar", "Method", "Face In", "Face Out", "Notes"];

  const toggleColumn = (col) => {
    setVisibleColumns((prev) => (prev.includes(col) ? prev.filter((c) => c !== col) : [...prev, col]));
  };

  const statusColorMap = {
    both: "bg-pink-100 text-pink-600 border border-pink-600",
    face: "bg-blue-100 text-blue-600 border border-blue-600",
    gps: "bg-yellow-100 text-yellow-600 border border-yellow-600",
  };

  //modal edit
  const [isEditOpen, setIsEditOpen] = useState(false);
  //hapus
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  //searching
  const [searchTerm, setSearchTerm] = useState("");

  // filter
  const [isVisibleOpen, setIsVisibleOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // export
  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, "data.xlsx");
  };

  // print
  const handlePrint = () => {
    window.print();
  };

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
  // fungsi untuk format tanggal menjadi 12 Juli 2025
  const formatTanggal = (dateString) => {
    const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const date = new Date(dateString);
    return `${date.getDate()} ${bulan[date.getMonth()]} ${date.getFullYear()}`;
  };

  // fungsi untuk konversi tanggal "12 Juli 2025" jadi objek Date untuk sorting
  const convertToDate = (dateString) => {
    const bulan = {
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
    return new Date(year, bulan[monthName], day);
  };

  // ubah data saat mapping menjadi format tanggal baru
  const dataWithFormattedDate = Riwayat.map((item) => ({
    ...item,
    tanggal: formatTanggal(item.tanggal),
  }));

  // filter + sorting
  const filteredAndSortedRiwayat = [...dataWithFormattedDate]
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

  // bulk action
  const [selectedIds, setSelectedIds] = useState([]);
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(data.map((item) => item.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((sid) => sid !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleBulkDelete = () => {
    alert(`Menghapus ID: ${selectedIds.join(", ")}`);
    // Lanjutkan logika delete di sini
  };

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     setIsLoading(true);
  //     try {
  //       const res = await fetch("/api/users");
  //       const data = await res.json();
  //       setUsers(data);
  //     } catch (error) {
  //       console.error("Failed to fetch users:", error);
  //     } finally {
  //       setIsLoading(false); // stop loading
  //     }
  //   };
  //   fetchUsers();
  // }, []);

  return (
    <>
      <Layout>
        <div className="p-4 mt-12">
          <div className="py-1 full-w text-[11px] mb-2 bg-[#e1ecf5] dark:bg-gray-500 font-light rounded-full">
            <span className="ps-6">
              <Link href="/admin/dashboard/" className="hover:text-blue-500">
                Home
              </Link>{" "}
              / Attendance / History
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
              <span className="text-[20px] mt-4 ">Riwayat Absensi</span>
              <div className="md:col-span-8">
                <SearchBar
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  onToggleVisible={() => setIsVisibleOpen(true)}
                  onToggleFilter={() => setIsFilterOpen(true)}
                  onRefresh={() => console.log("refresh")}
                  onExport={handleExport}
                  onPrint={handlePrint}
                />
              </div>
              <div className="py-4 rounded-lg dark:border-gray-700 ">
                {selectedIds.length > 0 && (
                  <div className="flex gap-2">
                    <div className="mb-2 flex items-center gap-2">
                      <button onClick={handleBulkDelete} className="bg-red-100 text-red-600 font-bold text-xs border border-red-500 px-3 py-1 rounded">
                        Hapus Terpilih ({selectedIds.length})
                      </button>
                    </div>
                    <div className="mb-2 flex items-center gap-2">
                      <button onClick={handleBulkDelete} className="bg-blue-100 text-blue-600 font-bold text-xs border border-blue-500 px-3 py-1 rounded">
                        Edit Terpilih ({selectedIds.length})
                      </button>
                    </div>
                  </div>
                )}
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <Table>
                    <TableHead>
                      <TableRow>
                        {/* <TableHeader>No</TableHeader> */}

                        <TableHeader className={`text-center`}>
                          <input type="checkbox" className="accent-blue-600" checked={selectedIds.length === data.length} onChange={handleSelectAll} />
                        </TableHeader>
                        <TableHeader>Nama</TableHeader>
                        <TableHeader>
                          <div className="flex items-center">
                            Divisi
                            <svg onClick={() => handleSort("divisi")} className="w-3 h-3 ms-1.5 hover:text-blue-900 dark:hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                          </div>
                        </TableHeader>
                        <TableHeader>
                          <div className="flex items-center">
                            Tanggal
                            <svg onClick={() => handleSort("tanggal")} className="w-3 h-3 ms-1.5 hover:text-blue-900 dark:hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                            </svg>
                          </div>
                        </TableHeader>
                        {visibleColumns.includes("Status") && (
                          <TableHeader>
                            <div className="flex items-center">Status</div>
                          </TableHeader>
                        )}
                        {visibleColumns.includes("Masuk") && (
                          <TableHeader>
                            <div className="flex items-center">Masuk</div>
                          </TableHeader>
                        )}
                        {visibleColumns.includes("Masuk") && (
                          <TableHeader>
                            <div className="flex items-center">Keluar</div>
                          </TableHeader>
                        )}
                        {visibleColumns.includes("Method") && (
                          <TableHeader>
                            <div className="flex items-center">Method</div>
                          </TableHeader>
                        )}
                        {visibleColumns.includes("Face In") && (
                          <TableHeader>
                            <div className="flex items-center">Face In</div>
                          </TableHeader>
                        )}
                        {visibleColumns.includes("Face Out") && (
                          <TableHeader>
                            <div className="flex items-center">Face Out</div>
                          </TableHeader>
                        )}
                        {visibleColumns.includes("Notes") && (
                          <TableHeader>
                            <div className="flex items-center">Notes</div>
                          </TableHeader>
                        )}
                        <TableHeader>
                          <span className="sr-only">Action</span>
                        </TableHeader>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((item) => (
                        <TableRow key={item.id}>
                          {/* <TableHeader className={`text-center`}>{startIndex + index + 1}</TableHeader> */}
                          <TableCell className={`text-center`}>
                            <input type="checkbox" className="accent-blue-600" checked={selectedIds.includes(item.id)} onChange={() => handleSelectRow(item.id)} />
                          </TableCell>
                          <TableCell className="whitespace-nowrap">{item.nama}</TableCell>
                          <TableCell>{item.divisi}</TableCell>
                          <TableCell className="whitespace-nowrap">{item.tanggal}</TableCell>
                          {visibleColumns.includes("Status") && (
                            <TableCell>
                              <span className={`rounded-md text-[11px] p-1 inline-block ${item.status === "hadir" ? "bg-green-100 border border-green-500 text-green-500" : "bg-red-100 border border-red-500 text-red-500"} `}>
                                {item.status === "hadir" ? "Hadir" : " Absen "}
                              </span>
                            </TableCell>
                          )}
                          {visibleColumns.includes("Masuk") && <TableCell>{item.masuk}</TableCell>}
                          {visibleColumns.includes("Keluar") && <TableCell>{item.keluar}</TableCell>}
                          {visibleColumns.includes("Method") && (
                            <TableCell>
                              <span className={`rounded-md text-[11px] p-1 inline-block ${statusColorMap[item.method]} `}>{item.method}</span>
                            </TableCell>
                          )}
                          {visibleColumns.includes("Face In") && (
                            <TableCell>
                              <Image alt="masuk" width={70} height={70} src={`/assets/presensi/${item.face_in}`} />
                            </TableCell>
                          )}
                          {visibleColumns.includes("Face Out") && (
                            <TableCell>
                              <Image alt="keluar" width={70} height={70} src={`/assets/presensi/${item.face_out}`} />
                            </TableCell>
                          )}
                          {visibleColumns.includes("Notes") && <TableCell>{item.notes}</TableCell>}
                          <TableCell>
                            <div className="flex gap-3">
                              <button
                                onClick={() => {
                                  setIsEditOpen(true);
                                }}
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => {
                                  setIsDeleteOpen(true);
                                }}
                                className="font-medium text-red-600 dark:text-red-500 hover:underline"
                              >
                                Delete
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
        {isVisibleOpen && (
          <div
            className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg z-50 p-4
    transform transition-transform duration-300 ease-in-out
    ${isVisibleOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <h2 className="text-lg font-bold mb-4">Visibilitas Kolom</h2>
            {allColumns.map((col) => (
              <label key={col} className="block mb-2">
                <input type="checkbox" checked={visibleColumns.includes(col)} onChange={() => toggleColumn(col)} /> {col}
              </label>
            ))}
            <button onClick={() => setIsVisibleOpen(false)} className="mt-4 bg-blue-500 text-white px-4 py-1 rounded">
              Tutup
            </button>
          </div>
        )}
        {isFilterOpen && (
          <div
            className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg z-50 p-4
    transform transition-transform duration-300 ease-in-out
    ${isFilterOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <h2 className="text-lg font-bold mb-4">Filter Data</h2>
            <Datepicker views={["year", "month"]} label="Year and Month" minDate={new Date("2012-03-01")} maxDate={new Date("2023-06-01")} value={value} onChange={setValue} />
            <button onClick={() => setIsFilterOpen(false)} className="mt-4 bg-blue-500 text-white px-4 py-1 rounded">
              Tutup
            </button>
          </div>
        )}
      </Layout>

      {/* Modal Edit  */}
      <Dialog open={isEditOpen} onClose={() => setIsEditOpen(false)}>
        <DialogTitle>Update Data</DialogTitle>
        <hr className="border-1" />
        <DialogBody>
          <fieldset className="mt-2 py-5 flex items-center gap-6">
            <Label htmlFor="name">Nama</Label>
            <Input type="text" name="name" id="name" className="ps-4" placeholder="Nazar Aulia" required={true} />
          </fieldset>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <fieldset>
                <Label htmlFor="department" className="mb-2">
                  Department
                </Label>
                <Input type="text" name="department" id="department" className="ps-4" placeholder="IT" required={true} />
              </fieldset>
              <fieldset className="mt-6">
                <Label className="mb-2" htmlFor="masuk">
                  Waktu Masuk
                </Label>
                <Input type="time" name="masuk" id="masuk" className="ps-4" placeholder="" required={true} />
              </fieldset>
              <fieldset className="mt-6">
                <Label className="mb-2" htmlFor="status">
                  Status
                </Label>
                <Input type="text" name="status" id="status" className="ps-4" placeholder="Hadir" required={true} />
              </fieldset>
              <fieldset className="mt-6">
                <Label className="mb-2 text-center" htmlFor="face_in">
                  Face In
                </Label>
                <div className="flex justify-center">
                  <Image alt="face_in" height={150} width={150} src="/assets/image/mrbean.jpg" />
                </div>
              </fieldset>
            </div>
            <div>
              <fieldset>
                <Label className="mb-2" htmlFor="date">
                  Tanggal
                </Label>
                <Input type="date" name="date" id="date" placeholder="" required={true} />
              </fieldset>
              <fieldset className="mt-6">
                <Label className="mb-2" htmlFor="keluar">
                  Waktu Keluar
                </Label>
                <Input type="time" name="keluar" id="keluar" className="ps-4" placeholder="" required={true} />
              </fieldset>
              <fieldset className="mt-6">
                <Label className="mb-2" htmlFor="method">
                  Method
                </Label>
                <Input type="text" name="method" id="method" className="ps-4" placeholder="both" required={true} />
              </fieldset>
              <fieldset className="mt-6">
                <Label className="mb-2 text-center" htmlFor="face_out">
                  Face Out
                </Label>
                <div className="flex justify-center">
                  <Image alt="face_out" height={150} width={150} src="/assets/image/mrbean.jpg" />
                </div>
              </fieldset>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <fieldset className="flex gap-2">
              <input id="checkbox-late" type="checkbox" className="accent-blue-600 bg-gray-300 border-gray-300 rounded-sm dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="checkbox-late" className="text-xs">
                Terlambat Datang
              </label>
            </fieldset>
            <fieldset className="flex gap-2">
              <input id="checkbox-early" type="checkbox" className="accent-blue-600 bg-gray-300 border-gray-300 rounded-sm dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="checkbox-early" className="text-xs">
                Pulang Lebih Awal
              </label>
            </fieldset>
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
