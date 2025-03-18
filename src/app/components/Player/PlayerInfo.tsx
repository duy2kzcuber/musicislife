export const PlayerInfo = () => {
  return (
    <>
      <div className=" flex gap-[13px]">
        <div className="w-[49px] aspect-square rounded-[14px] overflow-hidden">
          <img src="/" className="playing-image"/>
        </div>
        <div className="text-[700]">
          <div className="text-white text-[15px] playing-title"></div>
          <div className="text-[#FFFFFF70] text-[12px] playing-author"></div>
        </div>
      </div>
    </>
  )
}