import { FaPlay, FaHeart } from "react-icons/fa6";
import { PlayButton } from "../Button/PlayButton";
import { HeartButton } from "../Button/HeartButton";
export const SongItem1 = (props: any) => {
  const item = props.item;
  return (
    <>
      <div className="bg-dark_bg flex w-[100%] rounded-[15px] p-[10px] gap-x-[10px]">
        <div className="w-[76px] aspect-square rounded-[10px] overflow-hidden">
          <img src={item.image} />
        </div>
        <div className="flex-1 flex ">
          <div className="flex-1">
            <div className="text-white text-[16px] font-[600]">{item.title}</div>
            <div className="text-[#FFFFFF80] text-[12px] font-[400]">{item.singer}</div>
            <div className="text-white text-[12px] font-[400]">{item.listen} lượt nghe</div>
          </div>
          <div className="flex gap-[10px] text-[white] items-center" song-id={item.id}>
            <PlayButton 
              song = {item}
              class = "w-[34px] h-[34px] items-center border-[1px] border-white justify-center text-center rounded-[100%] text-[15px] flex btn-play"
              />
            <HeartButton song = {item}/>
          </div>
        </div>
      </div>
    </>
  )
} 