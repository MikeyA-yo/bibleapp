import Link from "next/link";
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
                   <Link href={'/'} ><p className="text-gray-100">HOME</p></Link>
                  <Link href={'/signup'}> <p className="text-gray-100">SIGNUP</p></Link>
                   <Link href={'/search'}><p className="text-gray-100">SEARCH</p></Link>
                   <Link href={'/contact'} ><p className="text-gray-100">Contact us</p></Link>
                </div>
            </div>
            <div>

            </div>
        </div>
        </>
    )
}