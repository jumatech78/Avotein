"use client";
import React from "react";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };
  return (
    <section className="relative bg-green-50">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="h-[600px] flex items-center justify-center bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2024/01/09/22/11/avocado-8498520_1280.jpg')]">
          <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white p-8 rounded-xl">
            <h1 className="text-6xl font-bold mb-6">
              Welcome to Avotein Farms Ltd.
            </h1>
            <p className="text-xl">
              Promoting Hass Avocado cultivation in Uganda. Currently operating
              70 acres of land with 40 acres of Hass trees.
            </p>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="h-[600px] flex items-center justify-center bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2016/11/21/11/57/bowl-1844894_1280.jpg')]">
          <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white p-8 rounded-xl">
            <h1 className="text-6xl font-bold mb-6">
              Expanding with Innovation
            </h1>
            <p className="text-xl">
              With a district collection center, an export pack-house, and
              nurseries for 10,000 seedlings, we are shaping the future of
              sustainable farming.
            </p>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="h-[600px] flex items-center justify-center bg-cover bg-center bg-[url('https://cdn.pixabay.com/photo/2015/08/10/12/02/avocados-882635_1280.jpg')]">
          <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white p-8 rounded-xl">
            <h1 className="text-6xl font-bold mb-6">
              Sustainability for Generations
            </h1>
            <p className="text-xl">
              Harvesting innovative solutions to produce natural products and
              utilizing every square meter of our land sustainably.
            </p>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Hero;
