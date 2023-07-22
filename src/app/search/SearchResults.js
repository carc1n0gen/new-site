"use client";

import { useSearchParams } from "next/navigation";

import Article from "@/components/Article";
import Card from "@/components/Card";

export default function SearchResults({ posts }) {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const filteredPosts = posts.filter(
    (post) =>
      q !== "" && post.meta.title.toLowerCase().includes(q.toLowerCase()),
  );

  if (filteredPosts.length === 0) {
    return (
      <Card as="section">
        <p>There is nothing here.</p>
      </Card>
    );
  }

  return filteredPosts.map((post) => (
    <Article key={post.url} post={post} isPreview />
  ));
}
