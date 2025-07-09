import Navigation from "@/app/components/menu-items/navigation-user";
// import Link from "next/link";
export default function Riwayat() {
  return (
    <>
      <div className="mb-4">
        <div className="w-full p-4 bg-gray-100 mb-6 dark:bg-gray-700 justify-center items-center font-bold dark:border-gray-600">Riwayat Absensi User</div>
        <div className="px-4">
          <div className="my-4 flex">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9h13a5 5 0 0 1 0 10H7M3 9l4-4M3 9l4 4" />
            </svg>
            <span className="ml-1">return</span>
          </div>
          <div className="p-4 rounded-lg bg-gray-300 dark:bg-gray-600 m-4">
            <div className="grid grid-cols-2">
              <span className="font-bold text-lg">Nazar</span>
              <span className="text-md font-serif">100%</span>
            </div>
          </div>
        </div>
        <Navigation />
      </div>
    </>
  );
}
