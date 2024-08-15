import React from "react";

const MainAiDemo = () => {
  return (
    <section className="mt-20 relative">
      <div className="bg-accent dark:bg-[#ffffff0d] rounded-lg p-6 lg:p-10 text-center relative overflow-hidden">
        <img
          src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/book2.png"
          alt="AI Book Generator"
          className="max-w-full rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <div className="absolute top-5 left-5 bg-[#d8cce668] dark:bg-[#ffffff1a] backdrop-blur-sm rounded-lg p-2 flex items-center transition-opacity duration-300 ease-in-out">
          <div className="w-6 h-6 mr-2 rounded-full bg-gradient-1" />
          <img
            src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/public-assets/paradox.png"
            alt="Paradox"
            width="90px"
            height="130px"
            className="w-6 h-8 mr-2 lg:w-[90px] lg:h-[130px]"
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

export default MainAiDemo;
