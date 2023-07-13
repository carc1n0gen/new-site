import Article from "@/components/Article";
import { getPostList } from "@/lib/posts";

export default async function Blog() {
  const posts = await getPostList();
  return posts.map((post) => <Article post={post} isPreview />);
}
