
'use client'

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { hotelsData } from "../../data/hotels";
import isTextMatched from "../../utils/isTextMatched";
import { useEffect, useState } from "react";


const FilterHotels2 = () => {

  return (
    <>
      {hotelsData.slice(0, 8).map((item) => (
        <div
          className="col-xl-3 col-lg-3 col-sm-6"
          key={item?.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <Link
            href={`/hotel-single-v1/${item.id}`}
            className="hotelsCard -type-1 hover-inside-slider"
          >
            <div className="hotelsCard__image">
              <div className="cardImage inside-slider">
                <Slider
                >
                  {item?.slideImg?.map((slide, i) => (
                    <div className="cardImage ratio ratio-1:1" key={i}>
                      <div className="cardImage__content">
                        <Image
                          width={300}
                          height={400}
                          className="rounded-4 col-12 js-lazy"
                          src={item?.img}
                          alt="image"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>

                <div className="cardImage__leftBadge">
                  <div
                    className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${
                      isTextMatched(item?.tag, "breakfast included")
                        ? "bg-dark-1 text-white"
                        : ""
                    } ${
                      isTextMatched(item?.tag, "best seller")
                        ? "bg-blue-1 text-white"
                        : ""
                    } 
                    } ${
                      isTextMatched(item?.tag, "-25% today")
                        ? "bg-brown-1 text-white"
                        : ""
                    } 
                     ${
                       isTextMatched(item?.tag, "top rated")
                         ? "bg-yellow-1 text-dark-1"
                         : ""
                     }`}
                  >
                    {item?.tag}
                  </div>
                </div>
              </div>
            </div>
            <div className="hotelsCard__content mt-10">
              <h4 className="hotelsCard__title text-black text-20 lh-16 fw-500">
                <span>{item?.title}</span>
              </h4>
              <p className="text-black lh-14 text-14 mt-5">
                {item?.location}
              </p>
              <div className="d-flex items-center mt-5">
                <div className="text-14 text-black fw-500">
                15 Guests | 5 Bedrooms | 5 Baths
                </div>
              </div>
              <div className="mt-5">
                <div className="fw-500">
                  Starting from{" "}
                  <span className="text-black">{item?.price}/-</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FilterHotels2;
