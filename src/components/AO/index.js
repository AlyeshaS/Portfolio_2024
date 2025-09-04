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

        <div className="ao-analysis-column">
          <p className="analysis-header">User Journey</p>
          {/* <p className="analysis-text-header">Flowchart</p> */}
          <div className="ao-image">
            <img
              // src={ChefferyFlowchart}
              alt=""
              className="centered-contact-img"
              style={{ paddingBottom: 10 }}
            />
          </div>
          <p className="analysis-text-header">Wireframes</p>
          <p className="analysis-text">
            I created low-fidelity wireframes in Figma to establish the overall
            structure and navigation of Academic Oasis, focusing on
            functionality over visual design. While the student and club
            executive versions shared core features, the final design centered
            on the executive dashboard. For executives, the dashboard included
            analytical insights, a record of planned events, and a budget sheet
            to manage funding. Additional tabs allowed access to a personalized
            student calendar, a campus-wide feed of clubs, events, workshops,
            and job postings, as well as a personal profile that connected
            directly with Google Calendar. By wireframing these pages early, I
            was able to test navigation flows, refine feature placement, and
            ensure the platform served both students and executives with minimal
            friction, laying a strong foundation for prototyping.
          </p>
          <p className="analysis-text-header">UI Design</p>
          <p className="analysis-text">
            Building on the wireframes and prototypes, the UI design stage
            focused on creating a clean, intuitive interface that balanced
            simplicity with functionality. The design emphasized clarity in
            navigation, ensuring that both students and club executives could
            easily move between key pages such as the dashboard, calendar, and
            events. Consistent spacing, clear hierarchy, and recognizable icons
            were used to make the interface approachable, while color and
            typography choices highlighted important actions like posting an
            event or syncing a calendar. For executives, the dashboard was
            designed to present analytics, budget sheets, and event management
            tools in a streamlined layout, while students benefited from a
            visually clear calendar view, campus events, and profile integration
            with Google Calendar. The UI design ensured that Academic Oasis felt
            cohesive across all pages, enhancing usability and maintaining a
            professional yet student-friendly aesthetic.
          </p>
          <p className="analysis-text-header">Usability Testing</p>
          <p className="analysis-text">
            To validate the design of Academic Oasis, I conducted usability
            testing with peers and other students using my interactive Figma
            prototype. Participants were asked to complete key tasks such as
            navigating the dashboard, adding events to their calendar, and
            exploring club pages. Their feedback highlighted areas of strength,
            such as the clarity of the navigation flow, while also pointing out
            opportunities for improvement in feature placement and labeling.
            This testing stage was essential in confirming that the interface
            was intuitive, student-friendly, and aligned with real user needs,
            while also providing actionable insights to refine the final design.
          </p>
        </div>

        <div className="ao-analysis">
          <div className="ao-analysis-div">
            <p className="analysis-header">Final Outcome</p>
            <p className="analysis-text">
              The final outcome of Academic Oasis was a high-fidelity,
              interactive prototype created in Figma. While the startup team
              initially began developing the product, changes in the team led
              the founder to shut down the project before full implementation.
              Despite this, the design phase successfully demonstrated the
              potential of an all-in-one platform that could centralize academic
              tools, student life, and club management at Ontario Tech
              University.
              <br></br>
              <br></br>
              Throughout the process, the prototype evolved based on user
              feedback and direct input from club presidents and students. Key
              improvements included restructuring the executive dashboard with
              clearer tabs for analytics, event planning, and budgets, as well
              as ensuring that students could easily track what they had signed
              up for across clubs, events, and workshops. These refinements
              ensured that both students and executives had access to relevant,
              easy-to-find information tailored to their needs.
              <br></br>
              <br></br>
              On a personal level, this project strengthened my understanding of
              the full product design cycle from research and wireframing to
              prototyping and usability testing. I learned how to incorporate
              stakeholder feedback into practical design changes, balance
              multiple user perspectives, and design a platform that was both
              functional and student-friendly. While Academic Oasis was
              ultimately not launched, the project demonstrated how thoughtful,
              user-centered design can address real gaps in campus systems and
              provided me with valuable experience in creating solutions from
              concept to prototype.
            </p>
          </div>
        </div>

        <div className="ao-analysis">
          <div className="ao-analysis-div">
            <p className="analysis-header">Reflection</p>
            <p className="analysis-text">
              Academic Oasis was my first design project, and I am proud of the
              outcome despite the fact that it never launched. Working on it
              gave me the opportunity to explore the entire design process, from
              research to prototyping, and to see how user-centered design can
              directly impact the student experience. While it was unfortunate
              that the project was eventually shut down, the experience opened
              doors to other opportunities and laid a strong foundation for my
              growth as a designer.
              <br></br>
              <br></br>
              One of the most valuable lessons I learned was what makes a design
              not only visually appealing but also practical and helpful for its
              intended audience. By gathering feedback from students and club
              executives, I realized the importance of simplicity, clarity, and
              accessibility in ensuring that users can achieve their goals
              without friction. This reinforced my belief that good design
              should always prioritize the user.
              <br></br>
              <br></br>
              The project also pushed me to dive into mobile design for the
              first time, which introduced new challenges. Translating layouts
              from desktop to mobile required me to think carefully about
              spacing, hierarchy, and how to present the same information in a
              more compact format. I learned how to prevent overcrowding,
              maintain clarity, and design in a way that made navigation feel
              effortless. These challenges sharpened my problem-solving skills
              and gave me confidence in adapting designs across different
              platforms.
              <br></br>
              <br></br>
              Although Academic Oasis never reached full implementation, the
              project taught me the value of adaptability, iteration, and
              persistence. More importantly, it gave me hands-on experience in
              creating solutions that directly respond to user needs, experience
              that continues to shape how I approach design today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AO;
