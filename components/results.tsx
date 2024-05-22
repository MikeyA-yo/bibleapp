"use client";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { Resolved } from "./verse";
import mapUrl from "./urlMapper";
import { Suspense } from "react";
import Spinner from "./spinner";

export function Loading() {
  return (
    <>
      <div className="flex flex-col items-center  justify-center mt-16">
        <Spinner className="animate-spin h-20 w-20" />
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden animate-pulse">
          <div className="p-4">
            <div className="h-6 bg-gray-500 rounded mb-4 w-1/4"></div>
            <div className="h-32 bg-gray-300 rounded w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Result() {
  let sp = useSearchParams();
  const params = useParams();
  const pathname = usePathname();
  let book = mapUrl(pathname.split("/")[2].replace("%20", " "));
  let verse = sp.get("v") ?? "nkjv";
  let chapter = params.chap + "";
  return (
    <div className="mx-10 rounded-xl p-6 pb-10 my-8 bg-slate-200 bg-opacity-40 ">
      <Resolved version={verse} book={book} chapter={chapter} />
    </div>
  );
}
