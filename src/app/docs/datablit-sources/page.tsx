import Button from "@/app/ui-components/Button";
import Link from "next/link";
import React from "react";

function Page() {
  const sdkData = [
    {
      name: "JavaScript SDK",
      description:
        "Complete analytics solution for web apps with event tracking, rule evaluation, and A/B testing",
      icon: "🌐",
      href: `${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/datablit-sources/js`,
      features: [
        "Event tracking & user identification",
        "Feature flags & rule evaluation",
        "A/B testing & experiments",
      ],
      color: "from-blue-500 to-purple-600",
    },
    {
      name: "Kotlin SDK",
      description:
        "Lightweight Android SDK with automatic batching, lifecycle tracking, and offline support",
      icon: "📱",
      href: `${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/datablit-sources/kotlin`,
      features: [
        "Automatic batching & offline queue",
        "App lifecycle event tracking",
        "Rule evaluation & experiments",
      ],
      color: "from-green-500 to-teal-600",
    },
    {
      name: "Swift SDK",
      description:
        "Type-safe iOS and macOS SDK with SwiftUI support, automatic lifecycle tracking, and Codable integration",
      icon: "🍎",
      href: `${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/datablit-sources/swift`,
      features: [
        "Swift Package Manager ready",
        "SwiftUI & Codable support",
        "Thread-safe with async/await",
      ],
      color: "from-orange-500 to-red-600",
    },
    {
      name: "Facebook Lead Ads",
      description:
        "Seamlessly integrate Facebook Lead Ads to automatically capture and sync lead data from your Facebook campaigns",
      icon: "🎯",
      href: `${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/datablit-sources/facebook-lead-ads`,
      features: [
        "Automatic lead data ingestion",
        "Real-time webhook integration",
        "CRM setup & configuration",
      ],
      color: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
              <span className="text-2xl">📊</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Datablit Sources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect source for your platform and start tracking
              user behavior with powerful, lightweight analytics solutions.
            </p>
          </div>
        </div>
      </div>

      {/* SDK Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sdkData.map((sdk, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full flex flex-col"
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${sdk.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              <div className="relative p-8 flex flex-col h-full">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${sdk.color} rounded-xl mb-6 text-2xl shadow-lg`}
                >
                  {sdk.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {sdk.name}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {sdk.description}
                </p>

                {/* Features */}
                <div className="flex-grow mb-8">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {sdk.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Link href={sdk.href} className="block">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full group-hover:scale-105 transition-transform duration-200"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
