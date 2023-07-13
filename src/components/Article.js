import Link from "next/link";

export default function Article({ post, isPreview }) {
  return (
    <article className="mt-6 md:p-6 bg-white md:border border-slate-300">
      <header>
        <Link href={post.url}>
          <h2 className="text-3xl font-bold mb-2">{post.meta.title}</h2>
        </Link>
        <p className="mb-4 text-zinc-400">
          posted by {post.meta.author} · {post.dateCreated.toDateString()}
        </p>
      </header>
      <section>
        {isPreview ? (
          <p className="mb-4 md:mb-0">
            {post.meta.description}{" "}
            <Link href={post.url} className="font-bold">
              Read more&hellip;
            </Link>
          </p>
        ) : (
          <post.Post />
        )}
      </section>
    </article>
  );
}
