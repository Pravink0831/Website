import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import Header7 from "@/components/header/header-7";
import Footer3 from "@/components/footer/footer-3";
import WhyChoose from "@/components/home/home-3/WhyChoose";
import Address from "@/components/block/Address";
import Social from "@/components/common/social/Social";
import PartnerForm from "@/components/common/PartnerWithUs";
import LocationTopBar from "@/components/common/LocationTopBar";
import ParallaxBanner from "@/components/banner/ParallaxBanner1";

export const metadata = {
    title: "Partner With Us",
    description: "Partner With Us",
};

const Contact = () => {
    return (
        <>

            <Header7 />

            <section className="masthead -type-1 z-5">
      <div className="masthead__bg">
        <img alt="image" src="/img/masthead/1/7.jpg" className="js-lazy" />
      </div>
      <div className="container map-form1">
        <div className="row justify-center">
        <div className="col-xl-6 col-md-5 d-flex align-items-center">
                  <div
                    className="text-left"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-offset="0"
                  >
                    <p className="sectionTitle__title Made text-80 text-white sm-pt">
                    Partner With Us
                    </p>
                    <p className="text-white text-18 md:text-12 mb-10">
                    Join hands with us to create exceptional experiences and unlock the true
potential of your property. Partnering with us means innovative solutions,
dedicated support, and seamless management.
                    </p>
                
                  </div>
                  
                </div>
                <div className="col-xl-5 col-md-6">
                        <div className=" px-40 pt-10 pb-10 lg:px-30 lg:py-30 md:px-24 md:py-24 bg-white rounded-4 shadow-4">
                            <div className="text-22 fw-500">Lets get Started</div>
                            <p className="text-16">Give us your details and we will call you back</p>
                            <PartnerForm />
                        </div>
                    </div>
        </div>
      </div>
    </section>
    <ParallaxBanner />
    <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title text-80 Made">Why Partner With Villa M ?</h2>
                <div className="d-flex justify-center mb-20">
                        <img src="/img/featureIcons/1/Palm.png" className="js-lazy" />
                      </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50">
            <WhyChoose />
          </div>
          {/* End row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why choose Section */}
    
            <Footer3 />
        </>
    );
};


export default dynamic(() => Promise.resolve(Contact), { ssr: false });