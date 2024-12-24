
'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import MainFilterSearchBox from "../hero-2/MainFilterSearchBox";

const index = () => {
  return (
    <>
      <section className="masthead -type-4">
        <div className="masthead-slider overflow-x-hidden js-masthead-slider-4">
          <Swiper
            modules={[Navigation]}
            className="vh-100"
            loop={true}
            navigation={{
              nextEl: ".hero4-next-active",
              prevEl: ".hero4-prev-active",
            }}
          >
            <SwiperSlide>
              <div className="masthead__image">
                <img alt="image" src="/img/masthead/7/6.jpg" />
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="masthead__content">
            <div className="container">
              <div className="row justify-center">
                <div className="col-xl-9">
                  <div
                    className="text-center"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-offset="0"
                  >
                    <p className="sectionTitle_title text-80 lg:text-40 md:text-40 text-white" style={{ fontFamily: 'Madelyn, sans-serif' }}>
                    Discover the ultimate villa experience in Goa
                    </p>
                    <p className="text-white mt-5">
                    Unwind in our collection of 10 luxurious villas, offering comfort, privacy, and 
                    proximity to Goa’s finest attractions
                    </p>
                    <div className="d-inline-block">
                      <a
                        href="#"
                        className="button -md -outline-white h-50 text-white mt-30"
                      >
                        Discover More
                      </a>
                    </div>
                  </div>
                  {/* End text-center */}
                  <MainFilterSearchBox />
                  {/* End tab-filter */}
                </div>
              </div>
            </div>
          </div>
          {/* End .slider-masthead__content*/}
        </div>
        {/* End slider */}

        <div className="masthead-slider__nav -prev js-prev">
          <button className="button -outline-white size-50 flex-center text-white rounded-full hero4-prev-active">
            <i className="icon-arrow-left" />
          </button>
        </div>
        {/* End prev navigation */}

        <div className="masthead-slider__nav -next js-next">
          <button className="button -outline-white size-50 flex-center text-white rounded-full hero4-next-active">
            <i className="icon-arrow-right" />
          </button>
        </div>
        {/* End next navigation */}
      </section>
      {/* End section */}
    </>
  );
};

export default index;
