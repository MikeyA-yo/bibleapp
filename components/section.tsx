import Image from "next/image";
import { MotionP } from "./motions";
import { rob } from "./Nav";
import './Sections.css'
import cross from '@/public/bible.jpg'
export default function Section(){
return (
    <>
      <div className="  section bg-cover bg-center bg-opacity-50 min-h-96 flex items-center w-full">
        {/* <Image src={cross} className="w-full  h-screen opacity-50 sticky" width={344} height={344} alt="this image shows on my machine"/> */}
        <div className="min-h-96 bg-slate-900 flex justify-center items-start bg-opacity-60 w-full ">
          <div className=" gap-10 flex-col hidden lg:flex md:flex p-14">
          <h1 className={`${rob} text-3xl text-white `}>Navigate the Bible with simplicity and joy, aided by our intuitive search feature for significant events </h1>
            <MotionP
            className={`${rob} pt-4 text-2xl leading-8 text-white ` }
            >
             Experience the joy of navigating the Bible effortlessly with our intuitive search feature,
             designed specifically to help you find significant events and verses with ease.
             Say goodbye to endless scrolling and searching,
             and embark on a journey of discovery with simplicity and joy.  
            </MotionP>
          </div>
          <div className=" gap-8 mx-5 flex-col h-auto flex lg:hidden md:hidden ">
          <h1 className={`${rob} pt-4 text-xl text-white `}>Navigate the Bible with simplicity and joy, aided by our intuitive search feature for significant events </h1>
            <MotionP
            className={`${rob} pt-4  leading-8 text-white ` }
            >
             Experience the joy of navigating the Bible effortlessly with our intuitive search feature,
             designed specifically to help you find significant events and verses with ease.
             Say goodbye to endless scrolling and searching,
             and embark on a journey of discovery with simplicity and joy.  
            </MotionP>
          </div>
        </div>
      </div>
    </>
)
}