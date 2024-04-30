"use client";
import Link from "next/link";
import Bar from "./bar";
import { useState } from "react";
import { Roboto } from "next/font/google";
import { pages } from './pages'
import { usePathname } from "next/navigation";
const roboto = Roboto({weight:['700'], subsets:['latin']})
// <Bar className="h-6 w-6" />
export default function Nav(){
    const pathname = usePathname()
    return (
        <>
        <div>
            <div className="lg:flex md:flex justify-between fixed top-0 w-full z-20  h-20 hidden p-8 ">
                <div>
                  <p className="h-6 font-bold text-white">Spiritual Awakening</p>
                </div>
                <div className="flex gap-5">
                    <Link href={'/'} ><p className="text-gray-100 hover:active">HOME</p></Link>
                    {pages.map((page, i) => <Link key={i} href={`/${page.toLowerCase()}`}><p className={`text-gray-100 hover:active ${pathname == '/'+page.toLowerCase() ? 'active' : ''}`}>{page}</p></Link>)}
                </div>
            </div>
            <div className="flex md:hidden z-20 w-full   justify-between fixed top-0 lg:hidden p-4">
                <div>
                  <p className="h-6 font-bold text-white">Spiritual Awakening</p>
                </div>
                <div>
                  <Bar className="h-6 w-6 text-white" />
                </div>
            </div>
        </div>
        </>
    )
}