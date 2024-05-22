"use client";

import { useEffect, useState } from "react";
import KeyPhraseRes from "./keyphrase";
import { Loading } from "./results";

export default function KeyMain({phrase, version}:{phrase:string, version:string}){
    const [isLoading, setIsLoadidng] = useState(false);
    const [data, setData] = useState<any>();
    console.log(isLoading, "i'm here")

    useEffect(()=>{
      async function fetchData(){
        setIsLoadidng(true);
        const keyPData = await KeyPhraseRes(phrase, version);
        setData(keyPData);
        setIsLoadidng(false);
      }
      fetchData();
    }, [phrase, version])
    if(isLoading){
        return  <Loading />
    }
    return data;
}