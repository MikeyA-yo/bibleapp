import Bar from "./bar";
import { Roboto } from "next/font/google";
// <Bar className="h-6 w-6" />
export default function Nav(){
    return (
        <>
        <div>
            <div className="lg:flex md:flex justify-between hidden p-8">
                <div>
                  <p className="h-6 font-bold text-white">Spiritual Awakening</p>
                </div>
                <div className="flex gap-5">
                   <p className="text-gray-100">HOME</p>
                   <p className="text-gray-100">SIGNUP</p>
                   <p className="text-gray-100">SEARCH</p>
                   <p className="text-gray-100">Contact us</p>
                </div>
            </div>
            <div>

            </div>
        </div>
        </>
    )
}