import type { MDXComponents } from "mdx/types";
import CodeBlock from "./components/CodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-semibold text-[#232325] mt-8 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-[#4747AD] text-xl font-medium mt-6 mb-4 scroll-mt-6">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[#4747AD] text-lg font-medium mt-5 mb-3 scroll-mt-6">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-700 font-normal mb-4 leading-relaxed">
        {children}
      </p>
    ),
    a: ({ children, href }: { children: React.ReactNode; href?: string }) => (
      <a href={href} className="text-blue-500 cursor-pointer hover:underline">
        {children}
      </a>
    ),
    pre: CodeBlock,
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-gray-700 font-normal leading-relaxed">{children}</li>
    ),
    ...components,
  };
}
