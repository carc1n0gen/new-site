import { Suspense } from "react";

import Card from "@/components/Card";
import SearchResults from "@/components/client/SearchResults";
import { getPostList } from "@/lib/posts";

export const metadata = {
  title: "Search - Carson's Blog",
};

export default async function Search() {
  const posts = await getPostList();
  return (
    <Suspense
      fallback={
        <Card as="section">
          <p>There is nothing here.</p>
        </Card>
      }
    >
      <SearchResults
        // Cannot pass functions (components are functions) to client
        // components so we pull out Post, and pass along ...rest
        posts={posts.map(({ Post, ...rest }) => ({
          ...rest,
        }))}
      />
    </Suspense>
  );
}
