import Image from "next/image";
import { Blog } from "./BlogList";

type BlogCardProps = {
  path: string;
  blog: Blog;
};

export default function BlogCard({ path, blog }: BlogCardProps) {
  return (
    <div className="bg-surface rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      {blog.image && (
        <div className="w-full h-40 relative bg-white/70 rounded-md overflow-hidden mb-4">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-3">
        {blog.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-[#1F1F4C] text-gray-100 hover:bg-[#8F8FCB] shadow hover:text-[#1F1F4C] border border-[#8F8FCB] hover:border hover:border-bg[#1F1F4C] text-xs px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-text-subheading mb-2">
        {blog.title}
      </h3>
      <p className="text-text-para text-sm flex-grow">{blog.description}</p>

      <a
        href={`/blog/${path}`}
        className="mt-4 text-text-subheading font-medium inline-flex items-center gap-1 hover:underline"
      >
        Learn More <span>›</span>
      </a>
    </div>
  );
}
