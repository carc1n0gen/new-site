"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const activeClasses = "font-bold border-b-4";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="border-t border-t-zinc-300 mt-5 md:mt-10 py-5">
      <div className="md:max-w-screen-md mx-auto">
        <Link
          href="/"
          className={`mr-6 hover:text-zinc-800 ${
            pathname !== "/archive" && pathname !== "/contact"
              ? activeClasses
              : ""
          }`}
        >
          Blog
        </Link>
        <Link
          href="/archive"
          className={`mr-6 hover:text-zinc-800  ${
            pathname === "/archive" ? activeClasses : ""
          }`}
        >
          Archive
        </Link>
        <Link
          href="/contact"
          className={`mr-6 hover:text-zinc-800  ${
            pathname === "/contact" ? activeClasses : ""
          }`}
        >
          Contact
        </Link>
        <form action="/search" className="mt-5 md:-mt-1 md:float-right">
          <input
            type="text"
            placeholder="Search for posts"
            className="border border-r-0 rounded-md rounded-r-none p-1"
          />
          <button
            type="submit"
            className="px-4 py-1 border border-l-0 border-zinc-500 rounded-md rounded-l-none bg-zinc-500 text-white"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
