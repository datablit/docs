import React from "react";
import { Blog } from "./BlogList";
import { CalendarDays } from "lucide-react";

interface BlogHeaderProps {
  blog: Blog;
}

function BlogHeader({ blog }: BlogHeaderProps) {
  return (
    <div className="bg-[#1f1f4c] text-gray-100 px-10 py-12">
      {/* tags */}
      <div className="flex gap-2 mb-4">
        {blog.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-white/10 text-white text-sm font-medium px-3 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        {blog.title}
      </h1>
      {/* description */}
      <p className="text-lg max-w-3xl mb-8">{blog.description}</p>
      {/* meta info */}
      <div className="flex items-center text-sm text-white/70 gap-2">
        <CalendarDays height={20} width={20} />
        <span>{blog.date}</span>
        <span>By {blog.author}</span>
      </div>
    </div>
  );
}

export default BlogHeader;
