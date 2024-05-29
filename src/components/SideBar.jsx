import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavData } from "./common/Helper";
import logo from "../assets/svg/logo.svg";
import gsap from "gsap";
const SlideBar = () => {
  const location = useLocation();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".navlink",
      { y: "-300%", duration: 0.2 },
      { y: 0, duration: 0.2, stagger: 0.2 }
    );
    tl.fromTo(
      ".navtab",
      { x: "-300%", duration: 0.2 },
      { x: 0, duration: 0.2, stagger: 0.2 }
    );
  }, []);
  return (
    <div className="md:min-h-screen fixed z-20 bg-white w-full max-h-max max-md:bottom-0 md:w-[171px] lg:w-[253px]">
      <img
        src={logo}
        alt="logo"
        className="w-full navlink max-md:hidden px-6"
      />
      <ul className="flex  w-full md:flex-col max-md:px-4 gap-3 md:gap-5 md:h-full">
        {NavData.map((obj, index) => (
          <li key={index} className="w-full md:mt-4 navtab">
            <Link
              to={obj.to}
              className={`${
                location.pathname === `${obj.to}` &&
                "after:w-full md:after:h-full bg-[#FEF8F3] text-[#EC6707] after:!right-0 md:after:!bottom-0"
              } font-Poppins py-3 duration-300 max-md:text-center md:pl-[32px]  w-full inline-block relative after:absolute after:bg-[#EC6707] after:bottom-1 md:after:bottom-[50%] after:w-0 md:after:w-1 after:rounded-lg after:right-[50%] md:after:right-0 after:duration-300 after:h-1 md:after:h-0 text-sm leading-[21px] font-medium text-black`}
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
