import { getPostList } from "@/lib/posts";

import GroupedPosts from "./GroupedPosts";

export const metadata = {
  title: "Archive - Carson's Blog",
};

export default async function Archive() {
  const posts = await getPostList();
  return <GroupedPosts posts={posts} />;
}
