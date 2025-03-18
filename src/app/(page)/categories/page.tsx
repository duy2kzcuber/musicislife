import { Title } from "@/app/components/Title/Title";
import { getDatabase, onValue, ref } from "firebase/database";
import { dbFirebase } from "../../../../firebaseConfig";
import { CardCategory } from "@/app/components/Card/CardCategory";
export default function Category() {
  const categoryRef = ref(dbFirebase, 'categories');
  const dataFinal: any[] = [];
  onValue(categoryRef, (snapshot) =>{
    snapshot.forEach((item) =>{
      const data = item.val();
      const key = item.key;
      dataFinal.push(
        {
          id: key,
          description : data.description,
          image : data.image,
          title :data.title,
          link: `categories/${key}`
        }
      )
    })

  })
  return (
    <div className="pt-[30px]">
      <Title title="Danh mục bài hát" />
      <div className="grid grid-cols-5 gap-[20px]">
        {
          dataFinal.map((item,index) => (
            <CardCategory 
              item = {item}
              key = {index}
            />
          ))
        }
      </div>
    </div>
  )
}