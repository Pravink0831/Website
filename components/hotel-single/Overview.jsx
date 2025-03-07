const Overview = ({hotel}) => {
  return (
    <>
      <h3 className="text-60 Made fw-500 pt-20 border-top-light">Villa Overview</h3>
      <p className="text-black text-18 mt-20">
      {hotel?.overviewDescription}
      </p>
    </>
  );
};

export default Overview;
