import Button from "@/app/ui-components/Button";
import Link from "next/link";
import React from "react";

function Page() {
  const sdkData = [
    {
      name: "JavaScript SDK",
      description:
        "Integrate analytics into your web applications with our powerful JavaScript SDK",
      icon: "⚡",
      href: `${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/datablit-sdk/js`,
      features: [
        "Browser & Node.js support",
        "TypeScript ready",
        "Real-time tracking",
      ],
      color: "from-blue-500 to-purple-600",
    },
    {
      name: "Kotlin SDK",
      description:
        "Native Android analytics integration with our Kotlin SDK for mobile apps",
      icon: "🤖",
      href: `${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/datablit-sdk/kotlin`,
      features: ["Android native", "Coroutines support", "Offline tracking"],
      color: "from-green-500 to-teal-600",
    },
    {
      name: "Swift SDK",
      description: "iOS and macOS analytics made simple with our Swift SDK",
      icon: "🍎",
      href: `${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/datablit-sdk/swift`,
      features: ["iOS & macOS support", "SwiftUI ready", "Background sync"],
      color: "from-orange-500 to-red-600",
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
              Datablit SDK
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect SDK for your platform and start tracking user
              behavior with powerful, lightweight analytics solutions.
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
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${sdk.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              <div className="relative p-8">
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
                <div className="mb-8">
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

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Getting Started?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our comprehensive documentation and examples will help you
              integrate analytics into your application in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`${process.env.NEXT_PUBLIC_DOCS_BASE_PATH}/getting-started`}
              >
                <Button variant="primary" size="lg">
                  View Documentation
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
