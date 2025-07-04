import Link from "next/link";

export function Text({ children }) {
  return <p className="text-sm text-gray-600 dark:text-zinc-300">{children}</p>;
}

export function TextLink({ href, children }) {
  return (
    <Link href={href} className="text-yellow-600 hover:text-yellow-800 underline">
      {children}
    </Link>
  );
}

export function Strong({ children }) {
  return <strong>{children}</strong>;
}
