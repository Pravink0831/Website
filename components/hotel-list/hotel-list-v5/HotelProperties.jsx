
'use client'

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { hotelsData } from "../../../data/hotels";
import isTextMatched from "../../../utils/isTextMatched";

const HotelProperties = () => {
  var itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // custom navigation
  function ArrowSlick(props) {
    let className =
      props.type === "next"
        ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
        : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <>
          <i className="icon icon-chevron-right text-12"></i>
        </>
      ) : (
        <>
          <span className="icon icon-chevron-left text-12"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  return (
    <>
      {hotelsData.slice(0, 12).map((item) => (
        <div
          className="col-lg-3 col-sm-6"
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
                <Slider>
                  {item?.slideImg?.map((slide, i) => (
                    <div className="cardImage ratio ratio-63:55" key={i}>
                      <div className="cardImage__content ">
                        <Image
                          width={300}
                          height={300}
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
            <div className="hotelsCard__content">
              <h4 className="hotelsCard__title text-black text-20 lh-16 fw-500">
                <span>{item?.title}</span>
              </h4>
              <p className="text-black lh-14 text-14">
                {item?.location}
              </p>
              <div className="d-flex items-center">
                <div className="text-14 text-black fw-500">
                15 Guests | 5 Bedrooms | 5 Baths
                </div>
              </div>
              
                <div className="fw-500 mt-5">
                  Starting from{" "}
                  <span className="text-black">{item?.price}/-</span>
                </div>
              
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default HotelProperties;
