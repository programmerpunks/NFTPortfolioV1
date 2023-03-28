import React from "react";

import { Canvas } from "@react-three/fiber";
import { Model } from "./Pokemon.jsx";
import { OrbitControls } from "@react-three/drei";
import { RxCross2 } from "react-icons/rx";

import { navbarDetailsData } from "../../content/NavbarDetails/index.js";

const NavBarDetail = ({ setValue }) => {
  return (
    <>
      <div className="h-screen  bg-gradient-to-t from-[#51022c] to-black">
        <div className="flex bg-transparent justify-between p-2 px-10 fixed top-0 w-full">
          <div className="w-[10%] items-center flex">
            <img src={navbarDetailsData.logo} alt="/" />
          </div>
          <RxCross2
            size={35}
            className="text-white m-2 mr-6 cursor-pointer"
            onClick={() => setValue(false)}
          />
        </div>
        <div className="top-20 fixed w-full">
          <div className="flex">
            <div className="flex pt-10 justify-start w-[70%] flex-col px-80">
              <div className="flex text-[#b1b1b1] justify-between text-center border-b-2 flex-col md:flex-row cursor-pointer">
                <div className="border-b-4 p-1 lg:p-5 text-white">{navbarDetailsData.den}</div>
                <div className="hover:border-b-4 p-1 lg:p-5 flex-wrap">
                  {navbarDetailsData.suit}
                </div>
                <div className="hover:border-b-4 p-1 lg:p-5 flex-wrap">
                  {navbarDetailsData.roll}
                </div>
                <div className="hover:border-b-4 p-1 lg:p-5 flex-wrap">
                  {navbarDetailsData.snoop}
                </div>
              </div>
              <div className="flex flex-wrap mt-10 justify-center">
                <button className="flex m-1 text-center p-2 px-8 rounded-lg border-[0.5px] text-white">
                  {navbarDetailsData.entrance}
                </button>
                <button className="flex m-1 text-center p-2 px-8 rounded-lg border-[0.5px] border-[#9101D0] text-[#9101D0]">
                  {navbarDetailsData.gallery}
                </button>
                <button className="flex m-1 text-center p-2 px-8 rounded-lg border-[0.5px] border-[#AD8205] text-[#AD8205]">
                  {navbarDetailsData.tub}
                </button>
                <button className="flex m-1 text-center p-2 px-8 rounded-lg border-[0.5px] border-[#00B702] text-[#00B702]">
                  {navbarDetailsData.kitchen}
                </button>
                <button className="flex m-1 text-center p-2 px-8 rounded-lg border-[0.5px] border-[#FFE000] text-[#FFE000]">
                  {navbarDetailsData.club}
                </button>
                <button className="flex m-1 text-center p-2 px-8 rounded-lg border-[0.5px] border-[#B101B0] text-[#B101B0]">
                  {navbarDetailsData.bedroom}
                </button>
                <button className="flex m-1 text-center p-2 px-8 rounded-lg border-[0.5px] border-[#41EAD4] text-[#41EAD4]">
                  {navbarDetailsData.lounge}
                </button>
              </div>
              <div className="bg-transparent z-40  h-[50%] mt-[4%]">
                <Canvas>
                  <OrbitControls enableZoom={true} />
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[-2, 5, 2]} intensity={1} />
                  <Model />
                </Canvas>
              </div>
              <div className="flex w-full justify-evenly mt-[1%]">
                <div className="flex">
                  <div className="flex p-4 text-white text-[32px] text-center">
                    {navbarDetailsData.model}
                  </div>
                  <div className="flex items-center ">
                    <RxCross2 size={25} className="text-white" />
                  </div>
                  <div className="text-white items-center flex">{navbarDetailsData.roll}</div>
                </div>
              </div>
            </div>
            <div className="flex border-l-2 w-[30%] text-white justify-center">
              <ul className="flex flex-col justify-center text-end p-10 ">
                <div className="flex flex-col p-5 text-[24px] text-white">
                  <li className="p-2 hover:text-[#b1b1b1] cursor-pointer">
                    {navbarDetailsData.twiiter}
                  </li>
                  <li className="p-2 hover:text-[#b1b1b1] cursor-pointer">
                    {navbarDetailsData.medium}
                  </li>
                  <li className="p-2 hover:text-[#b1b1b1] cursor-pointer">
                    {navbarDetailsData.team}
                  </li>
                </div>
                <div className="flex flex-col p-5 text-[48px]">
                  <li className="p-2 hover:text-[#b1b1b1] cursor-pointer">
                    {navbarDetailsData.lore}
                  </li>
                  <li className="p-2 hover:text-[#b1b1b1] cursor-pointer">
                    {navbarDetailsData.burrow}
                  </li>
                  <li className="p-2 hover:text-[#b1b1b1] cursor-pointer">
                    {navbarDetailsData.fluf}
                  </li>
                  <li className="p-2 hover:text-[#b1b1b1] cursor-pointer">
                    {navbarDetailsData.roadmap}
                  </li>
                </div>
                <div className="flex flex-col text-center p-5">
                  <li className="outline outline-gray-500 rounded-lg cursor-pointer hover:outline-white outline-1 p-2 text-white">
                    {navbarDetailsData.community}
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarDetail;
