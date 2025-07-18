import React from "react";

const Newsletter = () => {
  return (
    <section className="px-4 ">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 w-full">
        {/* top */}
        <div className="text-white">top</div>

        {/* bottom */}
        <div className="text-white w-full">
          <h1 className="text-2xl font-semibold mt-6 text-white">
            Subscribe to our Newsletter
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mt-1">
            Update sales proposals, set team reminders, resolve IT issues and so
            much more with always-on, action-taking AI agents in Slack.
          </p>

          <form className="flex flex-col sm:flex-row gap-2 mt-6 w-full">
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
      </div>
    </section>
  );
};

export default Newsletter;
