'use server'
import { Bible, verses } from "@/app/api/fetch";
import VerseCard from "./verses-card";

export async function VersesArray(version:string, book:string, chapter:string){
 let data = await Bible(version,book,chapter)
 return (
    <>
      {data.map((verse:verses, i:number)=>{
        let nVerse = verse.verse
        nVerse = nVerse.replace('<i>', '').replaceAll('<i>', '').replaceAll('</i>', '')
        return <VerseCard key={verse.verseNo} verse={verse.verseNo} text={nVerse} />
      })}
    </>
 )
}