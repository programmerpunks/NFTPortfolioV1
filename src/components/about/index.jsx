import React, { useState } from "react";

import Category from "./category";
import categoryData from "./data/categorySelectionAPI";
import Details from "./details";
import get_category_Filtered from "./helpingFunctions/categorySelection";

const About = () => {
  const [categoryItem, setCategoryItem] = useState("THE HIGH ROLLA")

  let item = get_category_Filtered(categoryItem, categoryData)
  return (
    <>
      <div className="flex bg-gradient-to-r from-[#75013f] to-black justify-center items-center p-10 flex-col lg:px-40">
        <div className="flex p-4">
          <div className="text-3xl text-white ">WHAT IS A BURROW?</div>
          <div className="text-white ml-10 p-2">
            Burrows are the hottest virtual real estate in FLUF world.
          </div>
        </div>
        <Category setCategoryValue={setCategoryItem} categoryValue={categoryItem} />
        <div className="flex justify-evenly w-full pt-20 text-white lg:flex-row flex-col">
          <div className="my-4 lg:m-4 flex text-center justify-center rounded-3xl py-10 bg-black bg-opacity-50 border-2 flex-col w-full">
            <div className="m-4 text-xl font-black">
              READY FOR THE GRAND TOUR
            </div>
            <div className="px-6 m-4">
              With just 10,500 Burrows available at 0.22 ETH, you'll want to be
              quick!
            </div>
            <div className="px-6 m-4">
              Burrow tiers and traits are randomly distributed at the time of
              mint.
            </div>
            <div className="px-6 m-4">
              But as always... every trait counts. Feeling lucky?
            </div>
            <p className="px-6 m-4">
              Each burrow has different features and are required for breeding!
            </p>
          </div>
          <div className="my-4 lg:m-4 flex justify-center text-center rounded-3xl bg-black bg-opacity-50  border-2 flex-col w-full">
            <div className="m-4 text-xl font-black">WELCOME HOME</div>
            <div className="px-6 m-4">
              Lavish, luxurious and full of surprises, Burrows are set to bring
              breeding, interaction and land ownership to your Fluf's metaverse
              experience.
            </div>
            <div className="px-6 m-4">
              Whether you're looking for a party pad, bachelor burrow, or a cozy
              place to raise Fluflets, our burrows have been designed with your
              comfort and enjoyment in mind.
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center text-white text-3xl mt-10">
          TAKE YOUR METAVERSE EXPERIENCE TO NEW HEIGHTS
        </div>
        <Details categoryDetails={item} categoryValue={categoryItem} />
      </div>
    </>
  );
};

export default About;
