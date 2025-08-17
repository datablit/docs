import Link from "next/link";
import React from "react";
import ProductDropdown from "./ProductDropdown";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-3 z-10 relative">
      <div className="justify-between flex space-x-28 items-center">
        <span className="text-white font-bold text-xl">Datablit</span>
        <ul className="hidden md:flex space-x-8 items-center text-sm">
          <div className="relative group">
            <button
              className=" hover:text-accent transition flex items-center gap-1 text-white"
              aria-haspopup="true"
              aria-expanded="false"
              aria-controls="product-menu"
            >
              Product
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.08 1.04l-4.24 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* dropdown */}
            <div className="invisible opacity-0 scale-95 group-hover:visible group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 absolute left-0 top-full z-50">
              <ProductDropdown />
            </div>
          </div>

          <li>
            <Link
              href="/docs/getting-started"
              className="text-white hover:underline"
            >
              Docs
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-white hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/sdk" className="text-white hover:underline">
              Community
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="text-white hover:underline">
              Pricing
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex space-x-6 items-center ">
        <a
          href={process.env.NEXT_PUBLIC_DATABLIT_CONSOLE_URL}
          className="text-white hover:underline"
        >
          Sign in to console
        </a>
        <Link href="/bookmeeting">
          <button className="bg-white text-[#4747AD] py-1.5 px-3 rounded-full font-medium hover:bg-gray-200 transition">
            Contact Sales
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
