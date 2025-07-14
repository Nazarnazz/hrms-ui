import Navigation from "@/app/components/menu-items/navigation-user";

export default function Pengaturan() {
  return (
    <>
      <div className="mb-4">
        <div className="w-full p-4 bg-gray-100 mb-6 dark:bg-gray-700 justify-center items-center font-bold dark:border-gray-600">Pengaturan Akun</div>
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
        </div>
      </div>
      <Navigation />
    </>
  );
}
