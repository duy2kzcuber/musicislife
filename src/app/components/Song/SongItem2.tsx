/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaPlay, FaRegHeart } from "react-icons/fa6";
import { PlayButton } from "../Button/PlayButton";
import { HeartButton } from "../Button/HeartButton";

export const SongItem2 = (props: { item: any }) => {
  const { item } = props;
  console.log(item);
  return (
    <>
      <div className="flex items-center justify-between bg-[#212121] py-[10px] px-[18px] rounded-[15px] w-[100%]">
        {/* Left */}
        <div className="w-[40%] flex items-center">
          <PlayButton
            song={item}
            class="w-[34px] h-[34px] items-center  justify-center text-center rounded-[100%] text-[15px] flex text-[white]"
          />
          <div className="w-[42px] aspect-square rounded-[8px] truncate mx-[12px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-[700] text-[14px] text-white">
            <Link href={item.link}>
              {item.title}
            </Link>
          </div>
        </div>

        {/* Center */}
        <div className="w-[30%] text-center">
          <div className="font-[400] text-[14px] text-white">
            {item.singer}
          </div>
        </div>

        {/* Right */}
        <div className="w-[30%] flex items-center justify-end">
          <div className="font-[400] text-[14px] text-white mr-[18px]">
            {item.time}
          </div>
          <HeartButton song = {item}/>
        </div>
      </div>
    </>
  )
}