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
      { y: "-200%", duration: 0.2 },
      { y: 0, duration: 0.2, stagger: 0.2 },
      "+=2"
    );
  }, []);

  return (
    <header>
      <nav className="bg-white py-5 sticky top-0">
        <div className=" flex justify-between gap-3 items-center">
          <ul>
            <li>
              <a href="#">
                <h2 className=" font-Poppins font-bold text-base sm:text-2xl sm:leading-9 text-black">
                  Hi Stéphane
                </h2>
                <p className=" font-Poppins font-medium text-sm sm:text-base sm:leading-6">
                  Lass uns heute den Umsatz überprüfen!
                </p>
              </a>
            </li>
          </ul>
          <ul className="flex items-center gap-3 sm:gap-5">
            {/* {NavData.map((obj, index) => (
                <li key={index} className="navlink">
                  <Link
                    to={obj.to}
                    className={`${
                      location.pathname === `${obj.to}` &&
                      "webkitstrokes  after:!w-full"
                    } font-Exo relative after:absolute after:bg-[#b1ff57]  after:bottom-[-6px] after:w-0 after:left-0 after:duration-300 after:h-[3px] text-lg leading-normal font-normal  text-white  webkitstroke`}
                  >
                    {obj.title}
                  </Link>
                </li>
              ))} */}
            <li>
              <Link>
                <Message />
              </Link>
            </li>
            <li>
              <Link>
                <Notification />
              </Link>
            </li>
            <li>
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
