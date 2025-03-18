"use client"
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, dbFirebase } from "../../../../firebaseConfig";
import { FaHeart } from "react-icons/fa6";
import { ref, runTransaction } from "firebase/database";

export const HeartButton = (props: any) => {
  const { song} = props;
  console.log(song);
 
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const wishlist = song.wishlist;
        if(wishlist){
          console.log(wishlist);
          console.log(wishlist[uid]);
          if(wishlist[uid]){
            console.log(uid);
            setActive(true);
          }
        }
      } 
    })
  });
  const handleAddWishlist =  () =>{
    const userId = auth.currentUser?.uid;
    if(song.id && userId){
      const songRef = ref(dbFirebase, `/songs/${song.id}`);
      runTransaction(songRef, (item) => {
        if(item){
          if(item.wishlist && item.wishlist[userId]){
            console.log("sdad");
            item.wishlist[userId] = null;
            setActive(false);
          }
          else{
            if(!item.wishlist){
              item.wishlist = {}
            }
            item.wishlist[userId] = true;
            setActive(true);
          }
        }
        return item;
      });
    }
 }
    return (
      <>
        <button 
          className={
            "w-[34px] h-[34px] rounded-full border inline-flex items-center justify-center text-[15px] text-white ml-[10px] "
            + (isActive ? "border-[#00ADEF] bg-[#00ADEF]" : "border-white")
          }
          onClick={handleAddWishlist}
        >
          <FaHeart />
        </button>
      </>
    )
  }