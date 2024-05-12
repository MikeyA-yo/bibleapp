import { BookCards, SearchBox, VersesNumber } from './BibleCards';
import { booksA } from './books';
import PagesBook from './BookSwiper';
import './Sections.css';
let booksLoop:string[] = [];
for (const key in booksA){
    let nKey = key.charAt(0).toUpperCase() + key.slice(1);
    if(key.startsWith('first')) nKey =  key.replace('first', '1st ');
    if(key.startsWith('second')) nKey = key.replace('second', '2nd ');
    if(key.startsWith('third')) nKey = key.replace('third', '3rd ');
    booksLoop.push(nKey);   
    if(nKey == 'Strings'){
        booksLoop.pop() // remove last string property 
    }
}
export let books1 = booksLoop.slice(0,18)
export let books2 = booksLoop.slice(18, 36);
export let books3 = booksLoop.slice(36, 54);
export let books4 = booksLoop.slice(54);
export default function SearchMain(){
    return (
        <>
           <div className="md:h-auto h-screen bg-cover lg:bg-center md:bg-center bg-center search">
           
                <div className='bg-neutral-700  h-full w-full  bg-opacity-50  '>
                    <div className='flex lg:p-10 md:p-7 md:m-3 p-5 m-2 lg:m-5'>
                        <SearchBox />
                    </div>
                  <PagesBook />
                </div>
           </div>
        </>
    )
}