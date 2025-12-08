import React from "react";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination } from "swiper/modules";
import { useState } from "react";

import AOFigma from "../../assets/AOFigma.png";
import CJSFigma from "../../assets/CJSFigma.png";
import ChefferyFigma from "../../assets/ChefferyFigma_1.png";
import FitCheckFigma from "../../assets/FitCheckFigma.png";
import AIStudyHubFigma from "../../assets/AIStudyHubFigma.png";

import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "./styles.css";

function Projects() {
  const [expandedIndexes, setExpandedIndexes] = useState({});

  const toggleCard = (index) => {
    setExpandedIndexes((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

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
          modules={[EffectFlip, Pagination]}
        >
          {/* Academic Oasis */}
          <SwiperSlide className="slide">
            <div className="text">
              <div className="header">
                <h1 className="name">Academic Oasis</h1>
                <span className="position">
                  Chief Marketing & Design Officer
                </span>
              </div>
              <div className="text-scroll">
                <p>
                  Academic Oasis was a startup in progress at Ontario Tech,
                  aiming to enhance the student experience through an improved
                  campus platform. It offers club and society presidents tools
                  to create events, boost student engagement, and more. Students
                  can easily browse all campus events and join those that
                  interest them. A dedicated page will showcase clubs, events,
                  jobs, and workshops on campus, with input from club executives
                  and other resources.
                </p>
              </div>
            </div>
            <div className="content">
              <img src={AOFigma} alt="" />
              <div className="links">
                <a
                  className="view-website-link"
                  href="https://www.figma.com/proto/NDmHmuDdKUn9NNedGhpV3u/AO-Figma---USE?node-id=3590-278&t=X0wTSK2eQk3scLSo-8&scaling=scale-down&content-scaling=fixed&page-id=3590%3A25&starting-point-node-id=3590%3A1160&hide-ui=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Laptop Figma Prototype</p>
                </a>
                <span className="middle-dot">·</span>
                <a
                  className="view-website-link"
                  href="https://www.figma.com/proto/NDmHmuDdKUn9NNedGhpV3u/AO-Figma---USE?node-id=3619-237&p=f&t=QKuTx3YMLRMxoa7n-8&scaling=scale-down&content-scaling=fixed&page-id=3619%3A13&starting-point-node-id=3619%3A237&hide-ui=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Mobile Figma Prototype</p>
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Cheffery */}
          <SwiperSlide className="slide">
            <div className="text">
              <div className="header">
                <h1 className="name">Cheffery</h1>
                <span className="position">UI/UX Designer</span>
              </div>
              <div className="text-scroll">
                <p>
                  Cheffery is a growing platform designed to support aspiring
                  chefs and build a vibrant culinary community. Currently under
                  development, the website allows users to sign up as chefs or
                  hire chefs for various events. As the brand continues to
                  expand, Cheffery has already hosted numerous successful
                  events, fostering connections and opportunities within the
                  local food scene.
                </p>
              </div>
            </div>
            <div className="content">
              <img src={ChefferyFigma} alt="Cheffery Design" />
              <a
                href="https://www.figma.com/proto/2dbZHtyAm4RFi9gaTjsZ3O/Cheffery?node-id=1188-684&t=Ec0Wnzffpp4zppkY-0&scaling=scale-down&content-scaling=fixed&page-id=1188%3A555&hide-ui=1"
                target="_blank"
                rel="noopener noreferrer"
                className="view-website-link"
              >
                <p className="cheffery-link">View Figma Prototype</p>
              </a>
            </div>
          </SwiperSlide>

          {/* CJS Performance */}
          <SwiperSlide className="slide">
            <div className="text">
              <div className="header">
                <h1 className="name">CJS Performance</h1>
                <span className="position">Freelance UI/UX Designer</span>
              </div>
              <div className="text-scroll">
                <p>
                  CJS is a professional website created for a soccer coach
                  aiming to connect with players of all ages who are eager to
                  elevate their game. The platform not only highlights
                  personalized training programs but also serves as a
                  lead-generation tool, helping attract new students and guide
                  them toward skill development through tailored coaching
                  sessions.
                </p>
              </div>
            </div>
            <div className="content">
              <a
                href="https://cjsperformance.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="view-website-link"
              >
                <img src={CJSFigma} alt="CJS Performance Design" />
                <p>View Official Website</p>
              </a>
            </div>
          </SwiperSlide>

          {/* FitCheck */}
          <SwiperSlide className="slide">
            <div className="text">
              <div className="header">
                <h1 className="name">FitCheck</h1>
                <span className="position">UI/UX Designer</span>
              </div>
              <div className="text-scroll">
                <p>
                  FitCheck is a fashion app designed for style enthusiasts to
                  showcase their outfits, gain feedback through ratings, and
                  engage with a vibrant community by liking and sharing looks.
                  The platform creates an interactive space to express personal
                  style, discover emerging trends, and draw inspiration by
                  exploring the stories and origins behind others’ outfits.
                </p>
              </div>
            </div>
            <div className="content">
              <img src={FitCheckFigma} alt="FitCheck Design" />
              <a
                href="https://www.figma.com/proto/4gFR16TN2lUHlKE5omRg8g/FitCheck?node-id=180-259&t=2FjAgn6vmO9HdBKh-8&scaling=scale-down&content-scaling=fixed&page-id=180%3A111&starting-point-node-id=180%3A462&show-proto-sidebar=1&hide-ui=1"
                target="_blank"
                rel="noopener noreferrer"
                className="view-website-link"
              >
                <p>View Figma Prototype</p>
              </a>
            </div>
          </SwiperSlide>
          {/* AI StudyHub */}
          <SwiperSlide className="slide">
            <div className="text">
              <div className="header">
                <h1 className="name">AI StudyHub</h1>
                <span className="position">Academic Project</span>
              </div>
              <div className="text-scroll">
                <p>
                  AI StudyHub is a learning tool that turns course materials
                  (PDFs, slides, URLs) into personalized quizzes, flashcards,
                  and summaries. It uses AI to adapt difficulty, support recall,
                  and simplify studying. Designed with a clean, student-friendly
                  interface and rooted in HCI research, the platform helps
                  students stay organized, learn efficiently, and feel more
                  confident while studying.
                </p>
              </div>
            </div>
            <div className="content">
              <img src={AIStudyHubFigma} alt="AI StudyHub Design" />
              <a
                href="https://www.figma.com/proto/CYpxLBRvl8gP67t3Sbhz1S/AI-StudyHub---Portfolio?node-id=100-785&t=NZVp1yILdv6beRjY-8&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A3&hide-ui=1"
                target="_blank"
                rel="noopener noreferrer"
                className="view-website-link"
              >
                <p>View Figma Prototype</p>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Element>
  );
}

export default Projects;
