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
          <div key={index} className="mb-4">
            <div className="w-full flex justify-between items-center py-2 text-left hover:rounded rounded mb-2">
              <button
                onClick={() => {
                  if (!sectionIsOpen) toggleOpen(index);
                }}
                className="flex-1 text-base font-medium text-[#4747AD] text-left"
              >
                {section.title}
              </button>
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
            </div>
            {sectionIsOpen && (
              <div className="text-gray-600 w-full pl-2">
                {Array.isArray(section.content)
                  ? section.content.map((item, i) => <div key={i}>{item}</div>)
                  : section.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
