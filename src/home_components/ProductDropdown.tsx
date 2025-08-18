import Link from "next/link";
import React from "react";

const ProductDropdown = () => {
  return (
    <div
      id="product-menu"
      role="menu"
      className="absolute left-0 top-full mt-3 w-screen max-w-4xl  shadow-xl text-sm rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top z-50 grid grid-cols-3 gap-6 p-6 bg-gradient-to-r from-black to-[#20162E]  border border-gray-600"
    >
      {/* Column 1 */}
      <div>
        <h3 className="font-semibold text-[#4f65d7] mb-4">CUSTOMER DATA</h3>
        <ul className="space-y-2 text-gray-700">
          <li>
            <Link
              href="#"
              className="block px-2 py-2 rounded-md hover:bg-[#4747ad] transition"
            >
              <span className="font-semibold text-gray-400">SDK</span>
              <p className="text-gray-200">Track event</p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block px-2 py-2 rounded-md hover:bg-[#4747ad] transition"
            >
              <span className="font-semibold text-gray-400">Source</span>
              <p className="text-gray-200">Collect platform specific data</p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block px-2 py-2 rounded-md hover:bg-[#4747ad] transition"
            >
              <span className="font-semibold text-gray-400">Signal</span>
              <p className="text-gray-200">Track custom metrics </p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block px-2 py-2 rounded-md hover:bg-[#4747ad] transition"
            >
              <span className="font-semibold text-gray-400">Rule</span>
              <p className="text-gray-200">
                Logical expression governing decision
              </p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block px-2 py-2 rounded-md hover:bg-[#4747ad] transition"
            >
              <span className="font-semibold text-gray-400">Data</span>
              <p className="text-gray-200">
                Unlock insight and analyze deeply with SQL
              </p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block px-2 py-2 rounded-md hover:bg-[#4747ad] transition"
            >
              <span className="font-semibold text-gray-400">Dashboard</span>
              <p className="text-gray-200">Visualise datapoints </p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block px-2 py-2 rounded-md hover:bg-[#4747ad] transition"
            >
              <span className="font-semibold text-gray-400">Experiment</span>
              <p className="text-gray-200"> Test and validate before rollout</p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block px-2 py-2 rounded-md hover:bg-[#4747ad] transition"
            >
              <span className="font-semibold text-gray-400">User Profile</span>
              <p className="text-gray-200"> Dive deep into the user journey</p>
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 2 */}
      <div>
        <h3 className="font-semibold text-[#4f65d7] mb-4">COLLABORATION</h3>
        <ul className="space-y-2 text-gray-700">
          <li>
            <Link
              href="#"
              className="block px-2 py-2 rounded-md hover:bg-[#4747ad] transition"
            >
              <span className="font-semibold text-gray-400">Space</span>
              <p className="text-gray-200">Organise team and work</p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block px-2 py-2 rounded-md hover:bg-[#4747ad] transition"
            >
              <span className="font-semibold text-gray-400">Invite</span>
              <p className="text-gray-200">Work with external partner</p>
            </Link>
          </li>
          {/* <li>
            <Link
              href="#"
              className="block px-2 py-2 rounded-md hover:bg-[#4747ad] transition"
            >
              <span className="font-semibold text-gray-400">Connect</span>
              <p className="text-gray-200">Meet via audio and video</p>
              <p className="text-gray-200">Meet via audio and video</p>
              <p className="text-gray-200">Meet via audio and video</p>
            </Link>
          </li> */}
          <li>
            <Link
              href="#"
              className="block px-2 py-2 rounded-md hover:bg-[#4747ad] transition"
            >
              <span className="font-semibold text-gray-400">Message</span>
              <p className="text-gray-200">Chat with team</p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block px-2 py-2 rounded-md hover:bg-[#4747ad] transition"
            >
              <span className="font-semibold text-gray-400">Notification</span>
              <p className="text-gray-200">Stay informed instantly</p>
            </Link>
          </li>
          {/* <li>
            <Link
              href="#"
              className="block px-2 py-2 rounded-md hover:bg-[#4747ad] transition"
            >
              <span className="font-semibold text-gray-400">
                Direct Message
              </span>
              <p className="text-gray-200">Private 1:1 chat </p>
            </Link>
          </li> */}
          <li>
            <Link
              href="#"
              className="block px-2 py-2 rounded-md hover:bg-[#4747ad] transition"
            >
              <span className="font-semibold text-gray-400">File Sharing</span>
              <p className="text-gray-200"> Share files effortlessly</p>
            </Link>
          </li>
        </ul>
      </div>
      {/* Column 3 – FEATURED */}
      <div className=" border-[#4f65d7] border-l-[0.5px] pl-6">
        <h3 className="font-semibold text-[#4f65d7] mb-4">DATABLIT</h3>
        <div className="bg-black p-3 rounded mb-5">
          <p className="text-xs text-gray-200 mb-2 leading-snug">
            Search everything. Find anything. Say hello to enterprise search.
          </p>
          <Link href="#" className="text-[#4f65d7] text-sm hover:underline">
            Learn more →
          </Link>
        </div>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="text-gray-200">
            <Link href="#">What is Datablit?</Link>
          </li>
          <li className="text-gray-200">
            <Link href="#">Slack vs segment vs rudderstack</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDropdown;
