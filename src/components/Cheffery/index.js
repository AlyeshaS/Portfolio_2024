import React, { useState, useEffect } from "react";
import "./styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

import ChefferyFigma from "../../assets/ChefferyFigma_1.png";
import ChefferyContact from "../../assets/ChefferyContact.png";
import ChefferyContact_1 from "../../assets/ChefferyContact_1.png";
import ChefferyFooter from "../../assets/ChefferyFooter.png";

// Fix the mobile image and then also check the side align for the second image
function Cheffery() {
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
    <div className="Cheffery-page">
      <div className="Cheffery-container">
        <div className="title">
          <p className="Cheffery-header">Cheffery</p>
          <p>UI/UX Designer</p>
          <p>June 2024 - Present</p>
          <a
            href="https://www.figma.com/proto/2dbZHtyAm4RFi9gaTjsZ3O/Cheffery?node-id=1018-2548&t=ukvQ7DLPsS8R52Dg-8&scaling=scale-down&content-scaling=fixed&page-id=1018%3A2419&hide-ui=1"
            target="_blank"
            rel="noopener noreferrer"
            className="view-website-link"
          >
            <p className="cheffery-link">View Figma Prototype</p>
          </a>
        </div>
        <div className="swipper-container">
          <Swiper
            className="Cheffery-swiper"
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
                  <h1 className="Cheffery-page-titles">Landing</h1>
                </div>
                <div className="text-scroll">
                  <p>
                    Cheffery is a growing platform designed to support aspiring
                    chefs and build a vibrant culinary community. Currently
                    under development, the website allows users to sign up as
                    chefs or hire chefs for various events. As the brand
                    continues to expand, Cheffery has already hosted numerous
                    successful events, fostering connections and opportunities
                    within the local food scene.
                  </p>
                </div>
              </div>
              <div className="content">
                <img src={ChefferyFigma} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="Cheffery-page-titles">Contact (Reserve)</h1>
                </div>
                <div className="text-scroll">
                  <p>
                    To help us connect with potential clientele, we offer
                    multiple ways for clients to reach out based on their
                    preference. They can send us an email with their inquiry,
                    call the designated cell number for direct communication, or
                    simply fill out the contact form available on our page. Once
                    we receive their message, a member of our team will follow
                    up as soon as possible to discuss their needs, answer any
                    questions, and begin the onboarding process. We aim to make
                    this first step easy and accessible, ensuring every
                    potential client feels welcomed and supported right from the
                    start.
                  </p>
                </div>
              </div>
              <div className="Cheffery-image">
                <img src={ChefferyContact} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="Cheffery-page-titles">Contact (Community)</h1>
                </div>
                <div className="text-scroll">
                  <p>
                    To help us connect with potential clientele, we offer
                    multiple ways for clients to reach out based on their
                    preference. They can send us an email with their inquiry,
                    call the designated cell number for direct communication, or
                    simply fill out the contact form available on our page. Once
                    we receive their message, a member of our team will follow
                    up as soon as possible to discuss their needs, answer any
                    questions, and begin the onboarding process. We aim to make
                    this first step easy and accessible, ensuring every
                    potential client feels welcomed and supported right from the
                    start.
                  </p>
                </div>
              </div>
              <div className="Cheffery-image">
                <img src={ChefferyContact_1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="Cheffery-page-titles">Footer</h1>
                </div>
                <div className="text-scroll">
                  <p>
                    The footer of the Cheffery website serves as a convenient
                    navigation hub, providing quick access to all the key pages
                    we offer—such as our services, community initiatives,
                    contact page, and more. It also features direct links to our
                    social media platforms, making it easy for visitors to stay
                    connected, follow our latest updates, and engage with our
                    growing community across multiple channels. Designed with
                    accessibility and user experience in mind, the footer
                    ensures that no matter where users are on the site, they can
                    effortlessly find the information or connections they’re
                    looking for.
                  </p>
                </div>
              </div>
              <div className="Cheffery-image">
                <img src={ChefferyFooter} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="Cheffery-analysis">
          <div className="analysis-div">
            <p className="analysis-header">Problem & Analysis</p>
            <p className="analysis-text">
              Cheffery's existing website lacked professionalism and failed to
              attract clients, leading to lost opportunities and diminished
              credibility. The website’s uninviting design caused low client
              engagement, highlighting the need for a redesign to reestablish
              trust, improve client retention, and enhance brand credibility. A
              more thoughtful design could also provide a visually appealing
              platform to promote events effectively. However, the
              implementation of the new design is currently on hold, and the
              company continues to use their outdated website.
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
          <div className="Cheffery-image">
            <img src={ChefferyFigma} alt="" />
          </div>
        </div>

        <div className="Cheffery-analysis">
          <img src={ChefferyFigma} alt="" />
          <div className="analysis-div">
            <p className="analysis-header">Design Process</p>
            <p className="analysis-text">
              The design process began with creating early sketches and clean,
              professional layouts, incorporating playful typography and visuals
              to align with the brand’s tone. These initial wireframes
              established the foundation for an engaging and functional
              interface.
            </p>
            <br />
            <p className="analysis-text">
              Interactive prototypes were developed using Figma, showcasing
              distinct pages for key sections such as the Home and Menu pages.
              The homepage was designed to immediately engage visitors by
              highlighting essential content, while scrolling was intentionally
              limited to three screens to ensure user focus and retention.
            </p>
            <br />
            <p className="analysis-text">
              The visual design struck a balance between playfulness and
              professionalism, with carefully chosen color schemes, typography,
              and layouts. Outline-style imagery added a creative touch while
              maintaining a polished and professional appearance, enhancing the
              user experience without overwhelming it.
            </p>
            <br />
            <p className="analysis-text">
              The design underwent multiple rounds of feedback and refinement.
              Suggestions from team members informed improvements, resulting in
              a polished final product that seamlessly combined playful elements
              with clean, professional aesthetics to meet user needs and
              business goals.
            </p>
          </div>
        </div>
        <div className="Cheffery-analysis">
          <div className="analysis-div">
            <p className="analysis-header">Reflection</p>

            <p className="analysis-text">
              Early in the project, clarifying client requirements proved
              challenging, and incorporating bright orange into a professional
              design required careful balancing with calmer complementary
              colors. This experience enhanced my skills in structuring web
              pages for better content display and taught me how to effectively
              merge playful and professional design elements. For future
              improvements, I recommend conducting user testing to validate the
              design’s effectiveness and exploring opportunities to enhance
              branding through interactive elements.
            </p>
          </div>
          {/* Fix the size of the mobile version */}
          <div className="Cheffery-image">
            <img src={ChefferyFigma} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cheffery;
