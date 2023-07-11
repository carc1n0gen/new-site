export default function Blockquote({ children }) {
  return (
    <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50">
      <span className="text-xl italic font-medium leading-relaxed">
        {children}
      </span>
    </blockquote>
  );
}
