import MainFilterSearchBox from "./MainFilterSearchBox";

const index =({ title, location, img }) => {
  return (
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
                {title}
              </h1>
              <p
                className="text-white text-20 mt-6 md:mt-10"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {location}
              </p>
            </div>
            {/* End hero title

            <div
              className="tabs -underline mt-60 js-tabs"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <MainFilterSearchBox />
            </div>
            {/* End tab-filter */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
