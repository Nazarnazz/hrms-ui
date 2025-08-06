export function AuthLayout({ children }) {
  return (
    <div className="hidden sm:flex items-center justify-center sm:p-4">
      <div className="bg-white dark:bg-zinc-800 p-6 my-4 sm:rounded-lg shadow-md w-full max-w-md">{children}</div>
    </div>
  );
}
