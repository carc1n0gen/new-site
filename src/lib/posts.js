import fs from "fs/promises";
import path from "path";

const POSTS_DIR = path.join(process.cwd(), "src/posts");

export async function getSinglePost(year, month, day, slug) {
  const { default: Post, meta } = await import(
    `@/posts/${year}-${month}-${day}-${slug}.mdx`
  );
  // const { mtime } = await fs.stat(path.join(POSTS_DIR, file));

  return {
    dateCreated: new Date(`${year}-${month}-${day}`),
    // dateModified: mtime,
    year,
    month,
    day,
    slug,
    url: `/${year}/${month}/${day}/${slug}`,
    meta,
    Post,
  };
}

export async function getPostList() {
  return await Promise.all(
    (await fs.readdir(POSTS_DIR)).reverse().map(async (file) => {
      const [name, _] = file.split(".");
      const [date, slug] = [name.substring(0, 10), name.substring(11)];
      const [year, month, day] = date.split("-");
      return getSinglePost(year, month, day, slug);
    }),
  );
}

export async function getRecentPosts() {
  return (await getPostList()).slice(0, 5);
}
