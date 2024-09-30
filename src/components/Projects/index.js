import React from "react";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Autoplay } from "swiper/modules";

import AOFigma from "../../Images/AOFigma.png";
import "swiper/css/effect-flip";
import "./styles.css";

function Projects() {
  return (
    <Element name="projects" className="section projects">
      <div className="container">
        <h1 className="section-header">UI/UX Design</h1>
        <Swiper
          className="swiper"
          grabCursor={true}
          direction="vertical"
          effect="flip"
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: true,
          // }}
          modules={[EffectFlip, Autoplay]}
        >
          <SwiperSlide className="slide">
            <div className="text">
              <div>
                <h1 className="name">Academic Oasis</h1>
                <span className="position">
                  Chief Marketing & Design Officer
                </span>
              </div>
              <p>
                Academic Oasis is a platform that aims to improve all aspects of
                a university student's life. It provides the ability to navigate
                through resources, productivity tools, etc.
              </p>
              <p>Skills: Figma, Responsive Design.</p>
              <button>Read More</button>
            </div>
            <div className="content">
              <img src={AOFigma} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="text">
              <div>
                <h1 className="name">Academic Oasis</h1>
                <span className="position">
                  Chief Marketing & Design Officer
                </span>
              </div>
              <p>
                Academic Oasis is a platform that aims to improve all aspects of
                a university student's life. It provides the ability to navigate
                through resources, productivity tools, etc.
              </p>
              <p>Skills: Figma, Responsive Design.</p>
              <button>Read More</button>
            </div>
            <div className="content">
              <img src={AOFigma} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="text">
              <div>
                <h1 className="name">Academic Oasis</h1>
                <span className="position">
                  Chief Marketing & Design Officer
                </span>
              </div>
              <p>
                Academic Oasis is a platform that aims to improve all aspects of
                a university student's life. It provides the ability to navigate
                through resources, productivity tools, etc.
              </p>
              <p>Skills: Figma, Responsive Design.</p>
              <button>Read More</button>
            </div>
            <div className="content">
              <img src={AOFigma} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Element>
  );
}

export default Projects;
