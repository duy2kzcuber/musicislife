"use client"
import { FaPlay } from "react-icons/fa6"

export const PlayButton = (props: any) => {
  const _class = props.class;
  const song = props.song;
  // console.log(song);
  const handlePlay = () => {
    const elementPlayerAudio = document.querySelector(".play-audio");
    // phat nhac
    if(elementPlayerAudio){
      const song = props.song;
      const elementAudio: any = elementPlayerAudio.querySelector(".inner-audio");
      const elementSource: any = elementPlayerAudio.querySelector("source");
      if(elementSource){
        elementSource.src = song.audio;
      }
      
      if(elementAudio){
        elementAudio.load();
        elementAudio.play();
        const elementButtonPlay: any = elementPlayerAudio.querySelector(".inner-button-play");
        elementButtonPlay.classList.add("playing");
      }
      // hiển thị khối play nhạc
      elementPlayerAudio.classList.remove("hidden");
      elementPlayerAudio.classList.add("flex");

      // hiển thị thông tin bài đang phát
      const ElementSongImg: any = elementPlayerAudio.querySelector(".playing-image");
      ElementSongImg.src = song.image;
      const ElementSongTitle: any = elementPlayerAudio.querySelector(".playing-title");
      ElementSongTitle.innerHTML = song.title;
      const ElementSongAuthor: any = elementPlayerAudio.querySelector(".playing-author");
      ElementSongAuthor.innerHTML = song.singer;

      //Láy thông tin tổng thời gian
      const timeBarCurrent: any = elementPlayerAudio.querySelector(".timeBar-current");
      const timeBarTotal: any = elementPlayerAudio.querySelector(".timeBar-total");
      console.log(timeBarCurrent);
      console.log(timeBarTotal);
      elementAudio.onloadedmetadata = () =>{
        const totalTime = elementAudio.duration;
        timeBarTotal.max = totalTime;
        elementAudio.ontimeupdate = () =>{
          const currentTime = elementAudio.currentTime;
          const percent = currentTime / totalTime *100;
          timeBarCurrent.style.witdh = `${percent}%`;
          timeBarTotal.value = currentTime;
        }
      }
      // xóa class active cho bài hát trước đó
      const elementSongOld = document.querySelector(`.active`);
      if(elementSongOld){
        elementSongOld.classList.remove("active");
      }
      // thêm class active cho bài hát đang phát
      const elementSong = document.querySelector(`[song-id="${song.id}"]`);
      elementSong?.classList.add("active");
      console.log(elementSong);
    }
  }
  
  return (
    <>
      <button className={_class} onClick={handlePlay}>
        <FaPlay/>
      </button>
    </>
  )
}