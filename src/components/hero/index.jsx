import React from "react";
import { FaDiscord } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

const verticalLine = require("../../images/hero/hero-section-line.webp");

const Hero = () => {
  return (
    <>
      <div className="relative h-[100vh] w-full bg-cover bg-hero-bg-img">
        <div className="flex relative top-[70%] justify-evenly h-auto z-10">
          <div className="flex bg-transparent items-end justify-center p-3">
            <img src={verticalLine} alt="/" />
          </div>
          <div className="flex  justify-center flex-col">
            <div className="text-[50px] lg:text-[100px] text-white justify-center flex">
              Burrows
            </div>
            <div className=" text-white flex justify-center">
              10,500 PERSONAL VIRTUAL METASPACE NFTS BROUGHT TO YOU BY FLUF
              WORLD AND BEYOND
            </div>
            <div className="flex justify-center bg-transparent mt-5">
              <button className="flex outline outline-gray-800 rounded-xl hover:outline-white outline-1 p-2 text-white">
                BUY ON OPENSEA
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center bg-transparent text-white">
            <FiTwitter size={30} className="m-5" />
            <FiInstagram size={30} className="m-5" />
            <FaDiscord size={30} className="m-5" />
          </div>
        </div>
        <div className="extraDiv"></div>
      </div>
    </>
  );
};

export default Hero;
