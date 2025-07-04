export function Checkbox({ ...props }) {
  return <input type="checkbox" className="mr-2" {...props} />;
}

export function CheckboxField({ children }) {
  return <label className="flex items-center">{children}</label>;
}
