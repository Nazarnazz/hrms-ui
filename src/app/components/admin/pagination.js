export function Pagination({ setCurrentPage, currentPage, totalPages }) {
  return (
    <div className="flex justify-center mt-4 gap-2">
      {/* Prev */}
      <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-3 py-1 bg-blue-400 dark:bg-gray-600 not-disabled:hover:bg-blue-500 text-white rounded disabled:opacity-50">
        Prev
      </button>

      {/* Pages */}
      {(() => {
        const maxVisiblePages = 5;
        let startPage = Math.max(currentPage - 1, 1);
        let endPage = startPage + maxVisiblePages - 1;

        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = Math.max(endPage - maxVisiblePages + 1, 1);
        }

        const pages = [];
        for (let i = startPage; i <= endPage; i++) {
          pages.push(
            <button key={i} onClick={() => setCurrentPage(i)} className={`px-3 py-1 rounded ${currentPage === i ? "bg-blue-700 text-white" : "bg-blue-500 dark:bg-gray-600 hover:bg-blue-600 text-white"}`}>
              {i}
            </button>
          );
        }

        return pages;
      })()}

      {/* Next */}
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-blue-400 dark:bg-gray-600 text-white not-disabled:hover:bg-blue-500 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
