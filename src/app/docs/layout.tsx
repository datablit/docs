"use client";
import ContentRightSidebar from "@/components/ContentRightSidebar";
import Footer from "@/components/Footer";

import Sidebar from "@/components/Sidebar";
import { sidebarItems } from "@/components/SidebarItems";

import React, { useState } from "react";

import NavBar from "@/components/NavBar";
import CustomAccordion from "../ui-components/Accordion";
import MenuAccordion from "@/components/MenuAccordion";
import { ThemeProvider } from "next-themes";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="h-screen grid grid-rows-[4rem_calc(100%-7rem)_3rem]">
        <NavBar />

        <div className="flex pt-3 overflow-hidden">
          <aside className="hidden md:block w-64 overflow-y-auto border-r border-white/10 hide-scrollbar">
            <Sidebar />
          </aside>

          <main className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-12 hide-scrollbar">
            {/* mobile only accordion */}
            <div className="block md:hidden mb-4">
              <MenuAccordion
                sections={[
                  {
                    title: "Menu",
                    content: (
                      <CustomAccordion sections={sidebarItems} />
                      // <div className="text-black">This is sidebar content</div>
                    ),
                    // content: <Sidebar />,
                  },
                ]}
              />
            </div>
            {/* actual page content */}
            {children}
          </main>

          <aside className="hidden lg:block w-64 overflow-y-auto border-l border-white/10 hide-scrollbar">
            <ContentRightSidebar />
          </aside>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default layout;
