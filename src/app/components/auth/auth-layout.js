export function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/assets/image/background-light.jpg')] dark:bg-[url('/assets/image/background-dark.jpg')] p-4">
      <div className="bg-white dark:bg-zinc-800 p-6 my-4 rounded-lg shadow-md w-full max-w-md">{children}</div>
    </div>
  );
}
