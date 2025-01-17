import CallToActions from "@/components/common/CallToActions";
import Header11 from "@/components/header/header-7";
import DefaultFooter from "@/components/footer/footer-3";
import MainFilterSearchBox from "@/components/hero/hero-2/MainFilterSearchBox";
import Pagination from "@/components/hotel-list/common/Pagination";
import HotelProperties from "@/components/hotel-list/hotel-list-v5/HotelProperties";
import DropdownSelelctBar from "@/components/hotel-list/common/DropdownSelelctBar";

export const metadata = {
  title: "Villa List",
  description: "",
};

const index = () => {
  return (
    <>
      {/* End Page Title */}

      {/* header top margin */}

      <Header11 />
      {/* End Header 1 */}
        {/* End .section-bg__item */}


        <section className="masthead -type-1 z-5">
      <div className="masthead__bg">
        <img alt="image" src="/img/masthead/1/7.jpg" className="js-lazy" />
      </div>
      <div className="container mt--10">
        <div className="row justify-center">
          <div className="col-auto">
            <div className="text-center">
              <h1
                className="text-100 Made lg:text-80 md:text-40 text-white"
                data-aos="fade-up"
              >
                Explore All Villas
              </h1>
              <p
                className="text-black text-20 mt-6 md:mt-10"
                data-aos="fade-up"
                data-aos-delay="100"
              >
               <MainFilterSearchBox />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* Top SearchBanner */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <div className="row x-gap-20 y-gap-10 items-center">
                <div className="col-auto">
                  <div className="text-18 fw-500">Filter</div>
                </div>
                {/* End .col-auto */}

                <div className="col-auto">
                  <div className="row x-gap-15 y-gap-15">
                    <DropdownSelelctBar />
                  </div>
                </div>
                {/* End .col-auto */}
              </div>
              {/* End .row */}
            </div>
            {/* End col-auto 

            <div className="col-auto">
              <button className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
                <i className="icon-up-down text-14 mr-10"></i>
                Top picks for your search
              </button>
            </div>
            {/* End col-auto */}

            <div className="border-top-light mt-30"></div>
            {/* End border-top */}

            <div className="row y-gap-30">
              <HotelProperties />
            </div>
            {/* End .row 
            <Pagination />*/}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default index;
