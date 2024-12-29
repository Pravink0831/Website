const BlockGuide = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/Wi-Fi.png",
      title: "Wi-Fi",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/Bedrooms.png",
      title: "Bedrooms",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "200",
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/ACs.png",
      title: "Air Conditioning",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "300",
    },
    {
      id: 4,
      icon: "/img/featureIcons/1/Kitchen.png",
      title: "Kitchen",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "400",
    },
    {
      id: 5,
      icon: "/img/featureIcons/1/Housekeeping.png",
      title: "Housekeeping",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "500",
    },
    {
      id: 6,
      icon: "/img/featureIcons/1/Speaker.png",
      title: "Speaker",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      delayAnim: "600",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-2 col-sm-6"
          data-aos="fade"
          data-aos-delay={item.delayAnim}
          key={item.id}
        >
          <div className="featureIcon -type-1 ">
            <div className="d-flex justify-center">
              <img src={item.icon} alt="image" className="js-lazy" />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-16 fw-600">{item.title}</h4>
              {/* <p className="text-15 mt-10">{item.text}</p>*/}
              
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockGuide;
