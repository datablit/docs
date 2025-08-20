"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Heading = {
  id: string;
  text: string;
  level: 2 | 3;
};

const ContentRightSidebar = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const main = document.querySelector("main");
    if (!main) return;

    const headingElements = main.querySelectorAll("h2, h3");
    const parsed: Heading[] = Array.from(headingElements).map((el) => {
      let id = el.id;

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
        level: el.tagName === "H2" ? 2 : 3,
      };
    });

    setHeadings(parsed);
  }, [pathname, isClient]); // Add isClient as dependency

  if (!isClient) {
    return (
      <aside className=" hidden md:flex md:flex-col px-4 h-[calc(100vh-4rem)] ">
        <nav className="flex flex-col py-2 ">
          <h2 className="text-sm font-semibold mb-2 text-text-subheading">
            On this page
          </h2>
          <ul className="space-y-1">{/* Empty state while loading */}</ul>
        </nav>
      </aside>
    );
  }

  return (
    <aside className=" hidden md:flex md:flex-col px-4 h-[calc(100vh-4rem)] ">
      <nav className="flex flex-col py-2 ">
        <h2 className="text-sm font-semibold mb-2 text-text-subheading">
          On this page
        </h2>
        <ul className="space-y-1 ">
          {headings.map(({ id, text, level }, index) => (
            <li
              key={id}
              className={
                level === 2 ? "mt-4" : "ml-4 text-sm text-muted-foreground"
              }
            >
              <a
                href={`#${id}`}
                className="hover:underline text-text-para block"
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
