"use client"
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { books1, books2, books3, books4 } from "./SearchMain";
import { BookCards } from "./BibleCards";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function PagesBook() {
  let someThings = [books1, books2, books3, books4];
  return (
    <>
      <div>
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
