import React from "react";

const Category = ({ categoryValue, setCategoryValue }) => {
  return (
    <>
      <div className="flex pt-10 w-full ">
        <div className="flex text-[#b1b1b1] justify-between text-center w-full border-b-2 cursor-pointer">
          <div
            className={`p-1 lg:p-5 text-white flex-wrap hover:cursor-pointer ${
              categoryValue === "THE DEN" && "border-b-4"
            }`}
            onClick={() => setCategoryValue("THE DEN")}
          >
            THE DEN
          </div>
          <div
            className={`p-1 lg:p-5 text-white flex-wrap hover:cursor-pointer ${
              categoryValue === "THE SUITE" && "border-b-4"
            }`}
            onClick={() => setCategoryValue("THE SUITE")}
          >
            THE SUITE
          </div>
          <div
            className={`p-1 lg:p-5 text-white flex-wrap hover:cursor-pointer ${
              categoryValue === "THE HIGH ROLLA" && "border-b-4"
            }`}
            onClick={() => setCategoryValue("THE HIGH ROLLA")}
          >
            THE HIGH ROLLA
          </div>
          <div
            className={`p-1 lg:p-5 text-white flex-wrap hover:cursor-pointer ${
              categoryValue === "STUDIO SNOOP DOGG" && "border-b-4"
            }`}
            onClick={() => setCategoryValue("STUDIO SNOOP DOGG")}
          >
            STUDIO SNOOP DOGG
          </div>
          <div
            className={`p-1 lg:p-5 text-white flex-wrap hover:cursor-pointer ${
              categoryValue === "COMPARE BURROWS" && "border-b-4"
            }`}
            onClick={() => setCategoryValue("COMPARE BURROWS")}
          >
            COMPARE BURROWS
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
