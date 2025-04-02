const Social = () => {
  const socialContent = [
    { id: 1, icon: "icon-facebook", link: "https://facebok.com/" },
    { id: 2, icon: "icon-twitter", link: "https://twitter.com/" },
    { id: 3, icon: "icon-instagram", link: "https://www.instagram.com/villa.m.goa" },
    { id: 4, icon: "fa-whatsapp", imgSrc: "/img/featureIcons/1/WhatsApp.png", link: "https://wa.me/yournumberhere" },
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
            <img src={item.imgSrc} alt="social icon" className="icon-amendies-42 text-14" />
          ) : (
            <i className={`${item.icon} text-14`} />
          )}
        </a>
      ))}
    </>
  );
};

export default Social;
