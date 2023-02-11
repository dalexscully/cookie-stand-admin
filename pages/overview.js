import React from "react";
import Link from "next/link";
export default function Overview() {
  return(
    <div className='flex flex-col items-center justify-center h-screen bg-gray-300'>
    <h1 className='text-4xl'> Overview Page Coming Soon </h1>
    <Link href="/" className="p-4 m-4 text-2xl bg-violet-100 rounded-lg">Back to Home</Link>
    </div>
  );
}