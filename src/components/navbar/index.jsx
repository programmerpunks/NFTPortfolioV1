import React from "react";
import { CgMenuLeft } from "react-icons/cg";

import { navbarData } from "../../content/Navbar";

const Navbar = ({
  setValue,
  connection,
  disconnect,
  getTokens,
  logout,
  readContract,
  wallet,
}) => {
  return (
    <>
      <div className="flex  bg-transparent  backdrop-blur-[80px] md:backdrop-blur-0  justify-between p-2 md:px-10 fixed z-30 top-0 w-full">
        <div className="w-[30%] md:w-[10%] items-center flex">
          <img src={navbarData.logo} alt="/" />
        </div>
        <div className="flex text-white">
          <div className="py-2 ml-3 flex items-center justify-center ">
            <button
              onClick={async () => {
                logout
                  ? (async function () {
                      await disconnect();
                    })()
                  : (async function () {
                      await connection();
                      await readContract();
                      await getTokens();
                    })();
              }}
              className={`flex border-[1px] border-white p-1 hover:scale-125 duration-700 rounded-lg px-2 justify-center  text-white bg-transparent cursor-pointer ${
                logout ? "hover:before:content-['Disconnect:']" : ""
              }`}
            >
              <p
                className={`h-[12px] w-[12px] border ${
                  logout ? "bg-green-600" : "bg-red-600"
                }  rounded-full flex items-center`}
              ></p>
              {wallet}
            </button>
          </div>
          <CgMenuLeft
            size={35}
            className="text-white m-2 cursor-pointer"
            onClick={() => setValue(true)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
