"use client"

import { IoVolumeHigh } from "react-icons/io5"

export const PlayerVolume = () => {
  const handleChangeVolume = () =>{

    const volumeBar: any = document.querySelector(".volumeBar");
    if(volumeBar){
      const elementPlayerAudio: any = document.querySelector(".play-audio");
      const elementAudio: any = elementPlayerAudio.querySelector(".inner-audio");
      elementAudio.volume = volumeBar.value / 100;
    }
    
  }

  return (

    <>
      <div className="text-white text-[20px]">
        <IoVolumeHigh />
      </div>
      <input min={0} max={100} defaultValue={100} type="range" className="h-[8px] range-sm volumeBar" onChange={handleChangeVolume}/>
    </>
  )
}