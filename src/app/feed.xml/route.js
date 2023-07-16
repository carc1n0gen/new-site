import { getPostList } from "@/lib/posts";
import { Feed } from "feed";

export async function GET() {
  const posts = await getPostList();
  const feed = new Feed({
    title: "Carson's Blog",
    description: "Somewhat coherent tutorials about web stuff and things.",
    id: "https://blog.carsonevans.ca",
    link: "https://blog.carsonevans.ca",
    language: "en",
    feedLinks: {
      atom: "https://blog.carsonevans.ca/feed",
    },
    author: {
      name: "Carson Evans",
      link: "https://blog.carsonevans.ca/contact",
    },
  });

  for (const post of posts) {
    feed.addItem({
      title: post.meta.title,
      id: post.url,
      link: post.url,
      description: post.meta.description,
      author: [
        {
          name: post.meta.author,
        },
      ],
      date: post.dateCreated,
    });
  }

  const response = new Response(feed.atom1());
  response.headers.set("Content-Type", "application/atom+xml");
  return response;
}
