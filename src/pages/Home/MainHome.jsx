import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HeroSection from "./components/HeroSection";
import MainAiDemo from "./components/MainAiDemo";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorks from "./components/HowItWorks";
import BookSamples from "./components/BookSamples";
import VideoSample from "./components/VideoSample";
import Roadmap from "./components/Roadmap";
import Testimonal from "./components/Testimonal";
import NewsLetter from "./components/NewsLetter";
import BackGroundParticle from "../../components/BackGroundParticle";
import FindUsWidget from "../../components/FindUsWidget";
import ThreeJsBackGround from "../../components/ThreeJsBackGround";

const MainHome = () => {
  return (
    <>
      <div className="lg:w-[90%] max-w-[1400px] mx-auto p-5">
        <Navbar />

        <ThreeJsBackGround />

        <HeroSection />

        <MainAiDemo />

        <FeaturesSection />

        <HowItWorks />

        <BookSamples />

        <VideoSample  />

        <Roadmap />

        <Testimonal />

        <NewsLetter />

        <BackGroundParticle />

        <FindUsWidget />

        <Footer />
      </div>
    </>
  );
};

export default MainHome;
