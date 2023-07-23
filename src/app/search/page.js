import SearchResults from "@/components/client/SearchResults";
import { getPostList } from "@/lib/posts";

export const metadata = {
  title: "Search - Carson's Blog",
};

export default async function Search() {
  const posts = await getPostList();
  return (
    <SearchResults
      // Cannot pass functions (components are functions) to client
      // components so we pull out Post, and pass along ...rest
      posts={posts.map(({ Post, ...rest }) => ({
        ...rest,
      }))}
    />
  );
}
