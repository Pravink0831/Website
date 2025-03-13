'use client'
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "photoswipe/dist/photoswipe.css";
import Header7 from "@/components/header/header-7";
import Overview from "@/components/hotel-single/Overview";
import PopularFacilities from "@/components/hotel-single/PopularFacilities";
import PropertyHighlights from "@/components/hotel-single/PropertyHighlights";
import Hero1 from "@/components/hero/hero-1/index"; // Updated import
import SidebarRight from "@/components/hotel-single/SidebarRight";
import Facilities from "@/components/hotel-single/Facilities";
import DefaultFooter from "@/components/footer/footer-3";
import GalleryOne from "@/components/hotel-single/GalleryOne";
import Destinations from "@/components/destinations/TopDestinations2";
import HousePolicies from "@/components/Policies/page";

const HotelSingleV1Dynamic = ({ params }) => {
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = params;

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await fetch(`/api/hotels/${id}`);
        if (!response.ok) {
          throw new Error('Hotel not found');
        }
        const data = await response.json();
        console.log('Fetched hotel data:', data); // Add debugging log
        setHotel(data);
      } catch (error) {
        console.error('Error fetching hotel:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, [id]);

  if (loading || !hotel) {
    return (
      <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      <span className="ml-4 text-xl font-semibold text-gray-700">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <Header7 />
      
      <Hero1 
        img={hotel.heroImg} // Fallback to banner image if hero image is not available
        title={hotel.title || ''} 
        location={hotel.location || ''}
        city={hotel.city || ''}
      />

      <GalleryOne hotel={hotel} />

      <section className="pt-30">
        <div className="container">
          <div className="row y-gap-30 d-flex relative">
            <div className="col-xl-7">
              <div className="row y-gap-40">
                <div className="col-12">
                  <h3 className="text-80 Made fw-500">Property Highlights</h3>
                  <PropertyHighlights hotel={hotel} />
                </div>
                {/* End .col-12 Property highlights */}

                <div id="overview" className="col-12">
                  <Overview hotel={hotel} />
                </div>
                {/* End .col-12  Overview */}

                <div className="col-12">
                  <h3 className="text-60 Made fw-500 pt-20">
                  Features
                  </h3>
                  <div className="row y-gap-10 pt-20">
                    <PopularFacilities hotel={hotel}/>
                  </div>
                </div>

                <div className="col-12">
                  <h3 className="text-60 Made fw-500 pt-20">
                  Amenities Available
                  </h3>
                  <div className="row y-gap-10 pt-20">
                  <Facilities hotel={hotel}/>
                  </div>
                </div>

                <div className="col-12">
                  <h3 className="text-60 Made fw-500 pt-20">
                  Spaces
                  </h3>
                  <div className="row y-gap-10 pt-20 relative">
                    <Destinations hotel={hotel}/>
                  </div>
                </div>
                <div className="col-12">
                  <h3 className="text-60 Made fw-500 pt-20">
                  House Rules
                  </h3>
                  <div className="row y-gap-10 pt-20">
                  <HousePolicies hotel={hotel}/>
                  </div>
                </div>

                <div className="col-12">
                  <h3 className="text-60 Made fw-500">
                  Location
                  </h3>
                  <div className="row y-gap-10 pt-20">
                  <div className="row y-gap-10 ">
                    {/* Added renderSection7 map component */}
                    <div className="listingSection__wrap">
                      {/* HEADING */}
                      <div>
                        <span className="sectionTitle__text mt-10 text-18 text-black">
                        {hotel?.locationDescription}
                        </span>
                      </div>
            

                      {/* MAP */}
                      <div className="aspect-w-5 aspect-h-8 sm:aspect-w-3 sm:aspect-h-4 ring-1 ring-black/10 rounded-xl z-0 mt-20">
                        <div className="rounded-xl overflow-hidden z-0">
                          <iframe
                            width="100%"
                            height="100%"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61503.663815054795!2d73.83688886848338!3d15.539257072359465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfbfcf70538563%3A0x36aebb950525ab10!2sChor%C3%A3o%20Island!5e0!3m2!1sen!2sin!4v1736071371857!5m2!1sen!2sin"
                          ></iframe></div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

                <div className="col-12">
                  <h3 className="text-20 fw-500">
                    Nearest points
                  </h3>
                  <div className="row y-gap-10">
                    <ul className="mt-3 list ml-20 text-18 text-neutral-500 dark:text-neutral-400 space-y-2 mb-20">
                      {hotel?.nearestPoints?.map((point, index) => (
                        <li key={index}>
                          {point.pointName} - {point.distance}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                
                {/* End .col-12 Most Popular Facilities */}

                {/*<div className="col-12">
                  <RatingTag />
                </div>
                 End .col-12 This property is in high demand! */}
              </div>
              {/* End .row */}
            </div>
            {/* End .col-xl-7 */}

            <div className="col-xl-5"><div className="sticky-sidebar">
              <SidebarRight hotel={hotel} /></div>
            </div>
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End single page content */}

      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(HotelSingleV1Dynamic), { ssr: false });
