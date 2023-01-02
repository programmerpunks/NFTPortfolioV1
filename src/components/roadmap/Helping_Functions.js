export default function get_phase_filtered(phaseCount, RoadMapDetail) {
  let mod =
    ((0 - 0 + (phaseCount % RoadMapDetail.length) + RoadMapDetail.length) %
      RoadMapDetail.length) +
    0;

  for (var i = 0; i < RoadMapDetail.length; i++) {
    if (RoadMapDetail[i].phase === mod) {
      return RoadMapDetail[i];
    }
  }
}
