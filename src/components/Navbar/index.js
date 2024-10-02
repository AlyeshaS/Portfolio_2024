import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import logo from "../../Images/Logo.png";
import "./styles.css";

function Navbar() {
  const navbar = useRef();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.getElementById("root").style.overflowY = "hidden";
    } else {
      document.getElementById("root").style.overflowY = "auto";
    }
  }, [menu]);

  useEffect(() => {
    const root = document.getElementById("root");
    root.addEventListener("scroll", () => {
      if (root.scrollTop > 200 && navbar.current) {
        navbar.current.style.backgroundColor = "rgba(230, 232, 237, 1)";
        navbar.current.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";
        root.style.backgroundColor = "rgba(229, 232, 237, 1)";
      } else {
        navbar.current.style.backgroundColor = "transparent";
        navbar.current.style.boxShadow = "unset";
        root.style.backgroundColor = "rgba(229, 232, 237, 0.5)";
      }
    });

    return () => {
      root.removeEventListener("scroll", () => {
        if (root.scrollTop > 200 && navbar.current) {
          navbar.current.style.backgroundColor = "rgba(230, 232, 237, 1)";
          navbar.current.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";
          root.style.backgroundColor = "rgba(229, 232, 237, 1)";
        } else {
          navbar.current.style.backgroundColor = "transparent";
          navbar.current.style.boxShadow = "unset";
          root.style.backgroundColor = "rgba(229, 232, 237, 0.5)";
        }
      });
    };
  }, []);

  if (window.innerWidth > 800) {
    return (
      <div className="navbar" ref={navbar}>
        <div className="container">
          <img src={logo} alt="logo" class="logo"></img>
          <div className="links">
            <Link
              activeClass="active"
              containerId="root"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              About
            </Link>
            <Link
              activeClass="active"
              containerId="root"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              containerId="root"
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Experience
            </Link>
            <Link
              activeClass="active"
              containerId="root"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Contact
            </Link>
          </div>
          <div className="socials">
            <a
              className="link"
              href="https://www.instagram.com/a.fan_arts/"
              target="_blank"
            >
              <svg
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5004 0.399994C10.3148 0.399994 0.400391 10.3144 0.400391 22.5C0.400391 34.6856 10.3148 44.6 22.5004 44.6C34.686 44.6 44.6004 34.6856 44.6004 22.5C44.6004 10.3144 34.686 0.399994 22.5004 0.399994ZM16.8326 7.19999H28.1648C33.4773 7.19999 37.8004 11.5214 37.8004 16.8322V28.1644C37.8004 33.4769 33.479 37.8 28.1682 37.8H16.8359C11.5234 37.8 7.20039 33.4786 7.20039 28.1678V16.8355C7.20039 11.523 11.5218 7.19999 16.8326 7.19999ZM16.8326 10.6C13.3969 10.6 10.6004 13.3981 10.6004 16.8355V28.1678C10.6004 31.6035 13.3985 34.4 16.8359 34.4H28.1682C31.6039 34.4 34.4004 31.6018 34.4004 28.1644V16.8322C34.4004 13.3965 31.6022 10.6 28.1648 10.6H16.8326ZM30.4359 13.4322C31.0615 13.4322 31.5682 13.9388 31.5682 14.5644C31.5682 15.19 31.0615 15.7 30.4359 15.7C29.8103 15.7 29.3004 15.19 29.3004 14.5644C29.3004 13.9388 29.8103 13.4322 30.4359 13.4322ZM22.5004 14C27.1873 14 31.0004 17.8131 31.0004 22.5C31.0004 27.1869 27.1873 31 22.5004 31C17.8135 31 14.0004 27.1869 14.0004 22.5C14.0004 17.8131 17.8135 14 22.5004 14ZM22.5004 17.4C21.1478 17.4 19.8506 17.9373 18.8941 18.8937C17.9377 19.8502 17.4004 21.1474 17.4004 22.5C17.4004 23.8526 17.9377 25.1498 18.8941 26.1062C19.8506 27.0627 21.1478 27.6 22.5004 27.6C23.853 27.6 25.1502 27.0627 26.1066 26.1062C27.0631 25.1498 27.6004 23.8526 27.6004 22.5C27.6004 21.1474 27.0631 19.8502 26.1066 18.8937C25.1502 17.9373 23.853 17.4 22.5004 17.4Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              className="link"
              href="https://www.linkedin.com/in/alyesha-singh/"
              target="_blank"
            >
              <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.9998 0.839996C10.3324 0.839996 0.839844 10.3316 0.839844 22C0.839844 33.6684 10.3324 43.16 21.9998 43.16C33.6673 43.16 43.1598 33.6684 43.1598 22C43.1598 10.3316 33.6673 0.839996 21.9998 0.839996ZM15.5598 31.2H11.8798V17.4H15.5598V31.2ZM13.7198 14.64C12.7032 14.64 11.8798 13.8166 11.8798 12.8C11.8798 11.7834 12.7032 10.96 13.7198 10.96C14.7364 10.96 15.5598 11.7834 15.5598 12.8C15.5598 13.8166 14.7364 14.64 13.7198 14.64ZM33.0398 31.2H29.3598V26.6V24.3C29.3598 22.529 27.9108 21.08 26.1398 21.08C24.3688 21.08 22.9198 22.529 22.9198 24.3V31.2H19.2398V17.4H22.9198V19.0707C23.9944 18.0385 25.4517 17.4 27.0598 17.4C30.3626 17.4 33.0398 20.0772 33.0398 23.38V31.2Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              className="link"
              href="https://github.com/AlyeshaS"
              target="_blank"
            >
              <svg viewBox="0 0 40 39" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 0C8.955 0 0 8.86784 0 19.8053C0 29.0858 6.45333 36.8511 15.1533 39C15.06 38.7326 15 38.4223 15 38.0378V34.6527C14.1883 34.6527 12.8283 34.6527 12.4867 34.6527C11.1183 34.6527 9.90167 34.0701 9.31167 32.9874C8.65667 31.7843 8.54333 29.944 6.92 28.8184C6.43833 28.4438 6.805 28.0163 7.36 28.0741C8.385 28.3612 9.235 29.0577 10.035 30.0909C10.8317 31.1257 11.2067 31.3601 12.695 31.3601C13.4167 31.3601 14.4967 31.3188 15.5133 31.1604C16.06 29.7856 17.005 28.5197 18.16 27.9222C11.5 27.2439 8.32167 23.9628 8.32167 19.5083C8.32167 17.5904 9.14667 15.7353 10.5483 14.1724C10.0883 12.6209 9.51 9.45705 10.725 8.25222C13.7217 8.25222 15.5333 10.1766 15.9683 10.6965C17.4617 10.1898 19.1017 9.90267 20.825 9.90267C22.5517 9.90267 24.1983 10.1898 25.695 10.6998C26.125 10.1832 27.9383 8.25222 30.9417 8.25222C32.1617 9.4587 31.5767 12.6358 31.1117 14.1839C32.505 15.7436 33.325 17.5937 33.325 19.5083C33.325 23.9595 30.1517 27.2389 23.5017 27.9206C25.3317 28.8663 26.6667 31.5235 26.6667 33.5255V38.0378C26.6667 38.2094 26.6283 38.3332 26.6083 38.4801C34.4017 35.775 40 28.4471 40 19.8053C40 8.86784 31.045 0 20 0Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        {menu ? (
          <div
            className="navbar__menu"
            onClick={() => {
              setMenu(false);
            }}
          >
            <Link
              onClick={() => {
                setMenu(false);
              }}
              activeClass="active"
              containerId="root"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              About
            </Link>
            <Link
              onClick={() => {
                setMenu(false);
              }}
              activeClass="active"
              containerId="root"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Projects
            </Link>
            <Link
              onClick={() => {
                setMenu(false);
              }}
              activeClass="active"
              containerId="root"
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Experience
            </Link>
            <Link
              onClick={() => {
                setMenu(false);
              }}
              activeClass="active"
              containerId="root"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Contact
            </Link>
            <div className="socials">
              <a
                className="link"
                href="https://www.instagram.com/a.fan_arts/"
                target="_blank"
              >
                <svg
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5004 0.399994C10.3148 0.399994 0.400391 10.3144 0.400391 22.5C0.400391 34.6856 10.3148 44.6 22.5004 44.6C34.686 44.6 44.6004 34.6856 44.6004 22.5C44.6004 10.3144 34.686 0.399994 22.5004 0.399994ZM16.8326 7.19999H28.1648C33.4773 7.19999 37.8004 11.5214 37.8004 16.8322V28.1644C37.8004 33.4769 33.479 37.8 28.1682 37.8H16.8359C11.5234 37.8 7.20039 33.4786 7.20039 28.1678V16.8355C7.20039 11.523 11.5218 7.19999 16.8326 7.19999ZM16.8326 10.6C13.3969 10.6 10.6004 13.3981 10.6004 16.8355V28.1678C10.6004 31.6035 13.3985 34.4 16.8359 34.4H28.1682C31.6039 34.4 34.4004 31.6018 34.4004 28.1644V16.8322C34.4004 13.3965 31.6022 10.6 28.1648 10.6H16.8326ZM30.4359 13.4322C31.0615 13.4322 31.5682 13.9388 31.5682 14.5644C31.5682 15.19 31.0615 15.7 30.4359 15.7C29.8103 15.7 29.3004 15.19 29.3004 14.5644C29.3004 13.9388 29.8103 13.4322 30.4359 13.4322ZM22.5004 14C27.1873 14 31.0004 17.8131 31.0004 22.5C31.0004 27.1869 27.1873 31 22.5004 31C17.8135 31 14.0004 27.1869 14.0004 22.5C14.0004 17.8131 17.8135 14 22.5004 14ZM22.5004 17.4C21.1478 17.4 19.8506 17.9373 18.8941 18.8937C17.9377 19.8502 17.4004 21.1474 17.4004 22.5C17.4004 23.8526 17.9377 25.1498 18.8941 26.1062C19.8506 27.0627 21.1478 27.6 22.5004 27.6C23.853 27.6 25.1502 27.0627 26.1066 26.1062C27.0631 25.1498 27.6004 23.8526 27.6004 22.5C27.6004 21.1474 27.0631 19.8502 26.1066 18.8937C25.1502 17.9373 23.853 17.4 22.5004 17.4Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                className="link"
                href="https://www.linkedin.com/in/alyesha-singh/"
                target="_blank"
              >
                <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.9998 0.839996C10.3324 0.839996 0.839844 10.3316 0.839844 22C0.839844 33.6684 10.3324 43.16 21.9998 43.16C33.6673 43.16 43.1598 33.6684 43.1598 22C43.1598 10.3316 33.6673 0.839996 21.9998 0.839996ZM15.5598 31.2H11.8798V17.4H15.5598V31.2ZM13.7198 14.64C12.7032 14.64 11.8798 13.8166 11.8798 12.8C11.8798 11.7834 12.7032 10.96 13.7198 10.96C14.7364 10.96 15.5598 11.7834 15.5598 12.8C15.5598 13.8166 14.7364 14.64 13.7198 14.64ZM33.0398 31.2H29.3598V26.6V24.3C29.3598 22.529 27.9108 21.08 26.1398 21.08C24.3688 21.08 22.9198 22.529 22.9198 24.3V31.2H19.2398V17.4H22.9198V19.0707C23.9944 18.0385 25.4517 17.4 27.0598 17.4C30.3626 17.4 33.0398 20.0772 33.0398 23.38V31.2Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                className="link"
                href="https://github.com/AlyeshaS"
                target="_blank"
              >
                <svg viewBox="0 0 40 39" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 0C8.955 0 0 8.86784 0 19.8053C0 29.0858 6.45333 36.8511 15.1533 39C15.06 38.7326 15 38.4223 15 38.0378V34.6527C14.1883 34.6527 12.8283 34.6527 12.4867 34.6527C11.1183 34.6527 9.90167 34.0701 9.31167 32.9874C8.65667 31.7843 8.54333 29.944 6.92 28.8184C6.43833 28.4438 6.805 28.0163 7.36 28.0741C8.385 28.3612 9.235 29.0577 10.035 30.0909C10.8317 31.1257 11.2067 31.3601 12.695 31.3601C13.4167 31.3601 14.4967 31.3188 15.5133 31.1604C16.06 29.7856 17.005 28.5197 18.16 27.9222C11.5 27.2439 8.32167 23.9628 8.32167 19.5083C8.32167 17.5904 9.14667 15.7353 10.5483 14.1724C10.0883 12.6209 9.51 9.45705 10.725 8.25222C13.7217 8.25222 15.5333 10.1766 15.9683 10.6965C17.4617 10.1898 19.1017 9.90267 20.825 9.90267C22.5517 9.90267 24.1983 10.1898 25.695 10.6998C26.125 10.1832 27.9383 8.25222 30.9417 8.25222C32.1617 9.4587 31.5767 12.6358 31.1117 14.1839C32.505 15.7436 33.325 17.5937 33.325 19.5083C33.325 23.9595 30.1517 27.2389 23.5017 27.9206C25.3317 28.8663 26.6667 31.5235 26.6667 33.5255V38.0378C26.6667 38.2094 26.6283 38.3332 26.6083 38.4801C34.4017 35.775 40 28.4471 40 19.8053C40 8.86784 31.045 0 20 0Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        ) : null}
        <div className="navbar" ref={navbar}>
          <img src={logo} alt="logo" class="logo"></img>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 30 30"
            className={`menu-icon ${menu ? "active" : false}`}
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
          </svg>
        </div>
      </>
    );
  }
}

export default Navbar;
