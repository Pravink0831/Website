import GuestSearch from "./GuestSearch";
import DateSearch from "./DateSearch";

const index = ({ villaTitle }) => {
  const getBookingLink = () => {
    let roomID;
    switch (villaTitle) {
      case "Villa M - Lagoon 4":
        roomID = "117612";
        break;
      case "Villa M - Jia 5":
        roomID = "111550";
        break;
      case "Villa M - Jia 3":
        roomID = "117613";
        break;
      case "Villa M - Solitude 1":
        roomID = "133761";
        break;
      case "Villa M - Solitude 2":
        roomID = "133762";
        break;
      case "Villa M - Jia 4":
        roomID = "166553";
        break;
      case "Villa M - Solitude 3":
        roomID = "191121";
        break;
      case "Villa M - White Castle A":
        roomID = "198160";
        break;
      case "Villa M - White Castle B":
        roomID = "198161";
        break;
      case "Villa M - Savannah 7":
        roomID = "199287";
        break;
      default:
        roomID = ""; // Or a default RoomID if needed
    }

    return `https://www.swiftbook.io/inst/#home?propertyId=20828&RoomID=${roomID}`;
  };

  return (
    <>
      {/*<div className="col-12">
        <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar">
          <div>
            {/*<h4 className="text-16 fw-500 ls-2 lh-16">Check in - Check out</h4>
            <DateSearch villaTitle={villaTitle} />
          </div>
        </div>
        {/* End check-in-out 
      </div>
      {/* End .col-12

      <div className="col-12">
        <GuestSearch />
         
      </div>
       End .col-12 */}

      

      <div className="col-12">
        <div className="button-item h-full">
          <a
            href={getBookingLink()}
            className="button -yellow-1 px-35 text-20 h-60 rounded-100 col-12 bg-black text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </div>
        {/* End search button_item */}
      </div>
      <div className="col-12 ">
        <div className="px-20 text-center bg-egg-1 rounded-4">
        <p className="text-14 text-yellow-1">Reserve your villa now and let us take care of the rest.</p></div>
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default index;
