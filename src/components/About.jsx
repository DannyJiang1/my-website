import React from "react";
import { useScramble } from "use-scramble";
import "./About.css";

function About({ mobile }) {
  const navbarHeight = 80;

  const { ref: aboutMeRef } = useScramble({
    text: "About Me",
    range: [33, 47],
    speed: 0.5,
    tick: 1,
    step: 5,
    scramble: 25,
    seed: 2,
    chance: 1,
    overdrive: false,
    overflow: false,
  });

  const { ref: backgroundTitleRef } = useScramble({
    text: "Background",
    range: [33, 47],
    speed: 0.5,
    tick: 1,
    step: 5,
    scramble: 25,
    seed: 2,
    chance: 1,
    overdrive: false,
    overflow: false,
  });

  const { ref: mlTitleRef } = useScramble({
    text: "Passion for Machine Learning",
    range: [33, 47],
    speed: 0.5,
    tick: 1,
    step: 5,
    scramble: 25,
    seed: 2,
    chance: 1,
    overdrive: false,
    overflow: false,
  });

  const { ref: backgroundRef } = useScramble({
    text:
      "I was born in the Czech Republic, which allowed me to connect with different " +
      "cultures from a young age. Growing up in a multicultural environment " +
      "helped me appreciate diversity and adaptability. Moving to the U.S. at 14 " +
      "came with its challenges, but it also opened up new " +
      "opportunities that shaped my passions and future path.",
    range: [65, 125],
    speed: 0.5,
    tick: 1,
    step: 5,
    scramble: 25,
    seed: 2,
    chance: 0.9,
    overdrive: false,
    overflow: false,
  });

  const { ref: mlRef } = useScramble({
    text:
      "My passion for machine learning started with a fascination for AI, " +
      "inspired by The Terminator and the idea of Skynet. While I don’t want " +
      "AI to control humanity, I’m excited about its potential to transform " +
      "industries and improve everyday life.",
    range: [65, 125],
    speed: 0.5,
    tick: 1,
    step: 5,
    scramble: 25,
    seed: 2,
    chance: 0.9,
    overdrive: false,
    overflow: false,
  });

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: `calc(100vh - ${navbarHeight}px)`, // Ensure the container covers the viewport
        padding: "40px",
        fontFamily: "'OCR A Std', sans-serif",
        color: "#4AF626",
        display: mobile ? "block" : "flex", // Flexbox for desktop, block layout for mobile
        justifyContent: mobile ? "initial" : "space-between", // Align items in desktop
        alignItems: mobile ? "initial" : "center", // Center items vertically in desktop
        overflowY: "auto", // Enable scrolling when content overflows
      }}
    >
      {/* Text section */}
      <div
        style={{
          flex: mobile ? "none" : 1,
          paddingRight: mobile ? "0" : "20px", // Add padding for desktop
          marginBottom: mobile ? "20px" : "0", // Add margin for mobile
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="page-title" ref={aboutMeRef} />
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <a
              href="/JIANG_CHENGSHUO_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-file-pdf link-icon" />
            </a>
            <a
              href="https://github.com/DannyJiang1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github link-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/jdanny/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin link-icon" />
            </a>
            <i className="fa-solid fa-envelope link-icon"></i>
          </div>
        </div>
        <p className="section-title" ref={backgroundTitleRef} />
        <p className="body-text" ref={backgroundRef} />
        <p className="section-title" ref={mlTitleRef} />
        <p className="body-text" ref={mlRef} />
      </div>

      <div
        style={{
          flex: mobile ? "none" : 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: mobile ? "20px" : "0",
        }}
      >
        <img
          src="Prague.png"
          alt="Prague"
          style={{
            maxWidth: "700px",
            width: "100%", // Make sure the image scales properly
            height: "auto",
            borderRadius: "8px",
          }}
        />
        <p
          style={{
            marginTop: "8px", // Add some space between the image and the caption
            color: "#4AF626", // Match the text color to the theme
            fontSize: "14px", // Adjust the font size as needed
            textAlign: "center", // Center the caption text
          }}
        >
          My Hometown Prague
        </p>
      </div>
    </div>
  );
}

export default About;
