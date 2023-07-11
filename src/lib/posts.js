import path from "path";
import fs from "fs/promises";

const POSTS_DIR = path.join(process.cwd(), "src/posts");

export async function getPostList() {
  return await Promise.all(
    (await fs.readdir(POSTS_DIR)).reverse().map(async (file) => {
      const { default: Post, meta } = await import(`@/posts/${file}`);
      const { mtime } = await fs.stat(path.join(POSTS_DIR, file));
      const [name, _] = file.split(".");
      const [date, slug] = [name.substring(0, 10), name.substring(11)];
      const [year, month, day] = date.split("-");
      return {
        dateCreated: new Date(date),
        dateModified: mtime,
        year,
        month,
        day,
        slug,
        url: `/${date.replaceAll("-", "/")}/${slug}`,
        meta,
        Post,
      };
    })
  );
}
