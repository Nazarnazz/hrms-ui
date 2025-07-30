"use client";
import { useState, useEffect } from "react";
import Navbar from "@/app/components/menu-items/navbar";
import Sidebar from "@/app/components/menu-items/sidebar";
import Footer from "@/app/components/menu-items/footer";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleContentClick = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };
  // 1. Ambil dari localStorage saat mount
  useEffect(() => {
    const stored = localStorage.getItem("sidebarOpen");
    if (stored === "true") {
      setIsSidebarOpen(true);
    }
  }, []);

  // 2. Simpan ke localStorage setiap kali isOpen berubah
  useEffect(() => {
    localStorage.setItem("sidebarOpen", isSidebarOpen);
  }, [isSidebarOpen]);

  // 3. Tutup sidebar saat berpindah halaman
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />

      {/* Konten utama: geser jika sidebar terbuka */}
      <div onClick={handleContentClick} className={`transition-all duration-300 ${isSidebarOpen ? "sm:ml-64" : "ml-0"} p-4`}>
        {children}
        <Footer />
      </div>
    </>
  );
}
