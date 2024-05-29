import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavData } from "./common/Helper";
import { Slider_Bar } from "./common/Hooks";
import logo from "../assets/svg/logo.svg";
const SlideBar = () => {
  const location = useLocation();
  const [sideBar, setsideBar] = Slider_Bar();
  return (
    <div className="md:min-h-screen fixed z-20 bg-white w-full max-h-max max-md:bottom-0 md:w-[171px] lg:w-[253px]  ">
      <img src={logo} alt="logo" className="w-full max-md:hidden px-6" />
      <ul
        className={`${sideBar} flex w-full md:flex-col pt-2 max-md:px-4  gap-3 md:gap-5 md:h-full`}
      >
        {NavData.map((obj, index) => (
          <li key={index} className="w-full mt-4">
            <Link
              onClick={() => setsideBar(!sideBar)}
              to={obj.to}
              className={`${
                location.pathname === `${obj.to}` &&
                " after:w-full md:after:h-full bg-[#FEF8F3] text-[#EC6707] after:!right-0 md:after:!bottom-0  "
              } font-Poppins py-3 duration-300  max-md:text-center md:pl-[32px]  w-full inline-block relative after:absolute after:bg-[#EC6707]  after:bottom-1 md:after:bottom-[50%] after:w-0 md:after:w-1 after:rounded-lg after:right-[50%] md:after:right-0 after:duration-300 after:h-1 md:after:h-0 text-sm leading-[21px] font-medium text-black  `}
            >
              {obj.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlideBar;
