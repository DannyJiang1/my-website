import React, { useState } from "react";
import Entry from "./Entry";
import EntryPopup from "./EntryPopUp";

function Experiences() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <div>
      <button onClick={handleOpenPopup}>Show Entry Popup</button>

      {showPopup && (
        <EntryPopup title="Project 1" onClose={handleClosePopup}>
          This project involved building a machine learning model that predicts
          stock prices based on historical data.
        </EntryPopup>
      )}
    </div>
  );
}

export default Experiences;
