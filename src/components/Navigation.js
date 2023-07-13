"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

const activeClasses = "font-bold border-b-4 border-b-slate-300";

export default function Navigation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  return (
    <nav className="border-t border-t-slate-300 mt-5 md:mt-10 py-5">
      <div className="md:max-w-screen-md mx-auto">
        <Link
          href="/"
          className={`mr-6 hover:text-zinc-800 ${
            pathname !== "/archive/" && pathname !== "/contact/"
              ? activeClasses
              : ""
          }`}
        >
          Blog
        </Link>
        <Link
          href="/archive"
          className={`mr-6 hover:text-zinc-800  ${
            pathname === "/archive/" ? activeClasses : ""
          }`}
        >
          Archive
        </Link>
        <Link
          href="/contact"
          className={`mr-6 hover:text-zinc-800  ${
            pathname === "/contact/" ? activeClasses : ""
          }`}
        >
          Contact
        </Link>
        <form action="/search" className="mt-5 md:-mt-1 md:float-right">
          <input
            type="text"
            name="q"
            placeholder="Search for posts"
            aria-label="Search for posts"
            className="border border-slate-300 border-r-0 rounded-md rounded-r-none p-1"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
          />
          <button
            type="submit"
            className="px-4 py-1 border border-l-0 border-slate-500 rounded-md rounded-l-none bg-slate-500 text-white"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
