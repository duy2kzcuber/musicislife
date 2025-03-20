"use client"
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react"
import { auth, dbFirebase } from "../../../../firebaseConfig";
import { onValue, ref, get } from "firebase/database";
import { SongItem2 } from "@/app/components/Song/SongItem2";

export const WishList = () => {
  const [dataFinal, setDataFinal] = useState<any[]>([]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const tempData: any = [];
        const uid = user.uid;

        const fetchData = async () => {
          const data = await get(ref(dbFirebase, 'songs'));
          data.forEach((song: any) => {
            const key = song.key;
            const songData = song.val();
            console.log(songData.wishlist);
            if (songData.wishlist) {
              if (songData.wishlist[uid]) {
                tempData.push(
                  {
                    id: key,
                    image: songData.image,
                    title: songData.title,
                    link: `/song/${key}`,
                    time: "4:32",
                    singer: "",
                    wishlist: {[uid]: songData.wishlist[uid]}
                    
                  }
                )
              }
            }
          });
          setDataFinal(tempData);
        }

        fetchData();
      }
    })
  }, []);
  return (
    <>
      {dataFinal && (
        <>
          {dataFinal.map((item:any, index: number) =>(
              <SongItem2 key={index} item={item}/>
            ))
          }
        </>
      )
      }
    </>
  )
}