"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";
import Link from "next/link";
import { HeroPageContent } from "../CommonContent";
import { Swiper as SwiperType } from "swiper/types";
import { useState } from "react";

export const HeroPageSmall: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChaneg = (swiper: SwiperType) => {
    const activeIndex = swiper.realIndex;
    setActiveIndex(activeIndex);
  };
  return (
    <div
      className={`sm:flex flex-col lg:hidden w-full h-full justify-center items-center object-fill relative`}
      style={{
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
      }}
    >
      <div className="w-full h-full bg-black bg-no-repeat absolute top-0">
        <img
          src={`${HeroPageContent[activeIndex].img}`}
          alt="img"
          className="w-full h-full object-fill blur-sm"
        />
      </div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="swiper-slide "
        onSlideChange={handleSlideChaneg}
      >
        {HeroPageContent.map((data, key) => (
          <SwiperSlide className="w-full h-full  " key={key}>
            <Link href={data.dir}>
              <Image
                src={data.img}
                width={600}
                height={800}
                alt="mobule"
                className="object-fill w-full h-full"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
