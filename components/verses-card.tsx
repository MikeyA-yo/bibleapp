import { Montserrat } from "next/font/google";
import { MotionDiv } from "./motions";

const mont = Montserrat({weight:["500"], subsets:['latin'], style:['normal']})
export default function VerseCard({
  verse,
  text,
}: {
  verse: string | number;
  text: string;
}) {
  let variants = {
    initial:{opacity: 0.4, y: "60%"},
    animate:{opacity:1, y:0}
  }
  return (
    <>
     <MotionDiv
     variants={variants}
     initial="initial"
     transition={{delay:(Number(verse) >= 30 ? Number(verse) * 0.001 : Number(verse) * 0.005 ), duration: 0.5}}
     whileInView={"animate"}
     className=" bg-gradient-to-b rounded-2xl h-auto p-4 w-4/5 from-gray-300 via-slate-600 to-zinc-900  "
     >
     <div className="flex flex-col h-full w-full  gap-1 justify-evenly" id={`${verse}`}>
        <div className="pl-4">
          <p>{verse}</p>
        </div>
        <div className={"pb-2 text-gray-100" + mont.className}>
          <p>{text}</p>
        </div>
      </div>
     </MotionDiv>
    </>
  );
}
