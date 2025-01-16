
'use client'

import Link from "next/link";
import { Parallax } from "react-parallax";

const ParallaxBanner = () => {
  return (
    <Parallax
      strength={200}
      bgImage=""
      bgImageAlt="amazing place"
      bgClassName="object-fit-cover"
    >
      <div className="section-bg layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center text-black">
            <div className="col-xl-9" data-aos="fade">
            <div className="sectionTitle -md">
                      <h2 className="sectionTitle__title text-80 Made">Grow With Us – Partner for Success</h2>
                      <div className="d-flex justify-center mb-20">
                        <img src="/img/featureIcons/1/Palm.png" className="partner js-lazy" />
                      </div>
                      <p className=" sectionTitle__text text-black text-20 mt-5 sm:mt-0">
                      At Villa M, we specialize in managing premium properties with the utmost care and professionalism. If you’re a villa owner seeking a
trusted partner, we invite you to collaborate with us. Whether through a rental arrangement or a revenue-sharing model, we offer
flexible solutions that maximize the potential of your property while maintaining the highest standards of service and care.<br></br><br></br>
With years of experience in property management, we bring a wealth of expertise to ensure your villa is well looked after. Our team is
dedicated to providing outstanding hospitality, prompt guest services, and maintaining your property in pristine condition. Security
and regular maintenance are top priorities, ensuring your villa remains protected and in excellent shape.
</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxBanner;
