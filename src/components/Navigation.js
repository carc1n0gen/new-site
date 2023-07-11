"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const activeClasses = "font-bold border-b-4";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="px-2 py-4 w-full flex justify-center">
      <Link
        href="/"
        className={`mx-3 hover:text-zinc-800 ${
          pathname !== "/archive" && pathname !== "/contact"
            ? activeClasses
            : ""
        }`}
      >
        Blog
      </Link>
      <Link
        href="/archive"
        className={`mx-3 hover:text-zinc-800  ${
          pathname === "/archive" ? activeClasses : ""
        }`}
      >
        Archive
      </Link>
      <Link
        href="/contact"
        className={`mx-3 hover:text-zinc-800  ${
          pathname === "/contact" ? activeClasses : ""
        }`}
      >
        Contact
      </Link>
    </nav>
  );
}
