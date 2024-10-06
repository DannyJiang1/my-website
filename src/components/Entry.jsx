import React from "react";
import "./Entry.css";

function Entry({ title, children, onClick }) {
  return (
    <div className="entry-box" onClick={onClick}>
      <h2 style={{ color: "inherit", fontSize: "24px", marginBottom: "10px" }}>
        {title}
      </h2>
      <div style={{ fontSize: "16px", color: "inherit" }}>{children}</div>
    </div>
  );
}

export default Entry;
