export default function get_phase_filtered(phaseCount, RoadMapDetail) {
  phaseCount = phaseCount < 0 ? -phaseCount : phaseCount;
  // console.log(phaseCount);
  // console.log(phaseCount % 3);
  // console.log(RoadMapDetail.length);
  // if (phaseCount < 0) {
  //   phaseCount = -phaseCount;
  // }
  console.log(phaseCount);
  let mod = phaseCount % RoadMapDetail.length;
  // console.log("Mod bhai jaan " + mod);

  // let filtered_NFTs = [];
  //   for (let index = 0; index < NFTs.length; index++) {
  //     if (NFTs[index]["category"] === SelectedBtn.SelectedBtn) {
  //       filtered_NFTs.push(NFTs[index]);
  //     }
  //   return filtered_NFTs;
  // }
  for (var i = 0; i < RoadMapDetail.length; i++) {
    if (RoadMapDetail[i].phase === mod) {
      return RoadMapDetail[i];
    }
  }
}
