"use client";

import Button from "@/app/ui-components/Button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import FeedbackPopup from "./FeedbackPopup";
import SearchModal from "./SearchModal";

const navLinks = [
  { href: "/docs/datablit-sources", label: "Sources" },
  { href: "/docs/getting-started", label: "Docs" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/blog", label: "Blog" },
  {
    href: process.env.NEXT_PUBLIC_DATABLIT_COMMUNITY_URL || "",
    label: "Community",
  },
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
      <div className="flex items-center justify-between p-4  border-b border-border">
        <div className="flex space-x-12 items-center">
          <Link href={process.env.NEXT_PUBLIC_DATABLIT_HOME_URL || ""}>
            <span className="text-xl font-bold text-text-subheading">
              Datablit
            </span>
          </Link>

          <ul className="hidden lg:flex space-x-8 items-center text-sm">
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="hover:text-text-subheading text-text-para"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          {/* todo */}
          {/* Search - Desktop */}
          {/* <div
            onClick={() => setSearchModalOpen(true)}
            className="relative hidden md:flex items-center rounded-sm space-x-2 border border-border hover:bg-table-header shadow-sm cursor-pointer bg-surface"
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
          </div> */}

          <div className="hidden md:flex items-center space-x-2 ml-4 relative ">
            {/* <Button
              variant="outline"
              onClick={() => setShowFeedbackPopup(true)}
            >
              Feedback
            </Button>

            {showFeedbackPopoup && (
              <div className="absolute top-full left-0 mt-2">
                <FeedbackPopup onClose={() => setShowFeedbackPopup(false)} />
              </div>
            )} */}

            <Link
              href={process.env.NEXT_PUBLIC_DATABLIT_HOME_URL + "/bookmeeting"}
            >
              <Button>Contact</Button>
            </Link>
          </div>

          <div className="flex md:flex lg:hidden items-center space-x-4 ml-4 text-surface">
            <button onClick={() => setOpen(true)} className="text-text-para">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-surface z-40 p-6 ">
          <div className="justify-between flex flex-col h-full ">
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-semibold text-text-subheading">
                  Datablit
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="text-text-para"
                >
                  <X size={20} />
                </button>
              </div>
              <ul className="space-y-6 text-lg font-medium text-text-para">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block hover:text-text-subheading"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="space-y-2">
              <li>
                <Link
                  href={process.env.NEXT_PUBLIC_DATABLIT_CONSOLE_URL + "/login"}
                >
                  <Button onClick={() => setOpen(false)} size="full">
                    Sign in to console
                  </Button>
                </Link>
              </li>
              <li>
                <Link
                  href={
                    process.env.NEXT_PUBLIC_DATABLIT_HOME_URL + "/bookmeeting"
                  }
                >
                  <Button
                    onClick={() => setOpen(false)}
                    size="full"
                    variant="outline"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </li>
            </ul>
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
