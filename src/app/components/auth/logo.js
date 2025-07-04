import Image from "next/image";
export function Logo({ className }) {
  return (
    <div className={` ${className}`}>
      <Image width={125} height={125} src="/assets/image/mugiwara-logo.png" alt="mugiwara" className="hidden dark:block" />
      <Image width={125} height={125} src="/assets/image/mugiwara.png" alt="mugiwara" className="block dark:hidden" />
    </div>
  );
}
