"use client";
import React, { useEffect, useState } from "react";
type Heading = {
  id: string;
  text: string;
};

const ContentRightSidebar = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const h2Elements = main.querySelectorAll("h2");

    const parsed: Heading[] = Array.from(h2Elements).map((el) => {
      let id = el.id;

      // Auto-generate id if not present
      if (!id) {
        id =
          el.textContent
            ?.toLowerCase()
            .replace(/\s+/g, "-") // spaces → dashes
            .replace(/[^\w\-]/g, "") || ""; // remove non-word chars
        el.id = id;
      }

      return {
        id,
        text: el.textContent || "",
      };
    });

    setHeadings(parsed);
  }, []);
  return (
    <aside className=" hidden md:flex md:flex-col px-10 h-[calc(100vh-4rem)] ">
      <nav className="flex flex-col py-2 ">
        <h2 className="text-sm font-semibold mb-2">On this page</h2>
        <ul className="space-y-1">
          {headings.map(({ id, text }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-gray-700 hover:underline text-sm"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default ContentRightSidebar;
