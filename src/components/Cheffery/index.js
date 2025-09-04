import React, { useState, useEffect } from "react";
import "./styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ChefferyFlowchart from "../../assets/ChefferyFlowchart.png";
import ChefferyLogo from "../../assets/ChefferyLogo.png";
import ChefferyClients from "../../assets/ChefferyClients.png";
import ChefferyCommunity from "../../assets/ChefferyCommunity.png";
import ChefferyDefinition from "../../assets/ChefferyDefinition.png";
import ChefferyExperience from "../../assets/ChefferyExperience.png";
import ChefferyLanding from "../../assets/ChefferyLanding.png";
import ChefferyReserve from "../../assets/ChefferyReserve.png";
import ChefferyFooter from "../../assets/ChefferyFooter.png";

// Fix the mobile image and then also check the side align for the second image
function Cheffery() {
  const [isVertical, setIsVertical] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth > 800 : true
  );

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

  // --- Arrows ---
  const NextArrow = (props) => {
    const {
      className = "",
      style,
      onClick,
      currentSlide = 0,
      slideCount = 0,
    } = props;
    const isDisabled = slideCount > 0 ? currentSlide >= slideCount - 2 : false; // adjust -2 if slidesToShow changes
    const mergedStyle = {
      ...(style || {}), // <-- guard null/undefined
      display: "block",
      right: "30px",
      zIndex: 2,
      pointerEvents: isDisabled ? "none" : "auto",
      opacity: isDisabled ? 0.4 : 1,
    };

    return (
      <div
        className={`${className} custom-arrow${isDisabled ? " disabled" : ""}`}
        style={mergedStyle}
        onClick={isDisabled ? undefined : onClick}
        aria-disabled={isDisabled}
        role="button"
        tabIndex={0}
      >
        <span className="arrow">
          <svg
            width="50"
            height="15"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(-90deg)" }}
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="var(--background)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className = "", style, onClick, currentSlide = 0 } = props;
    const isDisabled = currentSlide === 0;
    const mergedStyle = {
      ...(style || {}), // <-- guard
      display: "block",
      zIndex: 2,
      pointerEvents: isDisabled ? "none" : "auto",
      opacity: isDisabled ? 0.4 : 1,
    };

    return (
      <div
        className={`${className} custom-arrow${isDisabled ? " disabled" : ""}`}
        style={mergedStyle}
        onClick={isDisabled ? undefined : onClick}
        aria-disabled={isDisabled}
        role="button"
        tabIndex={0}
      >
        <span className="arrow prev">
          <svg
            width="50"
            height="15"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(90deg)" }}
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="var(--background)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    );
  };

  // --- Slick settings: pass ELEMENTS, not functions ---
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="Cheffery-page">
      <div className="Cheffery-container">
        <div className="title">
          <p className="Cheffery-header">Cheffery</p>
          <p>UI/UX Designer</p>
          <p>June 2024 - Present</p>
          <a
            href="https://www.figma.com/proto/2dbZHtyAm4RFi9gaTjsZ3O/Cheffery?node-id=1188-684&hide-ui=1"
            target="_blank"
            rel="noopener noreferrer"
            className="view-website-link"
          >
            <p className="cheffery-link">View Figma Prototype</p>
          </a>
        </div>

        <div className="Cheffery-analysis" style={{ gap: "20px" }}>
          <div className="Cheffery-image-logo">
            <img
              src={ChefferyLogo}
              alt="ChefferyLogo"
              className="cheffery-logo-img"
            />
          </div>
          <div className="analysis-div.no-scroll">
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
        </div>

        <div className="Cheffery-analysis">
          <div className="Cheffery-analysis-div">
            <p className="analysis-header">Problem Statement</p>
            <p className="analysis-text-header">Who has the problem? </p>
            <p className="analysis-text">
              Independent chefs, culinary freelancers, and small catering
              businesses
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
        </div>

        <div className="Cheffery-analysis">
          <div className="analysis-div.no-scroll">
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
                      <li>Sophisticated French-inspired aesthetic</li>
                      <li>
                        High-quality photography paired with elegant typography
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Excessive scrolling disrupts user flow</li>
                      <li>
                        Minimal color variation; stark white background feels
                        harsh on the eyes
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        Prioritize sleek visuals with balanced color contrast
                      </li>
                      <li>
                        Employ minimal, intuitive navigation for clarity and
                        impact
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Savor Toronto</td>
                  <td>
                    <ul>
                      <li>Clean, well-structured sections</li>
                      <li>Concise layout with minimal scrolling</li>
                      <li>Content is streamlined with limited text</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        Sidebar occupies too much space, distracting from main
                        content
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Structure homepage in clear, digestible sections</li>
                      <li>
                        Optimize scrolling length to keep users engaged without
                        overwhelming
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Enigma Yorkville</td>
                  <td>
                    <ul>
                      <li>
                        Artistic, immersive presentation that reflects
                        fine-dining experience
                      </li>
                      <li>
                        Strong use of typography to reinforce brand personality
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        Oversized components limit content visibility on a
                        single page
                      </li>
                      <li>Layout feels heavy and less user-friendly</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        Use impactful imagery strategically (e.g., as subtle
                        backgrounds for text)
                      </li>
                      <li>
                        Ensure components are sized to balance aesthetics with
                        readability
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="Cheffery-analysis-column">
          <p className="analysis-header">User Journey</p>
          <p className="analysis-text-header">Flowchart</p>
          <div className="Cheffery-image">
            <img
              src={ChefferyFlowchart}
              alt=""
              className="centered-contact-img"
              style={{ paddingBottom: 10 }}
            />
          </div>
          <p className="analysis-text-header">Wireframes</p>
          <p className="analysis-text">
            I began by creating low-fidelity wireframes in Figma to outline the
            core structure of each page, focusing on hierarchy and flow rather
            than visual styling. This step ensured the layout supported the key
            user journey, moving from service discovery to booking with minimal
            friction. Key decisions included placing a prominent Reserve Here
            button in the header and maintaining consistent spacing for visual
            clarity. By iterating on these layouts early, I was able to validate
            navigation flow, reduce potential usability issues, and prepare a
            strong foundation for prototyping.
          </p>
          <p className="analysis-text-header">UI Design</p>
          <p className="analysis-text">
            Once the wireframes were approved, I moved on to developing
            high-fidelity mockups that incorporated Cheffery’s brand identity.
            The color palette featured a vibrant orange paired with clean white
            and a deep grey to create a modern yet welcoming feel. Typography
            choices were made to complement the logo, using the same font in
            headers for consistency and emphasis, while maintaining a clean,
            easy-to-read style throughout the design. High-resolution food
            photography was placed strategically to maximize visual impact
            without compromising performance or load times. Overall, the UI
            blended a sense of luxury with functional simplicity, tailored to
            resonate with a high-end clientele.
          </p>
          <p className="analysis-text-header">Usability Testing</p>
          <p className="analysis-text">
            I conducted informal usability tests with 5 participants
            representing Cheffery’s target audience. They were asked to complete
            tasks such as finding the menu, booking a service, and viewing event
            photos. Feedback revealed that users valued having the booking
            button visible at all times and preferred a condensed services
            overview before detailed descriptions.
          </p>
        </div>

        <div className="Cheffery-analysis-column">
          <div className="Cheffery-analysis-div">
            <p className="analysis-header">Website Pages Overview</p>
          </div>
          <div className="Cheffery-image-column">
            <Slider {...settings}>
              {data.map((item, index) => (
                <div key={index} className="Cheffery-image-column-item">
                  <img src={item.image} alt={item.title} />
                  <div className="Cheffery-image-column-text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="Cheffery-analysis">
          <div className="Cheffery-analysis-div">
            <p className="analysis-header">Final Outcome</p>
            <p className="analysis-text">
              The final website presents Cheffery as a refined yet approachable
              fine-dining experience that balances sophistication with warmth.
              The design emphasizes clarity and ease of navigation, allowing
              users to effortlessly explore services, browse curated image
              galleries that highlight the artistry of the cuisine, and submit
              booking requests within just two clicks. Beyond aesthetics, the
              site was built with performance and accessibility at its core,
              ensuring a fully responsive experience that adapts seamlessly
              across devices. The overall tone is playful yet exclusive,
              positioning Cheffery as a brand that is both aspirational and
              welcoming.
              <br></br>
              <br></br>
              This outcome was the result of months of iteration and
              collaboration. Throughout the process, I went back and forth with
              multiple design drafts, each time refining elements based on
              feedback and evolving brand direction. Once the Cheffery team
              finalized their vision and clarified what they wanted their
              identity to represent, I translated those insights into a
              cohesive, polished digital experience. Particular attention was
              given to the flow of the site, the integration of their main brand
              color, the balance of typography, and the careful curation of
              imagery to reflect both the artistry of fine dining and the
              intimacy of personal service.
              <br></br>
              <br></br>
              The client expressed strong satisfaction with the final result,
              noting how well the flow, layout, and visual hierarchy aligned
              with their expectations. They were especially pleased with the way
              the site communicates exclusivity without alienating users, making
              it inviting for first-time visitors while still carrying a sense
              of luxury. At present, I am continuing to refine the project by
              working on the mobile version and ensuring that every aspect of
              the design translates smoothly to smaller screens. This phase
              involves optimizing touch interactions, re-scaling imagery, and
              maintaining consistent accessibility features across all
              platforms.
              <br></br>
              <br></br>
              Overall, this project allowed me to not only deliver a functional,
              high-impact website but also gain valuable experience in iterative
              client collaboration, balancing creative direction with
              user-centered design, and executing a brand identity through
              digital form. The final product is more than just a website, it is
              a digital extension of Cheffery’s brand personality, designed to
              grow with their vision and serve as a platform for meaningful
              customer engagement.
            </p>
          </div>
        </div>

        <div className="Cheffery-analysis">
          <div className="Cheffery-analysis-div">
            <p className="analysis-header">Reflection</p>
            <p className="analysis-text">
              Working on Cheffery’s website was a valuable learning experience
              that pushed me to grow both as a designer and a collaborator. One
              of the biggest takeaways was the importance of patience and
              adaptability when navigating client feedback. The project required
              multiple rounds of iteration before the brand’s vision felt fully
              aligned, and that process taught me how to balance my design
              instincts with the client’s evolving needs. I also gained a deeper
              understanding of how small details, such as the choice of
              typography, the spacing of elements, or the placement of images
              can significantly affect how users perceive a brand’s tone.
              <br></br>
              <br></br>
              Additionally, this project strengthened my ability to think about
              user-centered design beyond aesthetics. Ensuring accessibility,
              quick navigation, and seamless responsiveness required me to step
              into the shoes of diverse users, from first-time visitors to
              returning customers. This perspective reminded me that while
              visuals create the first impression, functionality and inclusivity
              sustain long-term engagement.
              <br></br>
              <br></br>
              Finally, I learned the value of scalability. Designing with both
              desktop and mobile in mind reinforced how essential it is to
              anticipate growth and ensure the site can evolve alongside the
              business. Overall, this project reaffirmed my passion for creating
              designs that are not just visually engaging but also strategic,
              user-friendly, and reflective of a brand’s identity.
            </p>
          </div>
          {/* Fix the size of the mobile version */}
          {/* <div className="Cheffery-image">
            <img
              src={ChefferyContact}
              alt=""
              className="centered-contact-img"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    title: "Landing Page",
    description:
      "Cheffery is a modern culinary platform designed to connect talented chefs with clients seeking high-quality, personalized dining experiences. The project serves as both a portfolio showcase and a service portal, enabling chefs to highlight their culinary skills, achievements, and specialties while making it easy for clients to discover, connect, and book their services.",
    image: ChefferyLanding,
  },
  {
    title: "Definition",
    description:
      "The definition page serves as a comprehensive introduction to Cheffery, outlining the platform's mission, values, and unique offerings. It provides visitors with a clear understanding of what Cheffery stands for and how it differentiates itself in the culinary landscape. This page is designed to engage users by highlighting the benefits of using Cheffery, whether they are chefs looking to showcase their talents or clients seeking exceptional dining experiences.",
    image: ChefferyDefinition,
  },
  {
    title: "The Cheffery Experience",
    description:
      "The Cheffery Experience page is designed to immerse visitors in the unique culinary journey that Cheffery offers. It showcases the platform's commitment to quality, creativity, and personalized service, highlighting how Cheffery connects chefs with clients to create memorable dining experiences. ",
    image: ChefferyExperience,
  },
  {
    title: "Contact (Reserve)",
    description:
      "To help us connect with potential clientele, we offer multiple ways for clients to reach out based on their preference. They can send us an email with their inquiry, call the designated cell number for direct communication, or simply fill out the contact form available on our page. Once we receive their message, a member of our team will follow up as soon as possible to discuss their needs, answer any questions, and begin the onboarding process.",
    image: ChefferyReserve,
  },
  {
    title: "Contact (Community)",
    description:
      "To help us connect with potential clientele, we offer multiple ways for clients to reach out based on their preference. They can send us an email with their inquiry, call the designated cell number for direct communication, or simply fill out the contact form available on our page. Once we receive their message, a member of our team will follow up as soon as possible to discuss their needs, answer any questions, and begin the onboarding process.",
    image: ChefferyCommunity,
  },
  {
    title: "Clients",
    description:
      "Showcasing the clients of Cheffery is a key aspect of building trust and credibility. By featuring a diverse range of clients, from private individuals to corporate entities, we highlight the platform's versatility and appeal. Each client profile includes testimonials and images from past events, demonstrating the quality and satisfaction that Cheffery delivers. This not only showcases our successful partnerships but also serves as a powerful marketing tool, attracting new clients who can envision their own events being hosted by our talented chefs.",
    image: ChefferyClients,
  },
  {
    title: "Footer",
    description:
      "The footer of the Cheffery website serves as a convenient navigation hub, providing quick access to all the key pages we offer—such as our services, community initiatives, contact page, and more. It also features direct links to our social media platforms, making it easy for visitors to stay connected, follow our latest updates, and engage with our growing community across multiple channels.",
    image: ChefferyFooter,
  },
];

export default Cheffery;
