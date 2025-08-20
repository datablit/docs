"use client";
import React from "react";
import BookMeetingForm from "./bookmeeting_component/BookMeetingForm";

const page = () => {
  return (
    <div className="flex flex-col p-10 space-y-6 bg-surface-panel h-full">
      <h1 className="text-3xl font-semibold text-center">
        Contact Our Sales Team
      </h1>
      <BookMeetingForm />
    </div>
  );
};

export default page;
