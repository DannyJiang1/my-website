import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

function Home({ mobile }) {
  const [showText, setShowText] = useState(false);
  const [showCatCommand, setShowCatCommand] = useState(false);
  const [showActualHomePage, setShowActualHomePage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            src="/my-picture.jpg"
            alt="Portrait"
            style={{
              maxWidth: "500px",
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              display: isHovered ? "none" : "block",
            }}
          />
          <div
            style={{
              width: "150ch",
              fontSize: "5px",
              display: isHovered ? "block" : "none",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            ::::::::::::::::::::::::::::::::::::::::;;;;;;;;;;;;++++xxxxxxxXXXXXXX$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$XX$X$XXXXXX$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
            X$$$$$XXX$$$$XXXXXXXX$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
            &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$&&$$$$&$$&$$$$$$$$$$$&&&&$$$$&$&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&&$&&$&&&&&&$&&&&&&&&&&&&&&&&&&&&$&&&&$&&&&&&&&
            $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&$$$$$$$&&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
            $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&$$$$$$$$$$$&&&&$&&$$$$$&&&&&&&&&&&&&&&&&&&&&&&&&$$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
            $&&&&&$$$$$$$$$$$$$$$&&&&&&&&&&&&&&&&&&&&&&&&&&$$&&&&&&&&&&&&&&&&&&&&&&&&&&$&&&&&&&&&&&&&&&&&&&&&&&$$$&$$&&&&&&&$&$&&$&$&&&&$&&&&&&&&&&&&&&&&&&&&&&&&&
            &&&&&&&&&&&&&&&$$$$$&&&&&&&&&&&&&&&&&&&&&&&&&&&$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$XxxX$&&&&&$$$$$$$$$$$$$&$$$$$$$&&$&&&&&&&&&&&&&&&&
            &&&&&&&&&&&&&$X;+::x$&&&&&&&&&&&&&&&&&&&&&&&&&&$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$:Xx::x$&&&&&&&$&$&&$&$&&&&$&&&&&&&&&&&&&&&&&&&&&&&&&
            &&&&&&&&&&&&&&X++::x$&&&&&&&&&&&&&&&&&&&&&&&&&&$$&&&&&&&&&&&&&&&&&&&&&&$$$&&&&$$$&&&&&&&&&&&&&&&&$$$$X$$&&&&&&&$$$$$$$$$$$&&&&&&&&&$$&&$&&&&&&$&&$$$&&
            &&&&&&&&&&&&&&&&$$$$&&&&&&&&&&&&&&&&&&&&&&&&&&&$$&&&&&&&&&&&&$&&&&&$$$X$$XX$XxXXXxX$&&&&&&&&&&&$$$&$$$$$$&&&$$$$$$$$$$$$&$$$$$&&$&&&$$$&$&$&&&&&&&$&&&
            &&&&&&&&&&&&&&&$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$$&&&&&&&&$$&$$&&&XXX$XX$XXxXXxxXXxxXxx$$&$$$$$&$&&&$$&&&&&&&&$$$&&&&&$&$&&&&$&&&&&&&$&&&&&&&&&&&&&&&&$
            &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$$&&&&&&&$X$$$XXX$XX$$XXXX$Xxxx++++Xxx++x$&$$$&&&&&&$$&&&&&&&$$$$$$$$$$$$$$&&&&&$$&&&$$$$$$$$$$$$&$$$&&
            &&&&&&&&&&&&&&&&&&&&&&&&&&$$$$$$&&&&&&&&&&&&&&&$$&&&$$$$$$$XXXXXx+xxxXXx++x;xx+++xxxx+x;;+X$$$$$$$$$$&&&&&&&&$$$$$$$$$$$$&&&&&&&&&&&$&$&&$&&&&&&&&&&&&
            &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$$&&$$XXXXXXxxxXXXx+xx++x;+x+xxXx+xx+xx+++;x++XX$$&$$$&&&&&&&&$$&&&&&&$&&&&&&$&&&&&&&$&&&&&&&&&&&&&$&&$
            &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$$$$XXXXXxxxxxxx+xxx;x+xxxxxXXXXxXxXxxx+++++xx+++xxXX$&&&&&&&$$&&&$&&&&&&$&&&&&&&&&&&$$&&&$&&&&&&&$$&&&
            &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$$XxXXXXxxXX$XxXXXXXXxxxxxXXxX$$X$$X$XXxx++x+x+xx++xxx$&&&&&$&$&&&&&&&&&&&&&&$&&&&&&&$$$&$&&&&$&&&$$$&$
            &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$XXxXxxxxXXX$X$$$XXxXXXXXXxXXx$$XX$$$$XXXxxxxxx+;xxxxx$$$&&&&$$$$$$$$$$$$$$&&&&&$&&&$$$&&&&&&&$&&&&&&&&
            &&$$&&&&&&&&&&&&&&&&&&&&&&&&&x;+$&&&&&&&&&&&&&&XxxXxxxxXXXxX$Xxx+xxxxXXxXXXxXx$$X$X$$$$$$XXXXXXxx+xxx$XX$&&&&$&&$$&&&&&&$&&&&&&$&&&&&&&&&$&&&&&&&$&&&&
            &$X$&&&&&&&&&&&&&&&&&&&&&$$&&+::X&&&&&$$&&&&&$Xxxxx+xXXXXX$Xx+;;++++xxxXX$XXXxxXXXXXXX$$$$X$XXX$XX+xxXXX$$&&$&&&&&&$&&&&&&&&&&&&&&&&&&&&&&&&&$&&&&&&&&
            &&X$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$XxxxxxxXXXXXXx;;;++++++xxXXX$X$$XXXxXXXXXX$X$$XX$X$$$XXXXXX$&&$$$&$&&&&&&&&&&&&&&&&&&&&&&$&$$$&$$$$$&&&&
            &&$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&XXxxxxxXX$XXXx+;;++;++xxxXXXX$$$$$$$$XXXXXXX$$$$$XX$X$X$XXX$$&&&$$&&$$$&&&&&&&&&&&&&&&&&&&&&&&&&&$$$$&&&&
            &&$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$&&&&&&$$XXXXxxXX$X$$Xx+;;+;;;+xXXXXXX$$$$$$$$$$XXXX$$$$$$$XXXX$XXXX$$$&&$&$$&&&&&&&&&&&&&&&&&&$$&&&&&&&&&&&&&&&&&
            &&$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&XX$&&$XX$$$XXXX$$$$$Xx++;;;+xxX$XXXXX$$$$$$$$$$$X$XX$$$$$$$XX$X$XXXXxXX&&&$$&&&&&&$&&&&&&&$&&&$$$$$$$&&&&$$$$&&&&
            &&$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&+;$&&$$$$X$X$$$X$$$XXx+;;:;+;X$XXxxxXxX$$$$$$$$$$$$$$XXXXXxXXX$$$XXX$$&$$&&&&&&&&&&&&&$&&&&&&&&&$$$&&&&$+::X&&&&&
            &&$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$$XXX$$X$$$$$Xx+;++++;XX+xxx++++xX$$$$$$$$$$$$$XXXXxxxXXX$$XXX$$$&&&$&&&&&&$$&&&&&&&&&&&&&&&&&&&$$$$&&&&$&
            &$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$$XX$$$X$$$$$Xx++++xxxXXXx+x+++xxXXX$&&&&&&&&$$$$XXXX$XXX$$X$$X$$&&&$&&&&&&&&&&&&&&&&&&$&$$$$&&&&&&&$&&&&&
            &$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$$$$$X$$$$$$$XXX$$XXXX$$$$$XXx+x+X$XxxxxxxxXXXX$$$$$$$$$$$$$$$$$$$&&$&&&&&&&&&&&&&&&&&&&&&&&X$$&&&&$$&&&$&&&&
            &$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&X&&$$$$$X$$$X+;;++;+++xxX$X$XX$Xxxxx++xxxxxxXXX$&$$$$$$$$$$$$$&$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$&&&&&&&&&
            &$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$$X$$$X$$$Xx+++xxxXxxxxx$$$&$$+xxxxX$$X$Xxxxxx$$$$&&&$$$$$$$$$&&&&&&&&&&&&&&&&&&+;X&&&&&&&$&$&&$&&&&&&&&&$
            &$$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$&$&&&&&&$$$$$XX$Xx++xXx+xXX$xX+$XXXX$x+xXx$$$xxXXxxx+$$X$&&&&&$$$$$&&&&&&&&&&&&&&&&&&&&$$&&&&&&&&&&&&&&$&&&&&&$&$
            &$$$&&&&&&&&&&&&&&&&$$&&&&&&&&&&&&&&&&&&&&&&$&$$$&&&$X+;;x+;;;+++++;Xxx+x$;;++++++;;+xXxx+$xxX&&&$$$XX$$&&&&&&$$&&&&&&$$$$&&&&&&&&&&&&&$$$$$$$x+$&$&&$
            &$$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$$$&&&&xxx+;;:;;;;;;;+X+;:;XX;;;;;+;;;:;;++xX+xx$$$$$XXX$&&&&&&$$&&&&&&&&&&&&&&&&&&$$&&$$$$$$$$$$$$$$&&$
            &$$$$$$$$$$$$$$$$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$$$&&XX;;:::::::::;+$x;;:;;$x;;;;;;:::::;xX;;;xX$$$++x$$X$$$$&&&&&&&&&&$&&&&&&&&&&&$&$$$$$$$$$$$$$$$&&$
            &$$$XXX$$$$$$$$$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$$$$$++X;::::::::;+Xx+;::;;;XX+;:;;;;;;;xx;;;;+$$$Xx;x$$$$$$$$$$&&$$$$&$$$$$$&$$$$$X$$$$$$$$$$$$$$$$&$$
            $$$$$$$$XXXX&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&X$&$+;;;X$XxxxxXXXx++;::::;;;+xXX$$$$XXx;;;;;;xX+;+;:X$&$$$&$$$$$$$$$$$$$$$$$$&$$$$$$$$$$$$$$$$$$$$$&$$
            $&$$XXXX$$$$$&$$&&&&&&&&$$$$$&&&&&&&&X&&&&&&&&&$$&$;;;;;:::::::;;;;;;;:::;;::;;+;;::::;;;;;;+xx;;:;;&&&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&$$
            $&$$$$$$$$$$&&&&&&&&&&&&&&&$$&&&&&$&&&&&&&&&&&&$$&&:;;;;;;;;;;+++;;+++++++;;;+;;+++;;;;;;++++++;;;:X&&$$&$$$$$$$$$$$$$$$$$$$$$X$$$$$$$$$$$$$$$$$$$$&$$
            $&$$$$$$$$$$&&&&&&&&&&&$$$$$&&&&&&$&&&&&&&&&&&&$$&&;;+++;;;+++;;++xxxx+xxxxx+;;;;;++++++++++++;:::;&&&&&&$$$$$$$$$$$$$XX$$$$$$$$$$$$$$$$$$$$$$$$$$$&$$
            $&$$$$$&&&&&&&&&&&&&&&$$$&&&&&&&&&&&&&&&&&&&&&&$$&$+;++++x++;;;+++++++++;:::::;;::;;;+++++++++;;;x&&&&&&&&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&$$
            $&$&&&$$$$$$$$$&&&&&&&&$$&&&&&&&&&&&&&&&&&&&&&&$$&&&X;++x++;;;;;;;++;;;;:;;;;;;;;;:;;++++;;+X&&$$$&&&&&&&&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
            $&$&&&&&&&&&&&&&&&&&&&&&&$$$$&&$&&&&&&&&&&&&&&&$$&&$$+++++;;;;;;++++++++++xxxxx++;;;;;;;;;++&&$$$$&&$$&&&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
            $&$$$$$$$$$$$$$$$&&&&&&&&&&&&&$$$$$&&&&&&&&&&&$$&&&$$x;+++++;+x$x+;;;;+;;;;+++;:;;;;;;;;;++X&$$$$$&&$$&&&$$XXXXX$$$$$$$$$$$$$$$$$$$XXX$$$$$$$$$$$$&$$$
            $&$&&&&$&&&&&$$&&&&$&&&&&&&&&&$$$&&&&&&&&&&&&&$$&&&$&&+++++++;;;++++++;+;;;;;;;;;+;+;;;++++&&$$&$$&&&&$&&$$$$$$X$$XX$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&$$$
            $&$&&&&$&&&&&$$&&&&$$$$$&&&&&&$&&&&$&$&&&&&&&&$$&&$$&&$++++++++++;;;;;++;;;;;+;++;++++++++&&$X$&$$$Xx+xX$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$X$&$$$
            $&$&&&&$&&&&&$&&&&&$$$$$$$$$$$$$$&$$$$&&&&&&&&$$&$$$$$$Xx+++++++++++;;;;;;;;;;;;;;++++++x+$X&&&$$$$$XXX$$$$X$XX$$$$$$$$$$$$$$$$$$$$X$$$$$$$$$$$$X$&$$$
            $&$$&&&&&&$$&&&&&&&$$$$$$$XXXXX$$$$$$$&$&&&&$$$$$&$$$$$&$x++++;++++++;;;;;;;;;;;;;;;+++x+;XX$$$$$$$$$&&&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&&$X$
            $&$$&&&&&&&&&&&&&&&$$$$$$$$&$$$$$$$$X$&&&&$$$$$$&&$$$$$$$$x++++;;+++++++;+;+;;;;;;;;++x+;;X$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$X$$$$$$$$$$$$&$$X$
            $&&&&&&&&&&&&&&&&&&&$$$&$$&&$$$X$$XXXX$XX$$$$$$$&&$$$$$$$$$x++++;;;;+++++;;;;;;;;;++xx+;;;x$$X$$$$$XXXXX$$$XX$$$$$$$$$$$&$$$$$$$$$XXX$$$$$$$$XX$$&$$$$
            $$$XXXXx+++x++;;;+++xxxXXXXXXXXX$XX$$$$$$$$$$$$$$$$$$$$$$$$x++++;;;;++++;;;;;;;;;+xxx+;;;;+XXX$$$XXXXXXX$$$XXxXXXXXxxxX$$$$$$$$$$$XXX$$$X$$$$$$$$$$$$$
            $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$X++x++;;;;+++++;;;;;+xxxx;;;;;;:$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
            $&&$&&&&&&&$$&&&&&&&&&&&&&&&&$$$$$$$$$&&&&&&&&&$&&$$$$$$$$&$;+++x+++++++++++xxxxxx+;;;;;;;;:;x$XXX$$$$$$$&&$$&$&&&&&&&&&&&&&&&&&$$$$$$$$$$$$$$$$&&$$$$
            $&&$$&&&&&&&&&&&&&&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&$&$&::::::x++++++xxxxxxxxxxxxxx+;;;;;;;;;;::::::XXxx+XXX$$$$$$$$$$$$$$$$$$$$$$$$$X$$$$$$$$$$$$$$&$X$$
            $$&&&$$$$$$$$$$X$$$$$$$$$$$$$$$$$$$$XX$$$$$$$$$$&$$$X;::::X$++++++++xxxxxxxxxx+;;;;;;;;;;;;;;;:::$$XXXXXXXXX$X&&&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&&$X$$
            $$&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$X::+$$$Xx+x&+:;++++++++++++xxxx;;+;;;;;;;;;;;;;;;;x$$$$XX$XXXXXXXxX$X$&$$$$$$$$$$$$$$$$$$$$$$X$$$$&$$X$x
            $$&&&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$XXXXX$XX$$+:::::XxXXXXX;;;++++++++++x+xx+++++;;;;;;;;;;;;;;;X$$$$$$$$$$$$$$XXXXxxxXX$$$$$$$$$$$$$$$$$$$$$$$$$&$$X$;
            $$&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$XXXXXXXX;::;X$XXXX$XX+;;++++++++++++x++++++;;;;;;;;;;;;;+$$$$$$$$$$$$$$$$$$$$XXXxxx+xX$$$$$$X$$$$$$$$$$$$$$&$$X$:
            $$&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$XXXXXXXXXXXXXxxX$$$$$$$$$$x++++++++++++xxxxx++++;;;;;++;;;;;x$$$$$$$$$$$$$$$$$$$$$$$XXXXXXxx+xx$$$X$$$$$$$$$$$$$&$$Xx:
            $$&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$XXXXXXXXXXXX$$$$$$$$$$$$$$$++++++++++++++xx++++++++++++;;;X$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$XXXXxxx+xXX$$$$$$$$$$$&&$XX::
            $$&$$$$$$$$$$$$$$$$$$$$$$$$$$$$XXXXXXXXxXX$$$$$$$$$$$$$$$$$$+;++++++++++++++++++++++++++$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$XXXxxxxX$$$$$$$$$$&&$XX::
            $$&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$XXXxXXXX$$$$$$$$$$$$$$$$$$$X++++++++++++xxx++++++++x$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$XXXXXxxxX$$$$$$$$&&$X+:;
            $$&$XXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxXxXXX$$$$$$$$$$$$$$$$$$$$$$Xxxxx+++++++x+++++xX$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$XXX$$XXXxx$$$$$$$&&$X::+
            $$&$$$$$$$$$$$$$$$$$$$$XXXXXXXXxXXXXX$$$$$$$$$$$$$$$$$$$$$$$$&&&&$$XXxxxXXX$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$XXXXX$$$$$&&$x::x
            ;;;:::::::::::::::::::::::::::xxXXXX$$$$$$$$$$$$$$$$$$$$$$$$$$$$&&&&&&&&&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$XXXXX$$$&&&$;:+x
            ::::::::::::::::::::::::::::::+XXXXXX$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$X$XXX$$&&&X::xx
            ::::::::::::::::::::::::::::::;$$$X$$$$$$$$$$$$$$$$$$&&&$$$&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$XX$$XXX$&&+:;xX
            :::::::::::::::::::::::::::::::$$$$$$$$$$$$$$$$$$$$$$&&&&&&&&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&$$$$$$$$$$X$$$X$X$&::xxx
            :::::::::::::::::::::::::::::::X$$$$$$$$$$$$$$$$$$&&&&&&&$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&&$$$$$$$$$$$$$$&$XX::xxx
            :::::::::::::::::::::::::::::::+$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&&$$$$$$$$$$$$$&&$$::+xxx
            ::::::::::::::::::::::::::::::::;X$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&&$$$$$$$$$$$$$&&$$+:+xxx
          </div>
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
