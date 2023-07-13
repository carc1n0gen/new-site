// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

import Anchor from "./components/Anchor";
import Blockquote from "./components/Blockquote";
import CodeBlock from "./components/CodeBlock";
import Heading from "./components/Heading";
import List from "./components/List";
import Paragraph from "./components/Paragraph";
import Code from "./components/Code";
// import { Table } from "./components/Table";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components) {
  return {
    p: ({ children }) => <Paragraph>{children}</Paragraph>,
    a: ({ children, ...props }) => <Anchor {...props}>{children}</Anchor>,
    h1: ({ children, ...props }) => (
      <Heading {...props} as="h1">
        {children}
      </Heading>
    ),
    h2: ({ children, ...props }) => (
      <Heading {...props} as="h2">
        {children}
      </Heading>
    ),
    h3: ({ children, ...props }) => (
      <Heading {...props} as="h3">
        {children}
      </Heading>
    ),
    h4: ({ children, ...props }) => (
      <Heading {...props} as="h4">
        {children}
      </Heading>
    ),
    h5: ({ children, ...props }) => (
      <Heading {...props} as="h5">
        {children}
      </Heading>
    ),
    h6: ({ children, ...props }) => (
      <Heading {...props} as="h6">
        {children}
      </Heading>
    ),
    ol: ({ children, ...props }) => (
      <List {...props} as="ol">
        {children}
      </List>
    ),
    ul: ({ children, ...props }) => (
      <List {...props} as="ul">
        {children}
      </List>
    ),
    blockquote: ({ children, ...props }) => (
      <Blockquote {...props}>{children}</Blockquote>
    ),
    pre: ({ children, ...props }) => (
      <CodeBlock {...props}>{children}</CodeBlock>
    ),
    code: ({ children }) => <Code>{children}</Code>,
    // table: (props) => <Table {...props} />,
    ...components,
  };
}
