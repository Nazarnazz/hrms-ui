import Navigation from "@/app/components/menu-items/navigation-user";

export default function Pengaturan() {
  return (
    <>
      <div className="mb-4">
        <div className="w-full p-4 bg-[#77A4C4] dark:bg-[#567f9f] justify-center items-center font-bold dark:border-gray-600">
          <div className="flex gap-1">
            <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
              />
            </svg>
            <div className="flex justify-center text-white">Ubah Password</div>
          </div>
        </div>
        <div className="p-4 m-4">
          <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password Lama
          </label>
          <div className="relative mb-6">
            <input
              type="password"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="*****"
            />
          </div>

          <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password Baru
          </label>
          <div className="relative mb-6">
            <input
              type="password"
              id="input-group-2"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="*****"
            />
          </div>
          <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Konfirmasi Password Baru
          </label>
          <div className="relative mb-6">
            <input
              type="password"
              id="input-group-3"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="*****"
            />
          </div>
          <div className="relative flex justify-center mb-6">
            <button className="transition-colors duration-500 py-2.5 px-4 bg-[#567f9f]  rounded-full font-bold hover:bg-blue-800 text-white m-2">Submit</button>
          </div>
        </div>
      </div>
      <Navigation />
    </>
  );
}
