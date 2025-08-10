import { Blog } from "./BlogList";

interface BlogDataProps {
  path: string;
  blog: Blog;
}

// MDX components must be imported inside the server component
export default async function BlogData({ path, blog }: BlogDataProps) {
  let MDXContent;

  try {
    // Dynamically import MDX based on file name
    const mdxModule = await import(`./../data/${path}.mdx`);
    MDXContent = mdxModule.default;
  } catch (error) {
    return <div>Error loading blog content.</div>;
  }

  return (
    <article className="prose max-w-none px-10">
      <MDXContent />
    </article>
  );
}
