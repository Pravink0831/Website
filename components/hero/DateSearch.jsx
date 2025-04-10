'use client';

import React, { useEffect } from 'react';

const ROOM_IDS = {
  'Deluxe Lagoon 4, Goa': '117612',
  'Deluxe JIA 5, Goa': '111550',
  'Deluxe JIA 3, Goa': '117613',
  'Solitude 1': '133761',
  'Solitude 2': '133762',
  'Deluxe Jia 4, Goa': '166553',
  'Solitude 3': '191121',
  'Villa M White Castle "A"': '198160',
  'Villa M White Castle "B"': '198161',
  'SAVANNAH 7': '199287'
};

const DateSearch = () => {
  useEffect(() => {
    const existingScript = document.getElementById('propInfo');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.src = 'https://www.swiftbook.io/plugin/js/booking-service.min.js';
    script.id = 'propInfo';
    script.setAttribute('propertyid', '721M82Zo2AwIMTlplo1lEeXSalwPoaXbAU2nra4JjA4Mjg=');
    script.setAttribute('cal-rendererId', 'quickbook-widget');
    script.setAttribute('JDRN', 'Y');
    
    document.body.appendChild(script);

    return () => {
      if (document.getElementById('propInfo')) {
        document.getElementById('propInfo').remove();
      }
    };
  }, []);

  return (
    <div id="quickbook-widget"></div>
  );
};

export default DateSearch;
