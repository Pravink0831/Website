
'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import MainFilterSearchBox from "./MainFilterSearchBox";

const index = () => {
  return (
    <>
      <section className="masthead -type-7">
        <div className="masthead-slider overflow-x-hidden js-masthead-slider-7">
          <Swiper
            modules={[Navigation]}
            className="vh-100"
            loop={true}
            navigation={{
              nextEl: ".hero7-next-active",
              prevEl: ".hero7-prev-active",
            }}
          >
            <SwiperSlide>
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="masthead__content">
                    <div className="masthead__bg">
                      <img src="/img/masthead/7/1.jpg" alt="image" />
                    </div>
                    <div
                      className="text-white"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Discover the ultimate villa experience in Goa
                    </div>
                    <h1
                      className="text-60 lg:text-40 md:text-30 text-white"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      Step into serenity with our exclusive
                      <br className="lg:d-none" /> villa stays
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="masthead__content">
                    <div className="masthead__bg">
                      <img src="/img/masthead/7/2.jpg" alt="image" />
                    </div>
                    <div
                      className="text-white"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Relax, recharge, and rejuvenate in our villas
                    </div>
                    <h1
                      className="text-60 lg:text-40 md:text-30 text-white"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      Unique Houses Are Waiting
                      <br className="lg:d-none" /> For You
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="masthead__content">
                    <div className="masthead__bg">
                      <img src="/img/masthead/7/3.jpg" alt="image" />
                    </div>
                    <div
                      className="text-white"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Discover the ultimate villa experience in Goa
                    </div>
                    <h1
                      className="text-60 lg:text-40 md:text-30 text-white"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      Step into serenity with our exclusive
                      <br className="lg:d-none" /> villa stays
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div className="masthead__content">
                    <div className="masthead__bg">
                      <img src="/img/masthead/7/4.jpg" alt="image" />
                    </div>
                    <div
                      className="text-white"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Relax, recharge, and rejuvenate in our villas
                    </div>
                    <h1
                      className="text-60 lg:text-40 md:text-30 text-white"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      Unique Houses Are Waiting
                      <br className="lg:d-none" /> For You
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="masthead-slider__nav -prev js-prev">
            <button className="button -outline-white size-50 flex-center text-white rounded-full hero7-prev-active">
              <i className="icon-arrow-left" />
            </button>
          </div>
          {/* End prev navigation */}

          <div className="masthead-slider__nav -next js-next">
            <button className="button -outline-white size-50 flex-center text-white rounded-full hero7-next-active">
              <i className="icon-arrow-right" />
            </button>
          </div>
          {/* End next navigation */}
        </div>
        {/* End slider */}

        <MainFilterSearchBox />
        {/* End tab-filter */}
      </section>
      {/* End section */}
    </>
  );
};

export default index;
