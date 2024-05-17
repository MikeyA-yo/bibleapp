import { ChapterArray } from '@/app/fetch';
import mapUrl from '@/components/urlMapper'
export default async function Page({ params }: { params: { book: string } }) {
 let book = params.book.includes('%20') ? params.book.replace('%20', ' ') : params.book;
let chapters = await ChapterArray(mapUrl(book));

console.log(chapters)
    return (
    <div className="text-black bg-gray-300 p-40">My book: {book}
    My Chapters: {chapters.map(chapter =>{
        return <p key={chapter}>{chapter}</p>
    })}
    </div>)
  }