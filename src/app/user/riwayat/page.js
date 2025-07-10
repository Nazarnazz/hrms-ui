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
          <div className="my-4">
            <div className="flex justify-content gap-4 justify-center">
              <div className="flex bg-blue-400 py-3 pr-6 pl-4 rounded-lg text-sm">
                <svg class="w-4 h-4 mr-1 mt-0.5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                  />
                </svg>
                Filter
              </div>
              <div className="flex bg-gray-200 py-3 px-6 rounded-lg text-sm text-gray-600">
                Pilih Tanggal
                <svg className="w-3 h-3 ms-1 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 mb-2 gap-3 mx-4 p-4 text-[12px] grid grid-cols-3 justify-content">
            <div className="text-gray-700">20/07/2025</div>
            <div className="flex justify-center bg-green-500 text-white rounded-lg">Hadir</div>
            <div className="flex justify-end text-blue-600">Detail</div>
          </div>
          <div className="bg-gray-100 mb-2 gap-3 mx-4 p-4 text-[12px] grid grid-cols-3 justify-content">
            <div className="text-gray-700">19/07/2025</div>
            <div className="flex justify-center bg-yellow-500 text-white rounded-lg">
              <svg class="w-5 h-5 text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd" />
              </svg>
            </div>
            <div className="flex justify-end text-blue-600">Detail</div>
          </div>
          <div className="bg-gray-100 mb-2 gap-3 mx-4 p-4 text-[12px] grid grid-cols-3 justify-content">
            <div className="text-gray-700">18/07/2025</div>
            <div className="flex justify-center bg-green-500 text-white rounded-lg">Hadir</div>
            <div className="flex justify-end text-blue-600">Detail</div>
          </div>
          <div className="bg-gray-100 mb-2 gap-3 mx-4 p-4 text-[12px] grid grid-cols-3 justify-content">
            <div className="text-gray-700">17/07/2025</div>
            <div className="flex justify-center bg-green-500 text-white rounded-lg">Hadir</div>
            <div className="flex justify-end text-blue-600">Detail</div>
          </div>
          <div className="bg-gray-100 mb-2 gap-3 mx-4 p-4 text-[12px] grid grid-cols-3 justify-content">
            <div className="text-gray-700">16/07/2025</div>
            <div className="flex justify-center bg-red-700 text-white rounded-lg">Nihil</div>
            <div className="flex justify-end text-blue-600">Detail</div>
          </div>
        </div>
        <Navigation />
      </div>
    </>
  );
}
