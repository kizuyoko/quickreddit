import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-4">
        <Image 
          src="/redditlogo.svg"
          alt="Reddit logo"
          width={40}
          height={40}
          priority
        />
        <h1 className="text-xl">
          QuickReddit
        </h1>
      </div>
    </Link>
  );
};  