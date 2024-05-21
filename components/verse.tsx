"use client";

import { Suspense, useEffect, useState } from "react"
import { VersesArray } from "./verseRes"
import { Loading } from "./results";

export function Resolved({version, book, chapter}:{version:string, book:string, chapter:string}) {
  // const [result, setResult] = useState<any>();

  // useEffect(() => {
  
  //   async function fetchData() {
  //     const data = await VersesArray(version, book, chapter);
  //     setResult(data);
  //   }

  //   fetchData();
  // }, [version, book, chapter]);

  return (
    <Suspense fallback={<Loading />}>
      {/* {result} */}
      {VersesArray(version,book, chapter)}
    </Suspense>
  );
}