export function Checkbox({ ...props }) {
  return (
    <input
      id="yellow-checkbox"
      type="checkbox"
      className="ml-3 w-4 h-4 accent-yellow-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      {...props}
    />
  );
}

export function CheckboxField({ children }) {
  return <label className="flex items-center">{children}</label>;
}
