import Image from "next/image";
import imgSrc from "../public/cross.jpg";
export default function LanderReproduce(){
    return (
          <div className=" bg-red-500 bg-opacity-50 w-full relative">
            <Image src={imgSrc} className="w-full h-screen opacity-50" height={876} width={544} alt="image"/>
            <div className="inset-1/2 absolute ">
              <p>Hello how are you</p>
            </div>
          </div>
    )
    }
