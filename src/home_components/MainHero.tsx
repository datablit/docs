import React from "react";

const MainHero = () => {
  return (
    <section className="pt-16 text-white flex flex-col justify-center items-center relative px-4">
      <div className="absolute top-28">
        <button className="bg-white/10 text-sm text-white px-4 py-2 rounded-full border border-white/20 backdrop-blur-md">
          🎉 Download our latest report on productivity and AI
        </button>
      </div>

      <div className="text-center mt-20 md:mt-32">
        <h2 className="text-xl md:text-4xl font-semibold leading-tight text-gray-200">
          <span className="text-white">
            Customer Data Platform for Strategic Decisions
          </span>
          <br />
          <span>and Real-Time Personalized Actions</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-400 mt-6">
          A unified platform for real-time data ingestion, rule-based actioning,
          <br />
          and persistent event intelligence—empowering your business to react
          faster and plan smarter
        </p>
      </div>
      <div className="mt-10 text-center space-x-4">
        <button className=" px-6 py-3 bg-[#4747AD] text-white font-semibold rounded-md hover:opacity-90 transition">
          Try Datablit
        </button>
        <button className=" px-6 py-3 bg-black border-[0.5px] border-[#4747AD] hover:bg-[#4747AD] text-white font-semibold rounded-md hover:opacity-90 transition">
          Watch Demo
        </button>
      </div>
    </section>
  );
};

export default MainHero;

{
  /* <button className=" px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-md hover:opacity-90 transition">
Try Datablit
</button> */
}
