"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

import SearchBox from "./SearchBox";
import SearchBoxFallback from "./SearchBoxFallback";

const activeClasses =
  "font-bold border-b-4 border-b-zinc-300 dark:border-b-zinc-600";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="border-t border-t-zinc-300 dark:border-t-zinc-600 mt-5 md:mt-10 py-5">
      <div className="md:max-w-screen-md mx-auto">
        <Link
          href="/"
          className={`mr-6 hover:text-zinc-400 dark:hover:text-zinc-200 ${
            pathname !== "/archive/" && pathname !== "/contact/"
              ? activeClasses
              : ""
          }`}
        >
          Blog
        </Link>
        <Link
          href="/archive"
          className={`mr-6 hover:text-zinc-400 dark:hover:text-zinc-200  ${
            pathname === "/archive/" ? activeClasses : ""
          }`}
        >
          Archive
        </Link>
        <Link
          href="/contact"
          className={`mr-6 hover:text-zinc-400 dark:hover:text-zinc-200  ${
            pathname === "/contact/" ? activeClasses : ""
          }`}
        >
          Contact
        </Link>
        <Suspense fallback={<SearchBoxFallback />}>
          <SearchBox />
        </Suspense>
      </div>
    </nav>
  );
}
