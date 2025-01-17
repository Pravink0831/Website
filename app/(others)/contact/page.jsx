import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/header-7";
import DefaultFooter from "@/components/footer/footer-3";
import WhyChoose from "@/components/block/BlockGuide";
import Address from "@/components/block/Address";
import Social from "@/components/common/social/Social";
import ContactForm from "@/components/common/ContactForm";
import LocationTopBar from "@/components/common/LocationTopBar";

export const metadata = {
  title: "Contact || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const Contact = () => {
  return (
    <>
      {/* End Page Title */}
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      {/* End location top bar section */}

     {/* <div className="map-outer">
        <div className="map-canvas">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182586.0420340798!2d-73.99038430252834!3d40.749936548349346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1670824458615!5m2!1sen!2sbd"
            loading="lazy"
          ></iframe>
        </div>
      </div>
       End map section */}

      <section className="masthead -type-1 z-5">
        <div className="masthead__bg">
          <img alt="image" src="/img/masthead/1/5.jpg" className="js-lazy" />
        </div>
        <div className="container mt--10">
        <div className="row justify-center">
          <div className="col-xl-7">
            <div className="text-center">
              <h1
                className="text-100 Made lg:text-80 md:text-40 text-white"
                data-aos="fade-up"
              >
                Contact Us
              </h1>
              <p
                className="text-white text-20 mt-6 md:mt-10"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Let’s connect! Villa M Goa isn’t just a stay – it’s an experience.
Reach out for bookings, inquiries, or any assistance – we’d love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>



      <section className="layout-pt-md">
      <div className="container">
        <div className="row justify-center">
          <div className="col-auto">
          <h2 className="sectionTitle__title Made text-60 text-center">The Keys to Villa M Are Just a Click Away</h2>
          </div>
          <div className="col-xl-6 px-60 py-60">
            <ContactForm />
          </div>
          <div className="col-xl-6 px-60 bg-egg-1 mt-75 md:mt-20 lg:mt-40 mb-60 text-black">
            <div className="mt-40">
              <h3 className="text-30 Made fw-500 mb-5 ">Call Us</h3>
              <p className="text-16 text-black"><img className="icon-phone-5 mr-10 " src="/img/featureIcons/1/call-yellow.png" />+91 77789 02229</p>
            </div>
            <div className="mt-40">
              <h3 className="text-30 Made fw-500 mb-5">Email</h3>  
              <p className="text-16 "><img className="icon-phone-5 mr-10 " src="/img/featureIcons/1/Email.png" /> <a href="mailto:" className="text-black">emailid@gmail.com</a> </p>
            </div>
            <div className="mt-40">
                <h5 className="text-30 Made fw-500 mb-10">
                  Follow us
                </h5>
                <div className="d-flex x-gap-20 items-center">
                  <Social />
                </div>
              </div>
          </div>
        </div>     
        </div>
      </section>
      {/* End contact section form */}

      
      {/* End Address Section */}

      {/* End Why Choose Us section */}

      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
