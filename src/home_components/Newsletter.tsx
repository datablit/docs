import React from "react";

const Newsletter = () => {
  return (
    <section className="px-4 mb-14 text-center justify-center ">
      <div className="text-white w-full ">
        <h1 className="text-2xl font-semibold mt-6 text-white">
          Subscribe to our Newsletter
        </h1>
        <p className="text-md md:text-lg text-gray-400 mt-1">
          Get weekly update and first to know about our products
        </p>

        <form className="flex flex-col sm:flex-row gap-2 mt-6 w-full items-center justify-center">
          <input
            type="email"
            placeholder="Enter a valid email address"
            className="w-[500px] px-4 py-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition"
          />
          <button
            type="submit"
            className=" px-6 py-3 bg-[#4747AD] text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
