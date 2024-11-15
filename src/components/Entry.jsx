import React from "react";
import "./Entry.css";

function Entry({ title, children, onClick }) {
  return (
    <div id="entry-box" onClick={onClick}>
      <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>{title}</h2>
      <div style={{ fontSize: "16px" }}>{children}</div>
    </div>
  );
}

export default Entry;
