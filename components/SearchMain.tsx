import { BookCards, VersesNumber } from './BibleCards';
import { booksA } from './books';
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
let books1 = booksLoop.slice(0,18)
let books2 = booksLoop.slice(18, 36);
let books3 = booksLoop.slice(36, 54);
let books4 = booksLoop.slice(54);
export default function SearchMain(){
    return (
        <>
           <div className="h-screen bg-cover lg:bg-center md:bg-center bg-bottom search">
                <div className='bg-neutral-700 h-full w-full justify-center bg-opacity-50 flex flex-wrap items-center'>
                   {/* <VersesNumber number={45} /> */}
                   {booksLoop.map((book, i) => {
                    return (
                        <div key= {i}> 
                           <BookCards book={book} />
                        </div>
                    )
                   } )}
                </div>
           </div>
        </>
    )
}