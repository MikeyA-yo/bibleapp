"use client";

import { useEffect, useState } from "react"
import { VersesArray } from "./verseRes"

export function Resolved({version, book, chapter}:{version:string, book:string, chapter:string}) {
  const [result, setResult] = useState<any>();

  useEffect(() => {
  
    async function fetchData() {
      const data = await VersesArray(version, book, chapter);
      setResult(data);
    }

    fetchData();
  }, [version, book, chapter]);

  return result;
}