import { MotionP } from "./motions";
import { rob } from "./Nav";

export default function Lander(){
return (
    <>
      <div className=" bg-red-500 bg-opacity-50 min-h-screen flex items-center w-full relative">
        <img src={'/cross.jpg'} className="w-full h-screen opacity-50"  alt="this image shows on my machine"/>
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