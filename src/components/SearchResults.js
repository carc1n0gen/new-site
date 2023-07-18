"use client";

import { useSearchParams } from "next/navigation";
import Article from "@/components/Article";

export default function SearchResults({ posts }) {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const filteredPosts = posts.filter(
    (post) =>
      q !== "" && post.meta.title.toLowerCase().includes(q.toLowerCase())
  );

  if (filteredPosts.length === 0) {
    return (
      <section className="mt-6 md:p-6 bg-white md:border border-zinc-300">
        <p>There is nothing here.</p>
      </section>
    );
  }

  return filteredPosts.map((post) => (
    <Article key={post.url} post={post} isPreview />
  ));
}
