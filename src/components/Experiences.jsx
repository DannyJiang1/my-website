import React, { useState } from "react";
import EntryPopUp from "./EntryPopUp";
import Entry from "./Entry";

function Experiences() {
  const [showPopup, setShowPopUp] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [PopupText, setPopupText] = useState("");
  const [PopupTitle, setPopupTitle] = useState("");

  const handleOpenPopUp = (pTitle, pText) => {
    // If the popup is already showing, close it first
    if (showPopup) {
      setIsClosing(true);
      setTimeout(() => {
        // Close the popup completely after the close animation finishes
        setShowPopUp(false);
        // After the popup is closed, open the new one
        openNewPopUp(pTitle, pText);
      }, 450); // Timeout matching the close animation duration (450ms)
    } else {
      // If no popup is open, directly open the new one
      openNewPopUp(pTitle, pText);
    }
  };

  const openNewPopUp = (pTitle, pText) => {
    setIsClosing(false);
    setPopupTitle(pTitle);
    setPopupText(pText);
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPopUp(false);
    }, 450);
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        height: `calc(100vh - 80px)`,
      }}
    >
      <div onClick={() => handleOpenPopUp("TEST pTitle1", "TEST pText1")}>
        <Entry title={"SUSE"}>Show Entry Popup</Entry>
      </div>
      <div onClick={() => handleOpenPopUp("TEST pTitle2", "TEST pText2")}>
        <Entry title={"SUSE2"}>Show Entry Popup</Entry>
      </div>
      {showPopup && (
        <EntryPopUp
          title={PopupTitle}
          onClose={handleClosePopUp}
          isClosing={isClosing}
        >
          {PopupText}
        </EntryPopUp>
      )}
    </div>
  );
}

export default Experiences;
