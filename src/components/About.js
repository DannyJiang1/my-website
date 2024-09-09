import React from "react";
import { useScramble } from "use-scramble";
import "./About.css";

function About() {
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
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
        height: `calc(100vh - ${navbarHeight}px)`,
        padding: "40px",
        fontFamily: "'OCR A Std', sans-serif",
        color: "#4AF626",
      }}
    >
      <div style={{ flex: 1, paddingRight: "20px" }}>
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
              href="https://www.linkedin.com/in/danny-jiang-812282234/"
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

      <div style={{ flex: 1, textAlign: "center" }}>
        <img
          src="https://via.placeholder.com/400"
          alt="Placeholder"
          style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
        />
      </div>
    </div>
  );
}

export default About;
