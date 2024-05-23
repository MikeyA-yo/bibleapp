"use client";
import { useState } from "react";
import { SearchBox } from "./BibleCards";
import { booksA } from "./books";
import PagesBook from "./BookSwiper";
import "./Sections.css";
import KeyMain from "./KeyPhraseResult";
let booksLoop: string[] = [];
for (const key in booksA) {
  let nKey = key.charAt(0).toUpperCase() + key.slice(1);
  if (key.startsWith("first")) nKey = key.replace("first", "1st ");
  if (key.startsWith("second")) nKey = key.replace("second", "2nd ");
  if (key.startsWith("third")) nKey = key.replace("third", "3rd ");
  booksLoop.push(nKey);
  if (nKey == "Strings") {
    booksLoop.pop(); // remove last string property
  }
}
export let books1 = booksLoop.slice(0, 18);
export let books2 = booksLoop.slice(18, 36);
export let books3 = booksLoop.slice(36, 54);
export let books4 = booksLoop.slice(54);
export default function SearchMain() {
  const [text, setText] = useState("");
  const [version, setVersion] = useState("kjv");
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      <div className="md:h-auto min-h-screen bg-cover lg:bg-center md:bg-center bg-center search">
        <div className="bg-neutral-700  min-h-full w-full  bg-opacity-50">
          <div className="flex lg:flex-row md:flex-row flex-col gap-2 lg:p-16 md:p-7 md:m-3 p-2 lg:m-5">
            <SearchBox
              onChange={(e): void => {
                setText(e.target.value);
              }}
              onChangeSelect={(e): void => {
                setVersion(e.target.value);
              }}
              onClick={() => {
                setIsClick(true);
              }}
            />
            <div className={ !isClick ? 'hidden' : `wrap-check-57 pt-10`}>
              <input id="s1-57" type="checkbox" className="switch" onChange={(e)=>{
                if(e.target.checked){
                  setIsClick(!isClick)
                  setTimeout(()=>{e.target.checked = false}, 500)
                }
              }} />
              <label htmlFor="s1-57">Show books</label>
            </div>
          </div>
          {!isClick && <PagesBook />}
          {isClick && <KeyMain phrase={text} version={version} />}
        </div>
      </div>
    </>
  );
}
