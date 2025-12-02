import { Blog } from "@/types/blog";

interface BlogDataProps {
  path: string;
  dataPath?: "blog" | "use-cases";
}

// MDX components must be imported inside the server component
export default async function BlogData({
  path,
  dataPath = "blog",
}: BlogDataProps) {
  let MDXContent;

  try {
    // Dynamically import MDX based on file name and data path
    const mdxModule = await import(`../../app/${dataPath}/data/${path}.mdx`);
    MDXContent = mdxModule.default;
  } catch (error) {
    return <div>Error loading blog content.</div>;
  }

  return (
    <article className="prose max-w-none">
      <MDXContent />
    </article>
  );
}
