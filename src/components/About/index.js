import React from "react";
import { Element, Link } from "react-scroll";

import "./styles.css";
import portraitPNG from "../../assets/portrait.png";
import resume from "../../assets/resume.pdf";

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
            <a className="button" download="resume.pdf" href={resume}>
              Resume
            </a>
            <Link
              className="button"
              containerId="root"
              to="contact"
              smooth={true}
              duration={500}
              offset={-100}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default About;
