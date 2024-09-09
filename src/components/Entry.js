import React from "react";

function Entry({ title, children }) {
  return (
    <div
      style={{
        border: "1px solid #4AF626",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ color: "#4AF626", fontSize: "24px", marginBottom: "10px" }}>
        {title}
      </h2>
      <p style={{ fontSize: "16px", color: "#fff" }}>{children}</p>
    </div>
  );
}

export default Entry;
