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
        <div className="title" style={{ marginBottom: "15dvh" }}>
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
        {/* <div className="swipper-container">
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
        </div> */}

        <div className="Cheffery-analysis">
          <div className="analysis-div">
            <p className="analysis-header">Project Overview</p>
            <p style={{ paddingBottom: "15px" }}>
              <span className="analysis-text-header">Project Name: </span>
              <span className="analysis-text">Cheffery</span>
            </p>
            <p style={{ paddingBottom: "15px" }}>
              <span className="analysis-text-header">Role: </span>
              <span className="analysis-text">UI/UX Designer</span>
            </p>
            <p style={{ paddingBottom: "15px" }}>
              <span className="analysis-text-header">Tools Used: </span>
              <span className="analysis-text">Figma</span>
            </p>
            <p>
              <span className="analysis-text" style={{ fontStyle: "italic" }}>
                Cheffery is a modern culinary platform designed to connect
                talented chefs with clients seeking high-quality, personalized
                dining experiences. The project serves as both a portfolio
                showcase and a service portal, enabling chefs to highlight their
                culinary skills, achievements, and specialties while making it
                easy for clients to discover, connect, and book their services.
              </span>
            </p>
          </div>
          <div className="Cheffery-image">
            <img src={ChefferyFigma} alt="" />
          </div>
        </div>

        <div className="Cheffery-analysis">
          <div className="analysis-div">
            <p className="analysis-header">Problem Statement</p>
            <p className="analysis-text-header">Who has the problem? </p>
            <p className="analysis-text">
              Independent chefs, culinary freelancers, and small catering
              businesses.
            </p>
            <p className="analysis-text-header">Why is it a problem? </p>
            <p className="analysis-text">
              These users often struggle with limited visibility, a lack of a
              professional online presence, and inefficient methods of
              connecting with potential clients. Relying solely on
              word-of-mouth, oversaturated social media, or general freelance
              platforms makes it difficult to showcase their work, build trust,
              and manage bookings effectively.
            </p>
            <p className="analysis-text-header">What is the goal? </p>
            <p className="analysis-text">
              To provide chefs with a centralized, professional platform that
              enhances their digital presence, simplifies client interactions,
              and increases bookings, ultimately improving engagement and
              helping them grow their culinary brand.
            </p>
          </div>
          <div className="Cheffery-image">
            <img src={ChefferyFigma} alt="" />
          </div>
        </div>

        <div className="Cheffery-analysis">
          <div className="analysis-div">
            <p className="analysis-header">Reseach</p>
            <p className="analysis-text-header">Objective of the Research </p>
            <p className="analysis-text">
              Analyzing other fine dining restaurant websites was essential to
              understanding industry standards, design patterns, and user
              expectations. This process helped identify both best practices to
              emulate and common pitfalls to avoid, ensuring Cheffery’s website
              would stand out while remaining user-friendly.
            </p>
            <p className="analysis-text-header">Competitor Analysis Table</p>
            <table className="analysis-table">
              <thead>
                <tr>
                  <th>Competitor</th>
                  <th>Strengths</th>
                  <th>Weaknesses</th>
                  <th>Takeaways for Cheffery</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alo</td>
                  <td>
                    <ul>
                      <li>Elegant French design</li>
                      <li>High-end photography & typography</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Too much scrolling</li>
                      <li>
                        Needs more color, too harsh on the eyes (the white
                        background)
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        Use sleek visuals and minimalistic navigation for
                        clarity and impact
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Savor Toronto</td>
                  <td>
                    <ul>
                      <li>Sectioned off in clean sections</li>
                      <li>Not too much scrolling</li>
                      <li>Not too many words</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Side bar is too large</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        How many scrolls it took to complete the home page
                      </li>
                      <li>How it is sectioned</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Enigma Yorkville</td>
                  <td>
                    <ul>
                      <li>Artistic presentation, immersive tasting menu UX</li>
                      <li>Good use of typography</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        Some components are too large, causes the content to not
                        fit all on one page at one time
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Choice of images as a background to words</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="analysis-text-header">What is the goal? </p>
            <p className="analysis-text">
              To provide chefs with a centralized, professional platform that
              enhances their digital presence, simplifies client interactions,
              and increases bookings, ultimately improving engagement and
              helping them grow their culinary brand.
            </p>
          </div>
          {/* <div className="Cheffery-image">
            <img src={ChefferyFigma} alt="" />
          </div> */}
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
