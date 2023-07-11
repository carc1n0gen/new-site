import { useMemo } from "react";

export default function List({ as: Component, children }) {
  const listStyle = useMemo(() => {
    switch (Component) {
      case "ol":
        return "list-decimal";
      case "ul":
        return "list-disc";
      default:
        return "";
    }
  });
  return (
    <Component className={`${listStyle} list-inside m-2`}>{children}</Component>
  );
}
