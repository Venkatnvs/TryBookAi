import React from 'react'

const MainAiDemo = () => {
  return (
    <section className="mt-[80px] relative">
          <div className="bg-[#ffffff0d] rounded-lg p-10 text-center relative overflow-hidden">
            <img
              src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/book2.png"
              alt="AI Book Generator"
              className='max-w-full rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105'
            />
            <div className="absolute top-5 left-5 bg-[#ffffff1a] backdrop-blur-sm rounded-lg p-2 flex items-center transition-opacity duration-300 ease-in-out">
            <div className="w-[24px] h-[24px] mr-2 rounded-full bg-gradient-1" />
              <img
                src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/public-assets/paradox.png"
                alt="Paradox"
                width="90px"
                height="130px"
              />
            </div>
            <div className="absolute bottom-5 right-5 bg-[#ffffff1a] backdrop-blur-sm rounded-lg p-2 flex items-center transition-opacity duration-300 ease-in-out">
              <div className="w-[24px] h-[24px] mr-2 rounded-full bg-gradient-1" />
              <span>Chapter complete</span>
            </div>
          </div>
        </section>
  )
}

export default MainAiDemo