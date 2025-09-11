export function SearchBar({ searchTerm, setSearchTerm, onToggleVisible, onToggleFilter, onRefresh, onExport, onPrint, placeholder, className = "", ...props }) {
  return (
    <div className={`grid grid-cols-10 md:grid-cols-20 lg:grid-cols-25 ${searchTerm && "mb-15"}`}>
      <div className="col-span-5 md:col-span-15 lg:col-span-20">
        <div className={`relative ${className}`} {...props}>
          <div className="absolute inset-y-0 start-0 flex items-center ps-3">
            <svg className="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <form>
            <input
              type="search"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`block w-full p-2 ps-10 mt-2 text-sm text-gray-900 border border-gray-300 rounded-l-lg bg-gray-50 focus:ring-blue-500 focus:dark:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:dark:border-blue-500 ${className}`}
              placeholder={placeholder}
            />
          </form>

          {searchTerm && (
            <ul className="absolute z-10 w-full dark:bg-gray-800 border dark:border-gray-500 rounded-sm mt-1 max-h-40 overflow-y-auto shadow-lg">
              <li className="px-3 py-2 cursor-pointer dark:border-b bg-red-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-500 text-xs hover:bg-red-100">
                <span className="px-2 ps-2 mr-5 rounded-lg py-1 dark:bg-red-50 text-red-600 border font-bold border-red-600">#id</span>
                {searchTerm}
              </li>
              <li className="px-3 py-2 cursor-pointer dark:border-b bg-green-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-500 text-xs hover:bg-green-100">
                <span className="px-2 ps-2 mr-5 rounded-lg py-1 dark:bg-green-50 text-green-600 border font-bold border-green-600">#nama</span>
                {searchTerm}
              </li>
              <li className="px-3 py-2 cursor-pointer bg-blue-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-500 text-xs hover:bg-blue-100">
                <span className="px-2 ps-2 mr-5 rounded-lg py-1 dark:bg-blue-50 text-blue-600 border font-bold dark:border-blue-600">#department</span>
                {searchTerm}
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* filter */}
      <div onClick={onToggleVisible} className="bg-gray-50 border hover:bg-gray-300 group dark:bg-gray-700 dark:border-gray-600 border-gray-300 mt-2 flex justify-center items-center">
        <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-800 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4" />
        </svg>
      </div>

      {/* quicksort */}
      <div onClick={onToggleFilter} className="bg-gray-50 border hover:bg-gray-300 group dark:bg-gray-700 dark:border-gray-600 border-gray-300 mt-2 flex justify-center items-center">
        <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-800 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
          />
        </svg>
      </div>

      {/* refresh */}
      <div onClick={onRefresh} className="bg-gray-50 border hover:bg-gray-300 group dark:bg-gray-700 dark:border-gray-600 border-gray-300 mt-2 flex justify-center items-center">
        <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-800 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4" />
        </svg>
      </div>

      {/* excel export */}
      <div onClick={onExport} className="bg-gray-50 border hover:bg-gray-300 group dark:bg-gray-700 dark:border-gray-600 border-gray-300 mt-2 flex justify-center items-center">
        <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-800 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m2.665 9H6.647A1.647 1.647 0 0 1 5 15.353v-1.706A1.647 1.647 0 0 1 6.647 12h1.018M16 12l1.443 4.773L19 12m-6.057-.152-.943-.02a1.34 1.34 0 0 0-1.359 1.22 1.32 1.32 0 0 0 1.172 1.421l.536.059a1.273 1.273 0 0 1 1.226 1.718c-.2.571-.636.754-1.337.754h-1.13"
          />
        </svg>
      </div>

      {/* print */}
      <div onClick={onPrint} className="bg-gray-50 border hover:bg-gray-300 group dark:bg-gray-700 dark:border-gray-600 border-gray-300 mt-2 flex justify-center items-center">
        <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-800 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z"
          />
        </svg>
      </div>
    </div>
  );
}

export function SearchBarNoPrint({ searchTerm, setSearchTerm, onToggleVisible, onToggleFilter, onRefresh, placeholder, className = "", ...props }) {
  return (
    <div className={`grid grid-cols-10 md:grid-cols-20 lg:grid-cols-25 ${searchTerm && "mb-15"}`}>
      <div className="col-span-7 md:col-span-17 lg:col-span-22">
        <div className={`relative ${className}`} {...props}>
          <div className="absolute inset-y-0 start-0 flex items-center ps-3">
            <svg className="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <form>
            <input
              type="search"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`block w-full p-2 ps-10 mt-2 text-sm text-gray-900 border border-gray-300 rounded-l-lg bg-gray-50 focus:ring-blue-500 focus:dark:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:dark:border-blue-500 ${className}`}
              placeholder={placeholder}
            />
          </form>
          {searchTerm && (
            <ul className="absolute z-10 w-full dark:bg-gray-800 border dark:border-gray-500 rounded-sm mt-1 max-h-40 overflow-y-auto shadow-lg">
              <li className="px-3 py-2 cursor-pointer dark:border-b bg-red-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-500 text-xs hover:bg-red-100">
                <span className="px-2 ps-2 mr-5 rounded-lg py-1 dark:bg-red-50 text-red-600 border font-bold border-red-600">#id</span>
                {searchTerm}
              </li>
              <li className="px-3 py-2 cursor-pointer dark:border-b bg-green-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-500 text-xs hover:bg-green-100">
                <span className="px-2 ps-2 mr-5 rounded-lg py-1 dark:bg-green-50 text-green-600 border font-bold border-green-600">#nama</span>
                {searchTerm}
              </li>
              <li className="px-3 py-2 cursor-pointer bg-blue-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-500 text-xs hover:bg-blue-100">
                <span className="px-2 ps-2 mr-5 rounded-lg py-1 dark:bg-blue-50 text-blue-600 border font-bold dark:border-blue-600">#department</span>
                {searchTerm}
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* filter */}
      <div onClick={onToggleVisible} className="bg-gray-50 border hover:bg-gray-300 group dark:bg-gray-700 dark:border-gray-600 border-gray-300 mt-2 flex justify-center items-center">
        <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-800 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4" />
        </svg>
      </div>

      {/* quicksort */}
      <div onClick={onToggleFilter} className="bg-gray-50 border hover:bg-gray-300 group dark:bg-gray-700 dark:border-gray-600 border-gray-300 mt-2 flex justify-center items-center">
        <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-800 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
          />
        </svg>
      </div>

      {/* refresh */}
      <div onClick={onRefresh} className="bg-gray-50 border hover:bg-gray-300 group dark:bg-gray-700 dark:border-gray-600 border-gray-300 mt-2 flex justify-center items-center">
        <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-800 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4" />
        </svg>
      </div>
    </div>
  );
}

export function SearchBarNoButton({ searchTerm, setSearchTerm, placeholder, className = "", ...props }) {
  return (
    <div className={`relative ${className}`} {...props}>
      <div className="absolute inset-y-0 start-0 flex items-center ps-3">
        <svg className="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
      <form>
        <input
          type="search"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`block w-full p-2 ps-10 mt-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:dark:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:dark:border-blue-500 ${className}`}
          placeholder={placeholder}
        />
      </form>
    </div>
  );
}
