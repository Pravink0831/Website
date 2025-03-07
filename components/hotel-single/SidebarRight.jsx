import { useEffect, useRef } from 'react';
import FilterBox from "../../components/hotel-single/filter-box";

const SidebarRight = ({ hotel }) => {
  const sidebarRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const container = containerRef.current;
    const footer = document.querySelector('footer');
    
    const handleScroll = () => {
      if (!sidebar || !container || !footer) return;

      // Calculate middle position (half of viewport height minus half of sidebar height)
      const headerHeight = 80;
      const containerRect = container.getBoundingClientRect();
      const footerTop = footer.getBoundingClientRect().top;
      const sidebarHeight = sidebar.offsetHeight;
      const windowHeight = window.innerHeight;
      const middleOffset = Math.max(headerHeight, (windowHeight - sidebarHeight) / 2);

      // Set the sidebar width to match its container
      const containerWidth = container.offsetWidth;
      sidebar.style.width = `${containerWidth}px`;

      // Calculate the stop point considering the middle position
      const stopPoint = footerTop - sidebarHeight - middleOffset;
      
      if (containerRect.top <= middleOffset) {
        if (footerTop - windowHeight <= 0) {
          // Stop before footer
          sidebar.style.position = 'absolute';
          sidebar.style.top = `${stopPoint - containerRect.top}px`;
          sidebar.style.bottom = 'auto';
        } else {
          // Sticky in middle
          sidebar.style.position = 'fixed';
          sidebar.style.top = `${middleOffset}px`;
          sidebar.style.bottom = 'auto';
        }
      } else {
        // Reset position
        sidebar.style.position = 'relative';
        sidebar.style.top = '0';
        sidebar.style.bottom = 'auto';
      }
    };

    // Initial setup
    handleScroll();

    // Add throttled scroll listener
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="ml-50 lg:ml-0" style={{ position: 'relative' }}>
      <aside ref={sidebarRef}>
        <div className="px-30 mb-20 py-30 border-light rounded-4 shadow-4">
          <div className="d-flex items-center justify-between">
            <div>
              <span className="text-20 fw-500">{hotel?.price}/</span>
              <span className="text-20 text-black ml-5">Nights</span>
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
            <button className="button -md -outline-yellow-1 rounded-100 bg-black-2 text-white">
              <img className="icon-phone-12 mr-5" src="/img/featureIcons/1/call-yellow.png" />
              Call us now
            </button>
          </div>
        </div>
        {/* End px-30 FilterBox */}
      </aside>
    </div>
  );
};

export default SidebarRight;
