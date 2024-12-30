
'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import MainFilterSearchBox from "../hero-2/MainFilterSearchBox";

const index = () => {
  return (
    <>
      <section className="masthead -type-4">
        <div className="masthead-slider overflow-x-hidden js-masthead-slider-4">
          <Swiper
            modules={[Navigation, Autoplay]}
            className="vh-100"
            loop={true}
            autoplay={{ 
              delay: 3000, // 3 seconds disableOnInteraction: false, 
              }}
            speed={2000}
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
            <SwiperSlide>
              <div className="masthead__image">
                <img alt="image" src="/img/masthead/7/3.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="masthead__image">
                <img alt="image" src="/img/masthead/7/2.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="masthead__image">
                <img alt="image" src="/img/masthead/7/1.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="masthead__image">
                <img alt="image" src="/img/masthead/7/4.jpg" />
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="masthead__content">
            <div className="container">
              <div className="row justify-center">
                <div className="col-xxl-12 col-md-10">
                  <div
                    className="text-center"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-offset="0"
                  >
                    <p className="sectionTitle__title Made text-100 lg:text-80 md:text-20 text-white">
                    Discover the ultimate villa experience in Goa
                    </p>
                    <p className="text-white text-20 mt-5 mb-10">
                    Unwind in our collection of 10 luxurious villas, offering comfort, privacy,<br></br> and 
                    proximity to Goa’s finest attractions
                    </p>
                
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
