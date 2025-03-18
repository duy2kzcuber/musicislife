/* eslint-disable @typescript-eslint/no-explicit-any */
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "../../../../../firebaseConfig";
import { CardInfo } from "@/app/components/Card/CardInfo";
import { Title } from "@/app/components/Title/Title";
import { SongItem2 } from "@/app/components/Song/SongItem2";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Chi tiết ca sĩ",
  description: "Project nghe nhạc trực tuyến",
};
export default async function name(props: any) {
  const { id } = await props.params;
  let dataSinger: any = null;
  const dataSingerRef = ref(dbFirebase, `/singers/${id}`);
  onValue(dataSingerRef, (singer) => {
    dataSinger = singer.val();
  })

  const songOfSinger: any[] = [];
  const songOfSingerRef = ref(dbFirebase, `/songs/`);

  onValue(songOfSingerRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();
      if (data.singerId.includes(id)) {
        songOfSinger.push({
          id: key,
          time: data.listen,
          audio: data.audio,
          title: data.title,
          image: data.image,
          singer: dataSinger.title,
          link: `/song/${key}`,
        });
      }
    })
  });
  // console.log(songOfSinger);
  return (
    <>
      <div className="pt-[30px]">
        <CardInfo title={dataSinger.title} image={dataSinger.image} description={dataSinger.description} />
      </div>
      <div className="pt-[30px]">
        <Title title="Danh Sách Bài Hát" />
        <div>
          {
            songOfSinger.map((song, index) => (
              <SongItem2 key={index} item={song} />
            ))
          }
        </div>
      </div>
    </>
  )
}