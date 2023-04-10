import React from "react";

import categoryData from "../../../content/About/category";

const Category = ({ categoryValue, setCategoryValue }) => {
  return (
    <>
      <div className="flex pt-10 w-full ">
        <div className="flex text-[#b1b1b1] justify-between text-center w-full border-b-2 cursor-pointer">
          {categoryData.map((category,index) => {
            return (
              <div
                key={index}
                className={`p-1 lg:p-5 text-white flex-wrap hover:cursor-pointer ${
                  categoryValue === category.title && "border-b-4"
                }`}
                onClick={() => setCategoryValue(category.title)}
              >
                {category.title}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
