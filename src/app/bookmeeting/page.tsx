"use client";
import React from "react";
import BookMeetingForm from "./bookmeeting_component/BookMeetingForm";

const page = () => {
  return (
    <div
      className="h-screen flex flex-col p-10 items-center justify-center space-y-10"
      style={{
        background:
          "linear-gradient(18deg, rgba(0, 0, 0, 1) 58%, rgba(59, 40, 87, 1) 98%)",
      }}
    >
      <div>
        <h1 className="text-2xl text-white font-semibold ">
          <span>Building the future of</span>

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-cyan-500">
            {" "}
            bitcoin mining{" "}
          </span>
        </h1>
      </div>

      <div>
        <BookMeetingForm />
      </div>
    </div>
  );
};

export default page;
