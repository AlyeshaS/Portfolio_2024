import { useEffect, useState } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";

import About from "./components/About";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

import "swiper/css";
import Contact from "./components/Contact";

function App() {
  const [vantaEffect, setVantaEffect] = useState(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: document.body,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xe5e8ed,
          color1: 0x3d5a80,
          color2: 0x81a3d1,
          birdSize: 3.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
