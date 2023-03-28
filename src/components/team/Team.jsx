import React from "react";

import { TeamData } from "../../content/Team";

const Team = () => {
  return (
    <div className="mx-[10%] text-white">
      <div className="text-center py-10">
        <h1 className="font-bold text-3xl">{TeamData.title}</h1>
        <p>{TeamData.burrows}</p>
      </div>
      <div className="md:flex items-center gap-10 space-y-7">
        <div className="space-y-5">
          <h1 className="font-bold text-2xl">{TeamData.team}</h1>
          <p className="lg:text-xl">{TeamData.teamDes1}</p>
          <p className="lg:text-xl">{TeamData.teamDes2}</p>
          <button className="border rounded-lg py-3 px-4 text-xs">
            {TeamData.about}
          </button>
        </div>
        <div>
          <div className="bg-gradient-to-t from-[#75013f] to-black text-white rounded-3xl">
            <div className="flex justify-center py-7 ">
              <img className="w-[70%]" src={TeamData.image} alt="" />
            </div>
            <div className="flex justify-center py-7">
              <img className="w-[70%]" src={TeamData.image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
