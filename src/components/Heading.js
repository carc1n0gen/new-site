import { useMemo } from "react";

export default function Heading({ as: Component, children }) {
  const size = useMemo(() => {
    switch (Component) {
      case "h1":
        return "text-3xl";
      case "h2":
        return "text-2xl";
      case "h3":
        return "text-xl";
      default:
        return "text-lg";
    }
  }, [Component]);
  return <Component className={`${size} font-bold mb-4`}>{children}</Component>;
}
