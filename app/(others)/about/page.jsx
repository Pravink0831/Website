import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import Header7 from "@/components/header/header-7";
import DefaultFooter from "@/components/footer/footer-3";
import WhyChoose from "@/components/block/BlockGuide";
import Block1 from "@/components/about/Block1";
import Image from "next/image";
import Counter from "@/components/counter/Counter3";
import Team1 from "@/components/team/Team1";
import Testimonial from "@/components/testimonial/Testimonial";
import Counter2 from "@/components/counter/Counter2";
import Brand from "@/components/brand/Brand";

export const metadata = {
  title: "About || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const About = () => {
  return (
    <>
      {/* End Page Title */}
      {/* header top margin */}

      <Header7 />
      {/* End Header 1 */}

      <section className="masthead -type-1 z-5">
      <div className="masthead__bg">
        <img alt="image" src="/img/masthead/1/7.jpg" className="js-lazy" />
      </div>
      <div className="container">
        <div className="row justify-center">
          <div className="col-auto">
            <div className="text-center">
              <h1
                className="text-100 Made lg:text-80 md:text-40 text-white"
                data-aos="fade-up"
              >
                About Us
              </h1>
              <p
                className="text-white text-20 mt-6 md:mt-10"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Experience the story behind Villa M Goa – where luxury meets comfort in North Goa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* End About Banner Section */}

      {/* End Why Choose Us section */}

      <section className="layout-pt-md">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <Block1 />
          </div>
        </div>
      </section>
      {/* End about block section */}

      <section className="section-bg pt-40 pb-40 bg-black-2 text-white">
        <div className="section-bg__item -w-1165 border-bottom-light"></div>

        <div className="container">
        <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title text-80 Made">Discover Our Story in Numbers</h2>
              </div>
            </div>
          </div>
          <div className="row text-center justify-between mt-30 mb-30">
            <Counter />
          </div>
        </div>
      </section>
      {/* End counter Section */}

      {/* End team section */}

      
      {/* End testimonial section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(About), { ssr: false });
