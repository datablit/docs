import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-3 z-10 relative">
      <div className="justify-between flex space-x-28 items-center">
        <span className="text-white font-bold text-xl">Datablit</span>
        <ul className="hidden md:flex space-x-8 items-center text-sm">
          <div className="relative group">
            <button
              className="hover:text-accent transition flex items-center gap-1 text-white"
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

            <div
              id="product-menu"
              role="menu"
              className="absolute top-full left-0 mt-2 max-w-7xl min-w-80 rounded-md shadow-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top z-50 bg-gradient-to-r from-black to-[#20162E] text-white border border-gray-600"
            >
              <Link
                href="#"
                role="menuitem"
                className="block px-4 py-2 m-1 hover:bg-gray-500 transition hover:rounded-md"
              >
                <span>product name</span>
                <p>this product is very beautiful</p>
              </Link>

              <Link
                href="#"
                role="menuitem"
                className="block px-4 py-2 m-1 hover:bg-gray-500 transition hover:rounded-md"
              >
                <span>product name</span>
                <p>this product is very beautiful</p>
              </Link>
              <Link
                href="#"
                role="menuitem"
                className="block px-4 py-2 m-1 hover:bg-gray-500 transition hover:rounded-md"
              >
                <span>product name</span>
                <p>this product is very beautiful</p>
              </Link>
            </div>
          </div>

          <li>
            <Link href="/api" className="text-white hover:underline">
              Docs
            </Link>
          </li>
          <li>
            <Link href="/sdk" className="text-white hover:underline">
              Join Community
            </Link>
          </li>
          <li>
            <Link href="/community" className="text-white hover:underline">
              Pricing
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex space-x-6 items-center ">
        <a href="#" className="text-white hover:underline">
          Signup
        </a>
        <button className="bg-white text-[#4747AD] py-1.5 px-3 rounded-full font-medium hover:bg-gray-200 transition">
          Book Meeting
        </button>
      </div>
    </nav>
  );
};

export default Header;
