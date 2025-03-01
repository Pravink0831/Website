import GuestSearch from "./GuestSearch";
import DateSearch from "./DateSearch";

const index = () => {
  return (
    <>
      <div className="col-12">
        <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar">
          <div>
            <h4 className="text-16 fw-500 ls-2 lh-16">Check in - Check out</h4>
            <DateSearch />
          </div>
        </div>
        {/* End check-in-out */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <GuestSearch />
        {/* End guest */}
      </div>
      {/* End .col-12 */}

      <div className="col-12 ">
        <div className="px-20 text-center bg-egg-1 rounded-4">
        <p className="text-14 text-yellow-1">Reserve your villa now and let us take care of the rest.</p></div>
      </div>

      <div className="col-12">
        <div className="button-item h-full">
          <button className="button -yellow-1 px-35 h-60 rounded-100 col-12 bg-black text-white">
            Check availability
          </button>
        </div>
        {/* End search button_item */}
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default index;
