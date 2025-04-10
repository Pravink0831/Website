import React from "react";

function Footer() {
  const linksData = [
    { label: "Privacy", url: "#" },
    { label: "Terms", url: "#" },
    { label: "Site Map", url: "#" },
  ];

  return (
    <footer className="footer -dashboard mt-60">
      <div className="footer__row row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="row y-gap-20 items-center">
            <div className="col-auto">
              <div className="text-14 lh-14 mr-30">
                © {new Date().getFullYear()} Villa 'M' Stays All rights reserved.
              </div>
            </div>

            
          </div>
        </div>
        {/* End .col-auto */}

        <div className="col-auto">
          <div className="d-flex x-gap-5 y-gap-5 items-center">
            <span className="text-14 fw-500 underline">Designed & Developed by
            Webartista</span>
            
          </div>
        </div>
        {/* End .col-auto */}
      </div>
      {/* End .row */}
    </footer>
  );
}

export default Footer;
