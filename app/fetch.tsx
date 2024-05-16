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
  comment?:string;
}
type NKJVData = NKJV[];
interface Verses {
  number: number;
  text: string;
}
interface Chapters {
  number: number;
  verses: number;
}
interface VersesOtherVersions {
  book: {
    abbrev: { pt: string; en: string };
    name: string;
    author: string;
    group: string;
    version: string;
  };
  chapter: number;
  number: number;
  text: string;
}
interface DataBook {
  book: object;
  chapter: Chapters;
  verses: Verses[];
}
interface NivData {
  book: string;
  chapter: string;
  verses: string;
  text: string;
  version: string;
  bid: string;
  verse: {
    id: string;
    book: string;
    chapter: string;
    verse: string;
    text: string;
  };
}
import { booksA, getBookIndex } from "@/components/books";
import { getVerse, getVerseOfTheDay } from "@glowstudent/youversion";
let tempBook: any = getBookIndex();
let BooksIndex: BookIndex = tempBook;
const authString = "Bearer " + process.env.APIBIBLEKEY;
export async function getNKJVVersesArray(book: string, chap: string) {
  // example call: getNKJV( 'joshua', '1');
  let index = (() => {
    for (const key in BooksIndex) {
      if (key.includes(book.toLowerCase())) {
        return BooksIndex[key];
      }
    }
  })();
  const res = await fetch(
    `https://bolls.life/get-text/NKJV/${index}/${chap}/ `
  );
  const data: NKJVData = await res.json();
  return data;
  // data.forEach((obj: NKJV) => {
  //   console.log(obj.verse, obj.text);
  // });
}
export async function getBibles(
  version: string,
  book: string,
  chap: string,
  ver: string
) {
  // example call : getBibles('kjv', 'Joshua','1', '8') kjv or nvi
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
  console.log(data.text, data.number);
  return {
    verse: data.text,
    verseNo: data.number,
  };
  //console.log(data.text)
  //verse sample : data.verses[0].text
}
export async function getNKJV(book: string, chapter: string, verse: string){
  let index = (() => {
    for (const key in BooksIndex) {
      if (key.includes(book.toLowerCase())) {
        return BooksIndex[key];
      }
    }
  })();
  const res = await fetch(
    `https://bolls.life/get-verse/NKJV/${index}/${chapter}/${verse}/ `
  );
  const data: NKJV = await res.json();
  console.log(data)
  return {
    verse: data.text,
    verseNo: data.verse
  };
}
export async function getNIV(book: string, chapter: string, verse: string) {
  //example call: getNIV('1 samuel', '23', '18');
  let exampleBook = "3 john";
  const res = await fetch(
    `https://jsonbible.com//search/verses.php?json={ "book":"${book}",  "chapter": ${chapter},  "verse": ${verse},  "version": "niv" }`
  );
  const data: NivData = await res.json();
  return {
    verse: data.text,
    verseNo: data.verses,
  };
  //console.log(data.text, data.verses)
}
export async function getNLT(book: string, chapter: string, verse: string){
   //example call: getNLT('1 samuel', '23', '18');
   let exampleBook = "3 john";
   const res = await fetch(
     `https://jsonbible.com//search/verses.php?json={ "book":"${book}",  "chapter": ${chapter},  "verse": ${verse},  "version": "nlt" }`
   );
   const data: NivData = await res.json();
   console.log(data)
   return {
     verse: data.text,
     verseNo: data.verses,
   };
}

// this function is the verse arrays standard
export async function VerseArray(version: string, book: string, chap: string) {
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
  return data;
}
export async function versesKeyphrases(phrase:string) {}
