"use client"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { dbFirebase } from "../../../../firebaseConfig";
import { SongItem2 } from "@/app/components/Song/SongItem2";
export const SearchResult = () => {
  const searchParam = useSearchParams();
  const keyword = searchParam.get("keyword")?.toLowerCase();

  const [dataFinal, setDataFinal] = useState(null);
  useEffect(() => {
    const data: any = [];
    const fetchData = async () => {
      const items = await get(child(ref(dbFirebase), 'songs'));
      items.forEach((item: any) => {
        const key = item.key;
        const currentItem = item.val();
        const title = currentItem.title.trim().toLowerCase();
        if (title.includes(keyword)) {

          let singerNames: any = "";
          const singerIds: any = currentItem.singerId;

          singerIds.forEach((singerId: any, index: number) => {
            onValue(ref(dbFirebase, '/singers/' + singerId), (snapshot) => {
              const data = snapshot.val();
              singerNames += data.title;
              if (index != singerIds.length - 1) singerNames += ", ";
            })
          });

          data.push(
            {
              id: key,
              image: currentItem.image,
              title: currentItem.title,
              link: `/song/${key}`,
              time: "4:32",
              singer: singerNames,
              audio: currentItem.audio
            }
          )
        }
      })
      setDataFinal(data);
    }

    fetchData();
  }, [keyword]);
  return (
    <>
      {
        dataFinal && (
          <>
            {
              dataFinal.map((item: any, index: number) => (
                <SongItem2 key={index} item={item} />
              ))
            }
          </>
        )
      }
    </>
  )
} 