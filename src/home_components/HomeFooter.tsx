"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const HomeFooter = () => {
  const [currentYear, setCurrentYear] = useState<number>(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full  bg-black text-gray-400 ">
      <div className=" mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm ">
        <div className="flex items-center space-x-3">
          <span className=" text-gray-400 ">
            {" "}
            &copy; {currentYear} Datablit. All rights reserved.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-gray-400">
          <button className="text-xs border border-white/30 rounded-full px-2 py-1 hover:text-white hover:border-white transition">
            Your Privacy Choices
          </button>
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

export default HomeFooter;
