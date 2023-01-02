import React from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { TbBrandTwitter } from "react-icons/tb";
import { SiInstagram } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const Phase = ({
  phase_no,
  heading,
  description,
  img,
  phaseCount,
  setPhaseCount,
}) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">PHASE {phase_no + 1}</h1>
      <div className="md:flex md:space-x-5">
        <div className="flex justify-center">
          <img className=" w-[70%] md:w-[85%] my-5" src={img} alt="" />
        </div>
        <div className="md:flex items-center justify-center lg:text-lg">
          <div className="space-y-5 lg:w-[70%]">
            <h1 className="text-2xl font-bold">{heading}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between my-5">
        <div className="flex">
          <div className="hover:cursor-pointer">
            <IoIosArrowDropleft
              size={40}
              onClick={() => setPhaseCount(phaseCount - 1)}
            />
          </div>
          <div className="hover:cursor-pointer">
            <IoIosArrowDropright
              size={40}
              onClick={() => setPhaseCount(phaseCount + 1)}
            />
          </div>
        </div>
        <div className="flex items-center">
          <p className="border-b-2 w-[60px] "> </p>
        </div>
        <div className="flex items-center text-4xl">{phase_no + 1}</div>
        <div className="flex space-x-2 items-center">
          <a
            href="https://twitter.com"
            className="hover:cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <TbBrandTwitter size={30} />
          </a>
          <a
            href="https://www.instagram.com"
            className="hover:cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <SiInstagram size={25} />
          </a>
          <a
            href="https://www.gmail.com"
            className="hover:cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <HiOutlineMail size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Phase;
