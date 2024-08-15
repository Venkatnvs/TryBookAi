import React from "react";
import { FaPencil, FaWandMagicSparkles } from "react-icons/fa6";
import { FaCheckCircle, FaCogs } from "react-icons/fa";

const HowItWorksItem = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start sm:basis-[calc(50%-20px)] mb-10">
      <div className="w-12 h-12 bg-gradient-1 rounded-full flex justify-center items-center text-2xl text-white mb-4 sm:mb-0 sm:mr-5 flex-shrink-0">
        <Icon />
      </div>
      <div className="flex-grow text-center sm:text-left">
        <h3 className="mt-0 text-lg font-semibold text-primaryBg">{title}</h3>
        <p className="text-md text-[#e1e1e1d0]">
          {description}
        </p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="mt-20 rounded-lg p-8 sm:p-12 bg-accent dark:bg-[#ffffff0d]"
    >
      <h2 className="mb-10 text-3xl text-center font-semibold text-primaryBg">
        How It Works
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        <HowItWorksItem
          Icon={FaWandMagicSparkles}
          title="Choose Your Genre"
          description="Select from a wide range of genres or create a custom blend."
        />
        <HowItWorksItem
          Icon={FaPencil}
          title="Provide Key Details"
          description="Input main characters, plot points, or themes to guide the AI."
        />
        <HowItWorksItem
          Icon={FaCogs}
          title="AI Generation"
          description="Our advanced AI creates your book based on your inputs."
        />
        <HowItWorksItem
          Icon={FaCheckCircle}
          title="Review and Download"
          description="Review your generated book and download in your preferred format."
        />
      </div>
    </section>
  );
};

export default HowItWorks;
