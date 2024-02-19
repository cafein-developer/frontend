'use client';

import axios from "axios";
import Image from "next/image";
import { useState, useEffect, useRef } from "react"
import { BottomDrawer } from "./components/drawer";
import { useRecoilState } from "recoil";
import { cafeInfoState } from "../recoil/atoms";
import { NoticeBanner } from "./components/notice_banner";
import { useRouter, useSearchParams } from "next/navigation";
import { getCafeLists } from "./api";


export default async function Home() {


  const [cafeList, setCafeList] = useState();
  useEffect(() => {
    getCafeLists().then((res) => {
      setCafeList(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  console.log(cafeList);
  const router = useRouter();
  const params = useSearchParams();

  const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(cafeInfoState)
  const onClickTheme = (theme: string) => {
    return router.push(`/?${theme}`)
  }

  const [isClickTheme, setIsClickTheme] = useState(false);
  useEffect(() => {
    if (params.toString() !== "") {
      setIsClickTheme(true);
      setIsDrawerOpen(false);
    }
  }, [params])

  const [inputValue, setInputValue] = useState("");
  const handleInput = (e: any) => {
    setInputValue(e.target.value);

  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      console.log(e.target.value);
    }
  }

  const [focused, setFocused] = useState(false);
  const onFocus = () => {
    setFocused(true);
  }
  const onBlur = () => {
    setFocused(false);
  }

  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <NoticeBanner />
      {isClickTheme ? (
        <div className="w-full px-4">
          <div className="px-4 w-full flex items-center border border-black border-[3px] mt-[20px] px-[11px] py-[6px] rounded-[30px] relative">
            <img src="/search.svg" alt="검색" />
            <input type="text" value={inputValue} onFocus={onFocus} onBlur={onBlur} onChange={(e) => handleInput(e)} onKeyDown={(e) => handleKeyDown(e)} placeholder="지역, 지하철역, 분위기, 카페명" className="ml-[7px] flex items-center bg-white w-full text-black text-[14px] focus:outline-none" />

            {focused && (
              <div className="z-[1] text-[11px] font-light absolute flex flex-col top-[41px] index-1 w-full bg-white rounded-b-[8px] px-[14px] py-[8px] left-0">
                <div className="my-4 border-t border-t-[#E2E2E2] w-full"></div>
                <div>* 선택한 분위기를 볼 수 있는 역을 선택해 주세요.</div>
                <div>* 현 위치 검색을 누르실 경우, 가장 가까운 역 주변을 검색합니다.</div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="px-4 w-full flex items-center">
          <button type="button" onClick={() => setIsDrawerOpen(!isDrawerOpen)} className="mt-[20px] px-[20px] flex items-center bg-black w-full text-white rounded-[30px] text-xs py-[6px]">
            <Image src="/question_mark.svg" width="25" height="25" alt="물음표" />
            <span className="px-2">해당 무드 설명이 궁금하다면 클릭해주세요!</span>
          </button>
        </div >
      )
      }


      {/* <div class="text-center">
        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-bottom-example" data-drawer-show="drawer-bottom-example" data-drawer-placement="bottom" aria-controls="drawer-bottom-example">
          Show bottom drawer
        </button>
      </div> */}
      <div className="grid grid-cols-2 gap-4 mt-5 px-4 relative">
        {isClickTheme && <div className="absolute bg-black opacity-70 w-full h-full top-0 left-0"></div>}

        <button onClick={() => onClickTheme("modern")}>
          <img className="h-[100px] object-cover rounded-[8px]" src="/cafe_theme/1-3Modern.png" alt="카페1" />
        </button>
        <button onClick={() => onClickTheme("kitsch")}>
          <img className="h-[100px] object-cover rounded-[8px]" src="/cafe_theme/1-3Kitsch.png" alt="카페2" />
        </button>
        <button onClick={() => onClickTheme("retro")}>
          <img className="h-[100px] object-cover rounded-[8px]" src="/cafe_theme/1-3Retro.png" alt="카페3" />
        </button>
        {/* <img className="h-[100px] object-cover rounded-[8px]" src="/cafe_theme/1-3Cozy.png" alt="카페4" />
        <img className="h-[100px] object-cover rounded-[8px]" src="/cafe_theme/1-3Antique.png" alt="카페5" />
        <img className="h-[100px] object-cover rounded-[8px]" src="/cafe_theme/1-3HousePlants.png" alt="카페6" />
        <img className="h-[100px] object-cover rounded-[8px]" src="/cafe_theme/1-3Industrial.png" alt="카페7" />
        <img className="h-[100px] object-cover rounded-[8px]" src="/cafe_theme/1-3Vintage.png" alt="카페8" /> */}
      </div>

      {
        isDrawerOpen && <BottomDrawer />
      }
    </main >
  )
}
