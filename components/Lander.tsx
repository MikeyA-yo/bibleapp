import SwiperComponent from "./swipes";

export default function Lander() {
  return (
    <>
      <div className="  bg-cover bg-center   min-h-screen flex items-center w-full lander">
        <div className="bg-red-600 bg-opacity-50 flex  justify-center items-center  w-full h-screen">
          <SwiperComponent />
        </div>
      </div>
    </>
  );
}
