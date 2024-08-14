import React from "react";

const HeroSection = () => {
  return (
    <section className="relative z-10 text-center pt-20 pb-0 pl-5 min-h-[60vh]">
      <h1 className="text-5xl mb-5 leading-tight font-semibold">
        Explore the Possibilities of{" "}
        <span className="highlight">AI Book Writing</span> with BookAI
      </h1>
      <p className="text-[20px] max-w-[600px] mx-auto mb-10 text-textSecondary dark:text-dark-textSecondary">
        Unleash the power of AI to create captivating books in minutes.
        Download, Distribute wherever you want. Generate unlimited free books
      </p>
      <a href="/playground" className="
      mx-1
        inline-block
        bg-gradient-to-r from-gradient-1 to-gradient-1
        text-textPrimary dark:text-dark-textPrimary
        no-underline
        py-3 px-8
        rounded-full
        font-semibold
        transition-transform duration-300
        hover:translate-y-[-3px]
        dark:bg-gradient-2
        dark:hover:translate-y-[-3px]
      ">
        Get Started
      </a>
      <a href="/api" className="mx-1 inline-block
        bg-gradient-to-r from-gradient-1 to-gradient-1
        text-textPrimary dark:text-dark-textPrimary
        no-underline
        py-3 px-8
        rounded-full
        font-semibold
        transition-transform duration-300
        hover:translate-y-[-3px]
        dark:bg-gradient-2
        dark:hover:translate-y-[-3px]">
        Get API Access
      </a>
    </section>
  );
};

export default HeroSection;
