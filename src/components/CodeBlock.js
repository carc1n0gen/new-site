import hljs from "highlight.js";

export default function CodeBlock({ children }) {
  const className = children.props.className || "";
  const code = children.props.children.trim();
  const language = className.replace(/language-/, "");

  return (
    <pre className="my-4 -mx-4 md:-mx-[24px]">
      <code
        className="hljs bg-zinc-100 dark:bg-zinc-700"
        dangerouslySetInnerHTML={{
          __html: hljs.highlight(code, { language }).value,
        }}
      ></code>
    </pre>
  );
}
