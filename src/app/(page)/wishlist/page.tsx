import { Metadata } from "next";
import { Title } from "@/app/components/Title/Title";
import { WishList } from "./WishList";

export const metadata: Metadata = {
  title: "Bài hát yêu thích",
  description: "trang nghe nhạc trực tuyến",
};

export default function WishListPage() {

  return (
    <>
      <div className="">
        <Title title = "Bài Hát Yêu Thích"/>
        <div className="grid grid-cols-1 gap-[10px]">
          <WishList />
        </div>
      </div>
    </>
  )
}