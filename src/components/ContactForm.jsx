import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailError, setEmailError] = useState("");
  const [captchaValid, setCaptchaValid] = useState(false);

  const captchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValid(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(formData.email);
    if (isEmailValid) {
      const token = captchaRef.current.getValue();
      captchaRef.current.reset();
      alert("Form submitted successfully!");
    }
  };

  return (
    <div
      className="contact-form"
      style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => {
              handleChange(e);
              validateEmail(e.target.value);
            }}
            required
          />
          {emailError && (
            <p style={{ paddingTop: "5px", color: "red" }}>{emailError}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_SITE_KEY}
          onChange={handleCaptchaChange}
          ref={captchaRef}
        />
        <button type="submit" disabled={!captchaValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
