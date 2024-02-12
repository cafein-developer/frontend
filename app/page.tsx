'use client';

import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react"
import { BottomDrawer } from "./components/drawer";
import { useRecoilState } from "recoil";
import { cafeInfoState } from "../recoil/atoms";

// async function getData() {
//   const res = await fetch('http://13.124.23.172:8090/cafe')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }

export default function Home() {
  // const data = await getData()
  // const [data, setData] = useState();
  // useEffect(() => {
  //   axios.get('http://13.124.23.172:8090/cafe', {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => {
  //     setData(res.data);
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }, [])

  const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(cafeInfoState)

  return (
    <main className="flex min-h-screen flex-col items-center w-full px-4">
      <div className="h-[90px] bg-[#333333] rounded-[8px] w-full mt-[30px]">공지사항배너</div>
      <button type="button" onClick={() => setIsDrawerOpen(!isDrawerOpen)} className="mt-[20px] px-[20px] flex items-center bg-black w-full text-white rounded-[30px] text-xs py-[6px]">
        <Image src="/question_mark.svg" width="25" height="25" alt="물음표" />
        <span className="px-2">해당 무드 설명이 궁금하다면 클릭해주세요!</span>
      </button>

      {/* <div class="text-center">
        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-bottom-example" data-drawer-show="drawer-bottom-example" data-drawer-placement="bottom" aria-controls="drawer-bottom-example">
          Show bottom drawer
        </button>
      </div> */}
      <div className="grid grid-cols-2 gap-4 mt-5">
        <img className="h-[100px] object-cover rounded-[8px]" src="/cafe_theme/1-3Modern.png" alt="카페1" />
        <img className="h-[100px] object-cover rounded-[8px]" src="/cafe_theme/1-3Kitsch.png" alt="카페2" />
        <img className="h-[100px] object-cover rounded-[8px]" src="/cafe_theme/1-3Retro.png" alt="카페3" />
        <img className="h-[100px] object-cover rounded-[8px]" src="/cafe_theme/1-3Cozy.png" alt="카페4" />
        <img className="h-[100px] object-cover rounded-[8px]" src="/cafe_theme/1-3Antique.png" alt="카페5" />
        <img className="h-[100px] object-cover rounded-[8px]" src="/cafe_theme/1-3HousePlants.png" alt="카페6" />
        <img className="h-[100px] object-cover rounded-[8px]" src="/cafe_theme/1-3Industrial.png" alt="카페7" />
        <img className="h-[100px] object-cover rounded-[8px]" src="/cafe_theme/1-3Vintage.png" alt="카페8" />
      </div>

      {
        isDrawerOpen && <BottomDrawer />
      }
    </main>
  )
}
