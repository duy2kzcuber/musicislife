"use client"
export const PlayerTime = () =>{
  const handleChangeTimeBar = (event: any) =>{
    const timeBarTotal = event.target;
    if(timeBarTotal){
      
      const elementPlayerAudio: any = document.querySelector(".play-audio");
      const elementAudio: any = elementPlayerAudio.querySelector(".inner-audio");
      const val = parseFloat(timeBarTotal.value );
      elementAudio.currentTime = val;
    }
  }
  return(
    <>
      <div className="h-[4px] w-[0] bg-[#00ADEF] rounded-[50px] absolute left-0 top-[13px] timeBar-current"></div>
      <input min={0} max={0} type="range" defaultValue={12} className="w-[100%] range-sm timeBar-total" onChange={handleChangeTimeBar}/>
    </>
  )
}