import Navigation from "@/app/components/menu-items/navigation-user";
export default function Dashboard() {
  return (
    <>
      <div className="mb-4">
        <div className="w-full p-4 bg-gray-100 mb-6 dark:bg-gray-700 justify-center items-center font-bold dark:border-gray-600">Dashboard User</div>
        <Navigation />
      </div>
    </>
  );
}
