import Link from "next/link";

import Card from "./Card";
import DisqusComments from "./client/DisqusComments";

export default function Article({ post, isPreview }) {
  return (
    <Card as="article">
      <header>
        <Link href={post.url}>
          <h2 className="text-3xl font-bold mb-2">{post.meta.title}</h2>
        </Link>
        <p className="mb-4 text-sm text-zinc-400">
          posted by {post.meta.author} ·{" "}
          {post.dateCreated.toLocaleString("default", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </header>
      <section>
        {isPreview ? (
          <p className="mb-4 md:mb-0">
            {post.meta.description}{" "}
            <Link href={post.url} className="font-bold underline">
              Read more&hellip;
            </Link>
          </p>
        ) : (
          <post.Post />
        )}
      </section>
      {!isPreview && (
        <footer className="mt-6">
          <DisqusComments title={post.meta.title} postUrl={post.url} />
        </footer>
      )}
    </Card>
  );
}
