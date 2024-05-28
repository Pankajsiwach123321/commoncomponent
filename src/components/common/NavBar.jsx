import { Link, useLocation } from "react-router-dom";
import SlideBar from "../SideBar";
import { NavData } from "./Helper";
import { Slider_Bar } from "./Hooks";

const NavBar = () => {
  const location = useLocation();
  const [sideBar, setsideBar] = Slider_Bar();

  return (
    <header>
      <nav className="bg-black py-5 sticky top-0">
        <div className="max-w-[1140px] mx-auto px-3">
          <div className=" flex justify-between items-center">
            <button
              className={` ${
                sideBar && "opacity-0"
              } flex duration-300 gap-1 flex-col`}
              onClick={() => setsideBar(!sideBar)}
            >
              <span
                className={` ${
                  sideBar && "translate-x-[1px] translate-y-[8px] rotate-45"
                } w-5 bg-white h-[2px] block duration-300`}
              ></span>
              <span
                className={` ${
                  sideBar && "opacity-0"
                } w-5 bg-white h-[2px] block duration-300`}
              ></span>
              <span
                className={` ${
                  sideBar && "translate-x-[2px] translate-y-[-3px] -rotate-45"
                } w-5 bg-white h-[2px] block duration-300`}
              ></span>
            </button>
            <ul className="flex items-center max-sm:hidden gap-5">
              {NavData.map((obj, index) => (
                <li key={index}>
                  <Link
                    to={obj.to}
                    className={`${
                      location.pathname === `${obj.to}` &&
                      "webkitstrokes  after:!w-full"
                    } font-Exo relative after:absolute after:bg-[#b1ff57]  after:bottom-[-6px] after:w-0 after:left-0 after:duration-300 after:h-[3px] text-lg leading-normal font-normal text-white mynavhover webkitstroke`}
                  >
                    {obj.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <aside
        className={`${
          sideBar && "!left-0"
        } px-10 pt-20 bg-white min-h-screen flex fixed top-0 left-[-400px] z-[3] duration-300`}
      >
        <button
          className=" flex absolute right-5 top-5 gap-1 flex-col"
          onClick={() => setsideBar(!sideBar)}
        >
          <span
            className={` ${
              sideBar && "translate-x-[1px] translate-y-[8px] rotate-45"
            } w-[30px] bg-black h-[2px] block duration-300`}
          ></span>
          <span
            className={` ${
              sideBar && "opacity-0"
            } w-[30px] bg-black h-[2px] block duration-300`}
          ></span>
          <span
            className={` ${
              sideBar && "translate-x-[2px] translate-y-[-3px] -rotate-45"
            } w-[30px] bg-black h-[2px] block duration-300`}
          ></span>
        </button>
        <SlideBar />
      </aside>
      <div
        onClick={() => setsideBar(false)}
        className={`${
          sideBar && "!left-0"
        } w-full min-h-screen bg-[#0c0c0c6d] -left-full inset-0 fixed z-[2]`}
      ></div>
    </header>
  );
};

export default NavBar;
