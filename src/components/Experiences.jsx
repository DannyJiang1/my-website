import React, { useState } from "react";
import EntryPopUp from "./EntryPopUp";
import Entry from "./Entry";
import MobileEntry from "./MobileEntry";
import EntryBodyContainer from "./EntryBodyContainer";

function Experiences({ mobile }) {
  const [showPopup, setShowPopUp] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupTitle, setPopupTitle] = useState("");
  const [isContentVisible, setIsContentVisible] = useState(false); // Manage content rendering
  const [currID, setCurrID] = useState(-1);
  // Handles opening the popup with transition
  const handleOpen = (pTitle, pText, newID) => {
    setIsTransitioning(true); // Start the green box transition
    setShowPopUp(true); // Show the popup container (without content)

    setTimeout(() => {
      setPopupTitle(pTitle);
      setPopupText(pText);
      setCurrID(newID);
      setIsContentVisible(true); // Render content when the box is fully covered
    }, 500); // Show content after green box covers (1 second)

    setTimeout(() => {
      setIsTransitioning(false); // End transition after the box slides out
    }, 1000); // Complete after the green box slides out
  };

  // Handles closing the popup with transition
  const handleClose = () => {
    if (isTransitioning) return;
    setIsTransitioning(true); // Start the transition to cover the content with the green box

    setTimeout(() => {
      setCurrID(-1);
      setIsContentVisible(false); // Hide content when the box is fully covered
    }, 500); // Hide content after the green box covers it

    setTimeout(() => {
      setShowPopUp(false); // Fully close the popup after the green box slides out
      setIsTransitioning(false); // End transition
    }, 1000); // Complete after the green box slides out
  };

  // Handles transition between content
  const handleTransition = (newTitle, newText, newID) => {
    if (showPopup) {
      // If the popup is already open, do the transition
      if (newID === currID) return;
      if (isTransitioning) return;
      setIsTransitioning(true); // Start transition

      setTimeout(() => {
        setPopupTitle(newTitle);
        setPopupText(newText);
        setCurrID(newID);
        setIsContentVisible(true); // Update content
      }, 500); // Update content after green box covers it

      setTimeout(() => {
        setIsTransitioning(false); // End transition after the green box slides out
      }, 1000); // Complete after the green box slides out
    } else {
      // If the popup is not open, handle it like a normal open
      if (isTransitioning) return;
      handleOpen(newTitle, newText, newID);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: `calc(100vh - 80px)`,
      }}
    >
      {mobile ? (
        <div>
          <MobileEntry title={"SUSE"}>
            <h3>Inspiration</h3>
            <p>
              The inspiration behind the SIM project stemmed from the need to
              streamline transportation research. Researchers often faced the
              challenge of manually setting up complex driving scenarios, which
              was both time-consuming and tedious. The project aimed to create
              an intuitive platform that not only simplified scenario creation
              but also integrated automated driving simulations. This vision of
              reducing manual labor and increasing efficiency for researchers
              was the driving force behind the development of the platform.
            </p>
            <br></br>
            <h3>What it does</h3>
            <p>
              The project itself is a two-part system: one part focused on the
              scenario creator, and the other on the automated driving
              simulation. The scenario creator has both frontend and backend
              components. The frontend is a graphical user interface (GUI)
              designed to enable easy and intuitive scenario creation, while the
              backend handles the actual generation and rendering of the
              scenarios. The second component simulates automated driving,
              achieved through connecting a hardware wheel to Unreal Engine.
              This simulation uses a "wizard of oz" strategy, which gives the
              illusion of autonomous driving while human input is hidden behind
              the scenes.
            </p>
            <br></br>
            <h3>What I did</h3>
            <p>
              During my time on the project, I was responsible for refactoring
              the connection between the frontend UI and the backend generator,
              ensuring smooth communication and configuration handling. My work
              primarily involved managing the configuration flow by designing an
              API that handled data between the front and backend in Python.
              Additionally, I implemented a feature that allowed users to switch
              between third-person and first-person perspectives in the
              simulator, using C++ to integrate this feature. Alongside these
              technical tasks, I also managed a subteam, helping to coordinate
              work and motivate my peers.
            </p>
            <br></br>
            <h3>Challenges I ran into</h3>
            <p>
              The challenges I encountered primarily revolved around
              understanding the large, unfamiliar codebase. Without prior
              knowledge of the system, I had to invest significant time in
              learning the architecture step by step, which was initially
              overwhelming. Furthermore, I faced challenges within the subteam,
              where productivity issues and inconsistent attendance affected
              progress. However, I took on additional responsibilities and kept
              the team motivated, ensuring we met our goals.
            </p>
            <br></br>
            <h3>Accomplishments that I was proud of</h3>
            <p>
              I’m particularly proud of both my technical contributions and my
              leadership within the team. On the technical side, successfully
              refactoring the backend connection and implementing the
              perspective-switching feature were key milestones. Seeing the
              scenarios created and functioning as intended gave me immense
              satisfaction. Additionally, despite the team’s initial
              productivity struggles, I took on leadership responsibilities,
              stepping in when necessary, and helping the team deliver our tasks
              on time.
            </p>
            <br></br>
            <h3>What I learned</h3>
            <p>
              This project marked my first experience working with a large
              codebase and introduced me to critical software engineering
              concepts such as code reviews and testing. However, the most
              valuable lesson I took away from the project was the importance of
              communication. Throughout the project, I saw firsthand how a lack
              of communication hindered productivity, and I learned how strong
              communication can greatly improve team performance. Managing a
              subteam taught me how to keep everyone aligned and motivated,
              which will be a crucial skill moving forward in my career.
            </p>
          </MobileEntry>
          <MobileEntry title={"SUSE2"}></MobileEntry>
          <MobileEntry title={"SUSE2"}></MobileEntry>
          <MobileEntry title={"SUSE2"}></MobileEntry>
        </div>
      ) : (
        <div>
          <Entry
            title={"SUSE"}
            onClick={() => handleTransition("SUSE", "TEST pText1", 0)}
          >
            <h3>Software Engineer Intern</h3>
            <p>Jun. 2023 - Aug. 2023</p>
          </Entry>
          <Entry
            title={"University of Michigan SIM Multidisciplinary Research Team"}
            onClick={() =>
              handleTransition(
                "University of Michigan SIM Multidisciplinary Research Team",
                <>
                  <h3>Inspiration</h3>
                  <p>
                    The inspiration behind the SIM project stemmed from the need
                    to streamline transportation research. Researchers often
                    faced the challenge of manually setting up complex driving
                    scenarios, which was both time-consuming and tedious. The
                    project aimed to create an intuitive platform that not only
                    simplified scenario creation but also integrated automated
                    driving simulations. This vision of reducing manual labor
                    and increasing efficiency for researchers was the driving
                    force behind the development of the platform.
                  </p>
                  <br></br>
                  <h3>What it does</h3>
                  <p>
                    The project itself is a two-part system: one part focused on
                    the scenario creator, and the other on the automated driving
                    simulation. The scenario creator has both frontend and
                    backend components. The frontend is a graphical user
                    interface (GUI) designed to enable easy and intuitive
                    scenario creation, while the backend handles the actual
                    generation and rendering of the scenarios. The second
                    component simulates automated driving, achieved through
                    connecting a hardware wheel to Unreal Engine. This
                    simulation uses a "wizard of oz" strategy, which gives the
                    illusion of autonomous driving while human input is hidden
                    behind the scenes.
                  </p>
                  <br></br>
                  <h3>What I did</h3>
                  <p>
                    During my time on the project, I was responsible for
                    refactoring the connection between the frontend UI and the
                    backend generator, ensuring smooth communication and
                    configuration handling. My work primarily involved managing
                    the configuration flow by designing an API that handled data
                    between the front and backend in Python. Additionally, I
                    implemented a feature that allowed users to switch between
                    third-person and first-person perspectives in the simulator,
                    using C++ to integrate this feature. Alongside these
                    technical tasks, I also managed a subteam, helping to
                    coordinate work and motivate my peers.
                  </p>
                  <br></br>
                  <h3>Challenges I ran into</h3>
                  <p>
                    The challenges I encountered primarily revolved around
                    understanding the large, unfamiliar codebase. Without prior
                    knowledge of the system, I had to invest significant time in
                    learning the architecture step by step, which was initially
                    overwhelming. Furthermore, I faced challenges within the
                    subteam, where productivity issues and inconsistent
                    attendance affected progress. However, I took on additional
                    responsibilities and kept the team motivated, ensuring we
                    met our goals.
                  </p>
                  <br></br>
                  <h3>Accomplishments that I was proud of</h3>
                  <p>
                    I’m particularly proud of both my technical contributions
                    and my leadership within the team. On the technical side,
                    successfully refactoring the backend connection and
                    implementing the perspective-switching feature were key
                    milestones. Seeing the scenarios created and functioning as
                    intended gave me immense satisfaction. Additionally, despite
                    the team’s initial productivity struggles, I took on
                    leadership responsibilities, stepping in when necessary, and
                    helping the team deliver our tasks on time.
                  </p>
                  <br></br>
                  <h3>What I learned</h3>
                  <p>
                    This project marked my first experience working with a large
                    codebase and introduced me to critical software engineering
                    concepts such as code reviews and testing. However, the most
                    valuable lesson I took away from the project was the
                    importance of communication. Throughout the project, I saw
                    firsthand how a lack of communication hindered productivity,
                    and I learned how strong communication can greatly improve
                    team performance. Managing a subteam taught me how to keep
                    everyone aligned and motivated, which will be a crucial
                    skill moving forward in my career.
                  </p>
                </>,
                1
              )
            }
          >
            <h3>Student Software Engineer</h3>
            <p>Jan. 2023 - Jan. 2024</p>
          </Entry>
          <Entry
            title={"University of Michigan College of Engineering"}
            onClick={() =>
              handleTransition(
                "University of Michigan College of Engineering",
                "TEST pText1",
                2
              )
            }
          >
            <>
              <h3>Research Assistant</h3>
              <p>Jun. 2024 - Present</p>
            </>
          </Entry>
          {showPopup && !mobile && (
            <div
              style={{
                position: "fixed",
                top: "15%",
                left: "50%",
                width: "calc(100vw - 50px)",
              }}
            >
              <EntryPopUp
                title={popupTitle}
                onClose={handleClose}
                isTransitioning={isTransitioning}
                isContentVisible={isContentVisible}
              >
                <EntryBodyContainer>{popupText}</EntryBodyContainer>
              </EntryPopUp>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Experiences;
