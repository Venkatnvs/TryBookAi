import React from "react";

const VideoSample = () => {
  return (
    <section className="mt-[80px] relative">
      <div className="bg-[#ffffff0d] rounded-lg p-10 text-center relative overflow-hidden">
        <div
          style={{
            position: "relative",
            paddingBottom: "calc(47.46527777777778% + 41px)",
            height: 0,
            width: "100%",
          }}
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
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              colorScheme: "light",
            }}
          />
        </div>
        <div className="absolute bottom-5 right-5 bg-[#ffffff1a] backdrop-blur-sm rounded-lg p-2 flex items-center transition-opacity duration-300 ease-in-out">
          <div className="w-[24px] h-[24px] mr-2 rounded-full bg-gradient-1" />
          <span>Chapter complete</span>
        </div>
      </div>
    </section>
  );
};

export default VideoSample;
