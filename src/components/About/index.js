import React from "react";
import { Element } from "react-scroll";

import "./styles.css";
import portraitPNG from "../../Images/portrait.png";

function About() {
  return (
    <Element name="about" className="section about">
      <div className="container">
        <div className="image">
          <img src={portraitPNG} alt="" />
        </div>
        <div className="text">
          <h1>
            I am <span>Alyesha Singh</span>,
          </h1>
          <p>
            a university student blending creativity with computer science to
            sculpt immersive web experiences. Let's turn ideas into interactive
            art pieces, one pixel at a time
          </p>
          <div className="buttons">
            <button>Resume</button>
            <button>Contact Me</button>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default About;
