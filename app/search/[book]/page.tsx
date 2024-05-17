export default function Page({ params }: { params: { book: string } }) {
    return (
    <div className="text-black bg-white p-40">My Post: {params.book}</div>)
  }