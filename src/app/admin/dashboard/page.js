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
        <div className="p-4 rounded-lg bg-blue-100 border border-gray-400 dark:bg-gray-900 dark:border-gray-500 mt-14">
          <div className="ps-3 flex gap-2 text-xs pt-1">
            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
            </svg>
            <span className="font-bold">{visible ? time : ""}</span>
          </div>
          {/* carousel */}
          <Carousel />
        </div>
        <div className="flex gap-8 mt-4">
          <div className="p-4 items-center bg-blue-100 dark:bg-gray-100 border border-gray-400 dark:border-gray-500 justify-center flex flex-col gap-4 rounded-lg">
            <span className="text-center text-gray-800 font-bold">Calendar</span>
            <Calendar onChange={setValue} value={value} className="rounded-lg text-blue-950 p-2" />
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-3 rounded">
              {/* users */}
              <div className="rounded bg-orange-100 dark:bg-orange-950 w-full min-w-xs border border-orange-300 dark:border-orange-950">
                <div className="absolute py-2 pe-6 px-5 bg-orange-800 rounded-e-full">
                  <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="py-2 pe ps-21 -2 text-orange-950 dark:text-white">
                  Users <span className="font-bold">99</span> data
                </div>
              </div>
              {/* employees  */}
              <div className="rounded bg-blue-100 dark:bg-blue-950 w-full min-w-xs border border-blue-300 dark:border-blue-950">
                <div className="absolute py-2 pe-6 px-5 bg-blue-800 rounded-e-full">
                  <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="py-2  ps-21 pe-2 text-blue-950 dark:text-white">
                  Employees <span className="font-bold">99</span> data
                </div>
              </div>
              {/* payrolls */}
              <div className="rounded bg-green-100 dark:bg-green-950 w-full min-w-xs border border-green-300 dark:border-green-950">
                <div className="absolute py-2 pe-6 px-5 bg-green-800 rounded-e-full">
                  <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clipRule="evenodd" />
                    <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                  </svg>
                </div>
                <div className="py-2 p ps-21 e-2 text-green-950 dark:text-white">
                  Payrolls <span className="font-bold">99</span> data
                </div>
              </div>
              {/* worksites */}
              <div className="rounded bg-red-100 dark:bg-red-950 w-full min-w-xs border border-red-300 dark:border-red-950">
                <div className="absolute py-2 pe-6 px-5 bg-red-800 rounded-e-full">
                  <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="m6 10.5237-2.27075.6386C3.29797 11.2836 3 11.677 3 12.125V20c0 .5523.44772 1 1 1h2V10.5237Zm12 0 2.2707.6386c.4313.1213.7293.5147.7293.9627V20c0 .5523-.4477 1-1 1h-2V10.5237Z" />
                    <path
                      fillRule="evenodd"
                      d="M12.5547 3.16795c-.3359-.22393-.7735-.22393-1.1094 0l-6.00002 4c-.45952.30635-.5837.92722-.27735 1.38675.30636.45953.92723.5837 1.38675.27735L8 7.86853V21h8V7.86853l1.4453.96352c.0143.00957.0289.01873.0435.02746.1597.09514.3364.14076.5112.1406.3228-.0003.6395-.15664.832-.44541.3064-.45953.1822-1.0804-.2773-1.38675l-6-4ZM10 12c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1Zm1-4c-.5523 0-1 .44772-1 1s.4477 1 1 1h2c.5523 0 1-.44772 1-1s-.4477-1-1-1h-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="py-2 ps-21  pe-2 text-red-950 dark:text-white">
                  Worksites <span className="font-bold">99</span> data
                </div>
              </div>
              {/* Leave Today */}
              <div className="rounded bg-pink-100 dark:bg-pink-950 w-full min-w-xs border border-pink-300 dark:border-pink-950">
                <div className="absolute py-2 pe-6 px-5 bg-pink-800 rounded-e-full">
                  <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 19V5h4a1 1 0 0 1 1 1v11h1a1 1 0 0 1 0 2h-6Z" />
                    <path fillRule="evenodd" d="M12 4.571a1 1 0 0 0-1.275-.961l-5 1.428A1 1 0 0 0 5 6v11H4a1 1 0 0 0 0 2h1.86l4.865 1.39A1 1 0 0 0 12 19.43V4.57ZM10 11a1 1 0 0 1 1 1v.5a1 1 0 0 1-2 0V12a1 1 0 0 1 1-1Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="py-2  ps-21 pe-2 text-pink-950 dark:text-white">
                  Leave Today <span className="font-bold">99</span> data
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
