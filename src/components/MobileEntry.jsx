import React from "react";
import EntryBodyContainer from "./EntryBodyContainer";
import Skills from "./Skills";
import "./MobileEntry.css";

function MobileEntry({ title, role, date, skills, children, onClick }) {
  return (
    <div className="entry-box-mobile" onClick={onClick}>
      <h2 style={{ color: "inherit", fontSize: "24px", marginBottom: "10px" }}>
        {title}
      </h2>
      <h3 className="role-text">{role}</h3>
      <p className="date">{date}</p>
      <Skills skills={skills}></Skills>
      <EntryBodyContainer>{children}</EntryBodyContainer>
    </div>
  );
}

export default MobileEntry;
