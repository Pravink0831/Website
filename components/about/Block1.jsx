import Image from "next/image";

const Block1 = () => {
  return (
    <>
      <div className="col-lg-12"><h2 className="text-80 text-center Made fw-600">Discover what makes Villa M Goa the perfect getaway</h2></div>
      <div className="row d-flex justify-content">
      <div className="col-lg-6 d-flex">
        <p className=" text-dark text-18 mt-5">At Villa M, we believe that every vacation should
be a perfect blend of relaxation, comfort, and
convenience. Our mission is to make your stay
not only enjoyable and stress-free but truly
unforgettable. We offer a range of villas—from
luxury retreats to budget-friendly options— all
thoughtfully designed to provide comfort and
top-notch facilities.
          <br />
          <br />
          Whether you’re looking for a lavish getaway or a
cozy stay, we ensure that every villa meets our
high standards of quality and convenience.
        </p>
      </div>
      {/* End .col */}
<div className="col-lg-1 d-flex"></div>
      <div className="col-lg-4 d-flex">
        <Image
          width={400}
          height={350}
          src="/img/gallery/1/2.png"
          alt="image"
          className="rounded-4 w-100 h-600"
        />
      </div>
      </div>
      <div className="col-lg-12 "><p className=" text-dark text-18 mt-5 mb-10">Each of our villas is thoughtfully set up and carefully monitored by our dedicated team to
ensure a seamless and enjoyable stay. Hygiene and comfort are our top priorities, and we take
pride in maintaining our villas to the highest standards. Our properties are located in prime
areas, close to Goa’s most popular attractions, beaches, and dining spots, ensuring easy access
to everything the region has to offer.
          <br />
          <br />
          Whether you’re looking to unwind and relax or explore Goa at your own pace, we aim to make
your stay unforgettable. With Villa M, you’ll experience personalized service, attention to detail,
and a commitment to providing the perfect getaway.
        </p></div>
      {/* End .col */}
    </>
  );
};

export default Block1;
