
import { Title } from "@/app/components/Title/Title";
import { Metadata } from "next";
import { SearchResult } from "./SearchResult";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Kết quả tìm kiếm",
  description: "Project nghe nhạc trực tuyến",
};

export default function SearchPage (){
  return(
    <>
      <Title title = "Kết quả tìm kiếm" />
      <div className="grid grid-col-1 gap-[10px]">
        <Suspense>
          <SearchResult/>
        </Suspense>
      </div>
    </>
  )
}