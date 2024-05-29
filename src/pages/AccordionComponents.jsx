import React, { useState } from "react";
import { accordioData } from "../components/common/Helper";

const AccordionComponents = () => {
  const [accordion, setAccordion] = useState(0);
  const showContent = (index) => {
    setAccordion(accordion === index ? -1 : index);
  };
  return (
    <section className="flex-grow items-center flex ">
      <div className=" px-1">
        <div className="accordion bg-white rounded-xl py-5 px-6 border-[#d0fc9a] border-[6px]">
          {accordioData.map((obj, index) => (
            <div
              key={index}
              className="accordion-items mb-5 border    border-black  rounded-xl"
            >
              <button
                onClick={() => showContent(index)}
                className="accordion-heading  px-3  py-3 flex justify-between gap-5 w-full items-center "
              >
                <h2
                  className={`${
                    accordion === index && "text-[#57ff9a]"
                  } text-black text-start font-bold text-xl duration-300 font-Exo`}
                >
                  {obj.title}
                </h2>
                <div className=" relative z-[1]">
                  <span className="w-5 h-[2px] bg-black block"></span>
                  <span
                    className={`${
                      accordion === index ? "rotate-90" : "rotate-0"
                    } w-[2px] absolute left-[50%] top-[50%] translate-x-[-50%] duration-300 translate-y-[-50%] h-5 bg-black block`}
                  ></span>
                </div>
              </button>
              <div
                className={`${
                  accordion === index
                    ? "max-h-[600px] pb-3 !duration-300"
                    : "max-h-0"
                } accrdion-heading   px-3  overflow-hidden  pr-10    !duration-300 transition-all`}
              >
                <p className="text-black  font-normal text-base font-Exo">
                  {obj.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccordionComponents;
