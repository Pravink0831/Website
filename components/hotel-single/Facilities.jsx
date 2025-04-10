const Facilities = ({ hotel }) => {
  return (
    <>
      {hotel?.facilities?.map((facilityGroup, index) => (
        <div className="col-xl-6 col-md-6" key={index}>
          <div className="row y-gap-30">
            {facilityGroup?.items?.map((item, itemIndex) => (
              <div className="col-md-12 col-sm-6" key={itemIndex}>
                <div>
                  <div className="d-flex items-center text-16 fw-600">
                    <img
                      src={item.icon}
                      className="js-lazy icon-hover icon-amendies-20 mr-10"
                      alt={item.title}
                    />
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Facilities;
