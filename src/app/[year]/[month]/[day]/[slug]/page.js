import Article from "@/components/Article";
import { getPostList, getSingleDraft, getSinglePost } from "@/lib/posts";

export async function generateMetadata({ params: { year, month, day, slug } }) {
  let meta;

  if (process.env.WITH_DRAFTS === "true" && slug.startsWith("draft")) {
    meta = (await getSingleDraft(slug)).meta;
  } else {
    meta = (await getSinglePost(year, month, day, slug)).meta;
  }

  return {
    title: `${meta.title} - Carson's Blog`,
    description: meta.description,
    keywords: meta.keywords,
  };
}

export default async function ShowPost({ params: { year, month, day, slug } }) {
  let post;

  if (process.env.WITH_DRAFTS === "true" && slug.startsWith("draft")) {
    post = await getSingleDraft(slug);
  } else {
    post = await getSinglePost(year, month, day, slug);
  }

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
