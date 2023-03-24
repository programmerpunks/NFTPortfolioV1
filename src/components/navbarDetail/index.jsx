import React from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Pokemon.jsx";
import { RxCross2 } from "react-icons/rx";

const logo = require("../../images/navbar/portfolioLogo.png");

const NavBarDetail = ({ setValue }) => {
  return (
    <>
      <div className="h-screen  bg-gradient-to-t from-[#51022c] to-black">
        <div className="flex bg-transparent justify-between p-2 px-10 fixed top-0 w-full">
          <div className="w-[10%] items-center flex">
            <img src={logo} alt="/" />
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
                <div className="border-b-4 p-1 lg:p-5 text-white">DEN</div>
                <div className="hover:border-b-4 p-1 lg:p-5 flex-wrap">
                  SUITE
                </div>
                <div className="hover:border-b-4 p-1 lg:p-5 flex-wrap">
                  HIGH ROLLA
                </div>
                <div className="hover:border-b-4 p-1 lg:p-5 flex-wrap">
                  STUDIO SNOOP DOGG
                </div>
              </div>
              <div className="flex flex-wrap mt-10 justify-center">
                <button className="flex m-1 text-center p-2 px-8 rounded-lg border-[0.5px] text-white">
                  ENTRANCE
                </button>
                <button className="flex m-1 text-center p-2 px-8 rounded-lg border-[0.5px] border-[#9101D0] text-[#9101D0]">
                  GALLERY
                </button>
                <button className="flex m-1 text-center p-2 px-8 rounded-lg border-[0.5px] border-[#AD8205] text-[#AD8205]">
                  HOT TUB
                </button>
                <button className="flex m-1 text-center p-2 px-8 rounded-lg border-[0.5px] border-[#00B702] text-[#00B702]">
                  KITCHEN
                </button>
                <button className="flex m-1 text-center p-2 px-8 rounded-lg border-[0.5px] border-[#FFE000] text-[#FFE000]">
                  NIGHTCLUB
                </button>
                <button className="flex m-1 text-center p-2 px-8 rounded-lg border-[0.5px] border-[#B101B0] text-[#B101B0]">
                  BEDROOM
                </button>
                <button className="flex m-1 text-center p-2 px-8 rounded-lg border-[0.5px] border-[#41EAD4] text-[#41EAD4]">
                  LOUNGE
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
                    3D BURROWS MODEL
                  </div>
                  <div className="flex items-center ">
                    <RxCross2 size={25} className="text-white" />
                  </div>
                  <div className="text-white items-center flex">HIGH ROLLA</div>
                </div>
              </div>
            </div>
            <div className="flex border-l-2 w-[30%] text-white justify-center">
              <ul className="flex flex-col justify-center text-end p-10 ">
                <div className="flex flex-col p-5 text-[24px] text-white">
                  <li className="p-2 hover:text-[#b1b1b1] cursor-pointer">
                    Twitter
                  </li>
                  <li className="p-2 hover:text-[#b1b1b1] cursor-pointer">
                    Medium
                  </li>
                  <li className="p-2 hover:text-[#b1b1b1] cursor-pointer">
                    The Team
                  </li>
                </div>
                <div className="flex flex-col p-5 text-[48px]">
                  <li className="p-2 hover:text-[#b1b1b1] cursor-pointer">
                    LORE
                  </li>
                  <li className="p-2 hover:text-[#b1b1b1] cursor-pointer">
                    BURROWS
                  </li>
                  <li className="p-2 hover:text-[#b1b1b1] cursor-pointer">
                    FLUF WORLD
                  </li>
                  <li className="p-2 hover:text-[#b1b1b1] cursor-pointer">
                    ROADMAP
                  </li>
                </div>
                <div className="flex flex-col text-center p-5">
                  <li className="outline outline-gray-500 rounded-lg cursor-pointer hover:outline-white outline-1 p-2 text-white">
                    JOIN OUR COMMUNITY
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
