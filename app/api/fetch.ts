"use server"
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
  comment?: string;
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
    text: string ;
  };
}
interface SearchNKJVnKJV {
  pk: any;
  translation: string;
  book: number;
  chapter: number;
  verse: number;
  text: string;
}
export interface verses {
  verse: string;
  verseNo: number | string;
}
interface SpecialChapData {
  bookid: number;
  name: string;
  chronorder: number;
  chapters: number;
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
      if (key.toLowerCase().includes(book.toLowerCase())) {
        return BooksIndex[key];
      }
    }
  })();
  const res = await fetch(
    `https://bolls.life/get-text/NKJV/${index}/${chap}/ `
  );
  const data: NKJVData = await res.json();
  return data.length;
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
    if (book.toLowerCase() == key.toLowerCase()) {
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
  return {
    verse: data.text,
    verseNo: data.number,
  };
  //console.log(data.text)
  //verse sample : data.verses[0].text
}
export async function getNKJV(book: string, chapter: string, verse: string) {
  let index = (() => {
    for (const key in BooksIndex) {
      if (key.toLowerCase().includes(book.toLowerCase())) {
        return BooksIndex[key];
      }
    }
  })();
  const res = await fetch(
    `https://bolls.life/get-chapter/NKJV/${index}/${chapter}/ `
  );
  const data: NKJV[] = await res.json();
  let obj = data.map((verses)=>({
    verse: verses.text,
    verseNo: verses.verse,
  }))
  return obj;
}
export async function getMSG(book: string, chapter: string, verse: string) {
  let index = (() => {
    for (const key in BooksIndex) {
      if (key.toLowerCase().includes(book.toLowerCase())) {
        return BooksIndex[key];
      }
    }
  })();
  const res = await fetch(
    `https://bolls.life/get-verse/MSG/${index}/${chapter}/${verse}/ `
  );
  const data: NKJV = await res.json();
  return {
    verse: data.text,
    verseNo: data.verse,
  };
}
export async function getNIV(book: string, chapter: string, verse: string) {
  //example call: getNIV('1 samuel', '23', '18');
  let nBook = book;
  if (book.startsWith("first")) nBook = book.replace("first", "1 ");
  if (book.startsWith("second")) nBook = book.replace("second", "2 ");
  if (book.startsWith("third")) nBook = book.replace("third", "3 ");
  if (book.includes("song") || book.includes("Song")) nBook = "Song of Solomon";
  let exampleBook = "3 john";
  const res = await fetch(
    `https://jsonbible.com//search/verses.php?json={ "book":"${nBook}",  "chapter": ${chapter},  "verse": ${verse},  "version": "niv" }`
  );
  const data: NivData = await res.json();
  return {
    verse: data.text,
    verseNo: data.verses,
  };
  //console.log(data.text, data.verses)
}
export async function getNLT(book: string, chapter: string, verse: string) {
  //example call: getNLT('1 samuel', '23', '18');
  let nBook = book;
  if (book.startsWith("first")) nBook = book.replace("first", "1 ");
  if (book.startsWith("second")) nBook = book.replace("second", "2 ");
  if (book.startsWith("third")) nBook = book.replace("third", "3 ");
  if (book.includes("song") || book.includes("Song")) nBook = "Song of Solomon";
  let exampleBook = "3 john";
  const res = await fetch(
    `https://jsonbible.com//search/verses.php?json={ "book":"${nBook}",  "chapter": ${chapter},  "verse": ${verse},  "version": "nlt" }`
  );
  const data: NivData = await res.json();
  return {
    verse: data.text,
    verseNo: data.verses,
  };
}
export async function getAMP(book: string, chapter: string, verse: string) {
  //example call: getAMP('1 samuel', '23', '18');
  let nBook = book;
  if (book.startsWith("first")) nBook = book.replace("first", "1 ");
  if (book.startsWith("second")) nBook = book.replace("second", "2 ");
  if (book.startsWith("third")) nBook = book.replace("third", "3 ");
  if (book.includes("song") || book.includes("Song")) nBook = "Song of Solomon";
  let exampleBook = "3 john";
  const res = await fetch(
    `https://jsonbible.com//search/verses.php?json={ "book":"${nBook}",  "chapter": ${chapter},  "verse": ${verse},  "version": "amp" }`
  );
  const data: NivData = await res.json();
  return {
    verse: data.text,
    verseNo: data.verses,
  };
}
export async function getESV(book: string, chapter: string, verse: string) {
  //example call: getESV('1 samuel', '23', '18');
  let nBook = book;
  if (book.startsWith("first")) nBook = book.replace("first", "1 ");
  if (book.startsWith("second")) nBook = book.replace("second", "2 ");
  if (book.startsWith("third")) nBook = book.replace("third", "3 ");
  if (book.includes("song") || book.includes("Song")) nBook = "Song of Solomon";
  let exampleBook = "3 john";
  const res = await fetch(
    `https://jsonbible.com//search/verses.php?json={ "book":"${nBook}",  "chapter": ${chapter},  "verse": ${verse},  "version": "esv" }`
  );
  const data: NivData = await res.json();
  return {
    verse: data.text,
    verseNo: data.verses,
  };
}
// this function is the chapter arrays standard
export async function ChapterArray(book: string) {
  //example call:  ChapterArray('John') /  ChapterArray('firstJohn')
  let b;
  let i = 1
  for (const key in booksA) {
    if (book.toLowerCase() == key.toLowerCase() || book == key) {
      break;
    }
    i++
  }
  //502 bad gateway hmm, now i have to use bolls.life
  const res = await fetch(`https://bolls.life/get-books/NKJV/`);
  const data = await res.json();
  let chap = 0;
  data.forEach((book:any )=>{
      if(book.bookid == i){
         chap = book.chapters;
      }
  })
  let array = [];
  for (let i = 1; i <= chap; i++) {
    array.push(i);
  }
  return array;
}
// for keypharses search
export async function versesKeyphrases(phrase: string, version: string) {
  function indexToChapter(i: number | string) {
    let chapter = (() => {
      for (const key in BooksIndex) {
        if (BooksIndex[key] == i) {
          return key.includes("first")
            ? key.replace("first", "1st ")
            : key.includes("second")
            ? key.replace("second", "2nd ")
            : key.includes("third")
            ? key.replace("third", "3rd ")
            : key;
        }
      }
    })();
    return chapter ?? "nth found rare error/API internals bug";
  }
  try {
    if (version == "kjv") {
      const res = await fetch(
        `https://bolls.life/find/KJV/?search=${phrase}&match_case=false&match_whole=true`
      );
      const data: SearchNKJVnKJV[] = await res.json();
     //unfortunately i had to remove all classes, since it can't be passed down from server to client
      let resArray: any = [];
      data.forEach((result) => {
        let chapter = result.chapter;
        let verse = result.verse;
        let book = indexToChapter(result.book);
        let text = result.text;
        let scripture = {book, chapter, verse, text};
        resArray.push(scripture);
      });
      return resArray;
    } else if (version == "nkjv") {
      const res = await fetch(
        `https://bolls.life/find/NKJV/?search=${phrase}&match_case=false&match_whole=true`
      );
      const data: SearchNKJVnKJV[] = await res.json();

      let resArray: any = [];
      data.forEach((result) => {
        let chapter = result.chapter;
        let verse = result.verse;
        let book = indexToChapter(result.book);
        let text = result.text;
        let scripture ={book, chapter, verse, text};
        resArray.push(scripture);
      });
      return resArray;
    } else if (version == "niv") {
      const res = await fetch(
        `https://bolls.life/find/NIV/?search=${phrase}&match_case=false&match_whole=true`
      );
      const data: SearchNKJVnKJV[] = await res.json();
 
      let resArray: any = [];
      data.forEach((result) => {
        let chapter = result.chapter;
        let verse = result.verse;
        let book = indexToChapter(result.book);
        let text = result.text;
        let scripture = {book, chapter, verse, text};
        resArray.push(scripture);
      });
      return resArray;
    } else if (version == "nlt") {
      const res = await fetch(
        `https://bolls.life/find/NLT/?search=${phrase}&match_case=false&match_whole=true`
      );
      const data: SearchNKJVnKJV[] = await res.json();

      let resArray: any = [];
      data.forEach((result) => {
        let chapter = result.chapter;
        let verse = result.verse;
        let book = indexToChapter(result.book);
        let text = result.text;
        let scripture ={book, chapter, verse, text};
        resArray.push(scripture);
      });
      return resArray;
    } else if (version == "esv") {
      const res = await fetch(
        `https://bolls.life/find/ESV/?search=${phrase}&match_case=false&match_whole=true`
      );
      const data: SearchNKJVnKJV[] = await res.json();

      let resArray: any = [];
      data.forEach((result) => {
        let chapter = result.chapter;
        let verse = result.verse;
        let book = indexToChapter(result.book);
        let text = result.text;
        let scripture = {book, chapter, verse, text};
        resArray.push(scripture);
      });
      return resArray;
    } else if (version == "amp") {
      const res = await fetch(
        `https://bolls.life/find/AMP/?search=${phrase}&match_case=false&match_whole=true`
      );
      const data: SearchNKJVnKJV[] = await res.json();

      let resArray: any = [];
      data.forEach((result) => {
        let chapter = result.chapter;
        let verse = result.verse;
        let book = indexToChapter(result.book);
        let text = result.text;
        let scripture = {book, chapter, verse, text};
        resArray.push(scripture);
      });
      return resArray;
    } else if (version == "nvi") {
      const res = await fetch(
        `https://bolls.life/find/NVIPT/?search=${phrase}&match_case=false&match_whole=true`
      );
      const data: SearchNKJVnKJV[] = await res.json();

      let resArray: any = [];
      data.forEach((result) => {
        let chapter = result.chapter;
        let verse = result.verse;
        let book = indexToChapter(result.book);
        let text = result.text;
        let scripture = {book, chapter, verse, text};
        resArray.push(scripture);
      });
      return resArray;
    } else if (version == "msg") {
      const res = await fetch(
        `https://bolls.life/find/MSG/?search=${phrase}&match_case=false&match_whole=true`
      );
      const data: SearchNKJVnKJV[] = await res.json();

      let resArray: any = [];
      data.forEach((result) => {
        let chapter = result.chapter;
        let verse = result.verse;
        let book = indexToChapter(result.book);
        let text = result.text;
        let scripture = {book, chapter, verse, text};
        resArray.push(scripture);
      });

      return resArray;
    }
  } catch (e) {
    console.log(`text not found`);
  }
}
// filter functions function
export async function Bible(version: string, book: string, chapter: string) {
  let verses: verses[] = [];
  if (version == "kjv" || version == "nvi") {
    let length = await getNKJVVersesArray(book, chapter);
    for (let i = 1; i <= length; i++) {
      let verse = await getBibles(version, book, chapter, `${i}`);
      verses.push(verse);
    }
  } else if (version == "amp") {
    let length = await getNKJVVersesArray(book, chapter);
    for (let i = 1; i <= length; i++) {
      let verse = await getAMP(book, chapter, `${i}`);
      verses.push(verse);
    }
  } else if (version == "nkjv") {
    let length = await getNKJVVersesArray(book, chapter);
    for (let i = 1; i <= length; i++) {
      let verse = await getNKJV(book, chapter, `${i}`);
      verses = verse;
    }
  } else if (version == "esv") {
    let length = await getNKJVVersesArray(book, chapter);
    for (let i = 1; i <= length; i++) {
      let verse = await getESV(book, chapter, `${i}`);
      verses.push(verse);
    }
  } else if (version == "nlt") {
    let length = await getNKJVVersesArray(book, chapter);
    for (let i = 1; i <= length; i++) {
      let verse = await getNLT(book, chapter, `${i}`);
      verses.push(verse);
    }
  } else if (version == "niv") {
    let length = await getNKJVVersesArray(book, chapter);
    for (let i = 1; i <= length; i++) {
      let verse = await getNIV(book, chapter, `${i}`);
      verses.push(verse);
    }
  } else if (version == "msg") {
    let length = await getNKJVVersesArray(book, chapter);
    for (let i = 1; i <= length; i++) {
      let verse = await getMSG(book, chapter, `${i}`);
      verses.push(verse);
    }
  }
  return verses;
}
export const verseOfTheDay = async () => {
  let votd = await getVerseOfTheDay();
  return {
    verse: votd?.citation,
    text: votd?.passage,
  };
};
export async function specialChapters(
  book: string,
  currentChapter: string | number
) {
  let index = (() => {
    for (const key in BooksIndex) {
      if (key.toLowerCase().includes(book.toLowerCase())) {
        return BooksIndex[key];
      }
    }
  })();
  const res = await fetch("https://bolls.life/get-books/NKJV/");
  const data: SpecialChapData[] = await res.json();
  let bools: boolean[] = [];
  data.forEach((thing, i) => {
    if (thing.bookid == index) {
      if (thing.chapters == currentChapter) {
        bools.push(false);
      } else {
        bools.push(true);
      }
      if(currentChapter != 1){
        bools.push(true)
      }else {
        bools.push(false)
      }
    }
  });

  return bools;
}
