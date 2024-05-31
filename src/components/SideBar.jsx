import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavData } from "./common/Helper";
import logo from "../assets/svg/logo.svg";
import gsap from "gsap";
import { PulseIcon } from "./common/icon";
const SlideBar = () => {
  const location = useLocation();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".navlink",
      { y: "-300%", duration: 0.2 },
      { y: 0, duration: 0.2, stagger: 0.2 }
    );
    const width = window.innerWidth;
    console.log(width);
    if (width > 767.9) {
      tl.fromTo(
        ".navtab",
        { x: "-300%", duration: 0.2 },
        { x: 0, duration: 0.2, stagger: 0.2 }
      );
    } else {
      tl.fromTo(
        ".navtab",
        { y: "300%", duration: 0.2 },
        { y: 0, duration: 0.2, stagger: 0.2 }
      );
     
    }
  }, []);
  return (
    <div className="md:h-screen  flex flex-col fixed z-20 bg-white w-full max-h-max max-md:bottom-0 md:w-[171px] lg:w-[253px]">
      <img
        src={logo}
        alt="logo"
        className="w-full navlink max-md:hidden px-6"
      />
      <div className="overflow-y-scroll md:grow whitespace-nowrap scrollbar-hidden md:pb-10  md:flex md:flex-col  md:h-full md:justify-between  ">
        <ul className="flex  w-full md:flex-col  max-md:px-4 gap-3 md:gap-5 ">
          {NavData.map((obj, index) => (
            <li key={index} className="w-full  md:mt-4 navtab ">
              <Link
                to={obj.to}
                className={`${
                  location.pathname === `${obj.to}` &&
                  "after:w-full md:after:h-full bg-[#FEF8F3] text-[#EC6707] after:!right-0 md:after:!bottom-0"
                } font-Poppins py-3 flex max-md:flex-col items-center gap-2 max-md:w-[78px] duration-300 max-md:text-center md:pl-[32px]  w-full  relative after:absolute after:bg-[#EC6707] max-md:after:top-0 md:after:bottom-[50%] after:w-0 md:after:w-1 after:rounded-lg after:right-[50%] md:after:right-0 after:duration-300 after:h-1 md:after:h-0 text-[12px] md:text-sm leading-[21px] font-medium text-black  max-md:hover:after:w-full md:hover:after:h-full hover:bg-[#FEF8F3] hover:text-[#EC6707] hover:after:!right-0 md:hover:after:!bottom-0`}
              >
                {obj.icon}
                {obj.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="bg-white navcard sm:bg-[#F5F5F5] rounded-xl border border-dashed border-[#DEDEDE] mx-2 lg:mx-8 py-5 md:py-[30px] px-2.5 hidden md:flex flex-col items-center hover:shadow-cardShadow transition-all duration-300 ease-linear cursor-pointer">
          <div className="bg-[#EC6707] rounded-[39px] w-10 h-10 flex justify-center items-center mx-auto">
            <PulseIcon />
          </div>
          <h3 className="font-semibold font-Poppins text-sm lg:text-base text-center py-1">
            Daten importieren
          </h3>
          <div className="font-medium font-Poppins text-[7px] lg:text-[9px] leading-[144%] text-[#ADADAE] text-center">
            <Link href="#" className="text-[#EC6707] underline pe-1">
              Datei aussuchen
            </Link>
            oder hierher ziehen.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
