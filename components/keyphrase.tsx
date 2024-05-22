

import { versesKeyphrases } from "@/app/api/fetch";
import KeyPhrases from "./KeyPhcard";


export default async function KeyPhraseRes(phrase:string, version:string){
    const result =  await versesKeyphrases(phrase, version);
    
    const obResult = result.map((citation:any )=> ({
        book: citation.book.replace(citation.book.charAt(0),citation.book.charAt(0).toUpperCase() ),
        chapter: citation.chapter,
        verse: citation.verse,
        text: citation.text.replaceAll('<mark>', '').replaceAll('</mark>','').replaceAll('<i>','').replaceAll('</i>','')
      }))
     // console.log(obResult)
    return(
        <>
          {/* {result.map((res:any, i:number)=>{
            <KeyPhrases key={i} keyArray={res} />
          })} */}
            <KeyPhrases  keyArray={obResult} />
        </>
    )
}