import Link from "next/link";
import Article from "@/components/Article";
import { getRecentPosts } from "@/lib/posts";

export default async function Blog() {
  const posts = await getRecentPosts();
  return (
    <>
      {posts.map((post) => (
        <Article key={post.url} post={post} isPreview />
      ))}
      <div className="mt-6 md:p-6 bg-white md:border border-slate-300 text-center">
        <Link href="/archive" className="font-bold text-2xl">
          All posts 👉
        </Link>
      </div>
    </>
  );
}
