'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917778902229?text=Hi!%20I%20came%20across%20Villa%20M%20Stays%20and%20wanted%20to%20know%20more%20about%20your%20villas%20in%20Goa', '_blank');
  };

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div 
          className="fixed bottom-4 right-4 cursor-pointer z-50 hover:opacity-80 transition-opacity rounded-full shadow-lg"
          onClick={handleWhatsAppClick}
        >
          <Image
            src="/img/featureIcons/1/whatsapp (3).png"
            alt="WhatsApp Contact"
            width={50}
            height={50}
          />
        </div>
      )}
    </>
  );
}
