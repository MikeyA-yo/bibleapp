//links
//https://www.abibliadigital.com.br/api/books
//https://bolls.life/get-text/NKJV/19/119/ 
//this returns list of verses with moses
//https://bolls.life/find/NKJV/?search=moses&match_case=false&match_whole=true
export interface BookIndex {
   [key:string]:number,
   genesis:number,
   exodus:number,
   leviticus:number,
   numbers:number,
   deuteronomy:number,
   joshua:number,
   judges:number,
   ruth:number,
   firstSamuel:number,
   secondSamuel:number,
   firstKings:number,
   secondKings:number,
   firstChronicles:number,
   secondChronicles:number,
   ezra:number,
   nehemiah:number,
   esther:number,
   job:number,
   psalms:number,
   proverbs:number,
   ecclesiastes:number,
   songOfSongs:number,  //or songs of solomon ig
   isaiah:number,
   jeremiah:number,
   lamentations:number,
   ezekiel:number,
   daniel:number,
   hosea:number,
   joel:number,
   amos:number,
   obadiah:number,
   jonah:number,
   micah:number,
   nahum:number,
   habakkuk:number,
   zephaniah:number,
   haggai:number,
   zechariah:number,
   malachi:number,
   matthew:number,
   mark:number,
   luke:number,
   john:number,
   acts:number,
   romans:number,
   firstCorinthians:number,
   secondCorinthians:number,
   galatians:number,
   ephesians:number,
   philippians:number,
   colossians:number,
   firstThessalonians:number,
   secondThessalonians:number,
   firstTimothy:number,
   secondTimothy:number,
   titus:number,
   philemon:number,
   hebrews:number,
   james:number,
   firstPeter:number,
   secondPeter:number,
   firsJohn:number,
   secondJohn:number,
   thirdJohn:number,
   jude:number,
   revelation:number
}
export interface NKJV{
   pk:any,
   verse: number,
   text:string
}
import { books, getBookIndex} from "@/components/books";
let tempBook:any = getBookIndex()
let BooksIndex:BookIndex = tempBook
const authString =  "Bearer " + process.env.APIBIBLEKEY;
export async function getNKJV(chap:string, ver:string){
  let index = (() =>{
   for ( const key in BooksIndex){
      if (key.includes(chap.toLowerCase())){
         return BooksIndex[key]
      }
    }
  })()
  console.log(index)
  const res = await fetch(`https://bolls.life/get-text/NKJV/${index}/${ver}/ `);
  const data = await res.json();
 data.forEach((obj: NKJV) => {
   console.log(obj.verse, obj.text)
 });
}

async function getBibles(version:string, chap:string, ver:string){

}