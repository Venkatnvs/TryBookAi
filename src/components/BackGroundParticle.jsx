import React from 'react'

const BackGroundParticle = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1]">
      <div className="absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-float" style={{top: "10%", left: "20%",}}></div>
      <div className="absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-float" style={{top: "30%", left: "80%",}}></div>
      <div className="absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-float" style={{top: "70%", left: "50%",}}></div>
      <div className="absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-float" style={{top: "40%", left: "10%",}}></div>
      <div className="absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-float" style={{top: "60%", left: "90%",}}></div>
    </div>
  )
}

export default BackGroundParticle