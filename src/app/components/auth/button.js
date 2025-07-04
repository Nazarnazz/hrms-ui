export function Button({ children, className = "", ...props }) {
  return (
    <button className={`bg-yellow-500 dark:bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded ${className}`} {...props}>
      {children}
    </button>
  );
}
