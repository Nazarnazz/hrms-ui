"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
          // Scroll ke bawah
          setIsVisible(false);
        } else {
          // Scroll ke atas
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed z-[999999] pointer-events-auto w-full h-16 max-w-lg -translate-x-1/2 bg-gray-100 border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
        }`}
      >
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
          <Link
            href="/user/dashboard"
            className={`inline-flex flex-col items-center justify-center px-5 rounded-s-full group ${pathname === "/user/dashboard" ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500" : "hover:bg-gray-200 dark:hover:bg-gray-800"}`}
          >
            <button data-tooltip-target="tooltip-home" type="button">
              <svg
                className={`w-5 h-5 mb-1  ${pathname === "/user/dashboard" ? "text-white group-hover:text-gray-300" : "text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              <span className="sr-only">Home</span>
            </button>
          </Link>
          <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
            Home
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <Link href="/user/riwayat" className={`inline-flex flex-col items-center justify-center px-5 group ${pathname === "/user/riwayat" ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500" : "hover:bg-gray-200 dark:hover:bg-gray-800"}`}>
            <button data-tooltip-target="tooltip-wallet" type="button">
              <svg
                className={`w-6 h-6 mb-1 ${pathname === "/user/riwayat" ? "text-white group-hover:text-gray-300" : "text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 "}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M12 8v4l3 3M3.22302 14C4.13247 18.008 7.71683 21 12 21c4.9706 0 9-4.0294 9-9 0-4.97056-4.0294-9-9-9-3.72916 0-6.92858 2.26806-8.29409 5.5M7 9H3V5"
                />
              </svg>

              <span className="sr-only">History</span>
            </button>
          </Link>
          <div id="tooltip-wallet" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
            History
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <div className="flex items-center justify-center">
            <Link
              href="/user/absensi"
              className={`inline-flex items-center justify-center font-medium group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800 ${
                pathname === "/user/absensi" ? "bg-blue-600 hover:bg-blue-700 px-10 py-5 group" : "rounded-full bg-blue-600 w-10 h-10 hover:bg-blue-700"
              }`}
            >
              <button data-tooltip-target="tooltip-new" type="button">
                <svg className={`w-6 h-6 text-white ${pathname === "/user/absensi" ? "group-hover:text-gray-300" : ""}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M18 5.05h1a2 2 0 0 1 2 2v2H3v-2a2 2 0 0 1 2-2h1v-1a1 1 0 1 1 2 0v1h3v-1a1 1 0 1 1 2 0v1h3v-1a1 1 0 1 1 2 0v1Zm-15 6v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8H3ZM11 18a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="sr-only">Absensi</span>
              </button>
            </Link>
          </div>
          <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
            Mulai Absensi
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <Link href="/user/cuti" className={`inline-flex flex-col items-center justify-center px-5 group ${pathname === "/user/cuti" ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500" : "hover:bg-gray-50 dark:hover:bg-gray-800 "}`}>
            <button data-tooltip-target="tooltip-settings" type="button">
              <svg
                className={`w-6 h-6 mb-1  ${pathname === "/user/cuti" ? "text-white group-hover:text-gray-300" : "text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
              </svg>

              <span className="sr-only">Cuti</span>
            </button>
          </Link>
          <div
            id="tooltip-settings"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
          >
            Cuti
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <Link
            href="/user/profile"
            className={`inline-flex flex-col items-center justify-center px-5 rounded-e-full group ${pathname === "/user/profile" ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500" : "hover:bg-gray-50 dark:hover:bg-gray-800"}`}
          >
            <button data-tooltip-target="tooltip-profile" type="button">
              <svg
                className={`w-6 h-6 mb-1   ${pathname === "/user/profile" ? "text-white group-hover:text-gray-300" : "text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <span className="sr-only">Profile</span>
            </button>
          </Link>
          <div
            id="tooltip-profile"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
          >
            Profile
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
    </>
  );
}
