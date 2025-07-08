"use client";
import { useState } from "react";
import Navbar from "@/app/components/menu-items/navbar";
import Sidebar from "@/app/components/menu-items/sidebar";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />

      {/* Konten utama: geser jika sidebar terbuka */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? "sm:ml-64" : "ml-0"} p-4`}>{children}</div>
    </>
  );
}
