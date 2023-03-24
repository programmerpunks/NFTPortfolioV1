import React, { useState } from "react";

import Category from "./category";
import categoryData from "./data/categorySelectionAPI";
import Details from "./details";
import get_category_Filtered from "./helpingFunctions/categorySelection";

const About = () => {
  const [categoryItem, setCategoryItem] = useState("THE HIGH ROLLA");

  let item = get_category_Filtered(categoryItem, categoryData);
  return (
    <>
      <div className="flex bg-gradient-to-r from-[#75013f] to-black justify-center items-center p-10 flex-col lg:px-40">
        <div className="flex p-4">
          <div className="text-3xl text-white ">WHAT IS A BURROW?</div>
          <div className="text-white ml-10 p-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <Category
          setCategoryValue={setCategoryItem}
          categoryValue={categoryItem}
        />
        <div className="flex justify-evenly w-full pt-20 text-white lg:flex-row flex-col">
          <div className="my-4 lg:m-4 flex text-center justify-center rounded-3xl py-10 bg-black bg-opacity-50 border-2 flex-col w-full">
            <div className="m-4 text-xl font-black">
              READY FOR THE GRAND TOUR
            </div>
            <div className="px-6 m-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae vel
              adipisci
            </div>
            <div className="px-6 m-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae vel
              adipisci
            </div>
            <div className="px-6 m-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit
            </div>
            <p className="px-6 m-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            </p>
          </div>
          <div className="my-4 lg:m-4 flex justify-center text-center rounded-3xl bg-black bg-opacity-50  border-2 flex-col w-full">
            <div className="m-4 text-xl font-black">WELCOME HOME</div>
            <div className="px-6 m-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur inventore, aliquid sunt, repellendus odio suscipit,
              illo similique libero nam quasi ex facilis. Perferendis vero,
              quidem itaque a officia similique aperiam.
            </div>
            <div className="px-6 m-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, sapiente dicta? A adipisci accusantium esse inventore
              velit dolor itaque aspernatur dignissimos consectetur cum alias
              rem ipsam, ratione incidunt. Eaque, accusamus?
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
