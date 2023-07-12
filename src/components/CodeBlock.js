import hljs from "highlight.js";

export default function CodeBlock({ children }) {
  const className = children.props.className || "";
  const code = children.props.children.trim();
  const language = className.replace(/language-/, "");

  return (
    <pre className="my-4 -mx-4">
      <code
        className="hljs"
        dangerouslySetInnerHTML={{
          __html: hljs.highlight(code, { language }).value,
        }}
      ></code>
    </pre>
  );
}
