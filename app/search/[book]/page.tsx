import { ChapterArray, getMSG, versesKeyphrases } from "@/app/fetch";
import Chapters from "@/components/chapters";
import mapUrl from "@/components/urlMapper";
import { Metadata } from "next";
export const metadata: Metadata = {
    title:'Book'
}
export default async function Page({ params }: { params: { book: string } }) {
  let book = params.book.includes("%20")
    ? params.book.replace("%20", " ")
    : params.book;
  let chapters = await ChapterArray(mapUrl(book));
 // versesKeyphrases('moses', 'nkjv')
  return (
    <Chapters chapters={chapters} />
  );
}
