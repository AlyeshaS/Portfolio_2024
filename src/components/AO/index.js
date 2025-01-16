// IDEA, add the "View More" button and will show the, new event (ex) page with a description of that design

import React, { useState, useEffect } from "react";
import "./styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
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

  return (
    <div className="ao-page">
      <div className="ao-container">
        <div className="title">
          <p className="ao-header">Academic Oasis</p>
          <p>Chief Design and Marketing Officer</p>
          <p>March 2024 - January 2025</p>
        </div>
        <div className="swipper-container">
          <Swiper
            className="ao-swiper"
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
                  <h1 className="ao-page-titles">Student Dashboard</h1>
                </div>
                <div className="text-scroll">
                  <p>
                    During the orignial vision of Academic Oasis, this was my
                    design for the dashboard. Their visison was to make an
                    application for students to engage with school activities
                    while being able to have access to other features like a
                    calendar, clubs/events/jobs on campus/ workshop area and
                    messaging system. The messaging system was removed for the
                    time being.
                  </p>
                  <br />
                  <p>
                    Breaking down this design, at the top are cards to represent
                    the students classes, which would be taken from Canvas, the
                    application used at the university for the courses.
                  </p>
                  <br />
                  <p>
                    Underneath the course cards, there is a different style
                    calendar widget. This section is used to show upcoming
                    classes for the day. There is inclusion of the course name,
                    location as well as time. It will change based on the day of
                    the week.
                  </p>
                  <br />
                  <p>
                    Next to that widget, there is an extra widget area, which in
                    this case is used as a pomodoro timer. Since Academic Oasis
                    aims to be an all in one application, having a timer
                    included was an extra touch to the idea. This widget would
                    have been customized to a few different option which were
                    not created at the time.
                  </p>
                  <br />
                  <p>
                    The job section are cards with information of different
                    opportunites found from the universites database. Going
                    throught the universities website and countless other
                    following links, adding this aspect would make it easier for
                    students to apply.
                  </p>
                  <br />
                  <p>
                    Additionally, on the right hand side, you can see which week
                    we are on as well as sememster and cGPA. Underneath is a
                    daily version of the calendar which displays courses and
                    other events in their calendar.
                  </p>
                </div>
              </div>
              <div className="content">
                <img src={AOFigma} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="ao-page-titles">
                    Club Executive Dashboard (Events)
                  </h1>
                </div>
                <div className="text-scroll">
                  {expandedIndexes[0] ? (
                    <>
                      <p>
                        The club executives can create a new event using the new
                        event button. They will need to fill in the required
                        areas such as, event name, date, time, location,
                        descriptionm registration link and spots avaliable. Some
                        slots are mandatory but not all. Once filled, they can
                        post the event for all to see.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Academic Oasis vision changed to be club executive
                        based. With that being said, the dashboard needs to be
                        changed to accommodate. Now the dashboard no longer has
                        courses but rather information such as events, a budget
                        sheet and statistics which would be collected from the
                        events.
                      </p>
                      <br />
                      <p>
                        The header welcomes the user and has a description of
                        the club. Sometimes, students are participants of
                        numerous clubs, so the downwards arrow allows the user
                        to toggle between the different clubs. The top right of
                        this widget, has their social media and notifications.
                        Additional button at the bottom right allows the user to
                        contact the Academic Oasis team if needed as well
                        sponsor the startup if they choose.
                      </p>
                      <br />
                      <p>
                        In the events tab, the user can see all the events they
                        have created, as well as their allocated budget and an
                        expected number of attendees. They have the ability to
                        filter as well as create a new event.
                      </p>
                      <br />
                      <p>
                        The right side bar has the number of executive team
                        member, general members, balance and average attendance.
                        It allows those information to be seen easily by the
                        user.
                      </p>
                    </>
                  )}
                </div>
                <div className="footer">
                  <button onClick={() => toggleCard(0)}>
                    {expandedIndexes[0] ? "Back" : "View More"}
                  </button>
                </div>
              </div>
              <div className="ao-image">
                <img
                  src={expandedIndexes[0] ? NewEvent : DashboardEvent}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="ao-page-titles">
                    Club Executive Dashboard (Budget Sheet)
                  </h1>
                </div>
                <div className="text-scroll">
                  {expandedIndexes[1] ? (
                    <>
                      The club executive can add a new row in their budget sheet
                      using the new button. In order to add, they must fill out
                      all the information required. This includes the date,
                      category (revenue or deposit), status, description, 2
                      approvals, recipient and amount. Then they can save the
                      information and the new information would be added into
                      the budget sheet.
                    </>
                  ) : (
                    <>
                      <p>
                        Switching to the budget sheet tab on the dashboard,
                        there is a spreadsheet to help the executive track their
                        spendings. Each club is allocated a certain amount of
                        money, and this sheet shows incomes and expenses. There
                        are certain categories that must be met for the
                        university, and that is accommodated for using the
                        columns. They have the ability to edit, add as well as
                        download the budget sheet. The budget sheet is two pages
                        due to the column requirement.
                      </p>
                    </>
                  )}
                </div>
                <div className="footer">
                  <button onClick={() => toggleCard(1)}>
                    {expandedIndexes[1] ? "Back" : "View More"}
                  </button>
                </div>
              </div>
              <div className="ao-image">
                <img
                  src={expandedIndexes[1] ? EditBudgetSheet : DashboardBudget}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="ao-page-titles">
                    Club Executive Dashboard (Statistics)
                  </h1>
                </div>
                <div className="text-scroll">
                  <p>
                    The statistics tab displays their budget, attendance and
                    most avaliable day of the week in different graphs. A main
                    concern at the university is event attendance. Academic
                    Oasis hopes to change that by finding the best time to host
                    an event. The statistics page easily displays the different
                    information in the three different widgets.
                  </p>
                </div>
              </div>
              <div className="ao-image">
                <img src={DashboardStats} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="ao-page-titles">Calendar</h1>
                </div>
                <div className="text-scroll">
                  {expandedIndexes[2] ? (
                    <>edit</>
                  ) : (
                    <>
                      <p>
                        The calendar page will display the students courses,
                        registered events, and other events they added. On this
                        page, users have the ability to download their calender,
                        add an event and switch the week using the arrows at the
                        top right.
                      </p>
                    </>
                  )}
                </div>
                <div className="footer">
                  <button onClick={() => toggleCard(2)}>
                    {expandedIndexes[2] ? "Back" : "View More"}
                  </button>
                </div>
              </div>
              <div className="ao-image">
                <img
                  src={expandedIndexes[2] ? EditCalendar : Calendar}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="ao-page-titles">Clubs Page</h1>
                </div>
                <div className="text-scroll">
                  <>
                    <p>
                      Students will be able see avaliable clubs, events and
                      workshops at the school. The layout is the same for each
                      section, although provide different information. On this
                      page in particular, the card includes the club name and
                      profile image, description and a button if you are
                      interested. In order to join the club, there that is a
                      process from the club itself. This page is to showcase the
                      different clubs at the school.
                    </p>
                    <br />
                    <p>
                      On the right hand side, there is a filter by faculty, club
                      name and location. The user also has the ability to search
                      different keywords in the search bar. Underneath is the
                      registered events the user has signed up for. This is
                      consistent through the other tabs of this page.
                    </p>
                  </>
                </div>
              </div>
              <div className="ao-image">
                <img src={Clubs} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <div className="text">
                <div>
                  <h1 className="ao-page-titles">Profile</h1>
                </div>
                <div className="text-scroll">
                  {expandedIndexes[3] ? (
                    <>
                      There is very minimal change to the UI. In the edit
                      version of this page, the user has the ability to change
                      their pronouns as well as their preferred language.
                    </>
                  ) : (
                    <>
                      <p>
                        Students have the ability to have a profile picture,
                        have their full name, pronouns and their email.
                        Additionally, their executive club roles, preferred
                        language and connection to their Google calendar are
                        included. They have the ability to log out if needed
                        which is seen at the bottom of the page. The user has an
                        edit button which will be looked at further under the
                        edit version of this page.
                      </p>
                      <br />
                      <p>
                        To the right of the page, the user can change the theme
                        based on what Academic Oasis has to offer.
                      </p>
                    </>
                  )}
                </div>
                <div className="footer">
                  <button onClick={() => toggleCard(3)}>
                    {expandedIndexes[3] ? "Back" : "View More"}
                  </button>
                </div>
              </div>
              <div className="ao-image">
                <img src={expandedIndexes[3] ? EditProfile : Profile} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="ao-analysis">
          <div className="analysis-div">
            <p className="analysis-header">Problem</p>
            <p className="analysis-text">
              Academic Oasis required an easy-to-use platform tailored for
              students, designed to showcase campus events and resources. The
              goal was to foster student engagement and enhance awareness of
              campus activities.
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
          <div className="ao-image">
            <img src={AOFigma} alt="" />
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
          <div className="ao-image">
            <img src={Mobile_Events} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AO;
