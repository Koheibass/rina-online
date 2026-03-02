"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function HeroCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={false}
      autoplay={{ delay: 3000 }}
      speed={2000}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Image
          src="/images/Top1.webp"
          alt="おといのちオンライン"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </SwiperSlide>
    </Swiper>
  );
}
