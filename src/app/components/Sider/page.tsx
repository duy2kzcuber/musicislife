"use client"
import Link from "next/link"
import { IoMdHome } from "react-icons/io";
import { IoMusicalNotes } from "react-icons/io5";
import { FaPodcast,FaHeart} from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import { MdLogout } from "react-icons/md";
import { usePathname } from "next/navigation";
import { auth } from "../../../../firebaseConfig";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { MenuItem } from "./MenuItem";
export const  Sider = () => {
  
  const _auth = auth;
  const [isLogin,setLogin] = useState(false);
  const menu = [
    {
      icon: <><IoMdHome/></> ,
      title: "Trang chủ",
      link: "/"
    },
    {
      icon: <><IoMusicalNotes/></> ,
      title: "Danh mục bài hát",
      link: "/categories"
    },
    {
      icon: <><FaPodcast /></> ,
      title: "Ca sĩ",
      link: "/singer"
    },
    {
      icon: <><FaHeart/></> ,
      title: "Bài hát yêu thích",
      link: "/wishlist",
      isLogin: true,
    },
    {
      icon: <><MdLogout /></> ,
      title: "Đăng xuất",
      link: "/logout",
      isLogin: true
    },
    {
      icon: <><FaUser/></> ,
      title: "Đăng nhập",
      link: "/login",
      isLogin: false
    },
    {
      icon: <><TiUserAdd/></> ,
      title: "Đăng ký",
      link: "/register",
      isLogin: false
    },
  ]
  useEffect(() =>{
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    });
  })
  return(
    <>
      <div className="bg-gary-bg h-[100vh] bg-[#212121] fixed w-[280px]">
        <div className="flex gap-[12px] py-[25px] bg-[#1C1C1C] pl-[20px]">
          <img 
            src="/Logo.svg"
            alt="Logo"
            className=""
          />
          <div className="text-[24px] text-blue_txt font-[700]">Music is life</div>
        </div>
        <nav className="mt-[30px] pl-[20px]">
          <ul className="gap-[30px] flex flex-wrap ">
            {
              menu.map((item, index) =>(
                <MenuItem item = {item} isLogin = {isLogin} key= {index}/>
              ))
            }
          </ul>
        </nav>
      </div>
    </>
  )
}