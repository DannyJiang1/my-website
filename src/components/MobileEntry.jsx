import React from "react";
import EntryBodyContainer from "./EntryBodyContainer";
import "./MobileEntry.css";

function MobileEntry({ title, children, onClick }) {
  return (
    <div className="entry-box-mobile" onClick={onClick}>
      <h2 style={{ color: "inherit", fontSize: "24px", marginBottom: "10px" }}>
        {title}
      </h2>
      <EntryBodyContainer>{children}</EntryBodyContainer>
    </div>
  );
}

export default MobileEntry;
