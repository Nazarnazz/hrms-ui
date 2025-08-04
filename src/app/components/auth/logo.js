import Image from "next/image";
export function Logo({ className }) {
  return (
    <div className={` ${className}`}>
      <Image priority={true} width={125} height={125} src="/assets/image/wpr-logo-blue.png" alt="wpr" className="px-2 sm:px-0 sm:py-4 py-5 dark:hidden" />
      <Image priority={true} width={125} height={125} src="/assets/image/wpr-logo-white.png" alt="wpr" className="px-2 sm:px-0 sm:py-4 py-5 hidden dark:block" />
    </div>
  );
}
