"use client";

import { useEffect, useRef, useState } from "react";
import { X, FileText } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const sections = [
  "Introduction",
  "Getting Started",
  "App Router",
  "Architecture",
  "Pages Router",
  "API Reference",
  "Accessibility",
  "Introduction",
  "Getting Started",
  "App Router",
  "Architecture",
  "Pages Router",
  "API Reference",
  "Accessibility",
];

const SearchModal = ({ isOpen, onClose }: Props) => {
  const [query, setQuery] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);

  // focus when open and no background scrolling
  useEffect(() => {
    const input = dialogRef.current?.querySelector("input");
    if (isOpen) {
      input?.focus();
      document.body.style.overflow = "hidden";
    } else {
      setQuery("");
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // filter sections by query
  const filteredSections = sections.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  // close when clicked outside dialog
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-start justify-center pt-20  bg-white/60"
      aria-modal="true"
      role="dialog"
      aria-labelledby="dialog-title"
      ref={dialogRef}
    >
      <div className="w-full max-w-2xl rounded-lg bg-white p-4 shadow-lg">
        <input
          type="search"
          placeholder="What are you searching for?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring focus:ring-blue-200"
          aria-label="Search"
          autoComplete="off"
        />

        <ul
          className="space-y-2 max-h-60 overflow-y-auto"
          role="listbox"
          aria-label="Search results"
        >
          {filteredSections.length === 0 ? (
            <li className="text-gray-500 italic p-2">No results found.</li>
          ) : (
            filteredSections.map((item) => (
              <li
                key={item}
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
                role="option"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") alert(`You selected: ${item}`);
                }}
                onClick={() => alert(`You selected: ${item}`)}
              >
                <FileText className="w-4 h-4 text-gray-500" />
                <span>{item}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchModal;
