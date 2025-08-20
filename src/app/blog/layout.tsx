import ContentRightSidebar from "@/components/ContentRightSidebar";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";

import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen grid grid-rows-[4rem_calc(100%-7rem)_3rem] bg-surface-panel">
      <NavBar />
      <main className="overflow-y-auto hide-scrollbar">{children}</main>
      <Footer />
    </div>
  );
}

export default layout;
