import Link from "next/link";
import { FaGithub, FaInstagram, FaRss } from "react-icons/fa";

import GoogleAnalytics from "@/components/client/GoogleAnalytics";
import Navigation from "@/components/client/Navigation";

import {Inter} from "next/font/google";

import "./globals.css";

export const metadata = {
  title: "Carson's Blog",
  description: "Somewhat coherent tutorials about web stuff and things.",
};

const inter = Inter({subsets: ['latin']});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#fff] text-zinc-500">
      <link
        rel="alternate"
        type="application/atom+xml"
        title="Atom Feed for Carson's Blog"
        href="/feed.xml"
      />
      <body className={inter.className}>
        <header className="site-header md:fixed w-full md:w-[35%] md:h-full flex flex-col items-center lg:items-end p-4 lg:py-[8rem] lg:px-[4rem] text-center lg:text-right text-zinc-300">
          <a href="/">
            <img src="/img/avatar.jpg" alt="Avatar Photo" width="150" class="rounded-full" />
          </a>
          <h1 className="text-[inherit] text-2xl lg:text-5xl mb-8">I'm Carson</h1>
          <p className="lg:ml-12">I do web stuff and things, and also photography</p>
          <Navigation />
          <footer className="hidden md:block mt-[auto]">
            &copy; Carson Evans

            <Link
              title="Github"
              href="https://github.com/carc1n0gen"
              target="_blank"
              className="ml-5"
            >
              <FaGithub className="inline" />
            </Link>
            <Link
              title="Instagram"
              href="https://www.instagram.com/carsonphotosandstuff/"
              target="_blank"
              className="ml-5"
            >
              <FaInstagram className="inline" />
            </Link>
            <a
              title="Atom Feed"
              href="/feed.xml"
              target="_blank"
              className="ml-5"
            >
              <FaRss className="inline" />
            </a>
          </footer>
        </header>
        <main className="md:ml-[35%] md:w-[65%] max-w-4xl py-[4rem] lg:py-[8rem] px-[2rem] lg:px-[4rem]">
          {children}
        </main>
        <footer className="bottom-footer px-4 py-12 md:hidden text-center text-zinc-300">
          <Link
            title="Github"
            href="https://github.com/carc1n0gen"
            target="_blank"
            className="md:ml-5 text-4xl"
          >
            <FaGithub className="inline" />
          </Link>
          <Link
            title="Instagram"
            href="https://www.instagram.com/carsonphotosandstuff/"
            target="_blank"
            className="ml-5 text-4xl"
          >
            <FaInstagram className="inline" />
          </Link>
          <a
            title="Atom Feed"
            href="/feed.xml"
            target="_blank"
            className="ml-5 text-4xl"
          >
            <FaRss className="inline" />
          </a>
          <div className="mt-4 text-2xl">&copy; Carson Evans</div>
        </footer>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
