import React from "react";

import { HeroData } from "../../content/Hero";
import { socialLinks } from "../../content/SocialLink";

const Hero = () => {
  return (
    <>
      <div className="relative h-[100vh] w-full bg-cover bg-hero-bg-img">
        <div className="flex relative top-[70%] justify-evenly h-auto z-10">
          <div className="flex bg-transparent items-end justify-center p-3">
            <img src={HeroData.verticalLine} alt="/" />
          </div>
          <div className="flex  justify-center flex-col">
            <div className="text-[50px] lg:text-[100px] text-white justify-center flex">
              {HeroData.title}
            </div>
            <div className=" text-white flex justify-center">
              {HeroData.description}
            </div>
            <div className="flex justify-center bg-transparent mt-5">
              <button className="flex outline outline-gray-800 rounded-xl hover:outline-white outline-1 p-2 text-white">
                {HeroData.opensea}
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center bg-transparent text-white">
            <div className="m-5">{socialLinks.twitter}</div>
            <div className="m-5">{socialLinks.instagram}</div>
            <div className="m-5">{socialLinks.mail}</div>
          </div>
        </div>
        <div className="extraDiv"></div>
      </div>
    </>
  );
};

export default Hero;
