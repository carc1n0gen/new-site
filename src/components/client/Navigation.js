"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import { Suspense } from "react";

// import SearchBoxFallback from "../SearchBoxFallback";
// import SearchBox from "./SearchBox";

const activeClasses =
  "font-bold border-b border-b-2";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="mt-5 md:mt-10 py-5">
      <div className="">
        <Link
          href="/"
          className={`mx-3 hover:text-zinc-100 ${
            pathname !== "/archive/" && pathname !== "/contact/"
              ? activeClasses
              : ""
          }`}
        >
          Blog
        </Link>
        <Link
          href="/archive"
          className={`mx-3 hover:text-zinc-100 ${
            pathname === "/archive/" ? activeClasses : ""
          }`}
        >
          Archive
        </Link>
        <Link
          href="/contact"
          className={`ml-3 hover:text-zinc-100 ${
            pathname === "/contact/" ? activeClasses : ""
          }`}
        >
          Contact
        </Link>
        {/* <Suspense fallback={<SearchBoxFallback />}>
          <SearchBox />
        </Suspense> */}
      </div>
    </nav>
  );
}
