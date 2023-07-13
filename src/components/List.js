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
  }, [Component]);
  return (
    <Component className={`${listStyle} list-inside mx-2 my-4`}>
      {children}
    </Component>
  );
}
