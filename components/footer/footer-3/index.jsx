import AppButton from "./AppButton";
import ContactInfo from "./ContactInfo";
import Copyright from "./Copyright";
import FooterContent from "./FooterContent";
import Social from "../../common/social/Social";
import Subscribe from "./Subscribe";

const index = () => {
  return (
    <footer className="footer -type-1">
      <div className="video-background">
        <video autoPlay muted loop id="background-video">
          <source src="/img/video/3.mp4" type="video/mp4" /> Your browser does not support the video tag. 
        </video>
      </div>
      <div className="container content">
        
        <div className="pt-30 pb-20">
          <div className="row y-gap-40 justify-between xl:justify-start">
            <div className="col-xl-4 col-lg-6">
              <img src="/img/general/VillaMLogo.png" alt="image" />
              <div className="row y-gap-30 justify-between pt-30">
              <p className="sectionTitle__text text-18 text-white mt-5 sm:mt-0">
              At Villa M Goa, we specialize in offering
exquisite villas in the heart of North Goa.
Each villa is thoughtfully designed with
modern amenities, private pools, lush
gardens, and stylish interiors. Our mission is to provide a home away
from home while letting you soak in the
vibrant spirit of Goa.
                </p>
              </div>
              {/* End .row */}

              {/* End .row */}

              
            </div>
            {/* End .col */}

            <div className="col-xl-4 col-lg-6">
              <div className="row y-gap-30 justify-center">
                
                {/* End .col */}

                <FooterContent />
              </div>
              {/* End .row */}
            </div>
            
            <div className="col-xl-4 col-md-6">
            <h2 className="sectionTitle__title text-50 Made">
                Get in touch
                </h2>
                <p className="sectionTitle__text text-18 text-white mt-30">
                Office address will come here.
lorem ipsum lorem ipsum lorem
ipsum lorem ipsum
                </p>
                <p className="text-18 text-white mt-20">
                <img className="icon-phone-5 mr-10" src="/img/featureIcons/1/call-yellow.png" />
                +91 77789 02229
                  </p>
            <div className="mt-60">
                <h5 className="text-18 fw-500 mb-10">
                  Follow us on social media
                </h5>
                <div className="d-flex x-gap-20 items-center">
                  <Social />
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End footer top */}

        <div className="py-20 border-top-light">
          <Copyright />
        </div>
        {/* End footer-copyright */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default index;
