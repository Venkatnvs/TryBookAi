import React from 'react'

const HowItWorksItem = ({icon, title, description}) => {
  return (
    <div className="flex basis-[calc(50%-20px)] mb-10 items-start">
      <div className="w-12 h-12 bg-gradient-1 rounded-full flex justify-center items-center text-2xl text-textPrimary mr-5 flex-shrink-0">
      <i className={icon}></i>
      </div>
      <div className="flex-grow">
        <h3 className='mt-0 font-semibold'>{title}</h3>
        <p>
          {description}
        </p>
      </div>
    </div>
  )
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="mt-[80px] rounded-sm p-[40px] bg-[rgba(255,255,255,0.05)]">
        <h2 className='mb-10 text-2xl text-white text-center font-semibold'>How It Works</h2>
        <div className="flex flex-wrap justify-between">
          <HowItWorksItem
            icon="fas fa-magic"
            title="Choose Your Genre"
            description="Select from a wide range of genres or create a custom blend."
          />
          <HowItWorksItem
            icon="fas fa-pencil-alt"
            title="Provide Key Details"
            description="Input main characters, plot points, or themes to guide the AI."
          />
          <HowItWorksItem
            icon="fas fa-cogs"
            title="AI Generation"
            description="Our advanced AI creates your book based on your inputs."
          />
          <HowItWorksItem
            icon="fas fa-check-circle"
            title="Review and Download"
            description="Review your generated book and download in your preferred format."
          />
        </div>
      </section>
  )
}

export default HowItWorks