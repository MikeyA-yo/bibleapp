"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import VerseCard from "./verses-card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
export default function KeyPhrases({ keyArray , mobile}: { keyArray: any[], mobile?:boolean }) {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={mobile ? 1 : 2}
        autoplay={{ delay: 5500 }}
        navigation
        pagination={{ clickable: true }}
      >
        {keyArray.map((key: any, i: number) => {
          return (
            <SwiperSlide key={i}>
              <div className="flex flex-col gap-1">
                <VerseCard
                  verse={`${key.book} ${key.chapter} : ${key.verse}`}
                  text={key.text}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
