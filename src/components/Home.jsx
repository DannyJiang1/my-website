import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

function Home({ mobile }) {
  const [showText, setShowText] = useState(false);
  const [showCatCommand, setShowCatCommand] = useState(false);
  const [showActualHomePage, setShowActualHomePage] = useState(false);
  const CURSOR_CLASS_NAME = "custom-type-animation-cursor";
  const cat_delay = 1000;
  const homePage_delay = 3000;
  const navbarHeight = 80;

  useEffect(() => {
    setShowText(false);
    setShowCatCommand(false);
    setShowActualHomePage(false); // Reset state when component mounts

    // Disable scrolling
    document.body.style.overflow = "hidden";

    // Clean up to restore default scrolling behavior when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (showText) {
      // Show the second animation after a short delay
      const timer = setTimeout(() => {
        setShowCatCommand(true);
      }, cat_delay);

      return () => clearTimeout(timer); // Clean up the timer if the component unmounts
    }
  }, [showText]);

  useEffect(() => {
    if (showCatCommand) {
      // After the cat README.txt command is shown, wait for it to complete, then show the actual home page
      const timer = setTimeout(() => {
        setShowActualHomePage(true);
      }, homePage_delay);

      return () => clearTimeout(timer); // Clean up the timer if the component unmounts
    }
  }, [showCatCommand]);

  // Render the actual homepage if showActualHomePage is true
  if (showActualHomePage) {
    return (
      <div
        style={{
          backgroundColor: "black",
          height: `calc(100vh - ${navbarHeight}px)`,
          padding: "20px",
          color: "#4AF626",
          fontFamily: "'OCR A Std', sans-serif",
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          alignItems: mobile ? "flex-start" : "center",
          justifyContent: mobile ? "flex-start" : "space-between",
        }}
      >
        <div
          style={{
            flex: mobile ? "none" : 1,
            fontSize: "18px",
            maxWidth: "600px",
            marginBottom: mobile ? "auto" : "0",
          }}
        >
          <div style={{ paddingBottom: "20px" }}>
            <TypeAnimation
              cursor={false}
              sequence={["Hey! I am Danny Jiang."]}
              speed={200}
              style={{
                fontSize: "30px",
                color: "#4AF626",
              }}
              className={CURSOR_CLASS_NAME}
            />
          </div>
          <div style={{ paddingBottom: "20px" }}>
            <TypeAnimation
              cursor={false}
              sequence={[1000, "CS Student @ Michigan Engineering"]}
              speed={200}
              style={{
                fontSize: "14px",
                color: "#4AF626",
              }}
              className={CURSOR_CLASS_NAME}
            />
          </div>
          <div>
            <TypeAnimation
              cursor={false}
              sequence={[
                "I am very passionate about AI and ML, and I love building and exploring machine learning applications. Check out my projects and experiences!",
              ]}
              speed={75}
              style={{
                fontSize: "20px",
                color: "#4AF626",
              }}
              className={CURSOR_CLASS_NAME}
            />
          </div>
        </div>

        <div
          style={{
            flex: mobile ? "none" : 1,
            display: "flex",
            justifyContent: mobile ? "center" : "center",
            alignItems: "center",
            alignSelf: mobile ? "flex-end" : "center",
            width: "100%",
            paddingTop: "60px",
            paddingBottom: "60px",
          }}
        >
          <img
            src="https://via.placeholder.com/300"
            alt="Placeholder"
            style={{
              maxWidth: "300px",
              width: "100%",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          backgroundColor: "black",
          height: `calc(100vh - ${navbarHeight}px)`,
          padding: "20px",
          overflow: "hidden",
        }}
      >
        <div>
          <TypeAnimation
            cursor={false}
            preRenderFirstString={true}
            sequence={[
              "danny-jiang:~/ $ ",
              1500,
              "danny-jiang:~/ $ ls",
              1000,
              () => setShowText(true),
            ]}
            speed={50}
            className={CURSOR_CLASS_NAME}
            style={{
              fontSize: "14px",
              fontFamily: "'OCR A Std', sans-serif",
              color: "#4AF626",
            }}
          />
        </div>

        {/* Display this text when showText is true */}
        {showText && (
          <div
            style={{ color: "#4AF626", fontSize: "14px", marginTop: "20px" }}
          >
            about experiences projects README.txt
          </div>
        )}

        {showCatCommand && (
          <div style={{ marginTop: "20px" }}>
            <TypeAnimation
              cursor={false}
              preRenderFirstString={true}
              sequence={[
                "danny-jiang:~/ $ ",
                cat_delay + 500,
                "danny-jiang:~/ $ cat README.txt",
              ]}
              speed={50}
              style={{
                fontSize: "14px",
                fontFamily: "'OCR A Std', sans-serif",
                color: "#4AF626",
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
