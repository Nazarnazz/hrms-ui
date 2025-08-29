"use client";
// import Navbar from "@/app/components/menu-items/navbar";
// import Sidebar from "@/app/components/menu-items/sidebar";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Layout from "@/app/components/menu-items/layout";
import Carousel from "@/app/components/carousel/carousel";

export default function Dashboard() {
  const [value, setValue] = useState(new Date());
  const [time, setTime] = useState("");
  const [visible, setVisible] = useState(true); // untuk blink

  useEffect(() => {
    // update jam tiap detik
    const clockInterval = setInterval(() => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      // const seconds = now.getSeconds().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12;
      hours = hours ? hours : 12;
      const jam = hours.toString().padStart(2, "0");

      setTime(`${jam}:${minutes} ${ampm}`);
    }, 1000);

    let timeoutId;

    const blinkCycle = () => {
      setVisible(true); // tampil
      timeoutId = setTimeout(() => {
        setVisible(false); // hilang setelah 3 detik tampil
        timeoutId = setTimeout(blinkCycle, 640); // hilang 1 detik, lalu ulang
      }, 3000);
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
        <div className="p-4 rounded-lg bg-blue-200 dark:border dark:bg-gray-900 dark:border-gray-700 mt-14">
          <div className="ps-3 flex gap-2 text-xs pt-1">
            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
            </svg>
            <span className="font-bold">{visible ? time : ""}</span>
          </div>
          <Carousel />
        </div>
        <div className="flex gap-8 mt-4">
          <div className="p-4 items-center border shadow shadow-white justify-center flex flex-col gap-4 bg-gray-800 rounded-lg">
            <span className="text-center font-bold">Calendar</span>
            <Calendar onChange={setValue} value={value} className="rounded-lg text-blue-950 p-2" />
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-3 rounded">
              <div className="rounded bg-red-950 w-full min-w-xs text-center">
                <div className="absolute py-2 pe-6 px-5 bg-red-800 rounded-e-full">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="py-2 pe-2">
                  Worksites <span className="font-bold">99</span> data
                </div>
              </div>
              <div className="p-2 rounded bg-orange-950 w-full min-w-xs text-center">
                Users <span className="font-bold">99</span> data
              </div>
              <div className="p-2 rounded bg-blue-950 w-full min-w-xs text-center">
                Employees <span className="font-bold">99</span> data
              </div>
              <div className="p-2 rounded bg-green-950 w-full min-w-xs text-center">
                Payrolls <span className="font-bold">99</span> data
              </div>
              <div className="p-2 rounded bg-yellow-950 w-full min-w-xs text-center">
                Leave Today <span className="font-bold">99</span> data
              </div>
              <div className="p-2 rounded bg-gray-800 w-full min-w-xs text-center">
                Payrolls <span className="font-bold">99</span> data
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
