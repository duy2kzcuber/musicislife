import { Metadata } from "next";
import { LoginPage } from "./LoginPage";
export const metadata: Metadata = {
  title: "Trang đăng nhập",
  description: "Project nghe nhạc trực tuyến",
};
export default function Login (){
  return(
    <> 
      <LoginPage/>
    </>
  )
}