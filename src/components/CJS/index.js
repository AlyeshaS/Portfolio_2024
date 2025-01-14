import React, { useState, useEffect } from "react";
import "./styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

import CJSFigma from "../../assets/CJSFigma.png";

// Fix the mobile image and then also check the side align for the second image
function CJS() {
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
    <div className="CJS-page">
      <div className="CJS-container">
        <div className="title">
          <p className="CJS-header">CJS</p>
          <p>Freelance UI/UX Designer</p>
          <p>August 2024 - October 2024</p>
        </div>
        <div className="swipper-container">
          <Swiper
            className="CJS-swiper"
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
                  <h1 className="CJS-page-titles">Dashboard (Old) </h1>
                </div>
                <div className="text-scroll">
                  <p>
                    CJS is a website designed for a soccer coach looking to
                    connect with players of all ages seeking professional
                    training. The platform serves as a tool to attract and
                    generate leads for new students, helping them improve their
                    skills through tailored coaching sessions.
                  </p>
                </div>
              </div>
              <div className="content">
                <img src={CJSFigma} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="CJS-page-titles">Dashboard (Old) </h1>
                </div>
                <div className="text-scroll">
                  <p>
                    CJS is a website designed for a soccer coach looking to
                    connect with players of all ages seeking professional
                    training. The platform serves as a tool to attract and
                    generate leads for new students, helping them improve their
                    skills through tailored coaching sessions.
                  </p>
                </div>
              </div>
              <div className="CJS-image">
                <img src={CJSFigma} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="CJS-analysis">
          <div className="analysis-div">
            <p className="analysis-header">Problem & Analysis</p>
            <p className="analysis-text">
              CJS Performance faced challenges in building connections and
              attracting potential clients due to the lack of an online platform
              to showcase its skills and services. The absence of a website
              hindered client engagement and limited visibility for the
              company's offerings. However, this presented an opportunity to
              create a professional online presence, highlight the company’s
              expertise, and attract new clients through a dedicated platform.
            </p>
            <p className="analysis-header">Goal & Objective</p>
            <p className="analysis-text">
              The primary goal is to create a professional and visually
              appealing website that highlights the client’s expertise and
              services, establishing a strong online presence and fostering
              client engagement. To achieve this, the website will be
              thoughtfully designed with a clear structure and distinct sections
              that effectively organize information, ensuring it is both
              informative and aesthetically pleasing. The platform will
              prioritize user experience by incorporating intuitive navigation
              and a user-friendly layout, making it easy for prospective clients
              to explore the company’s offerings and connect with its services.
              This approach aims to not only enhance visibility but also build
              credibility and trust with potential clients.
            </p>
          </div>
          <div className="CJS-image">
            <img src={CJSFigma} alt="" />
          </div>
        </div>

        <div className="CJS-analysis">
          <img src={CJSFigma} alt="" />
          <div className="analysis-div">
            <p className="analysis-header">Design Process</p>
            <p className="analysis-text">
              The initial wireframes focused on organizing content into clear,
              distinct sections to ensure a logical flow of information.
              Inspiration was drawn from designs of sports-related websites,
              which provided a foundation for creating a layout that would
              resonate with the target audience. To align with the client’s
              brand, colors associated with health and fitness, particularly
              green, were incorporated to reflect the company’s values and
              industry.
            </p>
            <br />
            <p className="analysis-text">
              Interactive prototypes were developed using Figma, allowing for
              seamless collaboration with the web developer and streamlining the
              build process. This approach ensured that the design concepts were
              communicated effectively and the development process moved forward
              smoothly.
            </p>
            <br />
            <p className="analysis-text">
              The UI design incorporated the client’s logo and a green color
              palette, symbolizing health and energy. Black and white were used
              as secondary colors to maintain a clean and professional
              aesthetic. The layout was specifically crafted to highlight key
              information and services while ensuring the design was
              user-friendly, with intuitive navigation to enhance the overall
              user experience.
            </p>
            <br />
            <p className="analysis-text">
              The design evolved through multiple iterations, driven by client
              feedback. As new features were requested, they were incorporated
              into the design, enhancing its functionality. Once the design
              reached its final version, it was handed off to the web developer
              for implementation, ensuring that the vision was executed
              accurately.
            </p>
          </div>
        </div>
        <div className="CJS-analysis">
          <div className="analysis-div">
            <p className="analysis-header">Reflection</p>

            <p className="analysis-text">
              In conclusion, the CJS Performance website project successfully
              delivered a professional platform that highlights the client’s
              services and expertise. Through careful attention to design best
              practices, brand alignment, and clear communication with the web
              developer, the website provides a solid foundation for the
              client’s online presence. This project not only reinforced the
              importance of balancing client requests with design principles but
              also emphasized the value of understanding industry-specific
              needs. Moving forward, incorporating interactive elements and
              conducting user testing could further enhance the user experience
              and ensure continuous improvement.
            </p>
          </div>
          {/* Fix the size of the mobile version */}
          <div className="CJS-image">
            <img src={CJSFigma} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CJS;
