import Link from "next/link";
import { useMemo } from "react";

export const meta = {
  title: "Archive | Carson's Blog",
};

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
      <div className="mt-6 md:p-6 bg-white dark:bg-black md:border border-slate-300 dark:border-slate-600">
        <p>There is nothing here.</p>
      </div>
    );
  }

  return Object.keys(groupedPosts)
    .reverse()
    .map((group) => (
      <div
        key={group}
        className="mt-6 md:p-6 bg-white dark:bg-black md:border border-slate-300 dark:border-slate-600"
      >
        <h2 className="text-3xl font-bold mb-4">{group}</h2>
        <ul className="list-disc list-inside pl-4">
          {groupedPosts[group].map((post) => (
            <li key={post.key}>
              <Link href={post.url} className="font-bold">
                {post.meta.title}
              </Link>
              <span className="ml-2 text-sm text-slate-500">
                {post.dateCreated.toLocaleString("default", {
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </li>
          ))}
        </ul>
      </div>
    ));
}
