export function Button({ children, className = "", ...props }) {
  return (
    <button className={`bg-blue-700 dark:bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded ${className}`} {...props}>
      {children}
    </button>
  );
}
