"use server";

import { versesKeyphrases } from "@/app/api/fetch";

export default async function KeyPhraseRes({phrase, version}:{phrase:string, version:string}){
    const result =  await versesKeyphrases(phrase, version);
    
}