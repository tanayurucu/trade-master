import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-1 hidden md:flex">
        <Image
          src="/trade-master-logo.svg"
          alt="Logo"
          height={30}
          width={30}
        />
        <p className={cn(
          "text-lg pb-1",
          headingFont.className,
          "my-auto"
        )}>
          Trade Master
        </p>
      </div>
    </Link>
  );
};
