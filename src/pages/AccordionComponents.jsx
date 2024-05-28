import React, { useRef, useState } from "react";
import { accordioData } from "../components/common/Helper";

const AccordionComponents = () => {
  const contentHeight = useRef();
  const [accordion, setAccordion] = useState(false);
  const showContent = (index) => {
    setAccordion(index);
    if (accordion === index) {
      setAccordion(false);
    }
  };
  return (
    <section className="flex-grow items-center flex ">
      <div className="max-w-[1140px] mx-auto px-1">
        <div className="accordion bg-white rounded-xl py-5 px-6 border-[#d0fc9a] border-[6px]">
          {accordioData.map((obj, index) => (
            <div
              key={index}
              className="accordion-items mb-5 border duration-300 px-3 pb-1 border-black  rounded-xl"
            >
              <button
                onClick={() => showContent(index)}
                className="accordion-heading duration-300  py-3    flex justify-between gap-5 w-full items-center "
              >
                <h2
                  className={`${
                    accordion === index && "text-[#57ff9a]"
                  } text-black font-bold text-xl duration-300 font-Exo`}
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
                ref={contentHeight}
                style={
                  accordion === index
                    ? {
                        height: contentHeight.current.scrollHeight,
                        opacity: 100,
                      }
                    : {
                        height: "0px",
                        opacity: 0,
                      }
                }
                className={`accrdion-heading    h-0 !duration-300 transition-all`}
              >
                <p className="text-black duration-300 font-normal text-base font-Exo">
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
