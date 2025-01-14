import FilterBox from "../../components/hotel-single/filter-box";

const SidebarRight = ({ hotel }) => {
  return (
    <aside className="ml-50 lg:ml-0">
      <div className="px-30 mb-20 py-30 border-light rounded-4 shadow-4">
        <div className="d-flex items-center justify-between">
          <div>
            <span className="text-20 fw-500">{hotel?.price}/</span>
            <span className="text-20 text-black ml-5">nights</span>
          </div>
          {/*<div className="d-flex items-center">
            <div className="text-14 text-right mr-10">
              <div className="lh-15 fw-500">Exceptional</div>
              <div className="lh-15 text-light-1">
                {hotel?.numberOfReviews} reviews
              </div>
            </div>
            <div className="size-40 flex-center bg-blue-1 rounded-4">
              <div className="text-14 fw-600 text-white">{hotel?.ratings}</div>
            </div>
          </div> */}
        </div>
        {/* End d-flex */}

        <div className="row y-gap-20 pt-30">
          <FilterBox />
        </div>
      </div>
      <div className="border-light px-20 py-20 mx-auto row align-items-center rounded-4 bg-egg-1">
  <div className="col-6">
    <p className="text-20 bold text-black">Still not sure?</p>
  </div>
  <div className="col-6">
    <button className="button -md -outline-yellow-1 rounded-100 bg-black-2 text-white hover:bg-yellow-1 hover:text-black hover:img-hover">
      <img className="icon-phone-12 mr-5" src="/img/general/call icon.png" />
      Call us on now
    </button>
  </div>
</div>

      {/* End px-30 FilterBox */}
    </aside>
  );
};

export default SidebarRight;
