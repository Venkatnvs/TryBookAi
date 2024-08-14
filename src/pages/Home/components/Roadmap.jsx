import React from 'react'

const RoadmapItem = ({ icon, title, description }) => {
  return (
    <div className="flex basis-[calc(50%-20px)] mb-10 items-start">
      <div className="w-12 h-12 bg-gradient-1 rounded-full flex justify-center items-center text-2xl text-textPrimary mr-5 flex-shrink-0">
        <i className={icon}></i>
      </div>
      <div className="flex-grow">
        <h3 className='mt-0 font-semibold'>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
};

const Roadmap = () => {
  return (
    <section id="roadmap" className="mt-[80px] rounded-sm p-[40px] bg-[rgba(255,255,255,0.05)]">
        <h2 className='mb-10 text-2xl text-white text-center font-semibold'>Roadmap</h2>
        <div className="flex flex-wrap justify-between">
          <RoadmapItem
            icon="fas fa-user-circle"
            title="Advanced Character Development"
            description="AI-powered tool for creating deep, complex characters."
          />
          <RoadmapItem
            icon="fas fa-store"
            title="E-book Platform Integration"
            description="Seamless publishing to popular e-book platforms."
          />
          <RoadmapItem
            icon="fas fa-users"
            title="Collaborative Writing"
            description="Co-create stories with other authors or AI assistants."
          />
          <RoadmapItem
            icon="fas fa-paint-brush"
            title="AI Cover Art Generation"
            description="Create stunning book covers with AI-generated art."
          />
        </div>
      </section>
)
}

export default Roadmap