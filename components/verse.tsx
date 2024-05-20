"use client";
import { useEffect, useState } from "react"
import { VersesArray } from "./verseRes"


export async function resolved(version:string, book:string, chapter:string){
    let [result, setResult] = useState<any>()
    useEffect(()=>{
      setResult(VersesArray(version, book, chapter))
    }, [version,book, chapter])
    return result;
}