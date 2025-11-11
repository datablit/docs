import React from "react";
import { Blog } from "./BlogList";
import { CalendarDays } from "lucide-react";

interface BlogHeaderProps {
  blog: Blog;
}

function BlogHeader({ blog }: BlogHeaderProps) {
  return (
    <div className="bg-main text-gray-100 px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-12">
      {/* tags */}
      <div className="flex gap-2 mb-4 overflow-x-auto hide-scrollbar">
        <div className="flex gap-2 min-w-max sm:min-w-0 sm:flex-wrap">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white/10 text-white text-sm font-medium px-3 py-1 rounded-md whitespace-nowrap flex-shrink-0 sm:flex-shrink"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
        {blog.title}
      </h1>
      {/* description */}
      <p className="text-base sm:text-lg mb-6 sm:mb-8">{blog.description}</p>
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
