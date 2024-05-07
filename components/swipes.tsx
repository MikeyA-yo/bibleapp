"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
export default function SwiperComponent(){
    let strings: string[] = ['hello filler', 'or fillers', 'na some filers lol'];
     return(
        <>
           <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
                delay:1500,
             }}
           >
                {strings.map((str, i)=>{
                    return (
                        <SwiperSlide className='w-full p-10' key={i}>
                            <div className='flex items-center p-24 justify-center'>
                            <p className='text-2xl text-white'>{str}</p> 
                            </div>
                        </SwiperSlide>
                    )
                })}
             
           </Swiper>
        </>
     )
}