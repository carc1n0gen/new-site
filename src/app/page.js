import Heading from "@/components/Heading";
import { getPostList } from "@/app/lib/posts";
import Link from "next/link";

export default async function () {
  const posts = await getPostList();
  return (
    <>
      <Heading as="h1">Blog</Heading>

      {posts.map((post) => (
        <article key={post.url}>
          <Link href={post.url}>
            <Heading as="h2">{post.meta.title}</Heading>
          </Link>
          <p>{post.meta.description}</p>
        </article>
      ))}
    </>
  );
}
