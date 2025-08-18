import CustomAccordion from "@/app/ui-components/Accordion";

import { sidebarItems } from "./SidebarItems";

const Sidebar = () => {
  return (
    <div className="  px-4 h-[calc(100vh-4rem)] bg-surface ">
      <aside className="px-4 py-4 overflow-y-auto hidden md:flex">
        <CustomAccordion sections={sidebarItems} />
      </aside>
    </div>
  );
};

export default Sidebar;
