"use client"

import {  FaPause, FaPlay } from "react-icons/fa6"
import { IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5"


export const PlayerActions = () => {
  const handlePlay = () =>{
    const elementPlayerAudio: any = document.querySelector(".play-audio");
    const elementAudio: any = elementPlayerAudio.querySelector(".inner-audio");
    const elementButtonPlay: any = elementPlayerAudio.querySelector(".inner-button-play");
    if(elementButtonPlay.classList.contains("playing")){
      elementAudio.pause();
      elementButtonPlay.classList.remove("playing");
    }
    else{
      elementAudio.play();
      elementButtonPlay.classList.add("playing");
    }
  }
  return (
    <>
      <div className="flex justify-center gap-[42px] items-center mb-[10px]">
        <IoPlaySkipBackSharp className="text-[16px] text-white" />
        <button className="w-[32px] aspect-square text-white flex items-center text-center justify-center bg-blue_txt rounded-[100%] inner-button-play" onClick={handlePlay}>
          <FaPlay className="inner-playing-icon"/>
          <FaPause className="inner-pause-icon"/>
        </button>
        <IoPlaySkipForward className="text-[16px] text-white" />
      </div>
      
    </>
  )
}