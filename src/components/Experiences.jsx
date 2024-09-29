import React, { useState } from "react";
import EntryPopUp from "./EntryPopUp";
import Entry from "./Entry";

function Experiences() {
  const [showPopup, setShowPopUp] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupTitle, setPopupTitle] = useState("");
  const [isContentVisible, setIsContentVisible] = useState(false); // Manage content rendering

  // Handles opening the popup with transition
  const handleOpen = (pTitle, pText) => {
    setIsTransitioning(true); // Start the green box transition
    setShowPopUp(true); // Show the popup container (without content)

    setTimeout(() => {
      setPopupTitle(pTitle);
      setPopupText(pText);
      setIsContentVisible(true); // Render content when the box is fully covered
    }, 1000); // Show content after green box covers (1 second)

    setTimeout(() => {
      setIsTransitioning(false); // End transition after the box slides out
    }, 2000); // Complete after the green box slides out
  };

  // Handles closing the popup with transition
  const handleClose = () => {
    if (isTransitioning) return;
    setIsTransitioning(true); // Start the transition to cover the content with the green box

    setTimeout(() => {
      setIsContentVisible(false); // Hide content when the box is fully covered
    }, 1000); // Hide content after the green box covers it

    setTimeout(() => {
      setShowPopUp(false); // Fully close the popup after the green box slides out
      setIsTransitioning(false); // End transition
    }, 2000); // Complete after the green box slides out
  };

  // Handles transition between content
  const handleTransition = (newTitle, newText) => {
    if (showPopup) {
      // If the popup is already open, do the transition
      if (isTransitioning) return;
      setIsTransitioning(true); // Start transition

      setTimeout(() => {
        setPopupTitle(newTitle);
        setPopupText(newText);
        setIsContentVisible(true); // Update content
      }, 1000); // Update content after green box covers it

      setTimeout(() => {
        setIsTransitioning(false); // End transition after the green box slides out
      }, 2000); // Complete after the green box slides out
    } else {
      // If the popup is not open, handle it like a normal open
      if (isTransitioning) return;
      handleOpen(newTitle, newText);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        height: `calc(100vh - 80px)`,
      }}
    >
      <div onClick={() => handleTransition("TEST pTitle1", "TEST pText1")}>
        <Entry title={"SUSE"}>Show Entry Popup</Entry>
      </div>
      <div onClick={() => handleTransition("TEST pTitle2", "TEST pText2")}>
        <Entry title={"SUSE2"}>Show Entry Popup</Entry>
      </div>
      {showPopup && (
        <EntryPopUp
          title={popupTitle}
          onClose={handleClose}
          isTransitioning={isTransitioning}
          isContentVisible={isContentVisible} // Pass the content visibility state
        >
          {popupText}
        </EntryPopUp>
      )}
    </div>
  );
}

export default Experiences;
