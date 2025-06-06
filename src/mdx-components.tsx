import type { MDXComponents } from "mdx/types";
import CodeBlock from "./components/CodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className=" text-3xl font-semibold text-[#232325] mt-4 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-[#4747AD] text-xl font-medium mt-6 mb-3 scroll-mt-6">
        {children}
      </h2>
    ),
    p: ({ children }) => (
      <p className="text-gray-700 font-normal mb-4">{children}</p>
    ),
    a: ({ children, href }: { children: React.ReactNode; href?: string }) => (
      <a href={href} className="text-blue-500 cursor-pointer">
        {children}
      </a>
    ),
    pre: CodeBlock,
    ...components,
  };
}
