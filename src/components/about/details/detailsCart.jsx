import React from "react";

const DetailCart = ({cartItem, type}) => {
  return (
    <>
      <div className="flex m-2 flex-col justify-evenly items-center rounded-[35px] border-2
       bg-cover bg-[50%]" style={{backgroundImage: `url(${cartItem.bg_img})`}}>
        <div className="p-2 text-white">{type}</div>
        <div className="p-[100px] md:p-[150px] text-white">{cartItem.accessory}</div>
      </div>
    </>
  );
};

export default DetailCart;
