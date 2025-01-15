import dynamic from "next/dynamic";
import "photoswipe/dist/photoswipe.css";
import { hotelsData } from "@/data/hotels";
import Header7 from "@/components/header/header-7";
import Overview from "@/components/hotel-single/Overview";
import PopularFacilities from "@/components/hotel-single/PopularFacilities";
import PropertyHighlights from "@/components/hotel-single/PropertyHighlights";
import RatingTag from "@/components/hotel-single/RatingTag";
import StickyHeader from "@/components/hotel-single/StickyHeader";
import Hero1 from "@/components/hero/hero-1";
import SidebarRight from "@/components/hotel-single/SidebarRight";
import AvailableRooms from "@/components/hotel-single/AvailableRooms";
import ReviewProgress from "@/components/hotel-single/guest-reviews/ReviewProgress";
import DetailsReview from "@/components/hotel-single/guest-reviews/DetailsReview";
import ReplyForm from "@/components/hotel-single/ReplyForm";
import ReplyFormReview from "@/components/hotel-single/ReplyFormReview";
import Facilities from "@/components/hotel-single/Facilities";
import Image from "next/image";
import Surroundings from "@/components/hotel-single/Surroundings";
import HelpfulFacts from "@/components/hotel-single/HelpfulFacts";
import Faq from "@/components/faq/Faq";
import Hotels2 from "@/components/hotels/Hotels2";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/footer-3";
import GalleryOne from "@/components/hotel-single/GalleryOne";
import Destinations from "@/components/destinations/TopDestinations2";
import HousePolicies from "@/components/Policies/page";

export const metadata = {
  title: "Villa || GoTrip - Travel & Tour React NextJS Template",
  description: "Villa M Stays",
};

const HotelSingleV1Dynamic = ({ params }) => {
  const id = params.id;
  const hotel = hotelsData.find((item) => item.id == id) || hotelsData[0];
  
  return (
    <>
      {/* End Page Title 

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header7 />
      {/* End Header 1 */}

      <Hero1 img={hotel.img} title={hotel.title} location={hotel.location}/>
      {/* End top hero */}

      {/*
      <StickyHeader hotel={hotel} />
       sticky single header for hotel single */}

      <GalleryOne hotel={hotel} />

      {/* End gallery grid wrapper */}



      <section className="pt-30">
        <div className="container ">
          <div className="row y-gap-30 d-flex relative" >
            <div className="col-xl-7" >
              <div className="row y-gap-40">
                <div className="col-12">
                  <h3 className="text-80 Made fw-500">Property Highlights</h3>
                  <PropertyHighlights />
                </div>
                {/* End .col-12 Property highlights */}

                <div id="overview" className="col-12">
                  <Overview />
                </div>
                {/* End .col-12  Overview */}

                <div className="col-12">
                  <h3 className="text-60 Made fw-500 pt-20">
                  Features
                  </h3>
                  <div className="row y-gap-10 pt-20">
                    <PopularFacilities />
                  </div>
                </div>

                <div className="col-12">
                  <h3 className="text-60 Made fw-500 pt-20">
                  Amenities Available
                  </h3>
                  <div className="row y-gap-10 pt-20">
                  <Facilities />
                  </div>
                </div>

                <div className="col-12">
                  <h3 className="text-60 Made fw-500 pt-20">
                  Spaces
                  </h3>
                  <div className="row y-gap-10 pt-20 relative">
                    <Destinations />
                  </div>
                </div>
                <div className="col-12">
                  <h3 className="text-60 Made fw-500 pt-20">
                  House Rules
                  </h3>
                  <div className="row y-gap-10 pt-20">
                  <HousePolicies />
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
                        <span className="sectionTitle__text mt-10 text-16 text-black">
                        Conveniently located in Calangute, Villa M - Savannah 7 offers easy access to North
                Goa’s vibrant attractions. Beaches, supermarkets, restaurants, bars, and popular tourist
                spots are just a short walk or drive away.
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
                  <h3 className="text-20 fw-500 pt-20">
                  Nearest points
                  </h3>
                  <div className="row y-gap-10">
                  <ul className="mt-3 list text-neutral-500 dark:text-neutral-400 space-y-2 mb-10">
                      <li>
                      Candolim Beach - 2.4 kms</li>
                      <li>Calangute Beach - 3.2 kms</li>
                      <li>Baga Beach - 5.1 kms</li>
                      <li>Anjuna Beach - 10.8 kms</li>
                      <li>Chapora Fort - 11.5 kms</li>
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
            {/* End .col-xl-8 */}

            <div className="col-xl-4" style={{display:'block',flexGrow:1}}><div  style={{ position: 'sticky', top: '40px' }}>
              <SidebarRight hotel={hotel} /></div>
            </div>
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End single page content */}

      {/*<section id="rooms" className="pt-30">
        <div className="container">
          <div className="row pb-20">
            <div className="col-auto">
              <h3 className="text-22 fw-500">Features</h3>
            </div>
          </div>
          {/* End .row 
          <AvailableRooms hotel={hotel} />
        </div>
        {/* End .container
      </section>
      {/* End Available Rooms */}

      {/*<section className="pt-40" id="reviews">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-22 fw-500">Amenities Available</h3>
            </div>
          </div>
          {/* End .row 

          <ReviewProgress />
          {/* End review with progress

          <div className="pt-40">
            <DetailsReview />
            {/* End review with details 
          </div>

          <div className="row pt-30">
            <div className="col-auto">
              <a href="#" className="button -md -outline-blue-1 text-blue-1">
                Show all 116 reviews{" "}
                <div className="icon-arrow-top-right ml-15"></div>
              </a>
            </div>
          </div>
          {/* End .row 
        </div>
        {/* End .container
        {/* End container
      </section>
      {/* End Review section */}

      {/*<section className="pt-40">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10">
              <div className="row">
                <div className="col-auto">
                  <h3 className="text-22 fw-500">Leave a Reply</h3>
                  <p className="text-15 text-dark-1 mt-5">
                    Your email address will not be published.
                  </p>
                </div>
              </div>
              {/* End .row 

              <ReplyFormReview />
              {/* End ReplyFormReview
               <ReplyForm />
            </div>
          </div>
        </div>
      </section>
      {/* End Reply Comment box section */}
      {/* End facilites section */}

      

      {/*<section className="pt-40">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="px-24 py-20 rounded-4 bg-light-2">
                <div className="row x-gap-20 y-gap-20 items-center">
                  <div className="col-auto">
                    <div className="flex-center size-60 rounded-full bg-white">
                      <Image
                        width={30}
                        height={30}
                        src="/img/icons/health.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                  <div className="col-auto">
                    <h4 className="text-18 lh-15 fw-500">
                      Extra health &amp; safety measures
                    </h4>
                    <div className="text-15 lh-15">
                      This property has taken extra health and hygiene measures
                      to ensure that your safety is their priority
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End health &  safety measures section */}

      {/*<section className="pt-40">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-22 fw-500">Hotel surroundings</h3>
            </div>
          </div>
          {/* End .row */}

         {/*} <div className="row x-gap-50 y-gap-30 pt-20">
            <Surroundings />
          </div>
          {/* End .row */}
       {/* </div>
        {/* End .container */}
     {/* </section>
      {/* End hotel surroundings */}

      {/*<section className="pt-40">
        <div className="container">
          <div className="pt-40 border-top-light">
            <div className="row">
              <div className="col-12">
                <h3 className="text-22 fw-500">Some helpful facts</h3>
              </div>
            </div>
            {/* End .row */}

            {/*<div className="row x-gap-50 y-gap-30 pt-20">
              <HelpfulFacts />
            </div>
            {/* End .row */}
          {/*</div>
          {/* End .pt-40 */}
        {/*</div>
        {/* End .container */}
      {/*</section>
      {/* End helpful facts surroundings */}

      {/*<section id="faq" className="pt-40 layout-pb-md">
        <div className="container">
          <div className="pt-40 border-top-light">
            <div className="row y-gap-20">
              <div className="col-lg-4">
                <h2 className="text-22 fw-500">
                  FAQs about
                  <br /> The Crown Hotel
                </h2>
              </div>
              {/* End .row */}

              {/*<div className="col-lg-8">
                <div className="accordion -simple row y-gap-20 js-accordion">
                  <Faq />
                </div>
              </div>
              {/* End .col */}
            {/*</div>
            {/* End .row */}
          {/*</div>
          {/* End .pt-40 */}
        {/*</div>
        {/* End .container */}
     {/* </section>
      {/* End Faq about sections */}

      {/*<section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Popular properties similar to The Crown Hotel
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
              {/* End sectionTitle */}
           {/* </div>
            {/* End .col */}
         {/* </div>
          {/* End .row */}

          {/*<div className="pt-40 sm:pt-20 item_gap-x30">
            <Hotels2 />
          </div>
          {/* End slide hotel */}
       {/* </div>
        {/* End .container */}
      {/*</section>
      {/* End similar hotel 

      <CallToActions />
       End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(HotelSingleV1Dynamic), {
  ssr: false,
});
