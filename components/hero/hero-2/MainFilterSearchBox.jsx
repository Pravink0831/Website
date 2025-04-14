'use client'

import Link from 'next/link';
import DateSearch from "../DateSearch";

const MainFilterSearchBox = () => {
  return (
    <>
    <Link
          href="https://www.swiftbook.io/inst/#home?propertyId=941MDbfLGozUzcqbW5hF0nX1EWB7FwXBeKZIf5I6HtGQjxnSDJLjA4Mjg=&JDRN=Y"
          className="button -md -outline-yellow-1 rounded-100 bg-black-2 text-white sm:px-50 d-none ml-70 mr-70 sm:d-block"
        >
          Book now
          <img className="icon-booking-12 ml-10" src="/img/featureIcons/1/BookingWhite.png" />
        </Link>
      <div className="sm:d-none mainSearch -w-900 z-2 bg-white pr-10 py-10 sm:px-50 lg:px-60 lg:pt-5 lg:pb-20 rounded-100 shadow-1 mt-40 mx-auto">
        <div className="button-grid items-center ">
          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <DateSearch />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainFilterSearchBox;
