import Article from "@/components/Article";
import { getPostList, getSinglePost } from "@/lib/posts";

export async function generateMetadata({ params: { year, month, day, slug } }) {
  const { meta } = await getSinglePost(year, month, day, slug);
  return {
    title: `${meta.title} - Carson's Blog`,
    description: meta.description,
    keywords: meta.keywords,
  };
}

export default async function ShowPost({ params: { year, month, day, slug } }) {
  const post = await getSinglePost(year, month, day, slug);
  return <Article post={post} />;
}

export async function generateStaticParams() {
  return await Promise.all(
    (await getPostList()).map((post) => ({
      year: post.year,
      month: post.month,
      day: post.day,
      slug: post.slug,
    })),
  );
}
