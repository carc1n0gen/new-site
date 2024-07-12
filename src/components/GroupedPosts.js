import Link from "next/link";
import { useMemo } from "react";

export default function GroupedPosts({ posts }) {
  const groupedPosts = useMemo(() => {
    const groups = {};

    for (const post of posts) {
      if (!groups[post.year]) {
        groups[post.year] = [];
      }

      groups[post.year].push(post);
    }

    return groups;
  }, [posts]);

  if (Object.keys(groupedPosts).length === 0) {
    return (
      <p>There is nothing here.</p>
    );
  }

  return Object.keys(groupedPosts)
    .reverse()
    .map((group) => (
      <section key={group} className="mb-16 last:mb-0">
        <h2 className="text-3xl">{group}</h2>
        <ul className="list-disc list-inside pl-4">
          {groupedPosts[group].map((post) => (
            <li key={post.url} className="my-2 last:mb-0">
              <Link href={post.url} className="">
                {post.meta.title}
              </Link>
              <span className="ml-2 text-sm text-zinc-400">
                {post.dateCreated.toLocaleString("default", {
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </li>
          ))}
        </ul>
      </section>
    ));
}
