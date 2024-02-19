'use client';

import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { CafeCard } from "../components/cafe_card"

export default function ListsPage() {
  const params = useSearchParams();
  const searchInfo = params.get('searchInfo');
  const mood = params.get('mood');

  const [inputValue, setInputValue] = useState(searchInfo || "");

  const [moodFilter, setMoodFilter] = useState(false);
  const toggleMoodFilter = () => {
    setMoodFilter(!moodFilter);
  }

  const [moodFilterList, setMoodFilterList] = useState(mood ? mood.split(",") : []);

  const Mood = ({ name }: { name: string }) => {
    const toggleSelect = () => {
      if (moodFilterList.includes(name)) {
        setMoodFilterList(moodFilterList.filter((item) => item !== name));
      } else {
        setMoodFilterList([...moodFilterList, name]);
      }
    }

    return (
      <button onClick={toggleSelect} type="button" className={`flex items-center px-[15px] w-fit rounded-[20px] px-[15px] py-[7px] border border-black ${moodFilterList.includes(name) ? "bg-black text-white" : "bg-white text-black"}`}>
        {name}
        {moodFilterList.includes(name) && (
          <img src="/delete_white.svg" alt="비활성화" className="ml-[9px]" />
        )}
      </button>
    )
  }


  return (
    <div className="px-4 w-full">
      <div className="mt-[24px] rounded-[26px] border border-black h-[40px] flex items-center px-[11px]">
        <img src="/search.svg" alt="검색" />
        <input type="text" className="ml-[7px] focus:outline-none text-sm font-semibold" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
      </div>

      <div className="flex space-x-[6px] mt-[12px] text-xs">
        <button type="button" onClick={toggleMoodFilter} className={`rounded-[20px] px-[15px] py-[7px] border border-black ${moodFilter ? "bg-black text-white" : "bg-white text-black"}`}>Mood ({moodFilterList.length})</button>
        <div className="rounded-[20px] px-[15px] py-[7px] border border-black">지역, 지하철역 ({searchInfo})</div>
        <div className="rounded-[20px] px-[15px] py-[7px] border border-black">편의시설</div>
      </div>

      {moodFilter && (
        <div className="flex flex-wrap mt-[12px] text-xs">
          <div className="flex space-x-[6px]">
            <Mood name="Modern" />
            <Mood name="Kitsch" />
            <Mood name="Retro" />
            <Mood name="Antique" />
          </div>
          <div className="flex space-x-[6px] mt-[7px]">
            <Mood name="Vintage" />
            <Mood name="Industrial" />
            <Mood name="Houseplants" />
          </div>
        </div>
      )}

      <div className="mt-[7px]">
        <CafeCard />
      </div>
    </div >
  )
}


