import { VersesNumber } from './BibleCards'
import './Sections.css'
export default function SearchMain(){
    return (
        <>
           <div className="h-screen bg-cover lg:bg-center md:bg-center bg-bottom search">
                <div className='bg-neutral-700 h-full w-full justify-center bg-opacity-50 flex items-center'>
                   <p>Hey Mom</p>
                   <VersesNumber number={45} />
                </div>
           </div>
        </>
    )
}