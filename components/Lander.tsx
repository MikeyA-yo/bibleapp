import Image from "next/image";
import { MotionP } from "./motions";
import { rob } from "./Nav";
import cross from '@/public/cross.jpg'
export default function Lander(){
return (
    <>
      <div className=" bg-red-500 bg-opacity-50  min-h-screen flex items-center w-full relative">
        <Image src={cross} className="w-full h-screen -z-10 opacity-50 sticky  " width={344} height={344} alt="this image shows on my machine"/>
        <div className="top-1/2 left-1/2 absolute ">
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