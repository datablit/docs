"use client";

import { useState, ReactNode } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

interface AccordionSection {
  title: string;
  content: ReactNode | ReactNode[];
}

interface AccordionProps {
  sections: AccordionSection[];
}

export default function CustomAccordion({ sections }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const isOpen = (index: number) => openIndices.includes(index);

  const toggleOpen = (index: number) => {
    setOpenIndices((prev) => [...prev, index]);
  };

  const toggleClose = (index: number) => {
    setOpenIndices((prev) => prev.filter((i) => i !== index));
  };

  return (
    <div>
      {sections.map((section, index) => {
        const sectionIsOpen = isOpen(index);

        return (
          <div key={index} className="mb-4 px-3 ">
            <div className="flex items-start justify-between py-2">
              <button
                className="flex items-center gap-2 text-left "
                onClick={() => {
                  if (!sectionIsOpen) toggleOpen(index);
                }}
              >
                {sectionIsOpen ? (
                  <ChevronDown
                    onClick={() => toggleClose(index)}
                    className="w-5 h-5 text-gray-400 cursor-pointer transition-transform duration-300"
                  />
                ) : (
                  <ChevronRight
                    onClick={() => toggleOpen(index)}
                    className="w-5 h-5 text-gray-400 cursor-pointer transition-transform duration-300"
                  />
                )}
                <span className="text-base font-medium text-text-subheading">
                  {section.title}
                </span>
              </button>
            </div>
            {sectionIsOpen && (
              <div className="text-text-para w-full pl-2 ">
                {Array.isArray(section.content)
                  ? section.content.map((item, i) => (
                      <div key={i} className="mb-4 last:mb-0">
                        {item}
                      </div>
                    ))
                  : section.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
