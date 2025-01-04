const PropertyHighlights2 = () => {
  const highlightsContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/Terrace.png",
      text: `15 Guests Capacity`,
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/Bedrooms.png",
      text: `5 Bedrooms`,
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/Pool.png",
      text: `Swimming Pool`,
    },
    {
      id: 4,
      icon: "/img/featureIcons/1/Living area.png",
      text: `5 Bathrooms`,
    },
  ];

  return (
    <div className="row y-gap-20 pt-30">
      {highlightsContent.map((item) => (
        <div className="col-lg-3 col-6" key={item.id}>
          <div className="text-center">
          <img src={item.icon} className="js-lazy icon-hover icon-amendies-30" />
            <div className="text-15 bold lh-1 mt-10">{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyHighlights2;
