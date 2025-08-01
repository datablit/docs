import { Check } from "lucide-react";
import React, { useState } from "react";

const PricingAccordion = () => {
  const [openSection, setOpenSection] = useState<string>(
    "Customer Data Platform"
  );

  const toggleSection = (title: string) => {
    if (openSection !== title) {
      setOpenSection(title);
    }
  };

  const pricingPlans = [
    { name: "Free", subtitle: "Best for individuals", button: "Start Free" },
    {
      name: "Business",
      subtitle: "Best for individuals",
      button: "Contact Sales",
    },
  ];

  const pricingSections = [
    {
      title: "Customer Data Platform",
      features: [
        {
          name: "SDK",
          values: [<Check key="1" size={16} />, <Check key="2" size={16} />],
        },
        { name: "Project", values: ["1", "unlimited"] },
        { name: "Source", values: ["1", "unlimited"] },
        { name: "Event", values: ["1M", "$60 / 1M "] },
        { name: "Signal", values: ["1", "$25 / 1M users / signal"] },
        { name: "Rule", values: ["", "$5 / 1M execution"] },
        { name: "Query dashboard", values: ["1K", "$2 / 1K queries / month"] },
        { name: "Dashboard", values: ["1", "unlimited"] },
        { name: "Chart Builder", values: ["1", "unlimited"] },
        { name: "User Profile", values: ["1", "unlimited"] },
        { name: "Run Experiments", values: ["1", "$5 / 1M execution"] },
      ],
    },
    {
      title: "Team collaboration",
      features: [
        { name: "Messages", values: ["unlimited", "$3 per user"] },
        { name: "Space", values: ["2", "unlimited"] },
        {
          name: "Notification",
          values: [<Check key="3" size={16} />, <Check key="4" size={16} />],
        },
        { name: "Invite people", values: ["", <Check key="5" size={16} />] },
        {
          name: "Emoji reaction",
          values: [<Check key="6" size={16} />, <Check key="7" size={16} />],
        },
        {
          name: "Reply in thread",
          values: [<Check key="8" size={16} />, <Check key="9" size={16} />],
        },
        {
          name: "Status update",
          values: [<Check key="10" size={16} />, <Check key="11" size={16} />],
        },
        {
          name: "Profile Setting",
          values: [<Check key="12" size={16} />, <Check key="13" size={16} />],
        },
        { name: "Tag", values: ["5", "unlimited"] },
      ],
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl text-white font-semibold">
          Plans to power your growth
        </h1>
        <p className=" text-gray-400 mt-1 mb-16">
          Track 1M users for free. Our plans match your growth. <br />
          Enjoy 10% discount on annual payment
        </p>
      </div>

      {/* Pricing Table */}
      <div className="overflow-x-auto text-white p-4 max-w-7xl mx-auto hide-scrollbar">
        <table className="table-fixed w-full border-collapse text-sm">
          <thead className="bg-white/5">
            <tr>
              <th className="px-4 py-3 text-left font-semibold w-1/2 min-w-[280px]">
                Feature
                <br />
                <p className="text-sm font-normal text-gray-400">
                  (monthly charges)
                </p>
              </th>
              {pricingPlans.map((plan) => (
                <th
                  key={plan.name}
                  className="px-4 py-3 text-left font-semibold w-1/2 min-w-[280px]"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-semibold">{plan.name}</span>
                    <span className="text-sm text-gray-400 font-normal">
                      {plan.subtitle}
                    </span>
                    <button className="mt-2 w-fit bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-2 rounded">
                      {plan.button}
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {pricingSections.map((section) => (
              <React.Fragment key={section.title}>
                {/* Section Header Row */}
                <tr
                  className="border-t border-white/10 cursor-pointer"
                  onClick={() => toggleSection(section.title)}
                >
                  <td
                    colSpan={pricingPlans.length + 1}
                    className="px-4 py-3 font-medium text-sm text-gray-400 bg-white/5"
                  >
                    {section.title}
                  </td>
                </tr>

                {/* Conditionally Render Features */}
                {openSection === section.title &&
                  section.features.map((feature) => (
                    <tr key={feature.name}>
                      <td className="border-t border-white/10 px-4 py-3 font-medium text-sm text-gray-100">
                        {feature.name}
                      </td>
                      {feature.values.map((value, idx) => (
                        <td
                          key={idx}
                          className="border-t border-white/10 px-4 py-3 text-sm text-white"
                        >
                          {typeof value === "string" ? value : value}
                        </td>
                      ))}
                    </tr>
                  ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingAccordion;
