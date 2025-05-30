import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./carousel.css";
import { Button } from "../customSiteUI/button";
import Link from "next/link";
function Carousel({ data }) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="relative rounded-[16px] pb-16 w-full"
    >
      {data?.map((item, index) => (
        <SwiperSlide
          key={index}
          style={{
            backgroundImage: `url(${item?.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex rounded-[16px] justify-center"
        >

          <div style={{background: "linear-gradient(90deg, #0D0057 20.19%, rgba(36, 17, 142, 0) 100%)"}} className="   rounded-[16px] ">
            <div className=" p-7 lg:p-9 md:w-[80%] lg:w-[70%] col-span-2">
              <h1 className="  font-light leading-snug text-2xl md:text-4xl lg:text-6xl">
                {item?.heading}
              </h1>
              <p className=" text-white mb-16 text-opacity-[72%] font-normal text-lg md:text-xl lg:text-2xl mt-8">
                {item?.subHeading}
              </p>
              <Button className="bg-primary-800 text-sm text-white px-4 py-3 rounded-md" asChild>
                <Link href="/">{item?.buttonTitle}</Link>
              </Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
