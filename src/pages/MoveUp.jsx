import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const MoveUp = () => {
  useEffect(() => {
    const tl = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });
      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
      });
      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top 10%",
        end: "97% 100%",
        pin: ".right-block",
        animation: animation,
        scrub: true,
        markers: false,
      });
    });
    return () => {
      tl.revert();
    };
  }, []);

  return (
    <>
      <section className="px-3 flex max-2xl:hidden gallery">
        <div className="w-[50%]">
          <div>
            <div className=" flex justify-center flex-col min-h-screen">
              <h2 className=" text-5xl text-gray-500 font-Poppins font-bold">
                BRAND PRODUCT
              </h2>
            </div>
            <div className=" flex justify-center flex-col min-h-screen">
              <h2 className=" text-5xl text-gray-500 font-Poppins font-bold">
                BRAND PRODUCT
              </h2>
            </div>
            <div className=" flex justify-center flex-col min-h-screen">
              <h2 className=" text-5xl text-gray-500 font-Poppins font-bold">
                BRAND PRODUCT
              </h2>
            </div>
          </div>
        </div>
        <div className=" w-[50%]  right-block flex  flex-col">
          <div className="relative  min-h-[100vh]">
            <div className=" absolute  w-[100%] top-[50%] translate-y-[-50%] h-[50%] photo">
              <img
                src="https://swiperjs.com/demos/images/nature-7.jpg"
                className="w-full h-full"
                alt="slide"
              />
            </div>
            <div className=" absolute w-[100%] top-[50%] translate-y-[-50%] h-[50%] photo">
              <img
                src="https://swiperjs.com/demos/images/nature-6.jpg"
                className="w-full h-full"
                alt="slide"
              />
            </div>
            <div className=" absolute w-[100%] top-[50%] translate-y-[-50%] h-[50%] photo">
              <img
                src="https://swiperjs.com/demos/images/nature-8.jpg"
                className="w-full h-full"
                alt="slide"
              />
            </div>
          </div>
        </div>
      </section>
      <section className=" min-h-screen max-2xl:hidden"></section>
    </>
  );
};

export default MoveUp;
