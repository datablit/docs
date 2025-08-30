"use client";

import ContentRightSidebar from "@/components/ContentRightSidebar";
import Footer from "@/components/Footer";

import Sidebar from "@/components/Sidebar";
import { sidebarItems } from "@/components/SidebarItems";

import React from "react";

import NavBar from "@/components/NavBar";
import CustomAccordion from "../ui-components/CustomAccordion";
import MenuAccordion from "@/components/MenuAccordion";
import { ThemeProvider } from "next-themes";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen grid grid-rows-[4rem_calc(100%-7rem)_3rem] fixed top-0 left-0 right-0 bg-surface-panel">
      <NavBar />

      <div className="flex pt-3 overflow-hidden ">
        <aside className="hidden md:block w-64 overflow-y-auto border-r border-border hide-scrollbar">
          <Sidebar />
        </aside>

        <main className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-12 hide-scrollbar ">
          {/* mobile only accordion */}
          <div className="block md:hidden mb-4">
            <MenuAccordion
              sections={[
                {
                  title: "Menu",
                  content: <CustomAccordion sections={sidebarItems} />,
                },
              ]}
            />
          </div>
          {/* actual page content */}
          {children}
        </main>

        <aside className="hidden lg:block w-64 overflow-y-auto border-l border-border hide-scrollbar ">
          <ContentRightSidebar />
        </aside>
      </div>

      <Footer />
    </div>
  );
}

export default layout;
