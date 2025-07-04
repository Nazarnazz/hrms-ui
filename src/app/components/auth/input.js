export function Input({ className = "", ...props }) {
  return <input {...props} className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 ${className}`} />;
}
