
export function VersesNumber({ number }: { number: number | string }) {
  return (
    <>
      <div className="flex h-20 w-20 m-5 items-center transition duration-300 ease-in-out rounded bg-gradient-to-b from-neutral-500 via-slate-100 to-gray-300 hover:scale-110 hover:bg-gradient-to-t hover:from-gray-300 hover:via-slate-100 hover:to-neutral-500 justify-center">
        <p className="text-2xl text-gray-700">{number}</p>
      </div>
    </>
  );
}
export function BookCards({book}: {book:string}){
    return (
        <>
          <div className="flex h-24 w-44 m-5 items-center transition duration-300 ease-in-out rounded-2xl bg-gradient-to-b from-neutral-500 via-slate-100 to-gray-300 hover:scale-110 hover:bg-gradient-to-t hover:from-gray-300 hover:via-slate-100 hover:to-neutral-500 justify-center">
            <p className="text-2xl  text-gray-700">{book}</p>
          </div>
        </>
      ); 
}
