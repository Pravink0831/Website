import dynamic from "next/dynamic";
import DefaultFooter from "@/components/footer/footer-3";
import Header7 from "@/components/header/header-7";
import Hero4 from "@/components/hero/hero-4";
import BlockGuide from "@/components/block/BlockGuide";
import Subscribe from "@/components/home/home-7/Subscribe";
import Blog from "@/components/home/home-7/Blog";
import Counter from "@/components/counter/Counter3";
import Testimonial from "@/components/home/home-4/Testimonial";
import TopDestinations from "@/components/home/home-7/TopDestinations";
import Rentals from "@/components/rentals/Rentals";
import HotelTypes from "@/components/home/home-7/HotelTypes";
import FilterHotels4 from "@/components/hotels/FilterHotels4";
import PopularDestinations from "@/components/destinations/PopularDestinations";
import ParallaxBanner from "@/components/banner/ParallaxBanner";
import CallToActions from "@/components/common/CallToActions";


export const metadata = {
  title: "Home || Villa M Stay",
  description: "Villa M Stay",
};

const home_7 = () => {
  return (
    <>
      {/* End Page Title */}

      <Header7 />
      {/* End Header7 */}

      <Hero4 />
      {/* End Hero 7 */}
      <ParallaxBanner />
      {/* End ypes of Stays */}
      
      <section className="layout-pt-md layout-pb-sm">
              <div className="container">
                <div className="row justify-center text-center">
                  <div className="col-auto">
                    <div className="sectionTitle -md">
                      <h2 className="sectionTitle__title text-80 lh-8 Made">Explore Our Stunning Villas</h2>
                      <p className=" sectionTitle__text text-20 text-black mt-5 sm:mt-0">
                      Indulge in the beauty and elegance of our carefully curated villa collection, crafted for unforgettable stays.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End .row */}
                <FilterHotels4 />
              </div>
              {/* End .container */}
        </section>

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title text-80 Made">Step Out and Explore</h2>
                <p className=" sectionTitle__text text-20 text-black mt-5 sm:mt-0">
                Enjoy easy access to North Goa’s most famous attractions and activities
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="relative pt-40 sm:pt-20">
            <PopularDestinations />
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End Homes Guests Love Sections */}
      {/* End top destination section */}

      {/* End Testimonial Sectoin */}

      <section className="section-bg pt-40 pb-40 bg-black-2 text-white">
        <div className="section-bg__item -w-1165 border-bottom-light"></div>

        <div className="container">
        <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title text-80 lh-8 Made">Discover Our Story in Numbers</h2>
              </div>
            </div>
          </div>
          <div className="row text-center justify-between mt-30 mb-30">
            <Counter />
          </div>
        </div>
      </section>
      {/* End counter section */}

      {/* End blog section */}
      <section className="section-bg layout-pt-md layout-pb-lg">
        <div className="section-bg__item -left -right bg-egg-1" />
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title text-80 Made">
                Real Guests, Real Reviews
                </h2>
                <p className="sectionTitle__text text-20 lh-14 text-black mt-5 sm:mt-0">
                Honest reviews from guests who’ve stayed and loved their time with us
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="relative mt-80 md:mt-40  position-relative">
            <Testimonial />
          </div>
          {/* End .overflow-hidden */}

          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End testimonial section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title Made text-80 lh-13">Core Comforts you Can Count On</h2>
                <p className=" sectionTitle__text mt-20 text-20 lh-14 text-black sm:mt-10">
                  Our villas come fully equipped with modern amenties to make your stay effortless and relaxing
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row justify-center y-gap-20 pt-50">
            <BlockGuide />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Block Guide Section */}

      <CallToActions />
      {/* End Subscribe Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_7), { ssr: false });
