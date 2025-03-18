/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "../../../../../firebaseConfig";
import { CardInfo } from "@/app/components/Card/CardInfo";
import { SongItem2 } from "@/app/components/Song/SongItem2";
import { Key } from "react";
import { Title } from "@/app/components/Title/Title";

export default async function CategoryDetailPage(props: any) {
  const { id } = await props.params;
  let dataOfThisCategory: any = null;
  const categoryRef = ref(dbFirebase, `/categories/${id}`);
  onValue(categoryRef, (item) => {
    dataOfThisCategory = item.val();
  });
  
  let songInCategory: any = [];
  const songRef = ref(dbFirebase, '/songs');
  onValue(songRef, (items) =>{
    items.forEach((item) =>{
      const key = item.key;
      const data = item.val();
      console.log(data);
      if(data.categoryId == id){
        onValue(ref(dbFirebase, '/singers/' + data.singerId[0]), (singer) =>{
          const dataSinger = singer.val();
          songInCategory.push(
            {
              id: key,
              image: data.image,
              title: data.title,
              singer: dataSinger.title,
              link: `/song/${key}`,
              time: "4:32",
              audio: data.audio
            }
          )
        })
      }
      // console.log(data);
    })
  })
  return (
    <div className="pt-[30px] ">
      <CardInfo
        image={dataOfThisCategory.image}
        title={dataOfThisCategory.title}
        description={dataOfThisCategory.description}
      />
      <div className="grid grid-col-1 gap-[10px] pt-[30px]">
        <Title title = "Danh sách bài hát" className = "pb-[20px]"/>
        {songInCategory.map((item: any,index: any) => (
          <SongItem2 
            item = {item}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}