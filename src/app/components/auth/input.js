export function Input({ className = "", ...props }) {
  return <input {...props} className={`w-full px-3 py-2 border focus:outline-none focus:ring focus:border-blue-600 ${className}`} />;
}
