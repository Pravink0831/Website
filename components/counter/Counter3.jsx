const Counter3 = () => {
  const blockContent = [
    {
      id: 1,
      number: "10",
      meta: "Luxurious Villas",
      hasUnit: "",
      delayAnim: "100",
    },
    {
      id: 2,
      number: "10,000+",
      meta: "Happy Guests",
      hasUnit: "",
      delayAnim: "200",
    },
    {
      id: 3,
      number: "8+",
      meta: "Years of Excellence",
      hasUnit: "",
      delayAnim: "300",
    },
    {
      id: 4,
      number: "100%",
      meta: "Privacy Guaranteed",
      hasUnit: "",
      delayAnim: "400",
    },
    {
      id: 5,
      number: "500+",
      meta: "5-Star Reviews",
      hasUnit: "",
      delayAnim: "400",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-2 col-md-6 pb-20"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnim}
        >
          <div className="text-50 lh-15 fw-600">
            {item.number}
            {item.hasUnit}
          </div>
          <div className="text-20 lh-14">{item.meta}</div>
        </div>
      ))}
    </>
  );
};

export default Counter3;
