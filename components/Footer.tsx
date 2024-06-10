import Cry from "./Brevo";

export default function Footer() {
  return (
    <>
      <div className=" bg-cover bg-center  footer lg:h-[75svh] h-screen ">
        <div className="h-full w-full flex flex-col lg:flex-row md:flex-row items-start p-5 lg:justify-evenly justify-start bg-red-600 bg-opacity-50">
          <div className="flex gap-3 flex-col">
            <h1 className="text-xl text-white">Spiritual Awakening</h1>
            <p>Terms of Service</p>
            <p>Privacy policies</p>
            <p>Spiritual Awakening</p>
            <i className="text-xs hidden lg:block md:block">&copy; {new Date().getFullYear()} all rights reserved, Ayomide, CHO inc.</i>
          </div>
          <div className="flex  gap-3 flex-col">
            <h1 className="text-xl text-white">NewsLetter</h1>
            <Cry />
          </div>
          <i className="text-xs block lg:hidden mt-auto md:hidden">&copy; {new Date().getFullYear()} all rights reserved, Ayomide, CHO inc.</i>
        </div>
      </div>
    </>
  );
}
