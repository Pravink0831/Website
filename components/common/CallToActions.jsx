const CallToActions = () => {
  return (
    <section className="layout-pt-md layout-pb-md bg-yellow-1">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-auto">
            <div className="row y-gap-20  flex-wrap items-center">
              <div className="col-auto">
                <h4 className="sectionTitle__title text-80 Made">
                  Your ideal goan vacation starts with us
                </h4>
                <div className="sectionTitle__text text-20 text-black ml-20 sm:mt-0">
                  We invite you to discover the villa M experience
                </div>
              </div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-lg-3">
            <div className="single-field -w-410 d-flex x-gap-10 y-gap-20">
              {/* End email input */}

              <div>
                <button className="button -md h-60 rounded-100 bg-black-2 text-white">
                <i className="icon-arrow-right text-20 mr-10"/>
                Call us on now
                </button>
              </div>
              {/* End subscribe btn */}
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default CallToActions;
