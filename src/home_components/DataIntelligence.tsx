import React from "react";

const DataIntelligence = () => {
  return (
    <section className="px-4">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* left side */}
        <div>
          <div className="bg-white/10 text-xs text-white px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md w-fit">
            Data
          </div>
          <h1 className="text-2xl text-white font-semibold mt-6">
            Data Intelligence that Drives Growth
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mt-4">
            Track, analyze, and visualize customer data to uncover insights and
            support strategic business decision.
          </p>
          <a
            href="#"
            className="text-[#4747AD] font-medium inline-flex items-center gap-1 hover:underline"
          >
            Learn more →
          </a>
        </div>
        {/* right side */}
        <div className="w-full max-w-xl rounded-xl overflow-hidden shadow-xl border border-gray-200">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          >
            <source src="/analysissql.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default DataIntelligence;
