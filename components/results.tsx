"use client";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { Resolved } from "./verse";
import mapUrl from "./urlMapper";
import { Suspense } from "react";

export default function Result(){
    let sp = useSearchParams();
    const params = useParams()
    const pathname = usePathname();
    let book = mapUrl(pathname.split('/')[2].replace("%20", ' '))
    let verse = sp.get('v') ?? 'nkjv';
    let chapter = params.chap + ''
    return (
       <Suspense fallback={<p className="bg-white p-20">Loading.....</p>}>
         <Resolved version={verse} book={book} chapter={chapter} />
       </Suspense>
    )
}