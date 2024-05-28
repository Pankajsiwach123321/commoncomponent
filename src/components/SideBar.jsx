import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavData } from "./common/Helper";
import { Slider_Bar } from "./common/Hooks";

const SlideBar = () => {
  const location = useLocation();
  const [sideBar, setsideBar] = Slider_Bar();
  return (
    <div className="min-h-screen flex  w-full ">
      <ul className={`${sideBar} flex w-full flex-col  gap-5 h-full`}>
        {NavData.map((obj, index) => (
          <li key={index}>
            <Link
              onClick={() => setsideBar(!sideBar)}
              to={obj.to}
              className={`${
                location.pathname === `${obj.to}` &&
                "webkitstrokes  after:!w-full"
              } font-Exo relative after:absolute after:bg-[#b1ff57]  after:bottom-[-6px] after:w-0 after:left-0 after:duration-300 after:h-[3px] text-lg leading-normal font-normal text-black  webkitstroke`}
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
