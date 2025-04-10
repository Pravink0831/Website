import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const MainMenu = ({ style = "" }) => {
  const pathname = usePathname();
  const [villas, setVillas] = useState([]);
  const [isVillasHovered, setIsVillasHovered] = useState(false);

  useEffect(() => {
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
    <nav className="menu js-navList text-white">
      <ul className={`menu__nav ${style} -is-active`}>
        <li className={pathname === "/" ? "current" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === "/about" ? "current" : ""}>
          <Link href="/about">About us</Link>
        </li>
        <li
          className={`menu-item-has-children ${
            isVillasHovered ? "current" : ""
          }`}
          onMouseEnter={() => setIsVillasHovered(true)}
          onMouseLeave={() => setIsVillasHovered(false)}
        >
          <Link href="/villa-lists">Our villas</Link>
          <ul className={`subnav ${isVillasHovered ? "d-block" : ""}`}>
            {villas.map((villa) => (
              <li key={villa._id}>
                <Link href={`/villa-details/${villa._id}`}>{villa.title}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li className={pathname === "/partner-with-us" ? "current" : ""}>
          <Link href="/partner-with-us">Partner with us</Link>
        </li>
        <li className={pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
