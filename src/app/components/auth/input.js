export function Input({ className = "", ...props }) {
  return <input {...props} className={`w-full px-3 py-2 border rounded-full focus:outline-none focus:ring focus:border-yellow-600 ${className}`} />;
}
