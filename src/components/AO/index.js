import React, { useState, useEffect } from "react";
import "./styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

import AOFigma from "../../assets/AOFigma.png";
import Dashboard_Stats from "../../assets/DashboardStats.png";
import Mobile_Events from "../../assets/MobileEvents.png";

// Fix the mobile image and then also check the side align for the second image
function AO() {
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
                  <p>
                    Academic Oasis is a startup in progress at Ontario Tech,
                    aiming to enhance the student experience through an improved
                    campus platform. It offers club and society presidents tools
                    to create events, boost student engagement, and more.
                    Students can easily browse all campus events and join those
                    that interest them. A dedicated page will showcase clubs,
                    events, jobs, and workshops on campus, with input from club
                    executives and other resources.
                  </p>
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
                  <p>
                    Academic Oasis is a startup in progress at Ontario Tech,
                    aiming to enhance the student experience through an improved
                    campus platform. It offers club and society presidents tools
                    to create events, boost student engagement, and more.
                    Students can easily browse all campus events and join those
                    that interest them. A dedicated page will showcase clubs,
                    events, jobs, and workshops on campus, with input from club
                    executives and other resources.
                  </p>
                </div>
              </div>
              <div className="ao-image">
                <img src={AOFigma} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="ao-analysis">
          <div className="analysis-div">
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
          <div className="ao-image">
            <img src={AOFigma} alt="" />
          </div>
        </div>

        <div className="ao-analysis">
          <img src={Dashboard_Stats} alt="" />
          <div className="analysis-div">
            <p className="analysis-header">Design Process</p>
            <p className="analysis-text">
              The design process began with initial sketches inspired by clean
              and modern aesthetics, incorporating a “glassy” design to convey a
              technological feel. Each page was carefully designed individually
              to ensure clarity and purpose. The application design was brought
              to life using Figma, where separate sections were developed for
              widgets representing key features, such as the user’s profile and
              events.
            </p>
            <br />
            <p className="analysis-text">
              To align with the Academic Oasis brand, the visual design employed
              slightly altered shades of blue from the company’s logo to
              symbolize water. The layout prioritized displaying important
              information at the top, such as the user’s name, while utilizing
              widgets for intuitive navigation. Over time, the design’s focus
              shifted to prioritize the needs of club executives rather than
              general students, resulting in adjustments to the content.
            </p>
            <br />
            <p className="analysis-text">
              Throughout the process, team feedback highlighted additional
              features to incorporate, which were seamlessly integrated into the
              design. Despite these changes, the overall content placement and
              structure received positive responses, ensuring a cohesive and
              effective user experience.
            </p>
          </div>
        </div>
        <div className="ao-analysis">
          <div className="analysis-div">
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
              This project significantly enhanced my knowledge of Figma’s
              advanced functionalities, including connecting elements across
              frames and creating functional prototypes. These skills proved
              invaluable in refining the design and ensuring a seamless user
              experience.
            </p>
            <br />
            <p className="analysis-text">
              Looking ahead, a key recommendation is to develop an admin panel
              for Academic Oasis members. This addition would enable them to
              effectively manage all platform elements, streamline operations,
              and further enhance the platform's usability.
            </p>
          </div>
          {/* Fix the size of the mobile version */}
          <div className="ao-image">
            <img src={Mobile_Events} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AO;
