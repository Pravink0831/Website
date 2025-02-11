import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar -dashboard" id="vendorSidebarMenu">
        <div className="sidebar__item ">
          <Link
            href="/vendor-dashboard/dashboard"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/compass.svg"
              alt="image"
              className="mr-15"
            />
            Dashboard
          </Link>
        </div>
        {/* End accordion__item */}

        {/* End accordion__item */}

        <div className="sidebar__item ">
          <a
            href="/vendor-dashboard/home"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/booking.svg"
              alt="image"
              className="mr-15"
            />
            Manage Villas
          </a>
        </div>
        <div className="sidebar__item ">
          <a
            href="/vendor-dashboard/contact"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/booking.svg"
              alt="image"
              className="mr-15"
            />
            Manage Contacts
          </a>
        </div>
        <div className="sidebar__item ">
          <a
            href="/vendor-dashboard/partner"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/booking.svg"
              alt="image"
              className="mr-15"
            />
            Manage Partners
          </a>
        </div>
        {/* End accordion__item */}
       
        {/* End accordion__item */}
      </div>
    </>
  );
};

export default Sidebar;
