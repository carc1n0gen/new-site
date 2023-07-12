export default function Anchor({ href, children }) {
  return (
    <a href={href} className="font-bold underline">
      {children}
    </a>
  );
}
