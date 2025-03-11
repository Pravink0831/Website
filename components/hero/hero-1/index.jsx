import Image from "next/image";
import MainFilterSearchBox from "./MainFilterSearchBox";

const Index = ({ title, location, city, img }) => {
  console.log('Hero props:', { title, location, city, img }); // Keep this debug log

  // Make sure we have a default image path
  const imageUrl = img || '/img/masthead/1/5.jpg';

  return (
    <section className="masthead -type-1 z-5">
      <div className="masthead__bg">
        <Image
          src={imageUrl}
          alt={title || 'Hotel Image'}
          width={1920}
          height={700}
          className="js-lazy"
          priority // Add priority to ensure faster loading
          onError={(e) => {
            console.error('Image load error:', e);
            e.target.src = '/img/masthead/1/5.jpg';
          }}
        />
      </div>
      <div className="container mt--10">
        <div className="row justify-center">
          <div className="col-auto">
            <div className="text-center">
              <h1
                className="text-100 Made lg:text-80 md:text-40 text-white"
                data-aos="fade-up"
              >
                {title || 'Hotel Title'}
              </h1>
              {(location || city) && (
                <p
                  className="text-white text-20 mt-6 md:mt-10"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {`${location || ''}${location && city ? ', ' : ''}${city || ''}`}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
