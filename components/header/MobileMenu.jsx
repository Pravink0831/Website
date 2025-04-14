"use client";

import Link from "next/link";

import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import {
  home,
  blogItems,
  pageItems,
  dashboardItems,
  categorieMobileItems,
  categorieMegaMenuItems,
} from "../../data/mainMenuData";
import {
  isActiveLink,
} from "../../utils/linkActiveChecker";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MobileMenu = () => {
  const pathname = usePathname();

  const [isActiveParent, setIsActiveParent] = useState(false);
  const [isActiveNestedParentTwo, setisActiveNestedParentTwo] = useState(false);
  const [isActiveNestedParent, setisActiveNestedParent] = useState(false);
  const [villas, setVillas] = useState([]);
  const [isVillasOpen, setIsVillasOpen] = useState(false);

  const router = useRouter();

  const handleVillasClick = (e) => {
    const target = e.target;
    // Check if click is on the arrow button
    if (target.closest('.ps-submenu-expand-icon')) {
      return; // Let the default dropdown behavior work
    }
    // Navigate to villa-lists if clicking the label
    router.push("/villa-lists");
  };

  useEffect(() => {
    categorieMegaMenuItems.map((megaMenu => {
      megaMenu?.menuCol?.map((megaCol => {
        megaCol?.menuItems?.map((item => {
          item?.menuList?.map((list) => {
            if (list.routePath?.split('/')[1] == pathname.split('/')[1]) {
              setIsActiveParent(true);
              setisActiveNestedParentTwo(item?.title);
              setisActiveNestedParent(megaMenu?.id);
            }
          });
        }));
      }));
    }));

    const fetchVillas = async () => {
      try {
        const response = await fetch("/api/hotels");
        if (!response.ok) {
          throw new Error("Failed to fetch villas");
        }
        const data = await response.json();
        setVillas(data);
      } catch (error) {
        console.error("Error fetching villas:", error);
      }
    };

    fetchVillas();
  }, []);

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href="/">
          <img src="/img/general/VillaMLogo.png" alt="brand" style={{ maxWidth: "60%" }} />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <Sidebar width="400" backgroundColor="#fff">
        <Menu>
          <MenuItem
            onClick={() => router.push("/")}
            className={
              pathname === "/" ? "menu-active-link" : ""
            }
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/about")}
            className={
              pathname === "/about" ? "menu-active-link" : ""
            }
          >
            About us
          </MenuItem>
          <SubMenu
            label="Our villas"
            onOpenChange={(open) => setIsVillasOpen(open)}
            onClick={handleVillasClick}
            className={`${pathname.startsWith("/villa-") ? "menu-active-link" : ""} villa-submenu`}
          >
            {villas.map((villa) => (
              <MenuItem
                key={villa._id}
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/villa-details/${villa._id}`);
                }}
                className={
                  pathname === `/villa-details/${villa._id}` ? "menu-active-link" : ""
                }
              >
                {villa.title}
              </MenuItem>
            ))}
          </SubMenu>
          <MenuItem
            onClick={() => window.open("https://www.swiftbook.io/inst/#home?propertyId=941MDbfLGozUzcqbW5hF0nX1EWB7FwXBeKZIf5I6HtGQjxnSDJLjA4Mjg=&JDRN=Y", "_blank")}
            className={
              pathname === "/booking" ? "menu-active-link" : ""
            }
          >
            Book now
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/partner-with-us")}
            className={
              pathname === "/partner-with-us" ? "menu-active-link" : ""
            }
          >
            Partner with us
          </MenuItem>
          <MenuItem
            onClick={() => router.push("/contact")}
            className={
              pathname === "/contact" ? "menu-active-link" : ""
            }
          >
            Contact
          </MenuItem>
        </Menu>
      </Sidebar>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Connect with us</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social variant="black" />
          </div>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
