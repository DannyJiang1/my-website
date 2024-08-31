import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar({ setActivePage }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    const handleResize = () => {
      showButton();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <button
            className="navbar-logo"
            onClick={() => {
              setActivePage("home");
              closeMobileMenu();
            }}
          >
            <i className="fa-solid fa-house" />
            Home
          </button>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <button
                className="nav-links"
                onClick={() => {
                  setActivePage("about");
                  closeMobileMenu();
                }}
              >
                About Me
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-links"
                onClick={() => {
                  setActivePage("experiences");
                  closeMobileMenu();
                }}
              >
                Experiences
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-links"
                onClick={() => {
                  setActivePage("projects");
                  closeMobileMenu();
                }}
              >
                Projects
              </button>
            </li>
            <li className="nav-contact">
              <button
                className="nav-links-mobile"
                onClick={() => {
                  setActivePage("projects");
                  closeMobileMenu();
                }}
              >
                Contact Me
              </button>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Message Me</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
