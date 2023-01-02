import React from "react";
import Footer from "./components/footer/Footer";
import RoadMap from "./components/roadmap/RoadMap";
import Team from "./components/team/Team";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#75013f] to-black text-white">
      <RoadMap />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
