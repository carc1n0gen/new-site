import Link from "next/link";
import { useMemo } from "react";

import Card from "@/components/Card";

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
      <Card>
        <p>There is nothing here.</p>
      </Card>
    );
  }

  return Object.keys(groupedPosts)
    .reverse()
    .map((group) => (
      <Card key={group}>
        <h2 className="text-3xl font-bold mb-4">{group}</h2>
        <ul className="list-disc list-inside pl-4">
          {groupedPosts[group].map((post) => (
            <li key={post.url}>
              <Link href={post.url} className="font-bold">
                {post.meta.title}
              </Link>
              <span className="ml-2 text-sm text-zinc-500">
                {post.dateCreated.toLocaleString("default", {
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </li>
          ))}
        </ul>
      </Card>
    ));
}
