"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures hydration matches server and client
  }, []);
  if (!mounted) return null;
  return (
    <footer className="w-full p-1 text-sm  ">
      <div className="mx-auto flex flex-row justify-between items-center text-sm">
        <div className="flex items-center space-x-4 ml-2">
          <button className="text-xs border border-border rounded-full px-2 py-1  transition hidden lg:flex text-main">
            Your Privacy Choices
          </button>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded bg-muted hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-300 rotate-0" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 transition-transform duration-300 rotate-0" />
            )}
          </button>
        </div>
        <div className="flex items-center space-x-4 mr-2">
          <Link href="https://www.linkedin.com/company/datablit/" passHref>
            <span className="cursor-pointer hover:brightness-200 transition">
              <Image
                src="/crmlinkedin.svg"
                alt="LinkedIn logo"
                width={16}
                height={16}
              />
            </span>
          </Link>
          <Link href="https://x.com/Datablit_cdp" passHref>
            <span className="cursor-pointer hover:brightness-200 transition">
              <Image src="/crmx.svg" alt="x logo" width={16} height={16} />
            </span>
          </Link>
          <Link href="https://www.youtube.com/@datablit" passHref>
            <span className="cursor-pointer hover:brightness-200 transition">
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
