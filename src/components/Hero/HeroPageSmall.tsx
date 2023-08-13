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

export const HeroPageSmall: FC = () => {
  return (
    <div className="sm:flex lg:hidden w-full h-full justify-center items-center mx">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="swiper-slide"
      >
        {HeroPageContent.map((data, key) => (
          <SwiperSlide className="w-full h-full " key={key}>
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
