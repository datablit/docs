import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className=" text-3xl font-semibold text-[#232325] mt-4 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-[#4747AD] text-xl font-medium mt-6 mb-3 ">
        {children}
      </h2>
    ),
    p: ({ children }) => (
      <p className="text-gray-700 font-normal mb-4">{children}</p>
    ),
    ...components,
  };
}
