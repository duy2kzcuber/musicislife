"use client"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../../firebaseConfig";
import { useRouter } from "next/navigation";

export default function Logout(){
  const _auth = auth;
  const route = useRouter();
  signOut(auth).then(() => {
    route.push('/');
  }).catch((error) => {
    // An error happened.
  });
  return(
    <>
    </>
  )
}