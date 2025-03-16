const PopularFacilities = ({hotel}) => {
  return (
    <>
      {hotel?.popularFacilities?.map((facility, index) => (
        <div className="col-md-12 bg-egg-1 mb-20" key={index}>
          <h3 className="text-20 fw-500 bold pt-10">{facility.popularFacilitiesTitle}</h3>
          <p className="text-black 1h-13 text-16 mt-20 sm:mt-0 pb-10">
            {facility.popularFacilitiesDescription}
          </p>
        </div>
      ))}
    </>
  );
};

export default PopularFacilities;
