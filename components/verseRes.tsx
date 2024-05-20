import { Bible, verses } from "@/app/fetch";
import VerseCard from "./verses-card";

export async function VersesArray(version:string, book:string, chapter:string){
 let data = await Bible(version,book,chapter)
 return (
    <>
      {data.map((verse:verses, i:number)=>{
        return <VerseCard verse={verse.verseNo} text={verse.verse} />
      })}
    </>
 )
}