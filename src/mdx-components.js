// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

import Blockquote from "./components/Blockquote";
import CodeBlock from "./components/CodeBlock";
import Heading from "./components/Heading";
import List from "./components/List";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components) {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h1: ({ children }) => <Heading as="h1">{children}</Heading>,
    h2: ({ children }) => <Heading as="h2">{children}</Heading>,
    h3: ({ children }) => <Heading as="h3">{children}</Heading>,
    h4: ({ children }) => <Heading as="h4">{children}</Heading>,
    h5: ({ children }) => <Heading as="h5">{children}</Heading>,
    h6: ({ children }) => <Heading as="h6">{children}</Heading>,
    ol: ({ children }) => <List as="ol">{children}</List>,
    ul: ({ children }) => <List as="ul">{children}</List>,
    blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
    pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
    ...components,
  };
}
