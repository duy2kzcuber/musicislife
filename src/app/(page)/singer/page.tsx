import { Title } from "@/app/components/Title/Title";
import { dbFirebase } from "../../../../firebaseConfig";
import { onValue, ref } from "firebase/database";
import { SongItem2 } from "@/app/components/Song/SongItem2";
import { CardInfo } from "@/app/components/Card/CardInfo";
import { CardCategory } from "@/app/components/Card/CardCategory";

export default function Singer() {
  const singerRef = ref(dbFirebase, '/singers');
  const dataFinal: any[] = [];
  onValue(singerRef, (singers) => {
    singers.forEach((singer) => {
      const key = singer.key;
      const data = singer.val();
      dataFinal.push(
        {
          title: data.title,
          image: data.image,
          description:data.description,
          link : `/singer/${key}`
        }
      );
  })
  
})
return (
  <div className="mt-[30px]">
    <Title title="Danh Sách Ca Sĩ" />
    <div className="grid grid-cols-5 gap-x-[20px] gap-y-[25px] mt-[20px]">
      {
        dataFinal.map((item, index) => (
          <CardCategory key={index} item={item} />
        ))
      }
    </div>
  </div>
)
}