import React from "react";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";

import AOFigma from "../../assets/AOFigma.png";
import CJSFigma from "../../assets/CJSFigma.png";
import ChefferyFigma from "../../assets/ChefferyFigma_1.png";
import FitCheckFigma from "../../assets/FitCheckFigma.png";
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
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[EffectFlip, Autoplay, Pagination]}
        >
          {/* Academic Oasis */}
          <SwiperSlide className="slide">
            <div className="text">
              <div>
                <h1 className="name">Academic Oasis</h1>
                <span className="position">
                  Chief Marketing & Design Officer
                </span>
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
                      first official project. Faced early challenges due to the
                      CEO’s unclear vision, but once clarified, quickly
                      developed designs aligned with the startup’s goals. The
                      final design features a modern, glassy aesthetic,
                      delivering a sleek and tech-forward user experience that
                      resonates with its audience.
                    </p>
                  </>
                ) : (
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
                )}
              </div>
              <div className="footer">
                <button onClick={() => toggleCard(0)}>
                  {expandedIndexes[0] ? "Back" : "Read More"}
                </button>
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
                {expandedIndexes[1] ? (
                  <>
                    <span className="section-title">Impact:</span>
                    <p>
                      Redesigned the website to attract new clients and
                      potential employees for Cheffery. The goal was to achieve
                      a professional yet playful aesthetic, addressing concerns
                      about the original website’s oversized elements and lack
                      of professionalism. This redesign aims to enhance
                      Cheffery’s online presence and better reflect its brand
                    </p>
                    <br />
                    <span className="section-title">The Journey:</span>
                    <p>
                      Reworked the website to better appeal to clients,
                      addressing shortcomings in the original design. The
                      process involved multiple iterations as the team clarified
                      their vision. Researched and incorporated a professional
                      yet playful style, using orange as the primary color, a
                      challenging but successful choice. The final design
                      balances professionalism and approachability, aligning
                      with Cheffery’s goals.
                    </p>
                  </>
                ) : (
                  <p>
                    Cheffery is a growing platform designed to support aspiring
                    chefs and build a vibrant culinary community. Currently
                    under development, the website allows users to sign up as
                    chefs or hire chefs for various events. As the brand
                    continues to expand, Cheffery has already hosted numerous
                    successful events, fostering connections and opportunities
                    within the local food scene.
                  </p>
                )}
              </div>
              <div className="footer">
                <button onClick={() => toggleCard(1)}>
                  {expandedIndexes[1] ? "Back" : "Read More"}
                </button>
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
                {expandedIndexes[2] ? (
                  <>
                    <span className="section-title">Impact:</span>
                    <p>
                      This website was designed to help my client attract new
                      customers by showcasing his services and professional
                      experience. With a clean, modern, and user-friendly
                      design, it ensures an intuitive browsing experience. The
                      fully responsive layout allows customers to access the
                      site seamlessly on any device, from desktops to
                      smartphones.
                    </p>
                    <br />
                    <span className="section-title">The Journey:</span>
                    <p>
                      During this process, I had the creative freedom to design
                      a solution that best suited their purpose. While they
                      provided initial inspiration, I conducted research on
                      color psychology related to sports and explored elements
                      from other websites that resonated with me. The result is
                      a clean, visually appealing design that effectively
                      highlights his skills and services.
                    </p>
                  </>
                ) : (
                  <p>
                    CJS is a website designed for a soccer coach looking to
                    connect with players of all ages seeking professional
                    training. The platform serves as a tool to attract and
                    generate leads for new students, helping them improve their
                    skills through tailored coaching sessions.
                  </p>
                )}
              </div>
              <div className="footer">
                <button onClick={() => toggleCard(2)}>
                  {expandedIndexes[2] ? "Back" : "Read More"}
                </button>
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
                {expandedIndexes[3] ? (
                  <>
                    <span className="section-title">Impact:</span>
                    <p>
                      Created a design that provides a user-friendly and social
                      media-inspired experience. The app allows users to post
                      outfits, receive ratings, and discover where specific
                      clothing items were purchased. The intuitive interface
                      ensures users can easily navigate the app while
                      maintaining a visually appealing design. The mobile app is
                      currently under development.
                    </p>
                    <br />
                    <span className="section-title">The Journey:</span>
                    <p>
                      Collaborated with a friend who needed assistance designing
                      their mobile app, including the logo. Gained a deep
                      understanding of the app’s purpose and researched existing
                      social media platforms to analyze how they display
                      information. Elements such as profiles, feeds, tags, and
                      followers informed my design approach, ensuring the app’s
                      layout is engaging and easy to use.
                    </p>
                  </>
                ) : (
                  <p>
                    FitCheck is a fashion app that allows users to showcase
                    their outfits, receive ratings, and engage with the
                    community by liking and sharing looks. It offers a dynamic
                    platform to display personal style, discover new trends, and
                    explore the origins of others' outfits for added
                    inspiration.
                  </p>
                )}
              </div>
              <div className="footer">
                <button onClick={() => toggleCard(3)}>
                  {expandedIndexes[3] ? "Back" : "Read More"}
                </button>
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
        </Swiper>
      </div>
    </Element>
  );
}

export default Projects;
