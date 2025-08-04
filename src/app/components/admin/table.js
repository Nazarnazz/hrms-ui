export function Table({ children, className }) {
  return <table className={`w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ${className}`}>{children}</table>;
}

export function TableHead({ children }) {
  return <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">{children}</thead>;
}

export function TableRow({ children }) {
  return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">{children}</tr>;
}

export function TableHeader({ children }) {
  return (
    <th className="px-4 py-4 font-bold text-gray-900 dark:text-white" scope="row">
      {children}
    </th>
  );
}

export function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

export function TableCell({ children, className }) {
  return <td className={`px-6 py-4 font-medium text-gray-800 dark:text-gray-300 ${className}`}>{children}</td>;
}
