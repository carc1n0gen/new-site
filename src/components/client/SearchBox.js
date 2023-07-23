"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  return (
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
  );
}
