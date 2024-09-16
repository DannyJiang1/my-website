import React from "react";
import "./Entry.css";

function Entry({ title, children, onClick }) {
  return (
    <div className="entry-box" onClick={onClick}>
      <h2 style={{ color: "#4AF626", fontSize: "24px", marginBottom: "10px" }}>
        {title}
      </h2>
      <p style={{ fontSize: "16px", color: "#4AF626" }}>{children}</p>
    </div>
  );
}

export default Entry;
