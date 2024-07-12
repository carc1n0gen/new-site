import hljs from "highlight.js";

export default function CodeBlock({ children }) {
  const code = children.props.children.trim();
  const className = children.props.className || "";
  const language = className.replace(/language-/, "");

  return (
    <pre>
      <code
        className="hljs rounded-lg"
        dangerouslySetInnerHTML={{
          __html: hljs.highlight(code, { language }).value,
        }}
      ></code>
    </pre>
  );
}
