import React, { useState, useEffect } from "react";
import "./styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

import FitCheckFigma from "../../assets/FitCheckFigma.png";
import FitCheckAdd from "../../assets/FCAdd.png";
import FitCheckAdd2 from "../../assets/FCAdd2.png";
import FitCheckExplore from "../../assets/FCExplore.png";
import FitCheckSearch from "../../assets/FCSearch.png";
import FitCheckCategory from "../../assets/FCCategory.png";
import FitCheckCategory2 from "../../assets/FCCategory2.png";
import FitCheckTag from "../../assets/FCTag.png";
import FitCheckTag2 from "../../assets/FCTag2.png";
import FitCheckProfile from "../../assets/FCProfile.png";
import FitCheckEdit from "../../assets/FCProfileEdit.png";

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
          <a
            className="view-website-link"
            href="https://www.figma.com/proto/4gFR16TN2lUHlKE5omRg8g/FitCheck?node-id=180-873&t=dJanL4EfQMCZg5QC-8&scaling=scale-down&content-scaling=fixed&page-id=180%3A111&starting-point-node-id=180%3A462&show-proto-sidebar=1&hide-ui=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>View Figma Prototype</p>
          </a>
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
                    When users open the app, they are greeted with the home
                    page, where they can scroll through posts shared by their
                    friends. This page features a messaging system in the
                    top-right corner, a navbar at the bottom, and interactive
                    elements such as a star-based rating system, captions, and
                    like, comment, and share options. FitCheck is a social media
                    platform designed to showcase outfits and fashion
                    inspiration.
                  </p>
                </div>
              </div>
              <div className="FitCheck-image">
                <img src={FitCheckFigma} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="FitCheck-page-titles">Explore & Search</h1>
                </div>
                <div className="text-scroll">
                  {expandedIndexes[0] ? (
                    <>
                      Clicking the search bar transforms the UI. To keep the
                      design straightforward, users can type in a search query,
                      such as a username or category and a dropdown with
                      suggestions will appear. Users can either click a
                      suggested word or tap the search icon to proceed. To
                      return to the explore page, they simply click the back
                      arrow in the top-left corner.
                    </>
                  ) : (
                    <>
                      <p>
                        The explore page displays posts from any public account
                        sharing their outfits. Users can scroll through these
                        posts and use the search bar at the top to find friends
                        or specific accounts. The layout mirrors the home page
                        but includes the added functionality of a search
                        feature.
                      </p>
                    </>
                  )}
                </div>
                <div className="footer">
                  <button onClick={() => toggleCard(0)}>
                    {expandedIndexes[0] ? "Explore Page" : "Search Page"}
                  </button>
                </div>
              </div>
              <div className="FitCheck-image">
                <img
                  src={expandedIndexes[0] ? FitCheckSearch : FitCheckExplore}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="FitCheck-page-titles">Add (Post)</h1>
                </div>
                <div className="text-scroll">
                  {expandedIndexes[1] ? (
                    <>
                      <p>
                        Upon selecting an image, users are shown a preview at
                        the top of the screen. This preview ensures they can
                        check if any part of their image is cropped or
                        obstructed by stars, captions, or other UI elements.
                      </p>
                      <br />
                      <p>
                        Beneath the preview, users can add a caption with a
                        limit of 45 characters. This concise length ensures
                        captions fit neatly into a single line, maintaining
                        visual consistency across the UI.
                      </p>
                      <br />
                      <p>
                        Users can choose up to three categories to describe
                        their outfit. This feature makes it easier for others to
                        discover specific styles or themes while browsing.
                      </p>
                      <br />
                      <p>
                        If users know where they purchased their clothing, they
                        can tag the store. This feature helps others discover
                        and purchase the same items if they find them appealing.
                      </p>
                      <br />
                      <p>
                        Once satisfied with their post, users can finalize it by
                        clicking the upload button.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        To post an outfit, users tap the "Add" button in the
                        navbar, allowing them to select photos from their
                        gallery. The posting layout maintains a familiar design
                        inspired by other platforms to ensure ease of use. If
                        users decide not to post, they can navigate to another
                        tab using the navbar.
                      </p>
                    </>
                  )}
                </div>
                <div className="footer">
                  <button onClick={() => toggleCard(1)}>
                    {expandedIndexes[1] ? "Select Page" : "Post Page"}
                  </button>
                </div>
              </div>
              <div className="FitCheck-image">
                <img
                  src={expandedIndexes[1] ? FitCheckAdd2 : FitCheckAdd}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="FitCheck-page-titles">Add (Category)</h1>
                </div>
                <div className="text-scroll">
                  {expandedIndexes[2] ? (
                    <>
                      <p>
                        When a category is selected, the category turns into the
                        accent colour to make it known that is has been
                        selected. To deselect, simply click the button again.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Similar to the search menu, users can browse through a
                        variety of clothing categories. Upon opening the
                        category option, they are presented with a selection of
                        popular categories to spark inspiration for describing
                        their outfit. This helps users explore different options
                        more easily.
                      </p>
                      <br />
                      <p>
                        If a desired category is not listed, users can add a new
                        one by clicking the "Add" button located at the
                        top-right corner of the screen near the search bar.
                      </p>
                    </>
                  )}
                </div>
                <div className="footer">
                  <button onClick={() => toggleCard(2)}>
                    {expandedIndexes[2]
                      ? "Search Category"
                      : "Selected Category"}
                  </button>
                </div>
              </div>
              <div className="FitCheck-image">
                <img
                  src={
                    expandedIndexes[2] ? FitCheckCategory2 : FitCheckCategory
                  }
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="FitCheck-page-titles">Add (Tag Product)</h1>
                </div>
                <div className="text-scroll">
                  {expandedIndexes[3] ? (
                    <>
                      <p>
                        When a category is selected, the category turns into the
                        accent colour to make it known that is has been
                        selected. To deselect, simply click the button again.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Similar to the search menu, users can browse through a
                        variety of clothing categories. Upon opening the
                        category option, they are presented with a selection of
                        popular categories to spark inspiration for describing
                        their outfit. This helps users explore different options
                        more easily.
                      </p>
                    </>
                  )}
                </div>
                <div className="footer">
                  <button onClick={() => toggleCard(3)}>
                    {expandedIndexes[3] ? "Select Product" : "Tagging Image"}
                  </button>
                </div>
              </div>
              <div className="FitCheck-image">
                <img
                  src={expandedIndexes[3] ? FitCheckTag2 : FitCheckTag}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="FitCheck-page-titles">Profile</h1>
                </div>
                <div className="text-scroll">
                  {expandedIndexes[4] ? (
                    <>
                      <p>
                        The only editable section for the user is their bio. A
                        character count is in place to ensure the bio remains a
                        single line, maintaining consistency with the layout.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        The user's profile includes their name, handle, bio,
                        posts, followers, and following. They can also access
                        outfits they've posted, saved, or drafted by toggling
                        between icons located beneath the "Edit Profile"
                        section.
                      </p>
                      <br />
                      <p>
                        To share their profile easily, a shareable link is
                        available next to their handle, which can be copied and
                        shared with friends.
                      </p>
                    </>
                  )}
                </div>
                <div className="footer">
                  <button onClick={() => toggleCard(4)}>
                    {expandedIndexes[4] ? "Profile" : "Edit Profile"}
                  </button>
                </div>
              </div>
              <div className="FitCheck-image">
                <img
                  src={expandedIndexes[4] ? FitCheckEdit : FitCheckProfile}
                  alt=""
                />
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
            <img src={FitCheckAdd2} alt="" />
          </div>
        </div>

        <div className="FitCheck-analysis-middle">
          <div className="FitCheck-image">
            <img src={FitCheckEdit} alt="" />
          </div>
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
            <img src={FitCheckTag} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FitCheck;
