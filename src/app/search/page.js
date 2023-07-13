import Article from "@/components/Article";
import { getPostList } from "@/lib/posts";

export default async function Search({ searchParams: { q } }) {
  const posts = await getPostList();
  const filteredPosts = posts.filter(
    (post) =>
      q !== "" && post.meta.title.toLowerCase().includes(q.toLowerCase())
  );

  if (filteredPosts.length === 0) {
    return (
      <section className="mt-6 md:p-6 bg-white md:border border-slate-300">
        <p>There is nothing here.</p>
      </section>
    );
  }

  return filteredPosts.map((post) => <Article post={post} isPreview />);
}
