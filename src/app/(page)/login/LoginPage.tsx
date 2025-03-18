"use client"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebaseConfig";
import { useRouter } from "next/navigation";

export const LoginPage = () => {
  const route = useRouter();
  const handleLogin = (event: any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        route.push('/');
      })
      .catch((error) => {
        window.alert("Nhập mật khẩu sai");
      });
  }
  return (
    <div className="mx-auto w-[500px] mt-[60px]">
      <h2 className="text-[24px] font-[700] text-[#EFEEE0] text-center">Đăng nhập tài khoản</h2>
      <form onSubmit={handleLogin}>
        <label className="text-[#EFEEE0] text-[14px] font-[600]">Email <span className="text-red-500">*</span></label>
        <input placeholder="Ví dụ: levana@gmail.com" id="email" name="email"
          className="w-[100%] outline-none  rounded-[6px] py-[16px] pl-[16px] pr-[32px]" />
        <label className="text-[#EFEEE0] text-[14px] font-[600]">Mật khẩu<span className="text-red-500">*</span></label>
        <input name="password" id="password" type="password"
          className="w-[100%] outline-none  rounded-[6px] py-[16px] pl-[16px] pr-[32px]" />
        <button className="text-[#FFFFFF] bg-[#00ADEF] w-[100%] py-[18px] px-[44px] mt-[15px] rounded-[6px]">Đăng nhập</button>
      </form>
    </div>
  )
}