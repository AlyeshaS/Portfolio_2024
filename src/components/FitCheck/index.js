import React, { useState, useEffect } from "react";
import "./styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

import FitCheckFigma from "../../assets/FitCheckFigma.png";

// Fix the mobile image and then also check the side align for the second image
function FitCheck() {
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

  const [expandedIndexes, setExpandedIndexes] = useState({});

  const toggleCard = (index) => {
    setExpandedIndexes((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="FitCheck-page">
      <div className="FitCheck-container">
        <div className="title">
          <p className="FitCheck-header">FitCheck</p>
          <p>UI/UX Designer</p>
          <p>December 2024 - Present</p>
        </div>
        <div className="swipper-container">
          <Swiper
            className="FitCheck-swiper"
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
                  <h1 className="FitCheck-page-titles">Home </h1>
                </div>
                <div className="text-scroll">
                  <p>
                    When users open up the app, they are presented with the home
                    page where they can scroll and see what their friends have
                    posted. This page includes a messaging system at the top
                    right, a navbar at the bottom, a rating system via stars and
                    a caption, as well as a like, comment and share section.
                    FitCheck is a social media platform to show off your
                    outfits.
                  </p>
                </div>
              </div>
              <div className="content">
                <img src={FitCheckFigma} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="FitCheck-page-titles">FYP & Search</h1>
                </div>
                <div className="text-scroll">
                  {expandedIndexes[0] ? (
                    <>
                      When the user clicks the search bar, the UI changes to
                      this. To keep it simple, the user can type what they are
                      looking for, whether that be a user, category, etc, and a
                      simple dropdown will appear. The user can either click the
                      word or search icon. To return back to the FYP, they will
                      click the back arrow at the top left.
                    </>
                  ) : (
                    <>
                      <p>
                        This page will have any public account who posts their
                        outfits. The user can scroll here and can search via the
                        search bar at the top for their friends. The layout is
                        similar to the home page, the difference being able to
                        search.
                      </p>
                    </>
                  )}
                </div>
                <div className="footer">
                  <button onClick={() => toggleCard(0)}>
                    {expandedIndexes[0] ? "Search Page" : "FYP Page"}
                  </button>
                </div>
              </div>
              <div className="FitCheck-image">
                <img src={FitCheckFigma} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="FitCheck-analysis">
          <div className="analysis-div">
            <p className="analysis-header">Problem & Analysis</p>
            <p className="analysis-text">
              FitCheck needed an intriguing and visually appealing design for
              their innovative fashion app. The challenge was to draw
              inspiration from popular social media platforms like Instagram,
              TikTok, and YouTube while maintaining a balance between
              familiarity and uniqueness. Users’ specific pain points are
              currently under research, but there is a clear opportunity to
              combine social interaction with fashion discovery, creating a
              distinctive and engaging user experience.
            </p>
            <p className="analysis-header">Goal & Objective</p>
            <p className="analysis-text">
              The goal is to design an innovative fashion app that provides
              users with the ability to post their outfits, receive ratings, and
              draw style inspiration from others. In addition to these features,
              the app will enable users to tag the sources of their clothing,
              making it easier for others to find and purchase items they like.
              This functionality will create a more connected and interactive
              fashion community. To bring this vision to life, the objective is
              to design a user-friendly interface that mimics popular social
              media platforms, incorporating features such as a dynamic home
              feed, customizable profile pages, seamless posting functionality,
              and the ability to interact with followers. This will ensure the
              app is not only engaging but also provides a streamlined and
              enjoyable experience for users, encouraging frequent interaction
              and content sharing.
            </p>
          </div>
          <div className="FitCheck-image">
            <img src={FitCheckFigma} alt="" />
          </div>
        </div>

        <div className="FitCheck-analysis">
          <img src={FitCheckFigma} alt="" />
          <div className="analysis-div">
            <p className="analysis-header">Design Process</p>
            <p className="analysis-text">
              The design process began with exploring logo concepts and color
              schemes that aligned with the app’s core purpose of providing
              fashion inspiration. Early designs were focused on creating a
              visual identity that resonated with the target audience, with
              several iterations made to refine the overall look and feel of the
              app.
            </p>
            <br />
            <p className="analysis-text">
              An interactive prototype was developed using Figma to facilitate a
              smooth handoff and ensure the app’s usability. This allowed for
              testing user interactions and design functionality, making it
              easier to visualize the app's user experience before the
              development phase.
            </p>
            <br />
            <p className="analysis-text">
              The UI design incorporated a color palette featuring light pink
              accents, complemented by black and white to maintain a clean,
              modern aesthetic. A star rating system was used to highlight the
              app's primary feature, allowing users to rate outfits. Typography
              and layouts were carefully chosen to emphasize clarity and user
              engagement, ensuring the app was both visually appealing and easy
              to navigate.
            </p>
            <br />
            <p className="analysis-text">
              Throughout the design process, feedback played a crucial role in
              refining the app’s layout and feature placement. Adjustments were
              made to enhance the intuitive flow of the user experience,
              ensuring that interactions were seamless and the app met the needs
              of its users.
            </p>
          </div>
        </div>
        <div className="FitCheck-analysis">
          <div className="analysis-div">
            <p className="analysis-header">Reflection</p>
            <p className="analysis-text">
              Reflecting on the design process, a key challenge was ensuring the
              app’s design stood out while still incorporating familiar social
              media patterns to meet user expectations. This experience enhanced
              my understanding of how to create clean, functional designs that
              balance innovation with user familiarity. Moving forward, I
              recommend incorporating advanced features, such as analytics for
              user engagement and outfit trends, to further elevate the app’s
              functionality. In conclusion, FitCheck successfully bridges
              fashion inspiration with social interaction, offering a seamless
              and engaging platform for users to share, discover, and connect
              through style. The project’s evolving design positions it as a
              standout application in the fashion space with great potential for
              growth.
            </p>
          </div>
          {/* Fix the size of the mobile version */}
          <div className="FitCheck-image">
            <img src={FitCheckFigma} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FitCheck;
