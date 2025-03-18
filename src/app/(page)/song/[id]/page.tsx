import { CardInfo } from "@/app/components/Card/CardInfo";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "../../../../../firebaseConfig";
import { SongItem2 } from "@/app/components/Song/SongItem2";
import { SongItem1 } from "@/app/components/Song/SongItem1";

export default async function SongDetail(props: any){
  const { id } = await props.params;
  console.log(id);
  let dataOfSong: any = null;
  const dataOfSongRef = ref(dbFirebase, '/songs/' + id);
  onValue(dataOfSongRef, (snapshot) => {
    dataOfSong = snapshot.val();

    let singerNames: any = "";
    const singerIds: any = dataOfSong.singerId;
  
    singerIds.forEach((singerId: any, index: number) => {
      onValue(ref(dbFirebase, '/singers/' +singerId ), (snapshot) =>{
        const data = snapshot.val();
        singerNames += data.title ;
        if(index != singerIds.length - 1) singerNames += ", ";
      })
    });
    dataOfSong.singerNames = singerNames;
  })

  // lấy ra bài hát có cùng chủ đề
  const categoryId = await dataOfSong.categoryId;
  console.log(categoryId);
  let dataOfRelatedSong: any = [];
  onValue(ref(dbFirebase, '/songs'), (snapshot) =>{
    const data = snapshot.val();
    const key = snapshot.key;
    console.log(key);
    data.forEach((item: any) =>{
      if(item.categoryId.includes(categoryId)){
        let singerNames: any = "";
        const singerIds: any = item.singerId;
      
        singerIds.forEach((singerId: any, index: number) => {
          onValue(ref(dbFirebase, '/singers/' +singerId ), (snapshot) =>{
            const data = snapshot.val();
            singerNames += data.title ;
            if(index != singerIds.length - 1) singerNames += ", ";
          })
        });
        dataOfRelatedSong.push(
          { 
            time: '123',
            audio: item.audio,
            title: item.title,
            image: item.image,
            link: `/song/${key}`,
            singer: singerNames,
            wishlist: item.wishlist
          }
        );
      }
    })

  })
  console.log(dataOfRelatedSong);
  return(
    <>
      <div>
        <div className="pt-[30px]">
          <CardInfo image={dataOfSong.image} title={dataOfSong.title} description={dataOfSong.singerNames}/>
        </div>
        <div className="mt-[30px] ">
          <h2 className="text-[24px] font-[700] text-[#EFEEE0]">Lời bài hát</h2>
          <div className="bg-[#212121] p-[20px] text-[#FFFFFF] rounded-[15px]">
            {dataOfSong.lyric}
          </div>
        </div>
        <div className="mt-[30px] ">
          <h2 className="text-[24px] font-[700] text-[#EFEEE0]">Bài hát cùng danh mục</h2>
          <div className="flex gap-y-[10px] flex-wrap">
          {
            dataOfRelatedSong.map((song, index) => (
              <SongItem2 key={index} item={song} />
            ))
          }
        </div>
        </div>
      </div>
    </>
  )
}