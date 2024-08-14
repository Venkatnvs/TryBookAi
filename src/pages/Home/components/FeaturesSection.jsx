import React from 'react'

const FeaturesSection = () => {
  return (
    <section id="features" className="flex justify-around mt-[80px] flex-wrap">
          <div className="text-center flex-basis-[calc(25%-20px)] mb-[40px] transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
            <div className="w-[60px] h-[60px] bg-gradient-2 rounded-full mx-auto mb-[20px] flex justify-center items-center text-[24px] text-textPrimary">🚀</div>
            <h3>Fast &amp; Efficient</h3>
            <p>Generate books in minutes, not months.</p>
          </div>
          <div className="text-center flex-basis-[calc(25%-20px)] mb-[40px] transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
            <div className="w-[60px] h-[60px] bg-gradient-2 rounded-full mx-auto mb-[20px] flex justify-center items-center text-[24px] text-textPrimary">🔍</div>
            <h3>SEO Optimized</h3>
            <p>Books created with SEO-friendly content.</p>
          </div>
          <div className="text-center flex-basis-[calc(25%-20px)] mb-[40px] transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
            <div className="w-[60px] h-[60px] bg-gradient-2 rounded-full mx-auto mb-[20px] flex justify-center items-center text-[24px] text-textPrimary">💡</div>
            <h3>Creative Freedom</h3>
            <p>Let your imagination run wild with BookAI.</p>
          </div>
        </section>
  )
}

export default FeaturesSection