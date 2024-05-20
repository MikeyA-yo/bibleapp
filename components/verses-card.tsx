export default function VerseCard({verse, text}:{verse:string | number, text:string}){
    return (
        <>
          <div className="flex flex-col bg-slate-200 gap-3 justify-evenly">
             <div><p>{verse}</p></div>
             <div><p>{text}</p></div>
          </div>
        </>
    )
}