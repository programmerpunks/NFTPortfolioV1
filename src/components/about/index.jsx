import React, { useState } from "react";

import { AboutData } from "../../content/About";
import Category from "./category";
import categoryData from "../../content/About/category";
import Details from "./details";
import get_category_Filtered from "./helpingFunctions/categorySelection";

const About = () => {
  const [categoryItem, setCategoryItem] = useState(categoryData[0].title);

  let item = get_category_Filtered(categoryItem, categoryData);
  return (
    <>
      <div className="flex bg-gradient-to-r from-[#75013f] to-black justify-center items-center p-10 flex-col lg:px-40">
        <div className="flex p-4">
          <div className="text-3xl text-white ">{AboutData.title}</div>
          <div className="text-white ml-10 p-2">{AboutData.description}</div>
        </div>
        <Category
          setCategoryValue={setCategoryItem}
          categoryValue={categoryItem}
        />
        <div className="flex justify-evenly w-full pt-20 text-white lg:flex-row flex-col">
          <div className="my-4 lg:m-4 flex text-center justify-center rounded-3xl py-10 bg-black bg-opacity-50 border-2 flex-col w-full">
            <div className="m-4 text-xl font-black">{AboutData.grandTour}</div>
            <div className="px-6 m-4">{AboutData.grandTourdesc1}</div>
            <div className="px-6 m-4">{AboutData.grandTourdesc2}</div>
            <div className="px-6 m-4">{AboutData.grandTourdesc3}</div>
            <p className="px-6 m-4">{AboutData.grandTourdesc4}</p>
          </div>
          <div className="my-4 lg:m-4 flex justify-center text-center rounded-3xl bg-black bg-opacity-50  border-2 flex-col w-full">
            <div className="m-4 text-xl font-black">{AboutData.welcomeHome}</div>
            <div className="px-6 m-4">
              {AboutData.welcomeHomedet1}
            </div>
            <div className="px-6 m-4">
              {AboutData.welcomeHomedet2}
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center text-white text-3xl mt-10">
          {AboutData.metaverse}
        </div>
        <Details categoryDetails={item} categoryValue={categoryItem} />
      </div>
    </>
  );
};

export default About;
