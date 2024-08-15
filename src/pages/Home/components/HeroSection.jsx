import React from "react";

const HeroSectionButton = ({ href, text }) => {
  return (
    <a
      href={href}
      className="m-1 inline-block
        bg-gradient-1
        text-dark-textPrimary
        no-underline
        py-3 px-8
        rounded-full
        font-semibold
        transition-transform duration-300
        hover:translate-y-[-3px]
        dark:bg-gradient-1
        dark:hover:translate-y-[-3px]
        "
    >
      {text}
    </a>
  );
};

const HeroSection = () => {
  return (
    <section className="relative z-10 text-center pt-10 lg:pt-20 pb-0 px-4 sm:px-6 lg:px-8 min-h-[60vh]">
      <h1 className="text-4xl sm:text-4xl lg:text-5xl mb-5 font-semibold leading-tight">
        Explore the Possibilities of{" "}
        <span className="highlight">AI Book Writing</span> with BookAI
      </h1>
      <p className="text-base sm:text-lg lg:text-xl max-w-[90%] sm:max-w-[600px] mx-auto mb-10 text-textSecondary dark:text-dark-textSecondary">
        Unleash the power of AI to create captivating books in minutes.
        Download, Distribute wherever you want. Generate unlimited free books
      </p>
      <div className="flex flex-col sm:flex-col lg:flex-row justify-center">
        <HeroSectionButton href="/playground" text="Get Started" />
        <HeroSectionButton href="/api" text="Get API Access" />
      </div>
    </section>
  );
};

export default HeroSection;
