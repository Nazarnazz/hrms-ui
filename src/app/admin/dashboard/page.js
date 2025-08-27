"use client";
// import Navbar from "@/app/components/menu-items/navbar";
// import Sidebar from "@/app/components/menu-items/sidebar";
import Layout from "@/app/components/menu-items/layout";

export default function Dashboard() {
  return (
    <Layout>
      {/* <Navbar /> */}
      {/* <Sidebar /> */}

      <div className="p-4">
        <div className="p-4 rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-700 mt-14">
          <div className="p-3">
            <div className="flex gap-3">
              <div className="bg-gray-400 rounded-lg p-3 flex flex-col items-center justify-center">
                <span className="text-xs">Employee</span>
                <span className="text-xs">660</span>
              </div>
              <div className="bg-gray-400 rounded-lg p-3 flex flex-col items-center justify-center">
                <span className="text-xs">Employee</span>
                <span className="text-xs">660</span>
              </div>
              <div className="bg-gray-400 rounded-lg p-3 flex flex-col items-center justify-center">
                <span className="text-xs">Employee</span>
                <span className="text-xs">660</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
