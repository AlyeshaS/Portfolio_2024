import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

import { EffectFlip, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

import AOFigma from "../../assets/AOFigma.png";
import DashboardStats from "../../assets/DashboardStats.png";
import Mobile_Events from "../../assets/MobileEvents.png";
import DashboardEvent from "../../assets/DashboardEvent.png";
import NewEvent from "../../assets/NewEvent.png";
import DashboardBudget from "../../assets/DashboardBudget.png";
import EditBudgetSheet from "../../assets/EditBudgetSheet.png";
import Calendar from "../../assets/Calendar.png";
import EditCalendar from "../../assets/EditCalendar.png";
import Clubs from "../../assets/Clubs.png";
import Profile from "../../assets/Profile.png";
import EditProfile from "../../assets/EditProfile.png";
import AOLogo from "../../assets/AOLogo.png";

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
  const [expandedIndexes, setExpandedIndexes] = useState({});

  const toggleCard = (index) => {
    setExpandedIndexes((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const FigmaEmbed = () => {
    return (
      <div style={{ width: "100%", height: "600px" }}>
        <iframe
          src="https://embed.figma.com/proto/NDmHmuDdKUn9NNedGhpV3u/AO-Figma---USE?node-id=3314-2&scaling=scale-down&hide-ui=1&embed-host=share"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allowFullScreen
          title="Academic Oasis Prototype"
        />
      </div>
    );
  };

  return (
    <div className="ao-page">
      <div className="ao-container">
        <div className="title">
          <p className="ao-header">Academic Oasis</p>

          <p>Chief Design and Marketing Officer</p>
          <p>March 2024 - January 2025</p>
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

        <div className="ao-analysis" style={{ gap: "20px" }}>
          <div className="ao-image-logo">
            <img src={AOLogo} alt="AOLogo" className="ao-logo-img" />
          </div>
          <div className="analysis-div.no-scroll">
            <p className="analysis-header">Project Overview</p>
            <p style={{ paddingBottom: "15px" }}>
              <span className="analysis-text-header">Project Name: </span>
              <span className="analysis-text">Academic Oasis</span>
            </p>
            <p style={{ paddingBottom: "15px" }}>
              <span className="analysis-text-header">Role: </span>
              <span className="analysis-text">
                Chief Marketing and Design Officer
              </span>
            </p>
            <p style={{ paddingBottom: "15px" }}>
              <span className="analysis-text-header">Tools Used: </span>
              <span className="analysis-text">
                Figma, Canva, GIMP, Visual Studios
              </span>
            </p>
            <p>
              <span className="analysis-text" style={{ fontStyle: "italic" }}>
                Academic Oasis is an all-in-one platform created to make student
                life at Ontario Tech University easier. It centralizes
                everything; from courses and calendars to campus events and
                clubs; so students can stay organized and connected. Club
                executives also benefit from built-in dashboards and analytics,
                making it easier to manage events and boost engagement.
              </span>
            </p>
          </div>
        </div>

        <div className="ao-analysis">
          <div className="ao-analysis-div">
            <p className="analysis-header">Problem Statement</p>
            <p className="analysis-text-header">Who has the problem? </p>
            <p className="analysis-text">
              Students at Ontario Tech University, club executives and
              organizers.
            </p>
            <p className="analysis-text-header">Why is it a problem? </p>
            <p className="analysis-text">
              Important information such as course schedules, deadlines, events,
              and club activities is scattered across multiple disconnected
              systems. This makes it difficult for students to stay organized
              and engaged, while club executives struggle to reach members
              effectively and plan events with strong turnout.
            </p>
            <p className="analysis-text-header">What is the goal? </p>
            <p className="analysis-text">
              The goal was to create a fully functional application that would
              initially serve students at Ontario Tech University and later
              expand to other institutions. The platform is designed to be an
              all-in-one resource for students, integrating event listings,
              calendars, and useful tools, while also providing club executives
              with dashboards and analytics to improve engagement and event
              planning.
            </p>
          </div>
        </div>

        <div className="ao-analysis">
          <div className="analysis-div.no-scroll">
            <p className="analysis-header">Reseach</p>
            <p className="analysis-text-header">Objective of the Research </p>
            <p className="analysis-text">
              The objective of this research is to evaluate the need for a
              centralized, student-focused platform at Ontario Tech University
              and to determine how Academic Oasis can address gaps in the
              current systems. To ensure the platform was tailored to its
              intended audience, peers were consulted to identify the features
              and tools they would find most useful. Their feedback was used to
              guide the design process and confirm that Academic Oasis would
              meaningfully support students’ academic and social needs. The
              research further aims to explore how an all-in-one application,
              integrating course schedules, calendars, campus events, and club
              management tools can improve student engagement, streamline access
              to resources, and enhance the overall campus experience, with the
              long-term objective of expanding to other institutions.
            </p>
            <p className="analysis-text-header">
              Benchmarking & Competitor Analysis
            </p>
            <table className="analysis-table">
              <thead>
                <tr>
                  <th>Tool/Platform</th>
                  <th>Key Features</th>
                  <th>Strengths</th>
                  <th>Limitations for Students</th>
                  <th>Insights for Academic Oasis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Canvas</td>
                  <td>
                    <ul>
                      <li>Course management, assignments, grades</li>
                      <li>Communication with professors</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Central hub for academics, widely used</li>
                      <li>Available on mobile and desktop</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        Focused only on courses; no campus events or club
                        integration
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        Can expand beyond academics by integrating both academic
                        and social life
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Ontario Tech MyCampus</td>
                  <td>
                    <ul>
                      <li>
                        Access to schedules, announcements, resources and UCard
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Official source of information, reliable</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        Not user-friendly: scattered, difficult to navigate, no
                        unified experience
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        Using the important information that can be found on
                        this application into Academic Oasis
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Student Union Website/Portal</td>
                  <td>
                    <ul>
                      <li>
                        Club listings, Coop opportunities and event promotion
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Student-focused, supports engagement</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        No integration with academic tools or personalized
                        calendars
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        Can bridge academics and student life by linking events
                        directly to student schedules. Allowing easy access to
                        both job opportunities and club events.
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Google Calendar</td>
                  <td>
                    <ul>
                      <li>Event scheduling, reminders, syncing</li>
                      <li>Can invite peers to see the same event</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Easy-to-use, accessible across devices</li>
                      <li>Can link all Google accounts</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        Not tailored to university needs; no campus-specific
                        integration
                      </li>
                      <li>
                        Will manually have to add deadlines and course timings
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        Can adapt seamless syncing but specialize it for
                        academic and club events
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Notion</td>
                  <td>
                    <ul>
                      <li>
                        Customizable workspace, note-taking, collaboration
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Flexible, all-in-one organization tool</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        Requires setup, not specifically tailored for campus
                        needs
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>
                        Can use Notion's customizable dashboards to give
                        students and clubs flexible management tools
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="ao-analysis">
          <img src={DashboardStats} alt="" />
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
          {/* <div className="ao-image">
            <img src={Mobile_Events} alt="" />
          </div> */}
          <img src={Mobile_Events} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AO;
