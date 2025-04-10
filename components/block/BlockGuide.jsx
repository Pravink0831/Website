"use client";

import React from 'react';

const BlockGuide = () => {
  const blockContent = [
    { id: 1, icon: '/img/featureIcons/1/Wi-Fi.png', title: 'Wi-Fi', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', delayAnim: '100' },
    { id: 2, icon: '/img/featureIcons/1/Bedrooms.png', title: 'Bedrooms', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', delayAnim: '200' },
    { id: 3, icon: '/img/featureIcons/1/ACs.png', title: 'Air Conditioning', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', delayAnim: '300' },
    { id: 4, icon: '/img/featureIcons/1/Kitchen.png', title: 'Kitchen', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', delayAnim: '400' },
    { id: 5, icon: '/img/featureIcons/1/Housekeeping.png', title: 'Housekeeping', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', delayAnim: '500' },
    { id: 6, icon: '/img/featureIcons/1/Speaker.png', title: 'Speaker', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', delayAnim: '600' },
    { id: 7, icon: '/img/featureIcons/1/Pool.png', title: 'Pool', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', delayAnim: '500' },
    { id: 8, icon: '/img/featureIcons/1/Appliances.png', title: 'Appliances', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', delayAnim: '600' },
  ];

  return (
    <div className="scroll-container">
      <div className="scroll-inner">
        {blockContent.map((item) => (
          <div className="scroll-item" key={item.id}>
            <div className="featureIcon -type-1">
              <div className="d-flex justify-center">
                <img src={item.icon} alt={item.title} className="js-lazy icon-hover" />
              </div>
              <div className="text-center mt-30">
                <h4 className="text-16 fw-600">{item.title}</h4>
              </div>
            </div>
          </div>
        ))}
        {blockContent.map((item) => (
          <div className="scroll-item" key={`clone-${item.id}`}>
            <div className="featureIcon -type-1">
              <div className="d-flex justify-center">
                <img src={item.icon} alt={item.title} className="js-lazy icon-hover" />
              </div>
              <div className="text-center mt-30">
                <h4 className="text-16 fw-600">{item.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockGuide;