"use client";

import { useState, ReactNode } from "react";
import { ChevronRight, X } from "lucide-react";

interface AccordionSection {
  title: string;
  content: ReactNode;
}

interface MenuAccordionProps {
  sections: AccordionSection[];
}

export default function MenuAccordion({ sections }: MenuAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(index);
  };

  const close = () => {
    setOpenIndex(null);
  };

  return (
    <div className="relative md:hidden">
      {sections.map((section, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index}>
            {/* Always show the header */}
            <div className="flex justify-between items-center py-2 border-b border-border">
              <button
                onClick={() => toggleOpen(index)}
                className="flex-1 text-left text-base font-semibold text-text-subheading"
              >
                {section.title}
              </button>

              {!isOpen && (
                <ChevronRight
                  onClick={() => toggleOpen(index)}
                  className="w-5 h-5 text-gray-500 cursor-pointer"
                />
              )}
            </div>

            {/* When open, overlay full-height content */}
            {isOpen && (
              <div className="fixed top-16 bottom-12 left-0 right-0  z-50 overflow-y-auto px-4 py-2 bg-surface">
                {/* Close icon at the top right */}
                <div className="flex justify-end mb-4 ">
                  <X
                    onClick={close}
                    className="w-6 h-6 text-gray-600 hover:text-gray-400  cursor-pointer"
                  />
                </div>
                {section.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
