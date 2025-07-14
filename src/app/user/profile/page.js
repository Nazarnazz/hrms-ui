"use client";
import Navigation from "@/app/components/menu-items/navigation-user";
import Image from "next/image";
import { useGeolocated } from "react-geolocated";
import { useEffect, useState } from "react";

export default function Profile() {
  const [isClient, setIsClient] = useState(false);
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  // Pastikan hanya dirender di client
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  // Kondisi: Browser tidak mendukung geolocation
  if (!isGeolocationAvailable) {
    return (
      <>
        <div className="mb-4">
          <div className="w-full p-4 bg-gray-100 mb-6 dark:bg-gray-700 justify-center items-center font-bold dark:border-gray-600">Profile</div>
          <div className="p-4 m-2 flex flex-col justify-center max-h-screen items-center">Browsermu tidak support geolocation</div>
        </div>
        <Navigation />
      </>
    );
  }

  // Kondisi: User menolak izin geolocation
  if (!isGeolocationEnabled) {
    return (
      <>
        <div className="mb-4">
          <div className="w-full p-4 bg-gray-100 mb-6 dark:bg-gray-700 justify-center items-center font-bold dark:border-gray-600">Profile</div>
          <div className="p-4 m-2 flex flex-col justify-center max-h-screen items-center">Geolocation tidak diterapkan</div>
        </div>
        <Navigation />
      </>
    );
  }

  // Kondisi: Masih memuat lokasi
  if (!coords) {
    return (
      <>
        <div className="p-4 text-center">Sedang mengambil lokasi...</div>
        <Navigation />
      </>
    );
  }

  // Jika semua OK, tampilkan profile
  return (
    <>
      <div className="mb-4">
        <div className="w-full p-4 bg-gray-100 mb-6 dark:bg-gray-700 justify-center items-center font-bold dark:border-gray-600">Profile</div>
        <div className="p-4 m-2 flex flex-col justify-center items-center">
          <Image width={120} height={120} priority className="rounded-full border-2" src="/assets/image/mrbean.jpg" alt="profile" />
        </div>
        <div className="p-4 m-4">
          {/* Email */}
          <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Email
          </label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              {/* Email icon */}
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input type="text" value="email@gmail.com" disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ps-10 p-2.5 block w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>

          {/* Username */}
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <div className="flex mb-4">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input type="text" value="user@gmail.com" disabled className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 text-sm flex-1 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>

          {/* Lokasi */}
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Longitude</label>
          <input type="text" value={coords.longitude} disabled className="mb-4 bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Latitude</label>
          <input type="text" value={coords.latitude} disabled className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        </div>
      </div>
      <Navigation />
    </>
  );
}
