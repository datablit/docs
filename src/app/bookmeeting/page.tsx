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
        <h1 className="text-3xl text-white font-semibold justify-center items-center ">
          Contact Our Sales Team
        </h1>
      </div>

      <div>
        <BookMeetingForm />
      </div>
    </div>
  );
};

export default page;
