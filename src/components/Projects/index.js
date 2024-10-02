import React from "react";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Autoplay, Pagination } from "swiper/modules";

import AOFigma from "../../Images/AOFigma.png";
import CJSFigma from "../../Images/CJSFigma.png";
import ChefferyFigma from "../../Images/ChefferyFigma.png";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "./styles.css";

function Projects() {
  return (
    <Element name="projects" className="section projects">
      <div className="container">
        <h1 className="section-header">UI/UX Design</h1>
        <Swiper
          className="swiper"
          grabCursor={true}
          direction={window.innerWidth > 800 ? "vertical" : "horizontal"}
          effect="flip"
          pagination
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[EffectFlip, Autoplay, Pagination]}
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
                Academic Oasis is a startup in progress at Ontario Tech, aiming
                to enhance the student experience through an improved campus
                platform. It offers club and society presidents tools to create
                events, boost student engagement, and more. Students can easily
                browse all campus events and join those that interest them. A
                dedicated page will showcase clubs, events, jobs, and workshops
                on campus, with input from club executives and other resources.
              </p>
              <button>Read More</button>
            </div>
            <div className="content">
              <img src={AOFigma} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="text">
              <div>
                <h1 className="name">Cheffery</h1>
                <span className="position">UI/UX Designer</span>
              </div>
              <p>
                Cheffery is a growing platform designed to support aspiring
                chefs and build a vibrant culinary community. Currently under
                development, the website allows users to sign up as chefs or
                hire chefs for various events. As the brand continues to expand,
                Cheffery has already hosted numerous successful events,
                fostering connections and opportunities within the local food
                scene
              </p>
              <button>Read More</button>
            </div>
            <div className="content">
              <img src={ChefferyFigma} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="text">
              <div>
                <h1 className="name">CJS Performance</h1>
                <span className="position">Freelance UI/UX Designer</span>
              </div>
              <p>
                CJS is a website designed for a soccer coach looking to connect
                with players of all ages seeking professional training. The
                platform serves as a tool to attract and generate leads for new
                students, helping them improve their skills through tailored
                coaching sessions.
              </p>
              <button>Read More</button>
            </div>
            <div className="content">
              <img src={CJSFigma} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Element>
  );
}

export default Projects;
