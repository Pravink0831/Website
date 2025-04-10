'use client'

import DateSearch from "../DateSearch";

const MainFilterSearchBox = () => {
  return (
    <>
      <div className="mainSearch -w-900 z-2 bg-white pr-10 py-10 sm:px-50 lg:px-60 lg:pt-5 lg:pb-20 rounded-100 shadow-1 mt-40 mx-auto">
        <div className="button-grid items-center">
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
