export default function Page({ params }: { params: { book: string } }) {
    console.log(params)
    return (
    <div className="text-black bg-gray-300 p-40">My book: {params.book.includes('%20') ? params.book.replace('%20', ' ') : params.book}</div>)
  }