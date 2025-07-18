"use client";
import Button from "@/app/ui-components/Button";
import { Input } from "@/app/ui-components/Input";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-[#D9D9D9] border-b-[0.5px] ">
      <div className="justify-between flex space-x-12">
        {/* Logo */}
        <Link href="/docs" className="">
          <span className="text-xl font-bold text-[#4747AD]">Datablit</span>
        </Link>
        {/* Desktop tab Links */}
        <ul className="hidden md:flex space-x-8 items-center text-sm">
          <li>
            <Link
              href="/products"
              className="hover:text-[#4747AD]  text-gray-700"
            >
              Products
            </Link>
          </li>
          <li>
            <Link href="/api" className="hover:text-[#4747AD]  text-gray-700">
              API
            </Link>
          </li>
          <li>
            <Link href="/sdk" className="hover:text-[#4747AD]  text-gray-700">
              SDK
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className="hover:text-[#4747AD] text-gray-700"
            >
              Community
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex ">
        <div className="relative hidden md:flex rounded-sm space-x-2 border border-gray-300 hover:bg-gray-50  shadow-sm">
          <Search
            size={16}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground text-gray-400 "
          />
          <Input
            placeholder="Search"
            className="pl-8 h-full focus:outline-none focus:ring-0 border-none bg-transparent"
          />
        </div>
        <div className="hidden md:flex items-center space-x-2 ml-4">
          <Button variant="outline">Feedback</Button>
          <Button>Contact</Button>
        </div>
      </div>

      {/* Mobile Hamburger */}

      <div className="md:hidden flex space-x-4">
        <button onClick={() => setOpen(!open)}>
          <Search size={16} />
        </button>
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>
    </header>
  );
};

export default Header;

{
  /* {open && (
        <div className="mt-4 md:hidden">
          <ul className="flex flex-col space-y-4 text-sm">
            <li>
              <Link
                href="/docs"
                className="block px-2 py-1 hover:bg-gray-100 rounded"
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                href="/guides"
                className="block px-2 py-1 hover:bg-gray-100 rounded"
              >
                Guides
              </Link>
            </li>
            <li>
              <Link
                href="/api"
                className="block px-2 py-1 hover:bg-gray-100 rounded"
              >
                API
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block px-2 py-1 hover:bg-gray-100 rounded"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      )} */
}
