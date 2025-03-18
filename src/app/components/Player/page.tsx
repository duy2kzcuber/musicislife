"use client"

import { PlayerInfo } from "./PlayerInfo";
import { PlayerActions } from "./PlayerActions";
import { PlayerVolume } from "./PlayerVolume";
import { PlayerTime } from "./PlayerTime";
export const Player = () => {
  return (
    <>
      <div className="container mx-auto w-[100%] gap-x-[60px] items-center hidden play-audio">
        <audio className="hidden inner-audio">
          <source src="/" />
        </audio>
        <PlayerInfo/>
        <div className="flex-1 inner-audio">
          <PlayerActions/>
          <PlayerTime/>
        </div>
        <div className="flex items-center">
          <PlayerVolume/>
        </div>
      </div>
    </>
  )
}