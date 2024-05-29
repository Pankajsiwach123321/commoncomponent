import { Link } from "react-router-dom";
// import { NavData } from "./Helper";
import { useEffect } from "react";
import gsap from "gsap";
import { Message, Notification, Profile } from "./icon";

const NavBar = () => {
  // const location = useLocation();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".navlink",
      { y: "-250%", duration: 0.2 },
      { y: 0, duration: 0.2, stagger: 0.2 },
    );
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-[19]">
      <nav className="bg-white md:pl-[207px] md:pe-10 max-md:px-3 lg:pl-[301px] py-5 sticky top-0">
        <div className="flex justify-between gap-3 items-center">
          <ul>
            <li>
              <a href="#">
                <h2 className=" navlink font-Poppins font-bold text-base sm:text-2xl sm:leading-9 text-black">
                  Hi Stéphane
                </h2>
                <p className="font-Poppins font-medium text-sm sm:text-base sm:leading-6">
                  Lass uns heute den Umsatz überprüfen!
                </p>
              </a>
            </li>
          </ul>
          <ul className="flex items-center gap-3 sm:gap-5">
            <li className="navlink">
              <Link>
                <Message />
              </Link>
            </li>
            <li className="navlink">
              <Link>
                <Notification />
              </Link>
            </li>
            <li className="navlink">
              <Link>
                <Profile />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
