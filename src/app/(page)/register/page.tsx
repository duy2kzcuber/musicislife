
import { Metadata } from "next";
import { RegisterPage } from "./RegisterPage";
export const metadata: Metadata = {
  title: "Trang dăng kí",
  description: "Project nghe nhạc ",
};
export default function Register() {
  return (
    <>
      <div className="mx-auto w-[500px] mt-[60px]">
        <h2 className="text-[24px] font-[700] text-[#EFEEE0] text-center">Đăng ký tài khoản</h2>
        <RegisterPage/>
      </div>
    </>
  )
}