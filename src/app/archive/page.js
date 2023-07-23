import GroupedPosts from "@/components/GroupedPosts";
import { getPostList } from "@/lib/posts";

export const metadata = {
  title: "Archive - Carson's Blog",
};

export default async function Archive() {
  const posts = await getPostList();
  return <GroupedPosts posts={posts} />;
}
