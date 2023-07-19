export default function Card({ as: Component = "div", children }) {
  return (
    <Component className="mt-6 md:p-6 bg-white dark:bg-black md:border border-zinc-300 dark:border-zinc-600">
      {children}
    </Component>
  );
}
