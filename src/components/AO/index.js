import React, { useState, useEffect } from "react";
import "./styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

import AOFigma from "../../assets/AOFigma.png";

function AO() {
  const [expandedIndexes, setExpandedIndexes] = useState({});
  const [isVertical, setIsVertical] = useState(window.innerWidth > 800);

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth > 800);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleCard = (index) => {
    setExpandedIndexes((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="ao-page">
      <div className="ao-container">
        <div className="title">
          <p className="ao-header">Academic Oasis</p>
          <p>Chief Design and Marketing Officer</p>
          <p>March 2024 - January 2025</p>
        </div>
        <div className="swipper-container">
          <Swiper
            className="ao-swiper"
            grabCursor={true}
            direction={isVertical ? "vertical" : "horizontal"}
            effect="flip"
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[EffectFlip, Autoplay, Pagination]}
          >
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="ao-page-titles">Dashboard (Old) </h1>
                </div>
                <div className="text-scroll">
                  {expandedIndexes[0] ? (
                    <>
                      <span className="section-title">Impact:</span>
                      <p>
                        Designed a platform to serve as a one-stop shop for
                        university students, integrating course management,
                        calendars, and event information. The platform aims to
                        address low club engagement by fostering student
                        involvement through a centralized, user-friendly
                        interface. Once launched, it will transform how students
                        interact with campus resources and organizations.
                      </p>
                      <br />
                      <span className="section-title">The Journey:</span>
                      <p>
                        Joined the startup in March as a UI/UX designer for my
                        first official project. Faced early challenges due to
                        the CEO’s unclear vision, but once clarified, quickly
                        developed designs aligned with the startup’s goals. The
                        final design features a modern, glassy aesthetic,
                        delivering a sleek and tech-forward user experience that
                        resonates with its audience.
                      </p>
                    </>
                  ) : (
                    <p>
                      Academic Oasis is a startup in progress at Ontario Tech,
                      aiming to enhance the student experience through an
                      improved campus platform. It offers club and society
                      presidents tools to create events, boost student
                      engagement, and more. Students can easily browse all
                      campus events and join those that interest them. A
                      dedicated page will showcase clubs, events, jobs, and
                      workshops on campus, with input from club executives and
                      other resources.
                    </p>
                  )}
                </div>
                <div className="footer">
                  {/* <button onClick={() => toggleCard(0)}>
                    {expandedIndexes[0] ? "Back" : "Read More"}
                  </button> */}
                </div>
              </div>
              <div className="content">
                <img src={AOFigma} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="ao-page-titles">Dashboard (Old) </h1>
                </div>
                <div className="text-scroll">
                  {expandedIndexes[0] ? (
                    <>
                      <span className="section-title">Impact:</span>
                      <p>
                        Designed a platform to serve as a one-stop shop for
                        university students, integrating course management,
                        calendars, and event information. The platform aims to
                        address low club engagement by fostering student
                        involvement through a centralized, user-friendly
                        interface. Once launched, it will transform how students
                        interact with campus resources and organizations.
                      </p>
                      <br />
                      <span className="section-title">The Journey:</span>
                      <p>
                        Joined the startup in March as a UI/UX designer for my
                        first official project. Faced early challenges due to
                        the CEO’s unclear vision, but once clarified, quickly
                        developed designs aligned with the startup’s goals. The
                        final design features a modern, glassy aesthetic,
                        delivering a sleek and tech-forward user experience that
                        resonates with its audience.
                      </p>
                    </>
                  ) : (
                    <p>
                      Academic Oasis is a startup in progress at Ontario Tech,
                      aiming to enhance the student experience through an
                      improved campus platform. It offers club and society
                      presidents tools to create events, boost student
                      engagement, and more. Students can easily browse all
                      campus events and join those that interest them. A
                      dedicated page will showcase clubs, events, jobs, and
                      workshops on campus, with input from club executives and
                      other resources.
                    </p>
                  )}
                </div>
                <div className="footer">
                  {/* <button onClick={() => toggleCard(0)}>
                    {expandedIndexes[0] ? "Back" : "Read More"}
                  </button> */}
                </div>
              </div>
              <div className="content">
                <img src={AOFigma} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="ao-analysis">
          <div>
            <p className="analysis-header">Problem</p>
            <p className="analysis-text">
              Academic Oasis required an easy-to-use platform tailored for
              students, designed to showcase campus events and resources. The
              goal was to foster student engagement and enhance awareness of
              campus activities.
            </p>
            <p className="analysis-header">Goal & Objective</p>
            <p className="analysis-text">
              The goal was to create a fully functional application that would
              initially serve students at the university and later expand to
              other institutions. The design an all-in-one resource platform for
              students, integrating event listings, calendars, and useful
              resources.
            </p>
          </div>
          <img src={AOFigma} alt="" />
        </div>

        <div className="ao-analysis">
          <img src={AOFigma} alt="" />
          <div>
            <p className="analysis-header">Design Process</p>
            <p className="analysis-text">
              The design process started with clean, modern sketches featuring a
              “glassy” aesthetic for a tech-inspired feel. Using Figma,
              individual pages were crafted with clarity, incorporating widgets
              for key features like profiles and events.
            </p>
            <br />
            <p className="analysis-text">
              To reflect the Academic Oasis brand, slightly modified blue tones
              from the logo symbolized water. The layout emphasized important
              details like the user’s name at the top, with intuitive widgets
              for navigation. Later, the design shifted to meet club executives'
              needs, adjusting content accordingly.{" "}
            </p>
            <br />
            <p className="analysis-text">
              Team feedback introduced new features, seamlessly integrated while
              maintaining positive responses to the overall structure and user
              experience.
            </p>
          </div>
        </div>
        <div className="ao-analysis">
          <p className="analysis-header">Reflection</p>
          <p className="analysis-text">
            The design process presented several challenges, primarily due to
            multiple iterations caused by shifts in the company’s focus.
            Adapting to these changes while maintaining a cohesive vision was
            particularly demanding. Additionally, incorporating advanced Figma
            features such as constraints required a steep learning curve and
            adaptability.
          </p>
          <br />
          <p className="analysis-text">
            This project significantly enhanced my knowledge of Figma’s advanced
            functionalities, including connecting elements across frames and
            creating functional prototypes. These skills proved invaluable in
            refining the design and ensuring a seamless user experience. .
          </p>
          <br />
          <p className="analysis-text">
            Looking ahead, a key recommendation is to develop an admin panel for
            Academic Oasis members. This addition would enable them to
            effectively manage all platform elements, streamline operations, and
            further enhance the platform's usability.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AO;
