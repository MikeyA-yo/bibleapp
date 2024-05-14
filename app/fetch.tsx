//links
//https://www.abibliadigital.com.br/api/books
//https://bolls.life/get-text/NKJV/19/119/
//this returns list of verses with moses
//https://bolls.life/find/NKJV/?search=moses&match_case=false&match_whole=true
export interface BookIndex {
  [key: string]: number;
  genesis: number;
  exodus: number;
  leviticus: number;
  numbers: number;
  deuteronomy: number;
  joshua: number;
  judges: number;
  ruth: number;
  firstSamuel: number;
  secondSamuel: number;
  firstKings: number;
  secondKings: number;
  firstChronicles: number;
  secondChronicles: number;
  ezra: number;
  nehemiah: number;
  esther: number;
  job: number;
  psalms: number;
  proverbs: number;
  ecclesiastes: number;
  songOfSongs: number; //or songs of solomon ig
  isaiah: number;
  jeremiah: number;
  lamentations: number;
  ezekiel: number;
  daniel: number;
  hosea: number;
  joel: number;
  amos: number;
  obadiah: number;
  jonah: number;
  micah: number;
  nahum: number;
  habakkuk: number;
  zephaniah: number;
  haggai: number;
  zechariah: number;
  malachi: number;
  matthew: number;
  mark: number;
  luke: number;
  john: number;
  acts: number;
  romans: number;
  firstCorinthians: number;
  secondCorinthians: number;
  galatians: number;
  ephesians: number;
  philippians: number;
  colossians: number;
  firstThessalonians: number;
  secondThessalonians: number;
  firstTimothy: number;
  secondTimothy: number;
  titus: number;
  philemon: number;
  hebrews: number;
  james: number;
  firstPeter: number;
  secondPeter: number;
  firsJohn: number;
  secondJohn: number;
  thirdJohn: number;
  jude: number;
  revelation: number;
}
export interface Books {
  [key: string]: string;
  genesis: string;
  exodus: string;
  leviticus: string;
  strings: string;
  deuteronomy: string;
  joshua: string;
  judges: string;
  ruth: string;
  firstSamuel: string;
  secondSamuel: string;
  firstKings: string;
  secondKings: string;
  firstChronicles: string;
  secondChronicles: string;
  ezra: string;
  nehemiah: string;
  esther: string;
  job: string;
  psalms: string;
  proverbs: string;
  ecclesiastes: string;
  songOfSongs: string; //or songs of solomon ig
  isaiah: string;
  jeremiah: string;
  lamentations: string;
  ezekiel: string;
  daniel: string;
  hosea: string;
  joel: string;
  amos: string;
  obadiah: string;
  jonah: string;
  micah: string;
  nahum: string;
  habakkuk: string;
  zephaniah: string;
  haggai: string;
  zechariah: string;
  malachi: string;
  matthew: string;
  mark: string;
  luke: string;
  john: string;
  acts: string;
  romans: string;
  firstCorinthians: string;
  secondCorinthians: string;
  galatians: string;
  ephesians: string;
  philippians: string;
  colossians: string;
  firstThessalonians: string;
  secondThessalonians: string;
  firstTimothy: string;
  secondTimothy: string;
  titus: string;
  philemon: string;
  hebrews: string;
  james: string;
  firstPeter: string;
  secondPeter: string;
  firstJohn: string;
  secondJohn: string;
  thirdJohn: string;
  jude: string;
  revelation: string;
}
export interface NKJV {
  pk: any;
  verse: number;
  text: string;
}
interface Verses {
  number: number;
  text: string;
}
interface Chapters {
  number: number;
  verses: number;
}
interface VersesOtherVersions{
  book: {abbrev:{pt:string, en: string}, name:string, author:string, group:string, version:string},
  chapter:number,
  number:number,
  text:string
}
interface DataBook {
  book: object;
  chapter: Chapters;
  verses: Verses[];
}
import { booksA, getBookIndex } from "@/components/books";
let tempBook: any = getBookIndex();
let BooksIndex: BookIndex = tempBook;
const authString = "Bearer " + process.env.APIBIBLEKEY;
export async function getNKJV(Book:string, chap: string, ver: string) {
  let index = (() => {
    for (const key in BooksIndex) {
      if (key.includes(chap.toLowerCase())) {
        return BooksIndex[key];
      }
    }
  })();
  console.log(index);
  const res = await fetch(`https://bolls.life/get-text/NKJV/${index}/${ver}/ `);
  const data = await res.json();
  data.forEach((obj: NKJV) => {
    console.log(obj.verse, obj.text);
  });
}
export async function getBibles(version: string, book: string, chap: string,ver:string) {
  for (const key in booksA) {
    if (book.toLowerCase() == key) {
      book = booksA[key];
    }
  }
  const res = await fetch(
    `https://www.abibliadigital.com.br/api/verses/${version}/${book}/${chap}/${ver}`,
    {
      headers: {
        Authorization: authString,
      },
    }
  );
  const data: VersesOtherVersions = await res.json();
  //console.log(data.text)
  //verse sample : data.verses[0].text
}
// getBibles('kjv', 'Joshua','1', '8')
export async function VerseArray(version: string, book: string, chap: string){
  for (const key in booksA) {
    if (book.toLowerCase() == key) {
      book = booksA[key];
    }
  }
  const res = await fetch(
    `https://www.abibliadigital.com.br/api/verses/${version}/${book}/${chap}/`,
    {
      headers: {
        Authorization: authString,
      },
    }
  );
  const data: DataBook = await res.json();
}
export async function versesKeyphrases(){
  
}