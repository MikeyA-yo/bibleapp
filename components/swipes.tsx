"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Button, { ButtonSignUp } from "./button";
import { SessionProvider } from "next-auth/react";
export default function SwiperComponent() {
  let strings: string[] = [
    "Discover the joy of effortless Bible reading",
    "Bringing the Bible to life, one click at a time, with easy access to significant verses",
    "Explore the ancient wisdom of the Bible with modern ease, finding key stories effortlessly",
  ];
  return (
    <>
      <SessionProvider>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
          }}
        >
          {strings.map((str, i) => {
            return (
              <SwiperSlide className="w-full p-10" key={i}>
                <div className="flex flex-col gap-5 items-center py-24 justify-center">
                  <p className="text-2xl text-white">{str}</p>
                  <Button />
                  <ButtonSignUp />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SessionProvider>
    </>
  );
}
