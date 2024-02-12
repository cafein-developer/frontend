'use client';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {
  RecoilRoot,
} from 'recoil';
import { Navbar } from './nav';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RecoilRoot>
      <html lang="ko">
        <head>
          <title>cafein</title>
        </head>
        <body className="w-full">
          <Navbar />
          <div className="mx-auto max-w-[500px]">
            {children}
          </div>
        </body>
      </html>
    </RecoilRoot>
  )
}
