import React from "react";
import "./EntryBodyContainer.css"; // Assuming you'll add styles in a CSS file

// Contains the scrollable body of an entry popup or mobile entry
function EntryBodyContainer({ children }) {
  return <div className="entry-body-container">{children}</div>;
}

export default EntryBodyContainer;
