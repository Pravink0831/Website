
'use client'

import Link from "next/link";
import { Parallax } from "react-parallax";

const ParallaxBanner = () => {
  return (
    <Parallax
      strength={200}
      bgImage="/img/backgrounds/12.png"
      bgImageAlt="amazing place"
      bgClassName="object-fit-cover"
    >
      <div className="section-bg layout-pt-xl layout-pb-xl">
        <div className="container">
          <div className="row justify-center text-center text-black">
            <div className="col-xl-9" data-aos="fade">
            <div className="sectionTitle -md">
                      <h2 className="sectionTitle__title text-80 Made">Your Luxury Retreat in North Goa</h2>
                      <div className="d-flex justify-center mb-20">
                        <img src="/img/featureIcons/1/Palm.png" className="js-lazy" />
                      </div>
                      <p className=" sectionTitle__text text-black text-20 mt-5 sm:mt-0">
                      At Villa M, we are passionate about creating vacations that perfectly balance relaxation,
comfort, and convenience. Our mission is to make your stay more than just enjoyable—it
should be truly unforgettable. Offering a curated selection of villas, from luxurious retreats to
budget-friendly havens, each space is thoughtfully designed to deliver exceptional comfort
and modern amenities. Whether you seek an indulgent escape or a cozy retreat, we promise
every villa meets our uncompromising standards of quality and care.
</p>
            </div>
            
              <div className="d-inline-block mt-30">
                <Link
                  href="/"
                  className="button -md -outline-yellow-1 rounded-100 bg-black-2 text-white"
                >
                  Know more about us
                  <i className="icon-arrow-right text-20 ml-10" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxBanner;
