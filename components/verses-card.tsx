export default function VerseCard({verse, text}:{verse:string | number, text:string}){
    return (
        <>
          <div className="flex flex-col bg-gradient-to-b rounded-2xl h-20 w-4/5 from-gray-300 via-slate-600 to-zinc-900 gap-2 justify-evenly">
             <div><p>{verse}</p></div>
             <div><p>{text}</p></div>
          </div>
        </>
    )
}