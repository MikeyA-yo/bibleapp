import Image from "next/image";
import { MotionP } from "./motions";
import { rob } from "./Nav";
//top-1/2 left-1/2 absolute 
import './Sections.css'
import cross from '@/public/bible.jpg'
export default function Section(){
return (
    <>
      <div className="  section bg-cover bg-center bg-opacity-50 min-h-96 flex items-center w-full">
        {/* <Image src={cross} className="w-full  h-screen opacity-50 sticky" width={344} height={344} alt="this image shows on my machine"/> */}
        <div className="h-96 bg-slate-500 flex justify-center items-center bg-opacity-50 w-full">
          <div className="flex flex-col ">
            <MotionP
            className={`${rob} text-white`}
            >Hello how are you more fillers, read the bible your way heyy</MotionP>
          </div>
        </div>
      </div>
    </>
)
}