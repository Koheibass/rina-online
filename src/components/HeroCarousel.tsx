"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function HeroCarousel() {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={false}
        autoplay={{ delay: 3000 }}
        speed={2000}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="w-full"
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              src="/images/Top1.webp"
              alt="おといのちオンライン"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* CTA overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-8 lg:pb-16 px-4">
        <a
          href="#join"
          className="inline-block gradient-coral text-white font-bold text-sm lg:text-lg px-8 lg:px-12 py-3 lg:py-4 rounded-full shadow-button no-underline transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          今すぐ参加する
        </a>
      </div>
    </div>
  );
}
