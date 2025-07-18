// components/CrmDiagram.tsx
import React from "react";
import { ArrowRight } from "lucide-react";

const Box = ({ title, className }: { title: string; className?: string }) => (
  <div
    className={`bg-white border border-gray-300 shadow-md rounded-xl p-4 text-center ${className}`}
  >
    <h3 className="text-sm font-semibold">{title}</h3>
  </div>
);

const CrmDiagram = () => {
  return (
    <div className="relative w-full h-[500px] bg-gray-50 rounded-xl overflow-hidden">
      {/* Boxes */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
        <Box title="CRM" />
      </div>

      <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
        <Box title="Campaigns" />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Box title="Customers" />
      </div>

      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <Box title="Leads" />
      </div>

      <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
        <Box title="Sales" />
      </div>

      {/* Arrows (SVG Lines) */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* CRM → Campaigns */}
        <line
          x1="120"
          y1="250"
          x2="400"
          y2="100"
          stroke="gray"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />

        {/* CRM → Customers */}
        <line
          x1="120"
          y1="250"
          x2="400"
          y2="250"
          stroke="gray"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />

        {/* CRM → Leads */}
        <line
          x1="120"
          y1="250"
          x2="400"
          y2="400"
          stroke="gray"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />

        {/* Customers → Sales */}
        <line
          x1="400"
          y1="250"
          x2="680"
          y2="250"
          stroke="gray"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />

        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="10"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="gray" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

export default CrmDiagram;
