import React from "react";

const Highlight = () => {
  return (
    <section className="py-20 px-6 text-center justify-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 ml-6 text-white">
          Adopt Datablit to Save
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full">
          {/* Cost Saving */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              60%
            </h3>
            <p className="text-gray-400 text-xl mt-3">Cost </p>
          </div>

          {/* Effort Saving */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              4000+ hrs
            </h3>
            <p className="text-gray-400 text-xl mt-3">Effort </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
