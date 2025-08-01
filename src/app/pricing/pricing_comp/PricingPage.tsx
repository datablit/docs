import React from "react";
type Plan = {
  name: string;
  price: string;
  subtitle: string;
  buttonText: string;
  features: string[];
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$0",
    subtitle: "Get started with video communication",
    buttonText: "Sign up",
    features: [
      "25 videos",
      "5 minute screen recordings",
      "Unlimited meeting length",
      "Transcriptions in 50+ languages",
      "Comments and emoji reactions",
      "Comments and emoji reactions",
      "Comments and emoji reactions",
      "Comments and emoji reactions",
    ],
  },
  {
    name: "Business",
    price: "$15",
    subtitle:
      "Move work forward faster with unlimited videos and basic editing",
    buttonText: "Try for free",
    features: [
      "Unlimited videos",
      "Unlimited recording time",
      "Basic waveform editing",
      "Remove Loom branding",
      "Upload and download videos",
    ],
  },
  {
    name: "Business",
    price: "$15",
    subtitle:
      "Move work forward faster with unlimited videos and basic editing",
    buttonText: "Try for free",
    features: [
      "Unlimited videos",
      "Unlimited recording time",
      "Basic waveform editing",
      "Remove Loom branding",
      "Upload and download videos",
    ],
  },
];

const PricingPage = () => {
  return (
    <main className=" min-h-screen py-16 px-6 lg:px-20">
      <h1 className="text-2xl font-semibold text-center text-white">
        Choose your Plan
      </h1>
      <p className="text-center text-gray-300 mt-1 mb-16 ">
        Find the right lalal plan to fit your needs
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`flex flex-col rounded-xl border p-8 shadow-sm transition-all ${
              plan.highlight
                ? "shadow-md bg-blue-600 ring-2 "
                : "border-white/10 bg-black/60"
            }`}
          >
            <h2 className="text-xl font-bold text-gray-100">{plan.name}</h2>
            <p className="text-gray-300 text-sm mt-1 mb-4">{plan.subtitle}</p>
            <p className="text-3xl font-bold text-[#4747ad]">{plan.price}</p>
            <button className="mt-4 w-full text-sm font-semibold py-2 px-4 rounded bg-[#4747ad] hover:opacity-90 transition text-white shadow-md">
              {plan.buttonText}
            </button>

            <ul className="mt-6 space-y-2 text-sm text-gray-400">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-[#4747ad] mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PricingPage;
