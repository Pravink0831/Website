import Image from "next/image";

const WhyChoose = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/1/1.png",
      title: "Proven Expertise",
      text: `With extensive experience
managing luxury and budget-
friendly villas, we understand
how to optimize occupancy,
revenue, and guest satisfaction.`,
      delayAnimation: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/1/2.png",
      title: "Exceptional Hospitality",
      text: `Exceptional Hospitality: Our team
delivers top-tier guest services,
creating memorable experiences
that encourage repeat bookings
and positive reviews.`,
      delayAnimation: "200",
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/3.png",
      title: "Property Management",
      text: `We provide full property care,
including regular maintenance,
cleaning, and attentive
oversight, ensuring your villa is
well-maintained and secure.`,
      delayAnimation: "300",
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/4.png",
      title: "Tailored Solutions",
      text: `We offer both rental and
revenue-sharing options,
allowing you to choose the
model that best suits your goals
and preferences.`,
      delayAnimation: "300",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          key={item.id}
          data-aos="fade" 
          data-aos-delay={item.delayAnimation}
        >
          <div className="featureIcon -type-1 bg-egg-1 px-30 py-30">
            <div className="d-flex justify-start">
              <Image
                width={70}
                height={70}
                src={item.icon}
                alt="image"
                className="js-lazy"
              />
            </div>
            <div className="text-left text-black mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p className="text-15 text-black mt-10">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
