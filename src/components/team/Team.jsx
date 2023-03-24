import React from "react";

import pic from "../../images/footer/portfolioLogo.png";

const Team = () => {
  return (
    <div className="mx-[10%] text-white">
      <div className="text-center py-10">
        <h1 className="font-bold text-3xl">MEET THE TEAM</h1>
        <p>Behind your burrows</p>
      </div>
      <div className="md:flex items-center gap-10 space-y-7">
        <div className="space-y-5">
          <h1 className="font-bold text-2xl">The Team</h1>
          <p className="lg:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
            tempore nemo ducimus repellat fugiat exercitationem, at dignissimos
            non sapiente hic consequatur
          </p>
          <p className="lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            quod aliquid quas nisi a debitis, molestiae amet, suscipit tempora
            quibusdam quidem 
          </p>
          <button className="border rounded-lg py-3 px-4 text-xs">
            READ MORE ABOUT US
          </button>
        </div>
        <div>
          <div className="bg-gradient-to-t from-[#75013f] to-black text-white rounded-3xl">
            <div className="flex justify-center py-7 ">
              <img className="w-[70%]" src={pic} alt="" />
            </div>
            <div className="flex justify-center py-7">
              <img className="w-[70%]" src={pic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
