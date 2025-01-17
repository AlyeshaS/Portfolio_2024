import React, { useState, useEffect } from "react";
import "./styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

import CJSFigma from "../../assets/CJSFigma.png";
import CJSAbout from "../../assets/CJSAbout.png";
import CJSAbout2 from "../../assets/CJSAbout2.png";
import CJSAchievements from "../../assets/CJSAchievements.png";
import CJSAchievements2 from "../../assets/CJSAchievements2.png";
import CJSContact from "../../assets/CJSContact.png";
import CJSTestimonials from "../../assets/CJSTestimonials.png";
import CJSServices from "../../assets/CJSServices.png";

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
          <a
            href="https://cjsperformance.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="view-website-link"
          >
            <p>View Official Website</p>
          </a>
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
                  <h1 className="CJS-page-titles">Home</h1>
                </div>
                <div className="text-scroll">
                  <p>
                    Since the purpose of the website was to gain clients, I
                    choose to have it be a the coach and his students with a
                    train now button. The image and the bold button gives
                    professionalism of coaching and entises them to see what
                    this coach has to offer.
                  </p>
                  <br />
                  <p>
                    I choose to have green as the accent colour as it signified
                    health, which was discovered upon some research. It also
                    allows us to highlight important information/buttons where
                    needed. The contact us button at the top right of the screen
                    turn green upon hover, which is a nice touch as well.
                  </p>
                  <br />
                  <p>The about me page has a similar layout.</p>
                </div>
              </div>
              <div className="content">
                <img src={CJSFigma} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="CJS-page-titles">About </h1>
                </div>
                <div className="text-scroll">
                  <p>
                    There were two parts talking about the coach. It was
                    important to have a brief description of the coach on the
                    main page, for those who just want to get an understanding.
                    They have the ability to watch a video (provided by my
                    client) and/or click the read more button for more.
                  </p>
                </div>
              </div>
              <div className="CJS-image">
                <img src={CJSAbout} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="CJS-page-titles">Achievements </h1>
                </div>
                <div className="text-scroll">
                  <p>
                    Another important aspect when dealing with a website to gain
                    clients, is to talk about why them. This section highlights
                    3 key aspects that they can provide if you choose them.
                    Since he is a soccer coach, I looked for background images
                    relating to the sport. Once again, the green is used again
                    to highlight the title and having a simple icon to represent
                    the information on that card.
                  </p>
                </div>
              </div>
              <div className="CJS-image">
                <img src={CJSAchievements} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="CJS-page-titles">Testimonials</h1>
                </div>
                <div className="text-scroll">
                  <p>
                    My client wanted to have a testimonial section highlighting
                    words from his past students. This section I decided to have
                    a horizontal slider which allowed the easy display of the
                    kind words from these individuals. Additionally, if the
                    testimonals were lengthy, the content would be scrollable
                    vertically. This allows consistency of the card dimensions
                    while showcases whatever is needed.
                  </p>
                </div>
              </div>
              <div className="CJS-image">
                <img src={CJSTestimonials} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="CJS-page-titles">Contact Us</h1>
                </div>
                <div className="text-scroll">
                  <p>
                    As this website is to gain clients, another aspect that is
                    good to have, is a contact us section. I choose the
                    background image to be him as this website is to choose him
                    as your training coach. In this section, the addition of
                    location, phone number and email are easily accessible. The
                    green is used to seperate the two parts in this card as well
                    as highlight the submit button. This section is added to
                    every page.
                  </p>
                </div>
              </div>
              <div className="CJS-image">
                <img src={CJSContact} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="CJS-page-titles">Services</h1>
                </div>
                <div className="text-scroll">
                  <p>
                    The coach has different training options. The best way I
                    thought of to display this information is to have dropdowns
                    with an image for the headers. These images are related to
                    soccer as he is a soccer coach. The dropdowns include the
                    information provided. Since contacting him is an important
                    aspect, the contact us section is added to every page.
                  </p>
                </div>
              </div>
              <div className="CJS-image">
                <img src={CJSServices} alt="" />
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
          {/* <div className="CJS-image">
            <img src={CJSFigma} alt="" />
          </div> */}
          <img src={CJSFigma} alt="" />
        </div>

        <div className="CJS-analysis">
          <img src={CJSAbout2} alt="" />
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
          {/* <div className="CJS-image">
            <img src={CJSAchievements2} alt="" />
          </div> */}
          <img src={CJSAchievements2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CJS;
