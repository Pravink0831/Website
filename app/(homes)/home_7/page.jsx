import dynamic from "next/dynamic";
import DefaultFooter from "@/components/footer/default";
import Header7 from "@/components/header/header-7";
import Hero4 from "@/components/hero/hero-4";
import BlockGuide from "@/components/block/BlockGuide";
import Subscribe from "@/components/home/home-7/Subscribe";
import Blog from "@/components/home/home-7/Blog";
import Counter from "@/components/counter/Counter3";
import Testimonial from "@/components/home/home-7/Testimonial";
import TopDestinations from "@/components/home/home-7/TopDestinations";
import Rentals from "@/components/rentals/Rentals";
import HotelTypes from "@/components/home/home-7/HotelTypes";
import FilterHotels4 from "@/components/hotels/FilterHotels4";
import PopularDestinations from "@/components/destinations/PopularDestinations";
import ParallaxBanner from "@/components/banner/ParallaxBanner";

export const metadata = {
  title: "Home-7 || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
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
                      <h2 className="sectionTitle__title text-80 Made">Explore Our Stunning Villas</h2>
                      <p className=" sectionTitle__text mt-5 sm:mt-0">
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
                <p className=" sectionTitle__text mt-5 sm:mt-0">
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
        <div className="section-bg__item -left-100 -right-100 border-bottom-light"></div>

        <div className="container">
        <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title text-80 Made">Discover Our Story in Numbers</h2>
              </div>
            </div>
          </div>
          <div className="row y-gap-40 justify-center text-center mt-30 mb-30">
            <Counter />
          </div>
        </div>
      </section>
      {/* End counter section */}

      {/* End blog section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-20 justify-between pt-50">
            <BlockGuide />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Block Guide Section */}

      <Subscribe />
      {/* End Subscribe Section */}

      <DefaultFooter />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_7), { ssr: false });
