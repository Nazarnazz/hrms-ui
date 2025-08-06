import Link from "next/link";

export function Breadcrumb({ children }) {
  return (
    <div className="py-1 full-w text-[11px] mb-2 bg-[#e1ecf5] dark:bg-gray-500 font-light rounded-full">
      <span className="ps-6">
        <Link href="/admin/dashboard/" className="hover:text-blue-500">
          Home
        </Link>{" "}
        {children}
      </span>
    </div>
  );
}
