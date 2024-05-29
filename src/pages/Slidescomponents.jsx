import React from "react";
// swiper imort

// css swiper
import "swiper/css";

// required for swiper
import { Swiper, SwiperSlide } from "swiper/react";

// only use when coverflow effect
import "swiper/css/effect-coverflow";

// when pagination use
import "swiper/css/pagination";

// import modules form swiper as required
import { EffectCoverflow, Pagination } from "swiper/modules";
// slick slider import

// required for slick sllider
import Slider from "react-slick";

// css slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slidescomponents = () => {
  const slider = React.useRef(null);
  // slick slider modification
  var settings = {
    //   remove dots
    dots: true,
    arrows: true,
    infinite: true,
    // how many slide showing
    slidesToShow: 3,
    // how many slides scroll on scrolling
    slidesToScroll: 1,
  };
  return (
    <section>
      <div className=" max-w-[1140px] mt-5 mr-auto overflow-hidden">
        <h2 className=" font-Exo text-3xl  text-black">SWIPER</h2>
        <p className=" font-Exo text-2xl mt-2 pb-5 text-black">
          coverflowEffect
        </p>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper  w-full py-[50px]">
          <SwiperSlide className=" bg-center bg-cover !w-[300px] !h-[300px]">
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              className="w-full"
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide className=" bg-center bg-cover !w-[300px] !h-[300px]">
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              className="w-full"
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide className=" bg-center bg-cover !w-[300px] !h-[300px]">
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              className="w-full"
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide className=" bg-center bg-cover !w-[300px] !h-[300px]">
            <img
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              className="w-full"
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide className=" bg-center bg-cover !w-[300px] !h-[300px]">
            <img
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              className="w-full"
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide className=" bg-center bg-cover !w-[300px] !h-[300px]">
            <img
              src="https://swiperjs.com/demos/images/nature-6.jpg"
              className="w-full"
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide className=" bg-center bg-cover !w-[300px] !h-[300px]">
            <img
              src="https://swiperjs.com/demos/images/nature-7.jpg"
              className="w-full"
              alt="slide"
            />
          </SwiperSlide>
          <SwiperSlide className=" bg-center bg-cover !w-[300px] !h-[300px]">
            <img
              src="https://swiperjs.com/demos/images/nature-8.jpg"
              className="w-full"
              alt="slide"
            />
          </SwiperSlide>
        </Swiper>
        <h2 className=" font-Exo text-3xl mt-5  text-white">SLICK SLIDER</h2>
        <p className=" font-Exo text-2xl mt-2 pb-5 text-white">Simple</p>
        <Slider {...settings} ref={slider} className="overflow-hidden">
          <div>
            <div className="px-3">
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                className="w-full"
                alt="slide"
              />
            </div>
          </div>
          <div>
            <div className="px-3">
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                className="w-full"
                alt="slide"
              />
            </div>
          </div>
          <div>
            <div className="px-3">
              <img
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                className="w-full"
                alt="slide"
              />
            </div>
          </div>
          <div>
            <div className="px-3">
              <img
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                className="w-full"
                alt="slide"
              />
            </div>
          </div>
          <div>
            <div className="px-3">
              {" "}
              <img
                src="https://swiperjs.com/demos/images/nature-5.jpg"
                className="w-full"
                alt="slide"
              />
            </div>
          </div>
          <div>
            <div className="px-3">
              <img
                src="https://swiperjs.com/demos/images/nature-6.jpg"
                className="w-full"
                alt="slide"
              />
            </div>
          </div>
        </Slider>
        <div className=" flex gap-4 items-center my-5">
          <button
            onClick={() => slider?.current?.slickPrev()}
            className="text-white text-xl font-bold font-exo hover:text-red-600 duration-300  sm:px-6 px-3  py-2 bg-black rounded-3xl"
          >
            Prev
          </button>
          <button
            onClick={() => slider?.current?.slickNext()}
            className="text-white text-xl font-bold font-exo hover:text-red-600 duration-300  sm:px-6 px-3  py-2 bg-black rounded-3xl"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slidescomponents;
