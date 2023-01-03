import React from "react";

import divider from "../../images/footer/divide.webp";
import logo from "../../images/footer/portfolioLogo.png";

import { HiOutlineMail } from "react-icons/hi";
import { SiInstagram } from "react-icons/si";
import { TbBrandTwitter } from "react-icons/tb";

const Footer = () => {
  return (
    <div className=" py-20 text-xs sm:text-sm md:text-base text-white">
      <div className="flex justify-evenly">
        <div>
          <ul className="space-y-2">
            <li>OFFICIAL LINKS</li>
            <li>
              <img src={divider} alt="" />
            </li>
            <li>FLUFS</li>
            <li>PARTY BEARS</li>
            <li>THINGIES</li>
            <li>SCENES & SOUNDS</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li>CONTACT US</li>
            <li>
              <img src={divider} alt="" />
            </li>
            <li>fluf@nonfungiblelabs.xyz</li>
            <li>hello@beyond.fun</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li>FOLLOW US</li>
            <li>
              <img src={divider} alt="" />
            </li>
            <li className="flex space-x-2">
              <TbBrandTwitter size={30} />
              <SiInstagram size={25} />
              <HiOutlineMail size={30} />
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center space-y-3 mt-20">
        <p>Copyright © Non Fungible Labs.</p>
        <p>All rights reserved</p>
        <div className="flex justify-center">
          <img className="w-[30%]" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
