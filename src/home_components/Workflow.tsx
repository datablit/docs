import React from "react";

const Workflow = () => {
  return (
    <section className="px-4">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* left side */}
        <div>
          <div className="bg-white/10 text-xs text-white px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md w-fit">
            Workflow
          </div>
          <h1 className="text-2xl text-white font-semibold mt-6">
            Hyper Personalisation at Scale
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mt-4">
            Respond to user behavior as it happens. Create automated realtime
            response or action based on trigger, action and logic.
          </p>
          <a
            href="#"
            className="text-[#4747AD] font-medium inline-flex items-center gap-1 hover:underline"
          >
            Learn more →
          </a>
          <h1
            className="text-xl bg-clip-text
          text-purple-500 
  font-semibold mt-3"
          >
            COMING SOON
          </h1>
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
            <source
              src="https://a.slack-edge.com/d20cf6d/marketing/img/features/ai/lp/df/ui/video-ui-ai-03.IN.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
