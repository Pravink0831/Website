
'use client'

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Scrollbar } from "swiper";
import { destinations2 } from "../../data/desinations";

const PopularDestinations = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        className="overflow-hidden pd-20"
        scrollbar={{
          el: ".js-popular-destination-scrollbar",
          draggable: true,
        }}
        modules={[Scrollbar, Navigation]}
        navigation={{
          nextEl: ".js-destination-next",
          prevEl: ".js-destination-prev",
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {destinations2.map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              href="#"
              className="citiesCard -type-1 d-block rounded-60"
              key={item.id}
            >
              <div className="citiesCard__image ratio ratio-41:45">
                <Image
                  width={300}
                  height={400}
                  src={item.img}
                  alt="image"
                  className="js-lazy"
                />
              </div>
              <div className="citiesCard__content d-flex flex-column justify-between text-center pt-30 pb-20 px-20">
                <div className="citiesCard__bg" />
                <div className="citiesCard__bottom">
                  
                </div>
                <div className="">
                  <h4 className="text-26 md:text-20 lh-13 text-white mb-5">
                    {item.city}
                  </h4>
                  <div className="text-18 lh-14 text-white">{item.hoverText}</div>
                  
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <button className="section-slider-nav -prev flex-center button -yellow-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-destination-prev">
          <i className="icon icon-chevron-left text-16" />
        </button>
        <button className="section-slider-nav -next flex-center button -yellow-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-destination-next">
          <i className="icon icon-chevron-right text-16" />
        </button>
        {/*<div className="slider-scrollbar bg-light-2 mt-40  js-popular-destination-scrollbar" />*/}
      </div>
    </>
  );
};

export default PopularDestinations;
