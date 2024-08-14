import React from 'react'
import { MainLogoImage } from '../constants/Images'

const MainLogo = () => {
  return (
    <div className="text-2xl font-bold flex items-center">
      <div className="w-[24px] h-[24px] mr-2 rounded-full bg-gradient-1" />
        <img src={MainLogoImage}
        width="50px"
        alt="BookAI Logo"/>
        BookAI
    </div>
  )
}

export default MainLogo