import { useState, useRef, useEffect } from "react";
import React from "react";

export interface CustomOption {
  label: string;
  value: any;
  icon?: React.ReactNode;
}

interface CustomPopoutProps {
  options: CustomOption[];
  value: any | null;
  onChange: (value: any) => void;
  placeholder?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "project" | "formsize";
}

export const CustomPopout: React.FC<CustomPopoutProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select...",
  className = "",
  size = "md",
}) => {
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sizeClasses: Record<string, string> = {
    sm: "px-3 py-1 text-sm h-8 rounded-md w-[90px]",
    md: "px-4 py-2 text-base h-9 rounded-md w-[120px]",
    lg: "px-5 py-3 text-lg h-11 rounded-md w-[150px]",
    project: "px-3 py-1 text-sm h-8 w-[160px]",
    formsize: "w-full px-4 py-2 text-base h-9 rounded-md",
  };

  const dropdownWidthClasses: Record<string, string> = {
    sm: "w-[90px]",
    md: "w-[120px]",
    lg: "w-[150px]",
    project: "w-[160px]",
    formsize: "w-full",
  };

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={`relative ${className}`} ref={selectRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`text-left flex items-center justify-between cursor-pointer ${sizeClasses[size]}`}
      >
        {selectedOption ? (
          <div className="flex items-center ">
            {selectedOption.icon && selectedOption.icon}
            <span>{selectedOption.label}</span>
          </div>
        ) : (
          <span className="text-gray-400 text-sm ">{placeholder}</span>
        )}
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 9l-7 7-7-7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          className={`absolute z-[9999] mt-1 bg-black  border border-white/10 transition placeholder:text-gray-400 rounded shadow-lg overflow-y-auto max-h-60 ${dropdownWidthClasses[size]}`}
        >
          {options.map((option) => (
            <li
              key={option.label}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-white/10 text-gray-400"
            >
              {option.icon && option.icon}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
