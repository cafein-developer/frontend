'use client';

import axios from "axios";
import { useState, useEffect } from "react"

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

export default async function Home() {
  // const data = await getData()
  const [data, setData] = useState();
  useEffect(() => {
    axios.get('http://13.124.23.172:8090/cafe', {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setData(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      메인입니다
    </main>
  )
}
