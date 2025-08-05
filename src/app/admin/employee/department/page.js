"use client";

import Layout from "@/app/components/menu-items/layout";
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell } from "@/app/components/admin/table";
import { useState } from "react";
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
                  {paginatedDepartment.map((item, index) => (
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
      </Layout>
    </>
  );
}
