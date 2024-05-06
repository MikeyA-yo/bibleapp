import Image from "next/image";
import { MotionP } from "./motions";
import { rob } from "./Nav";
import cross from '@/public/cross.jpg'
export default function Lander(){
return (
    <>
      <div className="  bg-cover bg-center   min-h-screen flex items-center w-full lander">
        {/* <Image src={cross} className="w-full h-screen -z-10 opacity-50 sticky  " width={344} height={344} alt="this image shows on my machine"/> */}
        <div className="bg-red-500 bg-opacity-50 flex justify-center items-center p-4 w-full h-screen">
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