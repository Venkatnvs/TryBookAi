import React from 'react'
import { FaPaintBrush } from 'react-icons/fa';
import { FaStore, FaUser, FaUsers } from 'react-icons/fa6';

const RoadmapItem = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start sm:basis-[calc(50%-20px)] mb-10">
      <div className="w-12 h-12 bg-gradient-1 rounded-full flex justify-center items-center text-2xl text-white mb-4 sm:mb-0 sm:mr-5 flex-shrink-0">
        <Icon />
      </div>
      <div className="flex-grow text-center sm:text-left">
        <h3 className="mt-0 text-lg text-primaryBg font-semibold">{title}</h3>
        <p className="text-md text-[#e1e1e1d0]">
          {description}
        </p>
      </div>
    </div>
  );
};

const Roadmap = () => {
  return (
    <section id="roadmap" className="mt-20 rounded-lg p-8 sm:p-12 bg-accent dark:bg-[#ffffff0d]">
        <h2 className='mb-10 text-2xl text-center text-white font-semibold'>Roadmap</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <RoadmapItem
            Icon={FaUser}
            title="Advanced Character Development"
            description="AI-powered tool for creating deep, complex characters."
          />
          <RoadmapItem
            Icon={FaStore}
            title="E-book Platform Integration"
            description="Seamless publishing to popular e-book platforms."
          />
          <RoadmapItem
            Icon={FaUsers}
            title="Collaborative Writing"
            description="Co-create stories with other authors or AI assistants."
          />
          <RoadmapItem
            Icon={FaPaintBrush}
            title="AI Cover Art Generation"
            description="Create stunning book covers with AI-generated art."
          />
        </div>
      </section>
)
}

export default Roadmap