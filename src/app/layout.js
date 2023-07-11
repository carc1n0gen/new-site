import Link from "next/link";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Carson's Blog",
  description: "Somewhat coherent tutorials about web stuff and things.",
};

export default function RootLayout({ children, ...props }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href="/img/favicon.ico"></link>
      <body className="text-zinc-600">
        <header className="">
          <div className="p-4 flex flex-col items-center text-center">
            <img
              src="/avatar-new.jpg"
              alt="Avatar photo"
              className="rounded-full"
              width="100"
              height="100"
            />
            <Link href="/" className="mt-2">
              <h1 className="text-5xl font-bold">Carson's Blog</h1>
            </Link>
            <p className="mt-2">
              Somewhat coherent tutorials about web stuff and things.
            </p>
          </div>
          <div className="border-y flex flex-col items-center text-center">
            <Navigation />
            <form action="/search" className="mb-4">
              <input
                type="text"
                placeholder="Search for posts"
                className="border border-r-0 rounded-md rounded-r-none p-1"
              />
              <button
                type="submit"
                className="px-4 py-1 border border-l-0 border-zinc-500 rounded-md rounded-l-none bg-zinc-500 text-white"
              >
                Search
              </button>
            </form>
          </div>
        </header>
        <main className="px-4 py-2">{children}</main>
        <footer className="mt-6 mb-4 text-center">&copy; Carson Evans</footer>
      </body>
    </html>
  );
}
