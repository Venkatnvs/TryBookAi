import React from "react";

const VideoSample = () => {
  return (
    <section className="mt-20 relative">
      <div className="bg-accent dark:bg-[#ffffff0d] rounded-lg p-6 lg:p-10 text-center relative overflow-hidden">
        <div
          style={{
            paddingBottom: "calc(47.46527777777778% + 41px)",
          }}
          className="relative w-full h-0"
        >
          <iframe
            src="https://demo.arcade.software/OvUdnIEhwNxssQsB3COY?embed&amp;show_copy_link=true"
            title="BookAI: Revolutionary AI-Powered Book Generation | Create Professional Books in Minutes"
            frameBorder="0"
            loading="lazy"
            webkitallowfullscreen=""
            mozallowfullscreen=""
            allowFullScreen=""
            allow="clipboard-write"
            style={{
              colorScheme: "light",
            }}
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
        <div className="absolute bottom-5 right-5 bg-[#d8cce668] dark:bg-[#ffffff1a] backdrop-blur-sm rounded-lg p-2 flex items-center transition-opacity duration-300 ease-in-out">
          <div className="w-5 h-5 mr-2 rounded-full bg-gradient-1" />
          <span className="text-sm sm:text-base text-white">Chapter complete</span>
        </div>
      </div>
    </section>
  );
};

export default VideoSample;
