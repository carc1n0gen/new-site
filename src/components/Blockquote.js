export default function Blockquote({ children }) {
  return (
    <blockquote className="p-4 my-4 border-l-4 border-slate-300 bg-slate-100">
      <span className="text-xl italic font-medium leading-relaxed">
        {children}
      </span>
    </blockquote>
  );
}
