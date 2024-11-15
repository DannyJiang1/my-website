import React from "react";
import "./ContactPage.css";
import ContactBackground from "./ContactBackground";
import ContactFull from "./ContactFull";
import ContactForm from "./ContactForm";

function ContactPage({ mobile }) {
  return (
    <div className="contact-container">
      <ContactBackground />
      <h1 style={{ marginTop: "20px" }}>Contact Me!</h1>
      <p style={{ textAlign: "center" }}>
        Thanks for visiting my portfolio! If you have any questions or
        suggestions on how I should improve my site, feel free to fill out the
        form!
      </p>
      {mobile ? <ContactForm /> : <ContactFull />}
    </div>
  );
}

export default ContactPage;
