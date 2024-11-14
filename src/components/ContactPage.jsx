import React from "react";
import "./ContactPage.css";
import ContactBackground from "./ContactBackground";
import ContactFull from "./ContactFull";

function ContactPage({ mobile }) {
  return (
    <div
      className="contact-container"
      style={{ color: "#4AF626", background: "black" }}
    >
      <ContactBackground />
      <h1 style={{ marginTop: "20px" }}>Contact Me!</h1>
      <p>
        Thanks for visiting my portfolio! If you have any questions or
        suggestions on how I should improve my site, feel free to fill out the
        form!
      </p>
      <ContactFull />
    </div>
  );
}

export default ContactPage;
