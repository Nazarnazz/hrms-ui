export function Pagination({ setCurrentPage, currentPage, totalPages }) {
  return (
    <div className="flex justify-center mt-4 gap-2">
      <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-3 py-1 bg-gray-400 dark:bg-gray-600 hover:bg-gray-700 text-white rounded disabled:opacity-50">
        Prev
      </button>

      {Array.from({ length: totalPages }).map((_, i) => (
        <button key={i} onClick={() => setCurrentPage(i + 1)} className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-700 text-white" : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-700 text-white"}`}>
          {i + 1}
        </button>
      ))}

      <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-3 py-1 bg-gray-400 dark:bg-gray-600 text-white hover:bg-gray-700 rounded disabled:opacity-50">
        Next
      </button>
    </div>
  );
}
