"use client";

import Layout from "@/app/components/menu-items/layout";
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from "@/app/components/admin/table";
import { useState, useEffect } from "react";
import Link from "next/link";
// import Image from "next/image";
import { Pagination } from "@/app/components/admin/pagination";

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

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // jumlah data per halaman

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedDepartment = Department.slice(startIndex, endIndex);
  const totalPages = Math.ceil(Department.length / itemsPerPage);

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
          <div className="py-1 full-w text-[11px] mb-2 bg-[#e1ecf5] dark:bg-gray-500 font-light rounded-full">
            <span className="ps-6">
              <Link href="/admin/dashboard/" className="hover:text-blue-500">
                Home
              </Link>{" "}
              / Employee / Department
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
              <span className="text-[20px] mt-4 ">Department</span>
              <div className="py-4 rounded-lg dark:border-gray-700 ">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeader>#No</TableHeader>
                        <TableHeader className="text-center">Nama</TableHeader>
                        <TableHeader className="text-center">Deskripsi</TableHeader>

                        <TableHeader>
                          <span className="sr-only">Action</span>
                        </TableHeader>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((item, index) => (
                        <TableRow key={item.id}>
                          <TableHeader>{startIndex + index + 1}</TableHeader>
                          <TableCell className="whitespace-nowrap text-center">{item.label}</TableCell>
                          <TableCell className="text-center">{item.description}</TableCell>
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
