"use client";
import React from "react";
import BookMeetingForm from "./bookmeeting_component/BookMeetingForm";

const page = () => {
  return (
    <div
      className="flex flex-col p-10 space-y-6 "
      // style={{
      //   background:
      //     "linear-gradient(18deg, rgba(0, 0, 0, 1) 58%, rgba(59, 40, 87, 1) 98%)",
      // }}
    >
      <h1 className="text-3xl font-semibold text-center">
        Contact Our Sales Team
      </h1>
      <BookMeetingForm />
    </div>
  );
};

export default page;
