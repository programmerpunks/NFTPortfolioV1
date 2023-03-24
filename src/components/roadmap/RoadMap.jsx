import React, { useState } from "react";

import get_phase_filtered from "./Helping_Functions";
import Phase from "./Phase";
import { RoadMapDetail } from "./roadmap";

const RoadMap = () => {
  const [phaseCount, setPhaseCount] = useState(0);
  let phase = get_phase_filtered(phaseCount, RoadMapDetail);
  return (
    <div className="bg-gradient-to-t from-[#75013f] to-black text-white rounded-3xl p-5 mx-[10%]">
      <Phase
        phase_no={phase.phase}
        heading={phase.heading}
        description={phase.description}
        img={phase.img}
        phaseCount={phaseCount}
        setPhaseCount={setPhaseCount}
      />
    </div>
  );
};

export default RoadMap;
