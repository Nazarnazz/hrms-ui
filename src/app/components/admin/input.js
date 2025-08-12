export function Input({ type, name, id, required, className, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={`bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:border-gray-600 block w-full p-1.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${className}`}
      placeholder={placeholder}
      required={required}
    />
  );
}

export function Label({ htmlFor, children, className }) {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-900 dark:text-white ${className}`}>
      {children}
    </label>
  );
}
