import React from 'react';
import Link from "next/link";

export default function LinkCard({className}:{className ?:string}) {
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-3 gap-6'>
    <Link href='#' className={`rounded-md py-3 px-6 flex gap-4 bg-slate-800 text-slate-50 ${className}`}>
      <h2>Anxiety</h2>

      <span aria-hidden='true'>&rarr;</span>
    </Link>
    <Link href='#' className={`rounded-md py-3 px-6 flex gap-4 bg-slate-800 text-slate-50 ${className}`}>
      <h2>Anxiety</h2>

      <span aria-hidden='true'>&rarr;</span>
    </Link>
    <Link href='#' className={`rounded-md py-3 px-6 flex gap-4 bg-slate-800 text-slate-50 ${className}`}>
      <h2>Anxiety</h2>

      <span aria-hidden='true'>&rarr;</span>
    </Link>
    <Link href='#' className={`rounded-md py-3 px-6 flex gap-4 bg-slate-800 text-slate-50 ${className}`}>
      <h2>Anxiety</h2>

      <span aria-hidden='true'>&rarr;</span>
    </Link>
    <Link href='#' className={`rounded-md py-3 px-6 flex gap-4 bg-slate-800 text-slate-50 ${className}`}>
      <h2>Anxiety</h2>

      <span aria-hidden='true'>&rarr;</span>
    </Link>
    <Link href='#' className={`rounded-md py-3 px-6 flex gap-4 bg-slate-800 text-slate-50 ${className}`}>
      <h2>Anxiety</h2>

      <span aria-hidden='true'>&rarr;</span>
    </Link>
    </div>
  )
}
