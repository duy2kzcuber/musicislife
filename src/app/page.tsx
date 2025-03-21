
import { Title } from "./components/Title/Title";
import { SongItem1 } from "./components/Song/SongItem1";
import { CardCategory } from "./components/Card/CardCategory";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "../../firebaseConfig";


export default function Home() {
  const dataOfSinger: any = [];
  const dataOfSingerRef = ref(dbFirebase, 'singers');
  onValue(dataOfSingerRef, (snapshot) =>{
    const data = snapshot.val();
    data.forEach((singer: any, index: number) => {
      dataOfSinger.push(
        {
          link: `/singer/${index}`,
          description: singer.description,
          image: singer.image,
          title: singer.title
        }
      )
    });
  })
  const dataSection1: any[] = [];
  const songRef = ref(dbFirebase, 'songs');
  onValue(songRef, (snapshot) =>{
    snapshot.forEach((item: any) => {
      const data = item.val();
      const key = item.key;
      if(dataSection1.length < 3){
        // xu li doan them ten tac gia:
        let singers: string = "";
        const singerIDs: any = data.singerId;
        singerIDs.forEach((id:any,index:any) => {
          singers += dataOfSinger[id].title;
          if(index !== singerIDs.length - 1){
            singers += ", "
          }
          singers += "";
        })
        dataSection1.push({
          id: key,
          listen: `${data.listen}`,
          image: data.image,
          singer: singers,
          title: data.title,
          audio: data.audio,
          wishlist: data.wishlist
        });
      }
    });
  })
  const dataOfCategories: any = [];
  const dataOfCategoriesRef = ref(dbFirebase, 'categories');
  onValue(dataOfCategoriesRef, (snapshot) =>{
    const data = snapshot.val();
    data.forEach((item: any,id: number) => {
      dataOfCategories.push({
        link: `/categories/${id}`,
        title: item.title,
        image: item.image,
        description: item.description
      })
    })
  })
  return (
    <>
      {/* // section1 */}
      <div className="pt-[30px] flex gap-x-[20px]">
        <div className="bg-[url('/demo/section1-banner.png')] bg-no-repeat flex flex-wrap w-[55%] rounded-[15px] items-center pl-[30px] overflow-hidden h-[361px] relative"  >
          <div className="text-white w-[50%]">
            <h2 className="text-[32px] font-[700]">Nhạc EDM</h2>
            <div className="text-[14px] font-[500]">Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ</div>
          </div>
          <img src="/demo/section1-human.png" className="block relative bottom-[-20]" />
        </div>
        <div className="flex-1 gap-y-[17px] flex flex-wrap">
          <Title title="Nghe Nhiều" />
          <div className="flex gap-y-[12px] flex-wrap">
            {
              dataSection1.map((item: any, index:number) => (
                <SongItem1 item={item} key={index} />
              ))
            }
          </div>
        </div>
      </div>
      {/* Section2 */}
      <div className="mt-[30px]">
        <Title title="Danh Mục Nổi Bật" />
        <div className="grid grid-cols-5 gap-x-[20px] pt-[20px] gap-y-[10px]">
          {
            dataOfCategories.map((item: any, index:number) => (
              <CardCategory item={item} key={index} />
            ))
          }
        </div>
      </div>
      {/* section3 */}
      <div className="mt-[30px] mb-[120px]">
        <Title title="Danh Mục Nổi Bật" />
        <div className="grid grid-cols-5 gap-x-[20px] pt-[20px] gap-y-[10px] ">
          {
            dataOfSinger.map((item:any, index:number) => (
              <CardCategory item={item} key={index} />
            ))
          }
        </div>
      </div>
    </>
  );

}
