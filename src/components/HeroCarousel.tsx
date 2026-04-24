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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Text overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-8 lg:pb-16 px-4">
        <h1 className="text-white text-center drop-shadow-lg">
          <span className="block text-lg lg:text-4xl font-bold mb-2 lg:mb-3 tracking-wider">
            クラシック音楽を、もっと楽しく。
          </span>
          <span className="block text-xs lg:text-xl font-medium opacity-90 tracking-wide">
            同じ想いを持つ仲間と出会える、日本一あたたかいコミュニティ
          </span>
        </h1>
        <a
          href="#join"
          className="mt-4 lg:mt-6 inline-block gradient-coral text-white font-bold text-sm lg:text-lg px-8 lg:px-12 py-3 lg:py-4 rounded-full shadow-button no-underline transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          今すぐ参加する
        </a>
        <p className="mt-2 lg:mt-3 text-white/80 text-xs lg:text-sm">
          980円/月から始められます
        </p>
      </div>
    </div>
  );
}
