import Link from "next/link";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Carson's Blog",
  description: "Somewhat coherent tutorials about web stuff and things.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark:bg-black md:bg-zinc-50 md:dark:bg-zinc-800">
      <body className="text-zinc-700 dark:text-zinc-300">
        <header className="bg-white dark:bg-black text-center md:text-left mt-5 md:mt-0 md:pt-10 border-b border-b-zinc-300 dark:border-b-zinc-600">
          <div className="md:max-w-screen-md px-2 md:px-0 mx-auto">
            <img
              src="/img/avatar-new.jpg"
              alt="Avatar photo"
              className="rounded-full mx-auto md:float-right md:-mt-4"
              width="100"
              height="100"
            />
            <div className="mt-5">
              <Link href="/" className="mt-2">
                <h1 className="text-5xl font-bold">Carson's Blog</h1>
              </Link>
              <p className="mt-2">
                Somewhat coherent tutorials about web stuff and things.
              </p>
            </div>
          </div>
          <Navigation />
        </header>
        <main className="px-4 py-2 md:p-0 md:max-w-screen-md mx-auto">
          {children}
        </main>
        <footer className="mt-6 mb-4 text-center">&copy; Carson Evans</footer>
      </body>
    </html>
  );
}
