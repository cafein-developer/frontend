export const CafeCard = () => {
  const tag = ["Modern", "Simple"]

  return (
    <div className="py-[12px] flex flex-col border-b border-b-[A1A1A1] w-full">
      <div className="flex items-center">
        <span className="text-lg">카페솔트</span>
        <img src="/verified_p.svg" alt="인증p" className="ml-[5px]" />
        <img src="/verified_v.svg" alt="인증v" className="ml-[5px]" />
      </div>

      <div className="mt-[7px] flex">
        <img src="/cafe_map.svg" alt="카페맵" />
        <span className="ml-[4px] text-sm">서울 문래동</span>
      </div>

      <div className="mt-[11px] flex space-x-[4px]">
        {tag.map((item, index) => (
          <span key={index} className="rounded-[20px] text-xs font-medium border border-black py-[7px] px-[12px] ">{item}</span>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-[17px] mt-[11px]">
        <div className="w-full bg-[#333333] h-[100px]"></div>
        <div className="w-full bg-[#333333] h-[100px]"></div>
        <div className="w-full bg-[#333333] h-[100px]"></div>
      </div>

      <div className="mt-[11px]">
        <span className="text-xs">리뷰 (100+)</span>
      </div>


    </div>
  )
}