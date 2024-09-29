import React from "react";
import "./EntryPopUp.css";

function EntryPopup({
  title,
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
          <div style={{ fontSize: "16px", lineHeight: "1.5" }}>{children}</div>
        </div>
      )}
    </div>
  );
}

export default EntryPopup;
