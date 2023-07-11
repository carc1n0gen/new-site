// export const metadata = {
//   title: "Blog",
//   description: "Things and stuff",
// };

export async function generateMetadata({ params: { year, month, day, slug } }) {
  const { meta } = await import(`@/posts/${year}-${month}-${day}-${slug}.mdx`);
  return {
    title: `${meta.title} - Blog`,
    description: meta.description,
    keywords: meta.keywords,
  };
}

export default async function ({ params: { year, month, day, slug } }) {
  const { default: Post } = await import(
    `@/posts/${year}-${month}-${day}-${slug}.mdx`
  );
  return <Post />;
}
