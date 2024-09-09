import React from "react";

function EntryPopup({ title, children, onClose }) {
  return (
    <div
      style={{
        position: "relative",
        width: "500px",
        border: "2px solid #4AF626",
        backgroundColor: "black", // Black background like a terminal
        color: "#4af626",
        fontFamily: "'OCR A Std', sans-serif",
        borderRadius: "0", // No rounded edges
        margin: "50px auto", // Center horizontally
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Optional: adds shadow for depth
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          backgroundColor: "#1a1a1a", // Slightly different color for the bar
          padding: "5px",
          borderBottom: "2px solid #4AF626",
        }}
      >
        {/* Close Button */}
        <div
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: "#4AF626",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          <i className="fas fa-times" />
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: "20px" }}>
        {/* Title */}
        <h2
          style={{
            color: "#4AF626",
            fontSize: "24px",
            marginBottom: "10px",
          }}
        >
          {title}
        </h2>

        {/* Content */}
        <div style={{ fontSize: "16px", lineHeight: "1.5" }}>{children}</div>
      </div>
    </div>
  );
}

export default EntryPopup;
