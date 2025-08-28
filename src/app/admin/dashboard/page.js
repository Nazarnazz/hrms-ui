"use client";
// import Navbar from "@/app/components/menu-items/navbar";
// import Sidebar from "@/app/components/menu-items/sidebar";
import { useState, useEffect } from "react";
import Layout from "@/app/components/menu-items/layout";
import Carousel from "@/app/components/carousel/carousel";

export default function Dashboard() {
  const [time, setTime] = useState("");
  const [visible, setVisible] = useState(true); // untuk blink

  useEffect(() => {
    // update jam tiap detik
    const clockInterval = setInterval(() => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12;
      hours = hours ? hours : 12;
      const jam = hours.toString().padStart(2, "0");

      setTime(`${jam}:${minutes}:${seconds} ${ampm}`);
    }, 1000);

    let timeoutId;

    const blinkCycle = () => {
      setVisible(true); // tampil
      timeoutId = setTimeout(() => {
        setVisible(false); // hilang setelah 3 detik tampil
        timeoutId = setTimeout(blinkCycle, 500); // hilang 1 detik, lalu ulang
      }, 1000);
    };

    blinkCycle();

    return () => {
      clearInterval(clockInterval);
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <Layout>
      {/* <Navbar /> */}
      {/* <Sidebar /> */}

      <div className="p-4">
        <div className="p-4 rounded-lg bg-blue-200 dark:bg-gray-900 dark:border-gray-700 mt-14">
          <div className="ps-3 flex gap-2 text-xs pt-1">
            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
            </svg>
            <span className="font-bold">{visible ? time : ""}</span>
          </div>
          <Carousel />
        </div>
      </div>
    </Layout>
  );
}
