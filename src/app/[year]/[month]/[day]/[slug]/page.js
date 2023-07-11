import { getPostList } from "@/lib/posts";

export async function generateMetadata({ params: { year, month, day, slug } }) {
  const { meta } = await import(`@/posts/${year}-${month}-${day}-${slug}.mdx`);
  return {
    title: `${meta.title} - Carson's Blog`,
    description: meta.description,
    keywords: meta.keywords,
  };
}

export default async function ShowPost({ params: { year, month, day, slug } }) {
  const { default: Post, meta } = await import(
    `@/posts/${year}-${month}-${day}-${slug}.mdx`
  );
  return (
    <article className="mt-6">
      <header>
        <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
        <p className="mb-4 text-zinc-400">
          posted by {meta.author} ·{" "}
          {new Date(`${year}-${month}-${day}`).toDateString()}
        </p>
      </header>
      <section>
        <Post />
      </section>
      {/* <footer>
        
      </footer> */}
    </article>
  );
}

export async function generateStaticParams() {
  return await Promise.all(
    (
      await getPostList()
    ).map((post) => ({
      year: post.year,
      month: post.month,
      day: post.day,
      slug: post.slug,
    }))
  );
}
