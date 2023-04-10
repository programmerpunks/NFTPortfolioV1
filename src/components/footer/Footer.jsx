import React from "react";

import { FooterData } from "../../content/Footer";
import { personallLinks, socialLinks } from "../../content/SocialLink";

const Footer = () => {
  return (
    <div className=" py-20 text-xs sm:text-sm md:text-base text-white">
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly">
        <ul className="space-y-2 flex flex-col items-center  pt-5 md:pt-0">
          <li>{FooterData.official}</li>
          <li>
            <img src={FooterData.divider} alt="" />
          </li>
          <li>{FooterData.fluf}</li>
          <li>{FooterData.party}</li>
          <li>{FooterData.thingies}</li>
          <li>{FooterData.scene}</li>
        </ul>
        <ul className="space-y-2 flex flex-col items-center  pt-5 md:pt-0">
          <li>{FooterData.contact}</li>
          <li>
            <img src={FooterData.divider} alt="" />
          </li>
          <li>{personallLinks.flufMail}</li>
          <li>{personallLinks.beyondMail}</li>
        </ul>
        <ul className="space-y-2 flex flex-col items-center  pt-5 md:pt-0">
          <li>{FooterData.follow}</li>
          <li>
            <img src={FooterData.divider} alt="" />
          </li>
          <li className="flex space-x-2">
            {socialLinks.map((socLnk,index) => {
              return (
                <a href={socLnk.link} key={index} rel="noreferrer" target="_blank">
                  {socLnk.icon}
                </a>
              );
            })}
          </li>
        </ul>
      </div>
      <div className="text-center space-y-3 mt-20">
        <p>{FooterData.copyrights}</p>
        <p>{FooterData.reserverd}</p>
        <div className="flex justify-center">
          <img className="w-[30%]" src={FooterData.logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
