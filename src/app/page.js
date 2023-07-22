import Link from "next/link";

import Article from "@/components/Article";
import Card from "@/components/Card";
import { getRecentPosts } from "@/lib/posts";

export default async function Blog() {
  const posts = await getRecentPosts();
  return (
    <>
      {posts.map((post) => (
        <Article key={post.url} post={post} isPreview />
      ))}
      <Card className="text-center">
        <Link href="/archive" className="font-bold text-2xl center">
          All posts 👉
        </Link>
      </Card>
    </>
  );
}
