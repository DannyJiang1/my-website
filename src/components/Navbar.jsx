import React, { useState } from "react";
import { NavItem } from "./NavItem";
import "./Navbar.css";

function Navbar({ setActivePage, mobile }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavItem
            setActivePage={setActivePage}
            closeMobileMenu={closeMobileMenu}
            page="home"
            isMobile={false}
            def_text={"Home"}
            anim_text={"cd ~"}
          >
            <i className="fa-solid fa-house" />
          </NavItem>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavItem
                setActivePage={setActivePage}
                closeMobileMenu={closeMobileMenu}
                page="about"
                isMobile={mobile}
                def_text={"About Me"}
                anim_text={"cd about"}
              ></NavItem>
            </li>
            <li className="nav-item">
              <NavItem
                setActivePage={setActivePage}
                closeMobileMenu={closeMobileMenu}
                page="experiences"
                isMobile={mobile}
                def_text={"Experiences"}
                anim_text={"cd experiences"}
              ></NavItem>
            </li>
            <li className="nav-item">
              <NavItem
                setActivePage={setActivePage}
                closeMobileMenu={closeMobileMenu}
                page="projects"
                isMobile={mobile}
                def_text={"Projects"}
                anim_text={"cd projects"}
              ></NavItem>
            </li>
            <li className="nav-item">
              <NavItem
                setActivePage={setActivePage}
                closeMobileMenu={closeMobileMenu}
                page="contact"
                isMobile={mobile}
                def_text={"Contact Me"}
                anim_text={"curl"}
              ></NavItem>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
