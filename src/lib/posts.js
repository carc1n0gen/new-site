import fs from "fs/promises";
import path from "path";

const POSTS_DIR = path.join(process.cwd(), "src/posts");
const DRAFTS_DIR = path.join(process.cwd(), "src/drafts");

export async function getSinglePost(year, month, day, slug) {
  const fileName = `${year}-${month}-${day}-${slug}.mdx`;
  const { mtime } = await fs.stat(path.join(POSTS_DIR, fileName));
  const { default: Post, meta } = await import(`@/posts/${fileName}`);

  return {
    dateCreated: new Date(`${year}-${month}-${day}`),
    dateModified: mtime,
    year,
    month,
    day,
    slug,
    url: `/${year}/${month}/${day}/${slug}`,
    meta,
    Post,
  };
}

export async function getSingleDraft(slug) {
  const fileName = `${slug}.mdx`;
  const { mtime } = await fs.stat(path.join(DRAFTS_DIR, fileName));
  const { default: Post, meta } = await import(`@/drafts/${fileName}`);
  const today = new Date();
  const year = today.toLocaleString("en-us", { year: "numeric" });
  const month = today.toLocaleString("en-us", { month: "2-digit" });
  const day = today.toLocaleString("en-us", { day: "2-digit" });

  return {
    dateCreated: today,
    dateModified: mtime,
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
  const posts = await Promise.all(
    (await fs.readdir(POSTS_DIR)).reverse().map(async (file) => {
      const [name, _] = file.split(".");
      const [date, slug] = [name.substring(0, 10), name.substring(11)];
      const [year, month, day] = date.split("-");
      return getSinglePost(year, month, day, slug);
    }),
  );

  if (process.env.WITH_DRAFTS === "true") {
    const drafts = await Promise.all(
      (await fs.readdir(DRAFTS_DIR)).reverse().map(async (file) => {
        const [slug, _] = file.split(".");
        console.log("******", slug);
        return getSingleDraft(slug);
      }),
    );

    return [...drafts, ...posts];
  }

  return posts;
}

export async function getRecentPosts() {
  return (await getPostList()).slice(0, 5);
}
