"use client";
import { usePathname } from "next/navigation";
import mapUrl from "./urlMapper";
export default function VerseGroup({ chap }: { chap: string | number  }) {
  const pathname = usePathname();
 
  let book = pathname.split("/")[2].replace("%20", " ");
  return (
    <>
      <div className="bg-white text-center mt-20">
        {book} : {chap}
      </div>
    </>
  );
}
