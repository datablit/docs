import ContentRightSidebar from "@/components/ContentRightSidebar";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";

import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 h-16 z-50 border-white/10">
        <NavBar />
      </header>

      <footer className="fixed bottom-0 left-0 right-0 h-16 z-50 ">
        <Footer />
      </footer>

      <div className="flex flex-1 pt-16 pb-16 overflow-hidden">
        <aside className="w-64 overflow-y-auto border-r border-white/10">
          <Sidebar />
        </aside>

        <main className="flex-1 overflow-y-auto px-12 hide-scrollbar">
          {children}
        </main>

        <aside className="w-64 overflow-y-auto border-l border-white/10">
          <ContentRightSidebar />
        </aside>
      </div>
    </div>
  );
}

export default layout;
