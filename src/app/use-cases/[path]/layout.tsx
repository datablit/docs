import BlogHeader from "@/components/blog-components/BlogHeader";
import BlogData from "@/components/blog-components/BlogData";
import BlogSidebar from "@/components/blog-components/BlogSidebar";
import { useCases } from "../UseCaseList";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;
  const blog = useCases[path];
  if (!blog) return null;

  return (
    <div className="flex flex-col bg-surface-panel">
      <div>
        <BlogHeader blog={blog} />
      </div>

      <div className="flex flex-1 overflow-hidden w-full mx-auto px-6 md:px-12 py-10 gap-10">
        <main className="flex-1 hide-scrollbar ">
          <BlogData path={path} dataPath="use-cases" />
          {children}
        </main>
        <aside className="w-64 hidden lg:block pr-6">
          <BlogSidebar />
        </aside>
      </div>
    </div>
  );
}
