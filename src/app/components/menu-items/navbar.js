/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, useRef } from "react";

export default function Navbar({ toggleSidebar }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // const [isDark, setIsDark] = useState(false);

  // useEffect(() => {
  //   const storedTheme = localStorage.getItem("theme");
  //   const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  //   if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
  //     document.documentElement.classList.add("dark");
  //     setIsDark(true);
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     setIsDark(false);
  //   }
  // }, []);

  // const toggleDarkMode = () => {
  //   const html = document.documentElement;
  //   const nowDark = !html.classList.contains("dark");

  //   html.classList.toggle("dark", nowDark);
  //   localStorage.setItem("theme", nowDark ? "dark" : "light");
  //   setIsDark(nowDark);
  // };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-[#f9fcff] dark:bg-gray-800 dark:border-gray-700 border-b border-gray-100 ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              {/* Tombol toggle sidebar di atas Navbar */}
              <button
                onClick={toggleSidebar}
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-blue-800 rounded-lg  hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:text-white dark:hover:bg-gray-500  dark:focus:ring-white"
              >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="https://flowbite.com" className="flex gap-1 ms-2 md:me-24">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-800 dark:text-white" width="27" height="27" viewBox="0 0 24 24">
                  <g fill="none">
                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M10.5 6a2.5 2.5 0 0 1 2.495 2.336L13 8.5v4.605l4.455.606a4 4 0 0 1 3.54 3.772l.005.202V18a8 8 0 0 1-.77 3.43a1 1 0 0 1-1.807-.86a6 6 0 0 0 .57-2.265L19 18v-.315a2 2 0 0 0-1.621-1.964l-.183-.027l-4.431-.603a2 2 0 0 1-1.759-1.827L11 13.105V8.5a.5.5 0 0 0-.992-.09L10 8.5V17a1 1 0 0 1-1.78.625l-.332-.407l-.303-.354c-.579-.657-1.001-1.02-1.36-1.203a1.2 1.2 0 0 0-.694-.137l-.141.02l2.504 5.009a1 1 0 0 1-1.73.996l-.058-.102l-2.777-5.553c-.36-.72-.093-1.683.747-2.028c1.043-.427 2.034-.506 3.055.012q.333.17.654.414l.215.17V8.5A2.5 2.5 0 0 1 10.5 6m0-4a6.5 6.5 0 0 1 6.255 8.272a1 1 0 1 1-1.924-.544a4.5 4.5 0 1 0-8.34.817a1 1 0 0 1-1.782.91A6.5 6.5 0 0 1 10.5 2"
                    />
                  </g>
                </svg>
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-blue-800 dark:text-white">WPR</span>
              </a>
            </div>
            <div className="flex items-center">
              {/* <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode" className="bg-gray-600 p-2 rounded-full">
                {isDark ? (
                  <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5V3m0 18v-2M7.05 7.05L5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636L16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                    />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
                    />
                  </svg>
                )}
              </button> */}
              <div className="ml-3 relative" ref={dropdownRef}>
                <div>
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                  </button>
                </div>
                {isOpen && (
                  <div className="absolute right-0 z-10 py-1 mt-2 w-48 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow-sm dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                    <div className="px-4 py-3" role="none">
                      <Link href="/admin/profile">
                        <p className="text-sm text-gray-900 dark:text-white" role="none">
                          Neil Sims
                        </p>
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                          neil.sims@flowbite.com
                        </p>
                      </Link>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <Link href="/admin/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link href="/admin/pengaturan" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                          Settings
                        </Link>
                      </li>
                      <li>
                        <a href="/signout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
