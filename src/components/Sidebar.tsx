import CustomAccordion from "@/app/ui-components/Accordion";
import { Home } from "lucide-react";
import Link from "next/link";
import { sidebarItems } from "./SidebarItems";

const Sidebar = () => {
  return (
    <div className="hidden md:flex md:flex-col px-4 bg-white h-[calc(100vh-4rem)] ">
      {/* <div className=" flex flex-col px-2 py-2 space-y-2 ">
        <Link href="hello1">
          <button className=" flex items-stretch p-2 rounded  w-full text-left hover:bg-gray-100">
            <div className="w-10 flex justify-center items-center bg-[#E9E9FC] border-[#D9D9D9] border-[0.5px] text-[#1F1F4C] rounded-md">
              <Home size={18} />
            </div>

            <div className="ml-3 flex flex-col justify-center">
              <span className="font-medium">Hello</span>
              <p className="text-sm text-gray-700">both semantically correct</p>
            </div>
          </button>
        </Link>
      </div> */}

      <nav className="px-4 py-4 overflow-y-auto">
        <CustomAccordion sections={sidebarItems} />
      </nav>
    </div>
  );
};

export default Sidebar;
