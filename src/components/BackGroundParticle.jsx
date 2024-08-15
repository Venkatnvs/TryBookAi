import React from "react";

const Particle = ({top, left}) => {
  return (
    <div
      className="absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-float"
      style={{ top: top, left: left }}
    ></div>
  );
};

const BackGroundParticle = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1]">
      <Particle top="10%" left="20%" />
      <Particle top="30%" left="80%" />
      <Particle top="70%" left="50%" />
      <Particle top="40%" left="10%" />
      <Particle top="60%" left="90%" />
    </div>
  );
};

export default BackGroundParticle;
