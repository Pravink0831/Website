const PropertyHighlights = ({ hotel }) => {
  return (
    <div className="row y-gap-20 pt-30">
      {hotel?.propertyHighlights?.map((item, index) => (
        <div className="col-lg-3 col-6" key={index}>
          <div className="text-center">
            <img src={item.highlightIcon} className="js-lazy icon-hover icon-amendies-30" />
            <div className="text-15 bold lh-1 mt-10">{item.highlightTitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyHighlights;
