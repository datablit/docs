"use client";

import Button from "@/app/ui-components/Button";
import { Input } from "@/app/ui-components/Input";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import FeedbackPopup from "./FeedbackPopup";
import SearchModal from "./SearchModal";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/docs/analytics-sdk", label: "SDK" },
  { href: "/docs/getting-started", label: "Docs" },
  { href: "/blog", label: "Blog" },
  { href: "/community", label: "Community" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [showFeedbackPopoup, setShowFeedbackPopup] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault(); // Prevent browser search
        setSearchModalOpen(true);
      }
      if (event.key === "Escape") {
        setSearchModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="relative z-50">
      <div className="flex items-center justify-between p-4 bg-white border-b border-[#D9D9D9]">
        <div className="flex space-x-12 items-center">
          <Link href="/">
            <span className="text-xl font-bold text-[#4747AD]">Datablit</span>
          </Link>

          <ul className="hidden lg:flex space-x-8 items-center text-sm">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-[#4747AD] text-gray-700"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          {/* Search - Desktop */}
          <div
            onClick={() => setSearchModalOpen(true)}
            className="relative hidden md:flex items-center rounded-sm space-x-2 border border-gray-300 hover:bg-gray-50 shadow-sm cursor-pointer"
          >
            <Search
              size={16}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <Input
              placeholder="Search"
              className="pl-8 h-full focus:outline-none focus:ring-0 border-none bg-transparent pointer-events-none"
              readOnly
            />
          </div>

          <div className="hidden md:flex items-center space-x-2 ml-4 relative">
            <Button
              variant="outline"
              onClick={() => setShowFeedbackPopup(true)}
            >
              Feedback
            </Button>

            {showFeedbackPopoup && (
              <div className="absolute top-full left-0 mt-2">
                <FeedbackPopup onClose={() => setShowFeedbackPopup(false)} />
              </div>
            )}

            <Link href={"/bookmeeting"}>
              <Button>Contact</Button>
            </Link>
          </div>

          <div className="flex md:flex lg:hidden items-center space-x-4 ml-4">
            <button onClick={() => setOpen(true)}>
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-white z-40 p-6 overflow-y-auto flex flex-col justify-between">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-[#4747AD]">Datablit</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>

          <ul className="space-y-6 text-lg font-medium text-gray-700">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block hover:text-[#4747AD]"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col space-y-4">
            <Button variant="outline">Feedback</Button>
            <Button>Contact</Button>
          </div>
        </div>
      )}

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </header>
  );
};

export default NavBar;
