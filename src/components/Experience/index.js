import React, { useState } from "react";
import { Element } from "react-scroll";

import "./styles.css";

const experience = [
  {
    name: "GDG on Campus",
    position: "President",
    time: "Sept 2024 - Present",
    icon: require("../../Images/experience/gdg.png"),
    moreInfo: [
      "Guiding a team of 10 to build an engaging community through events that enrich the student experience.",
      "Regularly organizing meetings, workshops, and future events to drive participation and learning opportunities.",
      "Public speaking at workshops and events while managing the team's progress and assisting with content creation for the social media page.",
    ],
  },
  {
    name: "Cheffery",
    position: "Ui/UX Designer",
    time: "June 2024 - Present",
    icon: require("../../Images/experience/cheffery.png"),
    moreInfo: [
      "Redesigning the company website using Figma, focusing on creating a visually appealing and user-friendly experience.",
      "Gather inspiration and incorporate innovative design elements into the new layout.",
      "Strived to achieve an optimal balance between a professional appearance and a fun, engaging user interface,",
    ],
  },
  {
    name: "Academic Oasis",
    position: "Chief Design And Marketting Officer",
    time: "March 2024 - Present",
    icon: require("../../Images/experience/ao.png"),
    moreInfo: [
      "Constantly evolving the UI to deliver a seamless, user-centric experience, adapting to user preferences and continuously enhancing functionality.",
      "Continuously improved product quality, driving higher user satisfaction.",
      "Managed a team of 3 content creators, overseeing social media content production for Academic Oasis, which led to increased online engagement and brand visibility.",
    ],
  },
  {
    name: "GDG on Campus",
    position: "Marketting Director",
    time: "October 2023 - April 2024",
    icon: require("../../Images/experience/gdg.png"),
    moreInfo: [
      "Curated visually compelling content using Canva to elevate user engagement and enhance event experiences.",
      "Crafted engaging social media posts and stories designed to optimize user interaction and strengthen brand awareness.",
      "Designed  and executing user-centered experiences for the club’s main event, Devfest.",
      "Collaborated with team members to develop intuitive user journeys and interfaces for upcoming club activities, ensuring a seamless and enjoyable user experience.",
    ],
  },
  {
    name: "MyHomeworkRewards",
    position: "Marketting Intern",
    time: "February 2024 - March 2024",
    icon: require("../../Images/experience/MyHomeworkRewards.png"),
    moreInfo: [],
  },
  {
    name: "Liftow Limited",
    position: "Marketing Intern",
    time: "June 2023 - August 2023",
    icon: require("../../Images/experience/liftow.png"),
    moreInfo: [
      "Oversaw day-to-day activities and inventory management of the company store at the head office in Mississauga.",
      "Crafted a comprehensive presentation for the HR department, suggesting a thoughtful and impactful gift package",
      "Leveraged Microsoft Dynamics 365 to streamline lead management processes, ensuring efficient transfer of both new and existing leads to the sales team",
      "Actively collaborated with the marketing department to brainstorm and explore innovative solutions and opportunities to enhance the company's market presence and brand visibility",
    ],
  },
];

function Experience() {
  const [selected, setSelected] = useState(experience[0]);
  return (
    <Element name="experience" className="section experience">
      <div className="container">
        <h1 className="section-header">Work Experience</h1>
        <div className="timeline">
          {experience.map((card) => {
            return (
              <div
                className="experience-card"
                onClick={() => {
                  setSelected(card);
                }}
              >
                <div className="icon">
                  <img src={card.icon} alt="" />
                </div>
                <h1 className="name">{card.name}</h1>
                <span className="position">{card.position}</span>
                <span className="time">{card.time}</span>
              </div>
            );
          })}
        </div>
        <div className="more-info">
          <div className="grid">
            <div className="icon">
              <img src={selected.icon} alt="" />
            </div>
            <div className="text">
              <h1 className="name">{selected.name} </h1>
              <span className="time">
                {selected.position} - ({selected.time})
              </span>
            </div>
          </div>

          <ul>
            {selected.moreInfo.map((info) => {
              return <li>{info}</li>;
            })}
          </ul>
        </div>
      </div>
    </Element>
  );
}

export default Experience;
