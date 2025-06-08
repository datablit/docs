import CustomAccordion from "@/app/ui-components/Accordion";
import { Home } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "Documentation",
    content: (
      <ul className="space-y-1">
        <li>
          <Link href="#" className="hover:text-gray-900">
            Introduction
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-gray-900">
            Getting Started
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-gray-900">
            API Reference
          </Link>
        </li>
      </ul>
    ),
  },
  {
    title: "Getting Started",
    content: (
      <ul className="space-y-1">
        <li>
          <Link href="#" className="hover:text-gray-900">
            Product
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-gray-900">
            Getting Started
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-gray-900">
            SDK
          </Link>
        </li>
      </ul>
    ),
  },
  {
    title: "Analytics SDK",
    content: (
      <ul className="space-y-1">
        <li>
          <Link href="/docs/analytics-sdk/js" className="hover:text-gray-900">
            Analytics js
          </Link>
        </li>
        <li>
          <Link
            href="/docs/analytics-sdk/kotlin"
            className="hover:text-gray-900"
          >
            Analytics kotlin
          </Link>
        </li>
        <li>
          <Link
            href="/docs/analytics-sdk/swift"
            className="hover:text-gray-900"
          >
            Analytics ios
          </Link>
        </li>
      </ul>
    ),
  },
];

const Sidebar = () => {
  return (
    <div className="hidden md:flex md:flex-col px-4 bg-white h-[calc(100vh-4rem)] ">
      <div className=" flex flex-col px-2 py-2 space-y-2 ">
        <Link href="hello1">
          <button className=" flex items-stretch p-2 rounded  w-full text-left hover:bg-gray-100">
            {/* Column 1: Icon  */}
            <div className="w-10 flex justify-center items-center bg-[#E9E9FC] border-[#D9D9D9] border-[0.5px] text-[#1F1F4C] rounded-md">
              <Home size={18} />
            </div>

            {/* Column 2: Text block */}
            <div className="ml-3 flex flex-col justify-center">
              <span className="font-medium">Hello</span>
              <p className="text-sm text-gray-700">both semantically correct</p>
            </div>
          </button>
        </Link>
        <Link href="hello2">
          <button className=" flex items-stretch p-2 rounded  w-full text-left hover:bg-gray-100">
            {/* Column 1: Icon  */}
            <div className="w-10 flex justify-center items-center bg-[#E9E9FC] border-[#D9D9D9] border-[0.5px] text-[#1F1F4C] rounded-md">
              <Home size={18} />
            </div>

            {/* Column 2: Text block */}
            <div className="ml-3 flex flex-col justify-center">
              <span className="font-medium">hello</span>
              <p className="text-sm text-gray-700">both semantically correct</p>
            </div>
          </button>
        </Link>
      </div>

      <nav className="px-4 py-4 overflow-y-auto">
        <CustomAccordion sections={sections} />
      </nav>
    </div>
  );
};

export default Sidebar;
