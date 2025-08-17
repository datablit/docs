"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const Footer = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [year, setYear] = useState<number>(2024);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    setMounted(true); // Ensures hydration matches server and client
  }, []);
  if (!mounted) return null;
  return (
    <footer className="w-full p-4  text-sm text-center ">
      <div className=" mx-auto  flex flex-col md:flex-row justify-between items-center text-sm ">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            // onClick={() =>
            //   setTheme((prev) => (prev == "light" ? "dark" : "light"))
            // }
            className="p-2 rounded bg-muted hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-300 rotate-0" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800 transition-transform duration-300 rotate-0" />
            )}
          </button>
          <span> &copy; {year} Datablit. All rights reserved.</span>
        </div>
        <div className="flex flex-wrap items-center gap-6 ">
          <button className="text-xs border rounded-full px-2 py-1  transition">
            Your Privacy Choices
          </button>
          <Link href="https://www.linkedin.com/company/datablit/" passHref>
            <span className="cursor-pointer hover:brightness-100 transition">
              <Image
                src="/crmlinkedin.svg"
                alt="LinkedIn logo"
                width={16}
                height={16}
              />
            </span>
          </Link>
          <Link href="https://x.com/Datablit_cdp" passHref>
            <span className="cursor-pointer hover:brightness-100 transition">
              <Image src="/crmx.svg" alt="x logo" width={16} height={16} />
            </span>
          </Link>
          <Link href="https://www.youtube.com/@datablit" passHref>
            <span className="cursor-pointer hover:brightness-100 transition">
              <Image
                src="/crmyoutube.svg"
                alt="youtube logo"
                width={16}
                height={16}
              />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
