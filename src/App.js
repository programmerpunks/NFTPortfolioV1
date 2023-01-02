import React, { useState } from "react";

import About from "./components/about";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import NavBarDetail from "./components/navbarDetail";

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
        </>
      )}
    </>
  );
}

export default App;
