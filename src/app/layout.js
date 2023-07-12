import Link from "next/link";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Carson's Blog",
  description: "Somewhat coherent tutorials about web stuff and things.",
};

export default function RootLayout({ children, ...props }) {
  return (
    <html lang="en" className="md:bg-blue-50">
      <body className="text-zinc-600">
        <header className="bg-white text-center md:text-left mt-5 md:mt-0 md:pt-10 border-b border-b-zinc-300">
          <div className="md:max-w-screen-md mx-auto">
            <img
              src="/avatar-new.jpg"
              alt="Avatar photo"
              className="rounded-full mx-auto md:float-right md:-mt-2"
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
