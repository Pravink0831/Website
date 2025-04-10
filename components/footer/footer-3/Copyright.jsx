import Social from "../../../components/common/social/Social";

const Copyright = () => {
  return (
    <div className="row justify-between jc items-center y-gap-10">
      <div className="col-auto sm:pb-0 ">
        <div className="row x-gap-30 y-gap-10">
          <div className="col-auto">
            <div className="d-flex items-center">
              © {new Date().getFullYear()}&nbsp;
              Villa 'M' Stays.
              
              All rights reserved.
            </div>
          </div>
          {/* End .col */}

          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .col */}

      <div className="col-auto sm:pt-0">
        <div className="row y-gap-10 items-center">
          <div className="col-auto">
            <div className="d-flex items-center">
            Designed & Developed by <a className="ml-5" href="https://webartista.co"> Webartista</a>
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default Copyright;
