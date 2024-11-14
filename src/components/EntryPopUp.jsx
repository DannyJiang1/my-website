import React from "react";
import Skills from "./Skills";
import "./EntryPopUp.css";

function EntryPopup({
  title,
  role,
  link,
  skills,
  children,
  onClose,
  isTransitioning,
  isContentVisible,
}) {
  return (
    <div
      className={`main-box ${isContentVisible ? "visible-box" : "hidden-box"}`}
    >
      {/* Conditionally apply the transition animation */}
      <div
        className={`overlay ${
          isTransitioning ? "slide-transition" : "slide-reset"
        }`}
      ></div>

      {/* Conditionally show the top box and close button */}
      <div
        className={`top-box ${
          isContentVisible ? "visible-top-box" : "hidden-top-box"
        }`}
      >
        <div onClick={onClose} className="close-button">
          <i className="fas fa-times" />
        </div>
      </div>

      {isContentVisible && ( // Render content only when it's supposed to be visible
        <div style={{ padding: "20px", position: "relative" }}>
          <h2 className="title-text">{title}</h2>
          <h3 className="role-text">
            {role}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "10px" }}
              >
                <i className="fa-brands fa-github" />
              </a>
            )}
          </h3>
          <Skills skills={skills}></Skills>
          <div className="body-text">{children}</div>
        </div>
      )}
    </div>
  );
}

export default EntryPopup;
