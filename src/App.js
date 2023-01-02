import React, { useState } from "react";

import About from "./components/about";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import NavBarDetail from "./components/navbarDetail";
import RoadMap from "./components/roadmap/RoadMap";
import Team from "./components/team/Team";

function App() {
  const [nav, setNav] = useState(false);

  return (
    <>
      {nav ? (
        <NavBarDetail setValue={setNav} />
      ) : (
        <>
          <Navbar setValue={setNav} />
          <Hero />
          <About />
          <RoadMap />
          <Team />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
