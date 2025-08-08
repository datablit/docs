import React from "react";

const Collaboration = () => {
  return (
    <section className="px-4">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* left side */}
        <div>
          <div className="bg-white/10 text-xs text-white px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md w-fit">
            Space
          </div>
          <h1 className="text-2xl text-white font-semibold mt-6">
            Collaborate Seamlessly with Teams & Partners
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mt-4">
            Connect with teammates and invite external organizations into the
            conversation. Share ideas, manage tasks, and stay aligned, from
            start to finish.
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
            <source src="/messagemain.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
