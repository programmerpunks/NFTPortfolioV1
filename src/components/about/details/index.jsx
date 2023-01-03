import React from "react";

import CompareBurrows from "./compareBurrow";
import DetailCart from "./detailsCart";

const Details = ({ categoryDetails, categoryValue }) => {
  return (
    <>
      <div className="flex justify-center pt-5 flex-col w-full">
        <div className="flex justify-center text-center text-white">
          {categoryDetails.tagLine}
        </div>
        {categoryValue === "COMPARE BURROWS" ? (
          <CompareBurrows />
        ) : (
          <div className="flex pt-10 w-full flex-wrap justify-center">
            {
              categoryDetails.accessories.map((catItem)=>{
                return (
                  <DetailCart key={catItem.accessory} cartItem={catItem} />
                )
              })
            }
          </div>
        )}
      </div>
    </>
  );
};

export default Details;
