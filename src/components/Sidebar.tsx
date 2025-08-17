import CustomAccordion from "@/app/ui-components/Accordion";
import { Home } from "lucide-react";
import Link from "next/link";
import { sidebarItems } from "./SidebarItems";

const Sidebar = () => {
  return (
    <div className="  px-4 bg-white h-[calc(100vh-4rem)] ">
      <aside className="px-4 py-4 overflow-y-auto hidden md:flex">
        <CustomAccordion sections={sidebarItems} />
      </aside>
    </div>
  );
};

export default Sidebar;
