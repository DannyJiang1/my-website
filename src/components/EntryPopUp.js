import React from "react";
import "./EntryPopUp.css";

function EntryPopup({ title, children, onClose, isClosing }) {
  return (
    <div className={`main-box ${isClosing ? "slide-out" : "slide-in"}`}>
      <div className="top-box">
        <div onClick={onClose} className="close-button">
          <i className="fas fa-times" />
        </div>
      </div>
      <div style={{ padding: "20px" }}>
        <h2 className="title-text">{title}</h2>
        <div style={{ fontSize: "16px", lineHeight: "1.5" }}>{children}</div>
      </div>
    </div>
  );
}

export default EntryPopup;
