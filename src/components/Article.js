import Link from "next/link";

import Button from "./Button";
import DisqusComments from "./client/DisqusComments";

export default function Article({ post, isPreview }) {
  return (
    <article className="mb-16">
      <header>
        <Link href={post.url}>
          <h2 className="text-4xl font-normal mb-0">{post.meta.title}</h2>
        </Link>
        <p className="ml-1 mb-4 text-sm">
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
          <>
            <p className="mb-4">
              {post.meta.description}{" "}
            </p>
            <Button as={Link} href={post.url}>Read more</Button>
          </>
        ) : (
          <post.Post />
        )}
      </section>
      {!isPreview && (
        <footer className="mt-6">
          <p className="mb-4 text-sm">
            Updated{" "}
            {post.dateModified.toLocaleString("default", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <DisqusComments title={post.meta.title} postUrl={post.url} />
        </footer>
      )}
    </article>
  );
}
