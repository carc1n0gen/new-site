import GroupedPosts from "@/components/GroupedPosts";
import { getPostList } from "@/lib/posts";

export default async function Archive() {
  const posts = await getPostList();

  return <GroupedPosts posts={posts} />;
}
