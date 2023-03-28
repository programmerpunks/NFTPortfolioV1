import React from "react";
import { CgMenuLeft } from "react-icons/cg";

import { navbarData } from "../../content/Navbar";

const Navbar = ({ setValue }) => {
  return (
    <>
      <div className="flex  bg-transparent justify-between p-2 px-10 fixed z-30 top-0 w-full">
        <div className="w-[10%] items-center flex">
          <img src={navbarData.logo} alt="/" />
        </div>
        <CgMenuLeft
          size={35}
          className="text-white m-2 cursor-pointer"
          onClick={() => setValue(true)}
        />
      </div>
    </>
  );
};

export default Navbar;
