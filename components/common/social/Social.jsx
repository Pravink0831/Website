const Social = ({ variant = 'black' }) => {
  const socialContent = [
    { id: 1, icon: "icon-facebook", link: "https://facebok.com/" },
    { id: 2, icon: "icon-twitter", link: "https://twitter.com/" },
    { id: 3, icon: "icon-instagram", link: "https://www.instagram.com/villa.m.goa" },
    { 
      id: 4, 
      icon: "fa-whatsapp", 
      imgSrc: {
        black: "/img/featureIcons/1/WhatsApp.png",
        white: "/img/featureIcons/1/whatsapp-white.png"
      },
      link: "https://wa.me/917778902229?text=Hi!%20I%20came%20across%20Villa%20M%20Stays%20and%20wanted%20to%20know%20more%20about%20your%20villas%20in%20Goa" 
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        > 
          {item.imgSrc ? (
            <img 
              src={item.imgSrc[variant]} 
              alt="social icon" 
              className="icon-amendies-42 text-14" 
            />
          ) : (
            <i className={`${item.icon} text-14`} />
          )}
        </a>
      ))}
    </>
  );
};

export default Social;
