"use client"
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { books1, books2, books3, books4 } from "./SearchMain";
import { Oswald } from "next/font/google";
import { BookCards } from "./BibleCards";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const oswald = Oswald({weight:["700"], subsets:["latin"]})
export default function PagesBook() {
  let someThings = [books1, books2, books3, books4];
  return (
    <>
      <div>
        <p className={`${oswald.className} text-center text-2xl`}>Books</p>
        <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        >
          {someThings.map((thing: string[], i) => {
            return (
              <SwiperSlide key={i} >
                <div className="flex flex-wrap justify-center items-center">
                {thing.map((book, i) => {
                  return (
                      <BookCards book={book} key={i}/>
                  )
                })}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
