import Image from 'next/image'
import { useState } from 'react'
import {
  Drawer,
  IconButton,
  Typography,
  Button,
  Carousel
} from '@material-tailwind/react'
import { useRecoilState } from 'recoil'
import { cafeInfoState } from '../../recoil/atoms'

export const BottomDrawer = () => {
  const [open, setOpen] = useRecoilState(cafeInfoState);

  const closeDrawer = () => setOpen(false);

  return (
    <Drawer placement="bottom" open={open} onClose={closeDrawer} className="py-4 px-[24px] rounded-[30px]">
      <div className="flex items-center justify-between mb-4">
        <button className="invisible"><img src="/delete_grey.svg" alt="삭제" /></button>
        <div className="flex">
          <img src="/logo_black.svg" alt="로고검정" />
          <span className="ml-1">무드 안내</span>
        </div>
        <button type="button" onClick={closeDrawer}><img src="/delete_grey.svg" alt="삭제" /></button>
      </div>
      <Carousel prevArrow={(handlePrev) => {
        return (
          <div className="hidden"></div>
        )
      }} nextArrow={(handleNext) => {
        return (
          <div className="hidden"></div>
        )
      }}>
        <div className="relative w-full">
          <img
            src="/cafe_theme/1-3Modern.png"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <Typography
            className="font-medium mt-[12px]"
          >
            세련되고 도시적인 분위기 <br />
            화이트, 블랙, 실버 등 깔끔한 색상과 <br />
            간결한 디자인이 특징이다.
          </Typography>
        </div>
        <div className="relative w-full">
          <img
            src="/cafe_theme/1-3Modern.png"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <Typography
            className="font-medium mt-[12px]"
          >
            세련되고 도시적인 분위기 <br />
            화이트, 블랙, 실버 등 깔끔한 색상과 <br />
            간결한 디자인이 특징이다.
          </Typography>
        </div>
      </Carousel>
    </Drawer>
  )
}