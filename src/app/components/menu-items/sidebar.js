"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ isOpen }) {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState({});

  const toggleSubmenu = (label) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const linkClass = (path) =>
    pathname === path
      ? "flex items-center p-2 text-blue-900 rounded-lg bg-blue-200 dark:bg-gray-500 dark:text-white hover:bg-blue-300 dark:hover:bg-gray-700 group"
      : "flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-blue-200 dark:hover:bg-gray-700 group";

  const menuItems = [
    {
      icon: (
        <svg className="w-6 h-6 text-blue-800 dark:text-white" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5" />
        </svg>
      ),
      label: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-800 dark:text-white" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ),
      label: "Karyawan",
      path: "/admin/users",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-800 dark:text-white" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3M3.22302 14C4.13247 18.008 7.71683 21 12 21c4.9706 0 9-4.0294 9-9 0-4.97056-4.0294-9-9-9-3.72916 0-6.92858 2.26806-8.29409 5.5M7 9H3V5"
          />
        </svg>
      ),
      label: "Riwayat Absensi",
      path: "/admin/riwayat",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-800 dark:text-white" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
          />
        </svg>
      ),
      label: "Lokasi",
      path: "/admin/lokasi",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-800 dark:text-white" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14.714 15h4.268c.404 0 .732-.384.732-.857V3.857c0-.473-.328-.857-.732-.857H6.714c-.552 0-1 .448-1 1v4m11 7v-3h3v3h-3Zm-3 6H6.714c-.552 0-1-.448-1-1 0-1.657 1.343-3 3-3h3c1.657 0 3 1.343 3 3 0 .552-.448 1-1 1Zm-1-9.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0Z"
          />
        </svg>
      ),
      label: "Kelola Cuti",
      path: "#",
      children: [
        {
          label: "Pengajuan Cuti",
          path: "/admin/cuti",
        },
        {
          label: "Persetujuan Cuti",
          path: "/admin/cuti/persetujuan",
        },
      ],
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-800 dark:text-white" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
        </svg>
      ),
      label: "Payroll",
      path: "/admin/payroll",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-800 dark:text-white" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
        </svg>
      ),
      label: "Log Out",
      path: "/",
    },
  ];

  useEffect(() => {
    const openState = {};
    menuItems.forEach((item) => {
      if (item.children) {
        const isChildActive = item.children.some((child) => pathname === child.path);
        if (isChildActive) {
          openState[item.label] = true;
        }
      }
    });
    setOpenMenus(openState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <aside className={`fixed top-0 left-0 z-30 w-64 h-screen pt-20 transition-transform bg-[#f9fcff] border-r border-gray-100 dark:bg-gray-800 dark:border-gray-700 ${isOpen ? "translate-x-0" : "-translate-x-full"}`} aria-label="Sidebar">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-[#f9fcff] dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <>
                  <button onClick={() => toggleSubmenu(item.label)} className="flex items-center w-full p-2 text-blue-900 rounded-lg dark:text-white hover:bg-blue-200 dark:hover:bg-gray-700">
                    {item.icon}
                    <span className="ms-3 flex-1 text-left">{item.label}</span>
                    <svg className={`w-4 h-4 ml-auto transition-transform ${openMenus[item.label] ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openMenus[item.label] && (
                    <ul className="ml-8 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <Link href={child.path} className={linkClass(child.path)}>
                            <span className="ms-3">{child.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={item.path} className={linkClass(item.path)}>
                  {item.icon}
                  <span className="ms-3">{item.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
