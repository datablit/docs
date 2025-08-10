import BlogHeader from "../blog_component/BlogHeader";
import BlogData from "../blog_component/BlogData";
import BlogSidebar from "../blog_component/BlogSidebar";
import { blogs } from "../blog_component/BlogList";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { path: string };
}) {
  const { path } = await params;
  const blog = blogs[path];
  if (!blog) return null;

  return (
    <div className="flex flex-col">
      <div>
        <BlogHeader blog={blog} />
      </div>

      <div className="flex flex-1 overflow-hidden w-full mx-auto px-6 md:px-12 py-10 gap-10">
        <main className="flex-1 hide-scrollbar ">
          <BlogData path={path} blog={blog} />
          {children}
        </main>
        <aside className="w-64 border-r border-white/10 hidden lg:block pr-6">
          <BlogSidebar />
        </aside>
      </div>
    </div>
  );
}
