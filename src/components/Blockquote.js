export default function Blockquote({ children }) {
  return (
    <blockquote className="px-4 py-2 my-6 border-l-4 border-zinc-300 bg-zinc-100">
      <span className="text-xl italic font-medium leading-relaxed">
        {children}
      </span>
    </blockquote>
  );
}
