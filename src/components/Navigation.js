"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaRss } from "react-icons/fa";

const activeClasses =
  "font-bold border-b-4 border-b-zinc-300 dark:border-b-zinc-600";

export default function Navigation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
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
        <a href="/feed.xml" target="_blank">
          <FaRss className="inline -mt-1" />
        </a>
        <form action="/search" className="mt-5 md:-mt-1 md:float-right">
          <input
            type="text"
            name="q"
            placeholder="Search for posts"
            aria-label="Search for posts"
            className="border dark:border-zinc-500 border-r-0 rounded-md rounded-r-none p-1 bg-zinc-50 dark:bg-zinc-700"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
          />
          <button
            type="submit"
            className="px-4 py-1 border border-l-0 border-blue-500 dark:border-blue-400 rounded-md rounded-l-none bg-blue-500 dark:bg-blue-500 text-blue-50"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
