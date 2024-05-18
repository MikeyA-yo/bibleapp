import VerseGroup from "@/components/verse";

export default function Page({params}:{params:{chap: number | string}}){
    return (
        <>
         <VerseGroup chap={params.chap} />
        </>
    )
}