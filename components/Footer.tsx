export default function Footer() {
  return (
    <>
      <div className=" bg-cover bg-center  footer h-[70svh]">
        <div className="h-full w-full flex flex-col lg:flex-row md:flex-row items-start p-5 justify-evenly bg-red-600 bg-opacity-50">
          <div className="flex gap-3 flex-col">
            <h1 className="text-2xl text-white">Footer Header 1</h1>
          </div>
          <div className="flex gap-3 flex-col">
            <h1 className="text-2xl text-white">Footer Header 2</h1>
          </div>
        </div>
      </div>
    </>
  );
}
