"use client";
import React from "react";
import PricingAccordion from "./pricing_comp/PricingAccordion";
import PricingPage from "./pricing_comp/PricingPage";

const page = () => {
  return (
    <div
      className="h-screen flex flex-col p-10 items-center justify-center space-y-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(18deg, rgba(0, 0, 0, 1) 58%, rgba(59, 40, 87, 1) 98%)",
      }}
    >
      <main className="overflow-y-auto hide-scrollbar">
        <PricingPage />
        <PricingAccordion />
      </main>
    </div>
  );
};

export default page;
