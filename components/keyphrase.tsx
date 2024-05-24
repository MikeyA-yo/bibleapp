import { versesKeyphrases } from "@/app/api/fetch";
import KeyPhrases from "./KeyPhcard";

export default async function KeyPhraseRes(phrase: string, version: string) {
  const result = await versesKeyphrases(phrase, version);
  if (result.length == 0) {
    return <p>Nothing found, i'll work on this ui later</p>;
  }
  const obResult = result.map((citation: any) => ({
    book: citation.book.replace(
      citation.book.charAt(0),
      citation.book.charAt(0).toUpperCase()
    ),
    chapter: citation.chapter,
    verse: citation.verse,
    text: citation.text
      .replaceAll("<mark>", "")
      .replaceAll("</mark>", "")
      .replaceAll("<i>", "")
      .replaceAll("</i>", "")
      .replaceAll("</J>", "")
      .replaceAll("<br/>", "\n \n"),
  }));
  // console.log(obResult)
  return (
    <>
      <div className="lg:block md:block hidden">
        <KeyPhrases keyArray={obResult} />
      </div>
      <div className="block lg:hidden md:hidden">
        <KeyPhrases keyArray={obResult} mobile />
      </div>
    </>
  );
}