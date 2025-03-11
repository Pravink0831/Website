'use client'

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import isTextMatched from "../../utils/isTextMatched";
import { useEffect, useState } from "react";

const FilterHotels2 = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/hotels');
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {properties.slice(0, 8).map((item) => (
        <div
          className="col-xl-3 col-lg-3 col-sm-6"
          key={item?._id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <Link
            href={`/hotel-single-v1/${item._id}`}
            className="hotelsCard -type-1 hover-inside-slider" 
          >
            <div className="hotelsCard__image">
              <div className="cardImage inside-slider">
                <div className="cardImage ratio ratio-63:55">
                  <div className="cardImage__content">
                    <Image
                      width={640}
                      height={480}
                      className="rounded-4 col-12 js-lazy"
                      src={item?.img || ''}  // Use banner image
                      alt={item?.title}
                    />
                  </div>
                </div>
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
            <div className="hotelsCard__content pt-20 pl-5">
              <h4 className="hotelsCard__title text-black text-20 lh-16 fw-500">
                <span>{item?.title}</span>
              </h4>
              <p className="text-black lh-14 text-14 fw-500">
                {item?.location}
              </p>
              <div className="d-flex items-center">
                <div className="text-14 text-black fw-500">
                  {item?.guests} Guests | {item?.bedrooms} Bedrooms | {item?.baths} Baths
                </div>
              </div>
              
                <div className="fw-600 mb-5">
                  Starting from{" "}
                  <span className="text-black text-14">{item?.price}/-</span>
                </div>
              
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default FilterHotels2;
