import React, { useState } from "react";
import EntryPopUp from "./EntryPopUp";

function Experiences() {
  const [showPopup, setShowPopUp] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleOpenPopUp = () => {
    setIsClosing(false);
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPopUp(false);
    }, 450); // Ensure this matches the CSS animation duration
  };

  return (
    <div>
      <button onClick={handleOpenPopUp}>Show Entry Popup</button>

      {showPopup && (
        <EntryPopUp
          title="Project 1"
          onClose={handleClosePopUp}
          isClosing={isClosing}
        >
          This project involved building a machine learning model that predicts
          stock prices based on historical data.
        </EntryPopUp>
      )}
    </div>
  );
}

export default Experiences;
