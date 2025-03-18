"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";

export function Search(){
  const router = useRouter();
 const handleSearch = (event:any) =>{
  event.preventDefault();
  const keyword = event.target.keyword.value.trim();
  if(keyword !== ""){
    router.push(`/search?keyword=${keyword}`);
  }
 }
  return(
    <>
      <form className="bg-dark_bg text-white rounded-[50px]  flex sticky search-frm mb-[30px]" onSubmit={handleSearch}>
        <input name="keyword" placeholder="Tìm kiếm..." className=" pl-[35px] bg-transparent flex-1  py-[15px] h-[100%] cursor-pointer rounded-[50px] search-bar outline-none" />
        <button 
          type="submit"
          className="order-1 text-[22px] text-white mr-[20px]"
        >
         <FaMagnifyingGlass />
         </button>
      </form>
    </>
  )
}