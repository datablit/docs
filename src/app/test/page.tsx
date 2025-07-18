import React from "react";
import CrmDiagram from "./test_comp/CrmDiagram";

const page = () => {
  return (
    <main className="min-h-screen p-10 bg-white">
      <h1 className="text-2xl font-bold mb-6">CRM System Diagram</h1>
      <CrmDiagram />
    </main>
  );
};

export default page;
