import path from "path";
import fs from "fs/promises";

const POSTS_DIR = path.join(process.cwd(), "src/posts");

export async function getPostList() {
  return await Promise.all(
    (await fs.readdir(POSTS_DIR)).reverse().map(async (file) => {
      const { default: Post, meta } = await import(`@/posts/${file}`);
      const [name, _] = file.split(".");
      return {
        url: `/${name.replaceAll("-", "/")}`,
        meta,
        Post,
      };
    })
  );
}
