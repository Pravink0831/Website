const Overview = ({hotel}) => {
  return (
    <>
      <h3 className="text-60 Made fw-500 sm:mt-10 sm:mb-0">Villa Overview</h3>
      <p className="text-black text-18 mt-20 sm:mt-0">
      {hotel?.overviewDescription}
      </p>
    </>
  );
};

export default Overview;
