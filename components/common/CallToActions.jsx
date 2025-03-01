const CallToActions = () => {
  return (
    <section className="layout-pt-md layout-pb-md bg-yellow-1">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-auto">
            <div className="row y-gap-20  flex-wrap items-center">
              <div className="col-auto sm-center">
                <h4 className="sectionTitle__title text-80 lh-8 Made">
                  Your Ideal Goan Vacation Starts With Us
                </h4>
                <div className="sectionTitle__text text-20 text-black ml-10 sm:mt-5">
                  We invite you to discover the villa M experience
                </div>
              </div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-lg-2 col-md-3">
            <div className="single-field d-flex y-gap-20 justify-center">
              {/* End email input */}

                      <div>
                      <button className="button -md -outline-yellow-1 rounded-100 bg-black-2 text-white">
                        <img className="icon-phone-12 mr-10 " src="/img/featureIcons/1/call-yellow.png" />
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
