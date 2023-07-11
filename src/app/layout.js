import Heading from "@/components/Heading";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Blog",
  description: "Things and stuff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mt-2">
        <header className="flex flex-col items-center text-center border-b">
          <img
            src="https://placekitten.com/100/100"
            className="rounded-full"
            width="100"
          />
          <Link href="/" className="mt-2">
            <h1 className="text-4xl font-bold">Carson's Blog</h1>
          </Link>
          <p className="mt-2">
            Somewhat coherent tutorials about web stuff and things.
          </p>
          <nav className="w-full mt-8 py-4 border-t flex justify-center">
            <Link href="/" className="mx-3">
              Blog
            </Link>
            <Link href="/archive" className="mx-3">
              Archive
            </Link>
            <Link href="/contact" className="mx-3">
              Contact
            </Link>
          </nav>
          <form acrion="/search" className="mb-4">
            <input
              type="text"
              placeholder="Search for posts"
              className="border border-r-0 rounded-md rounded-r-none p-1"
            />
            <button
              type="submit"
              className="p-1 border border-l-0 border-zinc-500 rounded-md rounded-l-none bg-zinc-500 text-white"
            >
              Search
            </button>
          </form>
        </header>
      </body>
    </html>
  );
}
