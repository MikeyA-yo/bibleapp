"use client";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { Resolved } from "./verse";
import mapUrl from "./urlMapper";
import { Suspense } from "react";
import Spinner from "./spinner";

export function Loading() {
  return (
    <>
      <div className="flex items-center  justify-center mt-16">
        <Spinner className="animate-spin h-20 w-20" />
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
      <div className="p-6">
        <Resolved version={verse} book={book} chapter={chapter} />
      </div>
  );
}
