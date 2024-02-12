import Image from "next/image"

export const Navbar = () => {
  return (
    <nav className="bg-black text-white w-full">
      <div className="max-w-[500px] mx-auto flex items-center justify-between h-[48px] px-4">
        <Image src="/cafein_logo.svg" alt="logo" width={64} height={15} />
        <div className="w-[64px] h-[28px] text-xs rounded-[20px] flex items-center justify-center border border-white bg-[#333333] text-white">로그인</div>
      </div>
    </nav>
  )
}