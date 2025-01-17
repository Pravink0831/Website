const Facilities = () => {
  const facilitiesContent = [
    {
      id: 1,
      items: [
        {
          id: 1,
          icon: "/img/featureIcons/1/Bathroom.png",
          title: "Bathroom",
          facilities: [
            "Towels",
            "Bath or shower",
            "Private bathroom",
            "Toilet",
            "Free toiletries",
            "Hairdryer",
            "Bath",
          ],
        },
        {
          id: 2,
          icon: "/img/featureIcons/1/Bedrooms.png",
          title: "5 Spacious Bedrooms",
          facilities: ["Linen", "Wardrobe or closet"],
        },
        {
          id: 3,
          icon: "/img/featureIcons/1/Pool.png",
          title: "Private Swimming Pool",
          facilities: [
            "Invoice provided",
            "Private check-in/check-out",
            "Luggage storage",
            "24-hour front desk",
          ],
        },
        {
          id: 4,
          icon: "/img/featureIcons/1/ACs.png",
          title: "Air Conditioning",
          facilities: [
            "Invoice provided",
            "Private check-in/check-out",
            "Luggage storage",
            "24-hour front desk",
          ],
        },
        {
          id: 5,
          icon: "/img/featureIcons/1/Kitchen.png",
          title: "Fully Equipped Kitchen",
          facilities: [
            "Invoice provided",
            "Private check-in/check-out",
            "Luggage storage",
            "24-hour front desk",
          ],
        },
        {
          id: 6,
          icon: "/img/featureIcons/1/Appliances.png",
          title: "Modern Appliances",
          facilities: [
            "Invoice provided",
            "Private check-in/check-out",
            "Luggage storage",
            "24-hour front desk",
          ],
        },
      ],
    },

    {
      id: 2,
      items: [
        {
          id: 1,
          icon: "/img/featureIcons/1/Breakfast.png",
          title: "Freshly Cooked Breakfast",
          facilities: [
            "Flat-screen TV",
            "Satellite channels",
            "Radio",
            "Telephone",
            "TV",
          ],
        },
        {
          id: 2,
          icon: "/img/featureIcons/1/Wi-Fi.png",
          title: "Free Wi-Fi",
          facilities: [
            "Kid meals",
            "Special diet menus (on request)",
            "Breakfast in the room",
            "Bar",
            "Restaurant",
            "Tea/Coffee maker",
          ],
        },
        {
          id: 3,
          icon: "/img/featureIcons/1/Speaker.png",
          title: "Woofer Speaker",
          facilities: ["Daily housekeeping", "Dry cleaning", "Laundry"],
        },
        {
          id: 4,
          icon: "/img/featureIcons/1/Housekeeping.png",
          title: "Daily Housekeeping",
          facilities: ["Daily housekeeping", "Dry cleaning", "Laundry"],
        },
        {
          id: 5,
          icon: "/img/featureIcons/1/Living area.png",
          title: "Furnished Living Room",
          facilities: ["Daily housekeeping", "Dry cleaning", "Laundry"],
        },
        {
          id: 6,
          icon: "/img/featureIcons/1/Terrace.png",
          title: "Large Terrace",
          facilities: ["Daily housekeeping", "Dry cleaning", "Laundry"],
        },
      ],
    },
  ];

  return (
    <>
      {facilitiesContent.map((item) => (
        <div className="col-xl-6 col-md-6" key={item.id}>
          <div className="row y-gap-30">
            {item?.items?.map((facility) => (
              <div className="col-12" key={facility.id}>
                <div>
                  <div className="d-flex items-center text-16 fw-500">
                    
                    <img src={facility.icon} className="js-lazy icon-hover icon-amendies-20 mr-10" />
                    {facility.title}
                  </div>
                  {/*<ul className="text-15 pt-10">
                    {facility?.facilities?.map((val, i) => (
                      <li className="d-flex items-center" key={i}>
                        <i className="icon-check text-10 mr-20" />
                        {val}
                      </li>
                    ))}
                  </ul>*/}
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
