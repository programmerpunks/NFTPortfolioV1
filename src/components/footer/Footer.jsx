import React from "react";

import { FooterData } from "../../content/Footer";
import { socialLinks } from "../../content/SocialLink";

const Footer = () => {
  return (
    <div className=" py-20 text-xs sm:text-sm md:text-base text-white">
      <div className="flex justify-evenly">
        <div>
          <ul className="space-y-2">
            <li>{FooterData.official}</li>
            <li>
              <img src={FooterData.divider} alt="" />
            </li>
            <li>{FooterData.fluf}</li>
            <li>{FooterData.party}</li>
            <li>{FooterData.thingies}</li>
            <li>{FooterData.scene}</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li>{FooterData.contact}</li>
            <li>
              <img src={FooterData.divider} alt="" />
            </li>
            <li>{socialLinks.flufMail}</li>
            <li>{socialLinks.beyondMail}</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li>{FooterData.follow}</li>
            <li>
              <img src={FooterData.divider} alt="" />
            </li>
            <li className="flex space-x-2">
              {socialLinks.twitter}
              {socialLinks.instagram}
              {socialLinks.mail}
            </li>
          </ul>
        </div>
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
