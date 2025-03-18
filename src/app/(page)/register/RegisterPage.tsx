"use client"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, dbFirebase } from "../../../../firebaseConfig";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

export const RegisterPage = () => {
  const router = useRouter();
  const handleRegister = (event: any) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value.trim();
    const cfpassword = event.target.cfpassword.value.trim();
    if (email && password && cfpassword && name) {
      if (password == cfpassword) {

        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            if (user) {
              set(ref(dbFirebase, `users/${user.uid}`), {
                fullName: name
              }).then(() => {
                router.push("/");
              })
            }

          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    console.log(password);
    console.log(cfpassword);
  }
  return (
    <>
      <form id="formRegister" onSubmit={handleRegister}>
        <label className="text-[#EFEEE0] text-[14px] font-[600]">Họ tên <span className="text-red-500">*</span></label>
        <input placeholder="Ví dụ: Nguyễn Văn A" name="name" id="name"
          className="w-[100%] outline-none  rounded-[6px] py-[16px] pl-[16px] pr-[32px]" />
        <label className="text-[#EFEEE0] text-[14px] font-[600]">Email <span className="text-red-500">*</span></label>

        <input placeholder="Ví dụ: levana@gmail.com" id="email" name="email"
          className="w-[100%] outline-none  rounded-[6px] py-[16px] pl-[16px] pr-[32px]" />
        <label className="text-[#EFEEE0] text-[14px] font-[600]">Mật khẩu<span className="text-red-500">*</span></label>

        <input name="password" id="password" type="password"
          className="w-[100%] outline-none  rounded-[6px] py-[16px] pl-[16px] pr-[32px]" />
        <label className="text-[#EFEEE0] text-[14px] font-[600]">Nhập lại Mật khẩu<span className="text-red-500">*</span></label>

        <input name="cfpassword" id="cfpassword" type="password"
          className="w-[100%] outline-none  rounded-[6px] py-[16px] pl-[16px] pr-[32px]" />
        <button className="text-[#FFFFFF] bg-[#00ADEF] w-[100%] py-[18px] px-[44px] mt-[15px] rounded-[6px]">Đăng ký</button>
      </form>
    </>
  )
}