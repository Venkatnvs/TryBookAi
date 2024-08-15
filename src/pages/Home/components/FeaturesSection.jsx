import React from "react";
import { FaBook, FaDownload, FaLanguage, FaRobot } from "react-icons/fa6";

const FeatureItem = ({ Icon, title, description }) => {
  return (
    <div 
      className="text-center flex-1 min-w-[200px] mb-8 transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
      <div 
        className="w-16 h-16 bg-gradient-2 rounded-full mx-auto mb-4 flex justify-center items-center text-3xl text-white">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-base text-gray-700 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="mt-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-6">
        <FeatureItem
          Icon={FaRobot}
          title="AI-Powered Writing"
          description="Generate high-quality content with advanced AI technology."
        />
        <FeatureItem
          Icon={FaBook}
          title="Custom Genres"
          description="Create stories in any genre or blend multiple styles."
        />
        <FeatureItem
          Icon={FaDownload}
          title="Instant Download"
          description="Get your completed book in various formats instantly."
        />
        <FeatureItem
          Icon={FaLanguage}
          title="Multilingual"
          description="Generate content in multiple languages effortlessly."
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
