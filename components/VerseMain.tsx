import Result from "./results";
import './Sections.css'

export default function VerseMain(){
    return (
        <>
           <div className="verse min-h-[100svh] bg-center ">
              <div className="pt-20 pb-8">
                 <Result />
              </div>
           </div>
        </>
    )
}