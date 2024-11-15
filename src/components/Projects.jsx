import React, { useState } from "react";
import EntryPopUp from "./EntryPopUp";
import Entry from "./Entry";
import MobileEntry from "./MobileEntry";
import EntryBodyContainer from "./EntryBodyContainer";

function Projects({ mobile }) {
  const [showPopup, setShowPopUp] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [popupTitle, setPopupTitle] = useState("");
  const [popupRole, setPopupRole] = useState("");
  const [popupSkills, setPopupSkills] = useState([]);
  const [popupLink, setPopupLink] = useState("");
  const [isContentVisible, setIsContentVisible] = useState(false); // Manage content rendering
  const [currID, setCurrID] = useState(-1);
  // Handles opening the popup with transition
  const handleOpen = (pTitle, newRole, newLink, newSkills, pText, newID) => {
    setIsTransitioning(true); // Start the green box transition
    setShowPopUp(true); // Show the popup container (without content)

    setTimeout(() => {
      setPopupTitle(pTitle);
      setPopupText(pText);
      setCurrID(newID);
      setPopupRole(newRole);
      setPopupSkills(newSkills);
      setPopupLink(newLink);
      setIsContentVisible(true);
    }, 500);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  const handleClose = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrID(-1);
      setIsContentVisible(false);
    }, 500);

    setTimeout(() => {
      setShowPopUp(false);
      setIsTransitioning(false);
    }, 1000);
  };

  const handleTransition = (
    newTitle,
    newRole,
    newLink,
    newSkills,
    newText,
    newID
  ) => {
    if (showPopup) {
      if (newID === currID) return;
      if (isTransitioning) return;
      setIsTransitioning(true);

      setTimeout(() => {
        setPopupTitle(newTitle);
        setPopupText(newText);
        setCurrID(newID);
        setPopupRole(newRole);
        setPopupSkills(newSkills);
        setPopupLink(newLink);
        setIsContentVisible(true);
      }, 500);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    } else {
      if (isTransitioning) return;
      handleOpen(newTitle, newRole, newLink, newSkills, newText, newID);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: mobile ? "auto" : `calc(100vh - 80px)`,
        height: mobile ? "100%" : "auto",
        overflowY: mobile ? "auto" : "hidden",
      }}
    >
      {mobile ? (
        <div>
          <MobileEntry
            title={"ASL Battle"}
            role={"Multiplayer Gamified ASL Learning"}
            link={"https://github.com/DannyJiang1/xr_midwest_server"}
            date={"Oct. 2024 - Oct. 2024"}
            skills={["Unity", "Express", "SocketIO"]}
          >
            <p>
              DevPost Link:
              <br />
              <a
                href="https://devpost.com/software/asl-battle"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                https://devpost.com/software/asl-battle
              </a>
            </p>
            <br />
            <h3>Inspiration</h3>
            <p>
              Learning a visual language like American Sign Language (ASL) can
              be intimidating, especially for beginners unfamiliar with its
              unique gestures and expressions. The inspiration for this project
              comes from our passion to create an interactive learning
              experience that introduces players to ASL in a fun and engaging
              way. We wanted to make learning ASL more accessible by blending
              education with exciting gameplay. Through this project, we aim to
              not only teach players ASL but also foster a deeper connection to
              the culture it represents, promoting inclusion and meaningful
              communication that extends beyond just the game.
            </p>
            <br />
            <h3>What it does</h3>
            <p>
              The game offers two modes: Singleplayer and Multiplayer. In both
              modes, letters of the English alphabet are displayed one at a
              time, and players attempt to perform the corresponding ASL hand
              signs. If a player is unsure of a hand sign, the system provides
              guidance with the correct gesture. In Singleplayer, points are
              awarded for each correct sign. In Multiplayer, two players race to
              see who can complete 10 letters first, though this number can be
              adjusted.
            </p>
            <br />
            <h3>What I did</h3>
            <p>
              The project was developed in Unity, incorporating Meta's
              Interaction SDK. I worked majorly on the multiplayer component, a
              central API server was implemented using Express.js, with
              Socket.IO facilitating real-time communication between the player
              devices and the server.
            </p>
            <br />
            <h3>Challenges I ran into</h3>
            <p>
              Throughout the development of ASL Battle, we encountered several
              challenges. One of the key issues was UI rendering, as ensuring
              smooth and intuitive visual element placements required a lot of
              trial and error. Additionally, implementing Passthrough in Unity
              presented difficulties in getting it to successfully work. I also
              faced difficulties with limited resources when connecting Unity to
              the Express server through Socket.IO, requiring me to thoroughly
              go through the documentation of barely maintained plugins.
              Finally, networking posed a challenge, particularly in connection
              issues between the server and player despite being on the same
              network.
            </p>
            <br />
            <h3>Accomplishments that I’m proud of</h3>
            <p>
              I am especially satisfied with the custom gesture detection we
              implemented for all the ASL alphabet letters. This was a key
              aspect of making the game both fun and educational, and it felt
              great to see it working smoothly. Additionally, integrating the
              multiplayer system and ensuring it functioned in real-time was
              another significant accomplishment, particularly in overcoming the
              technical challenges that came with networking and communication.
            </p>
            <br />
            <h3>What I learned</h3>
            <p>
              I learned how to build a real-time multiplayer system with Unity
              and websockets, which was a major technical milestone for us.
              Additionally, working with Meta's Interaction SDK for mixed
              reality development helped me understand the complexities and
              potential of creating immersive, interactive experiences. These
              tools taught me valuable skills that we'll be able to apply in
              future projects, and they deepened our understanding of game
              development, hand gesture recognition, and multiplayer
              architecture.
            </p>
          </MobileEntry>
          <MobileEntry
            title={"Stock Market Price Predictor"}
            role={"Fullstack ML Stock Price Predictor"}
            link={"https://github.com/DannyJiang1/Stock_price_predictor"}
            date={"May 2024 - Present"}
            skills={["Python", "TensorFlow", "React", "Flask"]}
          >
            <h3>Inspiration</h3>
            <p>
              The unpredictable nature of financial markets has always intrigued
              me. I wanted to explore how machine learning could help forecast
              stock price movements by analyzing both technical indicators and
              macroeconomic factors. My goal was to build a tool that empowers
              users to make informed investment decisions by leveraging
              historical data and advanced predictive models.
            </p>
            <br />
            <h3>What it does</h3>
            <p>
              This project provides users with predictions of future stock price
              movements based on historical data and macroeconomic indicators.
              Through the React frontend, users can enter stock tickers and
              receive predictions powered by the LSTM model on the backend. The
              model processes multiple inputs, including technical indicators
              and economic trends, to forecast the stock's movement. It offers
              an interactive way for users to experiment with predictions and
              gain insights into potential market behavior, facilitating
              data-driven decision-making.
            </p>
            <br />
            <h3>What I did</h3>
            <p>
              I developed a robust LSTM-based machine learning model for
              predicting stock price movements. The model incorporates advanced
              technical indicators such as moving averages and RSI, along with
              macroeconomic factors like interest rates, unemployment rates, and
              consumer sentiment. I built the model on the backend using Flask
              and integrated it with a React-based frontend to create a seamless
              user interface for interaction. To support the model’s operations,
              I implemented a data preprocessing pipeline that collects
              historical stock data using the Yahoo Finance API and
              macroeconomic data from the FRED API. I ensured consistent data
              handling by designing a feature scaling and transformation process
              used during both the training and prediction phases. Additionally,
              I automated the model’s training, saving, and loading processes,
              making the workflow efficient and production-ready.
            </p>
            <br />
            <h3>Challenges I ran into</h3>
            <p>
              One of the most challenging aspects was managing inconsistencies
              between data formats from different APIs, which required
              additional preprocessing. Designing a scalable architecture
              capable of incorporating both technical indicators and
              macroeconomic factors without causing the model to overfit also
              proved difficult. Balancing training time with model accuracy on
              large datasets required thoughtful optimization. Another
              significant challenge arose when attempting to predict the latest
              day’s stock movement, as opposed to just backtesting with
              historical data. Predicting the latest day meant that the 'last
              price movement' value was inherently unknown and appeared as a
              NaN, representing tomorrow's price. To handle this, I had to
              modify my function to account for the missing value and ensure the
              prediction remained accurate even without the final movement.
              Integrating the Flask backend with the React frontend brought
              further challenges in ensuring seamless communication between both
              components, which required additional debugging and refinement to
              streamline the user experience.
            </p>
            <br />
            <h3>Accomplishments that I’m proud of</h3>
            <p>
              I am proud of successfully integrating multiple data sources into
              a unified model that ensures smooth data flows without sacrificing
              accuracy. Developing a complete and scalable pipeline for
              automating feature engineering, training, and inference
              demonstrated the effectiveness of my workflow. Building an
              intuitive frontend in React that interacts efficiently with the
              Flask backend also stands out as a major achievement.
              Additionally, I achieved a 53% accuracy in predicting stock price
              movement direction, which shows the potential for future
              refinement. Finally, I gained deeper insights into time-series
              forecasting and the influence of macroeconomic factors on stock
              behavior.
            </p>
            <br />
            <h3>What I learned</h3>
            <p>
              This project emphasized the importance of proper data
              preprocessing and feature engineering for financial data. I
              learned how to handle inconsistent data formats and missing values
              when integrating multiple APIs. Developing the model highlighted
              the value of combining technical indicators with macroeconomic
              factors for improved prediction accuracy. I also gained valuable
              experience in full-stack development by integrating Flask with
              React and ensuring smooth frontend-backend communication. Finally,
              addressing the challenge of predicting the latest day’s price
              taught me how to handle missing values gracefully, reinforcing the
              importance of adaptability in machine learning workflows.
            </p>
          </MobileEntry>
          <MobileEntry
            title={"Nail Biting Detector"}
            role={"Real-time Detector For Nail Biting"}
            link={"https://github.com/DannyJiang1/Nail_Biting_Detector"}
            date={"May 2024 - Present"}
            skills={["Python", "TensorFlow", "OpenCV"]}
          >
            <h3>Inspiration</h3>
            <p>
              The inspiration behind this project came from the challenge of
              addressing subconscious behaviors, such as nail-biting, which many
              people struggle to recognize in themselves. Nail-biting is a habit
              that often goes unnoticed, and developing awareness is the first
              step toward breaking it. This project aims to provide a practical
              solution by leveraging technology to detect when someone is biting
              their nails, making it easier for them to become conscious of the
              habit and eventually reduce it.
            </p>
            <br />
            <h3>What it does</h3>
            <p>
              The nail-biting detector identifies when a person in front of the
              camera is biting their nails. It continuously captures video input
              through the camera, processes it using a convolutional neural
              network or CNN, and triggers a notification whenever nail-biting
              is detected. By offering real-time feedback, the system helps
              users recognize and address their habit as it occurs.
            </p>
            <br />
            <h3>What I did</h3>
            <p>
              I used OpenCV to create a preprocessing pipeline that processes
              the live camera input before it is analyzed by the CNN model. The
              preprocessing pipeline scales, crops, and normalizes frames,
              ensuring consistent data for real-time detection. To train the
              CNN, I built my own dataset by asking friends and people around me
              to take pictures of themselves both biting and not biting their
              nails. This was a rewarding experience, as I gained hands-on
              experience in data collection and curated a dataset tailored
              specifically for this problem.
            </p>
            <br />
            <h3>Challenges I ran into</h3>
            <p>
              One major challenge was collecting enough training data to ensure
              the model could generalize effectively. Because I relied heavily
              on my personal friend group which introduced an inherent bias into
              the model towards Asians. This bias meant that the model might not
              perform as well with individuals of other ethnicities.
              Additionally, I encountered technical challenges in handling
              variations in lighting, camera angles, and positioning, which
              impacted detection accuracy. Overcoming these challenges required
              tuning the CNN and carefully testing the model to reduce false
              positives and negatives.
            </p>
            <br />
            <h3>Accomplishments that I’m proud of</h3>
            <p>
              I am proud of successfully building a tool that addresses a
              meaningful problem faced by myself and others. Creating a robust
              preprocessing pipeline using OpenCV allowed the system to process
              live video input efficiently, making real-time detection possible.
              Additionally, gathering my own dataset from scratch was a
              significant accomplishment that gave me practical experience in
              data collection. Finally, developing a CNN-based solution that
              performs well under various conditions reinforced my confidence in
              applying machine learning to real-world challenges.
            </p>
            <br />
            <h3>What I learned</h3>
            <p>
              This project taught me the importance of data diversity and how
              biases in training data can affect model performance. I also
              gained valuable experience in using OpenCV for preprocessing live
              camera input and training CNNs for behavioral recognition tasks.
              Working with real-world data showed me how factors such as
              lighting and camera angles can influence results, emphasizing the
              need for robust models. Ultimately, this project highlighted how
              machine learning can promote positive change by increasing
              awareness of subconscious behaviors and helping users develop
              healthier habits.
            </p>
          </MobileEntry>
          <MobileEntry
            title={"AR Mindfulness Tree App"}
            role={"Task Manager Wellness App"}
            link={"https://github.com/Alternate-Reality-Initiative/WellnessApp"}
            date={"Nov. 2022 - May 2023"}
            skills={["Unity", "Git", "SQL"]}
          >
            <h3>Inspiration</h3>
            <p>
              The inspiration for this project comes from the desire to blend
              technology and wellness, creating a unique way to motivate users
              to complete daily tasks through the immersive medium of Augmented
              Reality. The idea was to design a task manager that not only keeps
              users organized but also provides a visual representation of their
              progress. By projecting models of trees onto their palm and
              allowing users to grow these trees by completing wellness-based
              tasks, the application fosters a sense of accomplishment and
              encourages healthy habits. The ability to set custom tasks and
              track progress with persistent storage enhances the overall user
              experience.
            </p>
            <br />
            <h3>What it does</h3>
            <p>
              This AR-based task manager allows users to project models of trees
              onto their palm, representing their task progress. Users complete
              wellness-based tasks, like simple exercises or hydration
              reminders, to water and grow their trees. The application also
              enables users to set and track their own tasks, offering a
              customizable experience. A persistent SQL-based user-data storage
              system keeps track of each user's trees and their growth levels,
              ensuring that progress is saved even after the application is
              closed and reopened.
            </p>
            <br />
            <h3>What I did</h3>
            <p>
              I specifically worked on developing the watering feature in Unity
              and implementing the user-data storage system using MySQL. For the
              watering feature, I had to experiment and research extensively to
              understand how collisions between water droplets and the tree
              model worked. This required fine-tuning collision detection to
              make the watering system feel intuitive and realistic.
              Additionally, I integrated the MySQL database into the Unity
              application, enabling persistent storage of user data, such as
              which trees a user owns and their respective growth stages.
            </p>
            <br />
            <h3>Challenges I ran into</h3>
            <p>
              One of the biggest challenges was getting the watering system to
              function correctly. Initially, the system relied purely on
              collision detection between the water droplets and the tree, but
              this led to problems with over-watering. Users could accidentally
              spawn additional droplets, causing the tree to grow too quickly or
              inconsistently. To solve this, we developed a system that
              invalidates all droplets in the scene as soon as the first droplet
              makes contact with the tree, preventing unintentional
              over-watering. Integrating the MySQL database with Unity was also
              challenging, as it required learning how to set up and manage
              persistent storage within a game engine environment.
            </p>
            <br />
            <h3>Accomplishments that I’m proud of</h3>
            <p>
              I am particularly proud of successfully integrating the SQL-based
              persistent storage into the application. This was my first time
              working on a Unity project, and seeing the database integration
              come to life was a rewarding experience. I’m also proud of my
              subteam and our collaborative effort to solve the watering
              problem. Our solution, which invalidates excess droplets after the
              first collision, effectively improved the functionality and user
              experience of the application.
            </p>
            <br />
            <h3>What I learned</h3>
            <p>
              This project taught me a great deal about working with Unity and
              understanding the complexities of AR interactions. I gained
              valuable experience in researching and implementing collision
              systems, as well as integrating SQL databases for persistent data
              storage. The process of developing the watering feature helped me
              understand the importance of user interaction design, and working
              with MySQL in a Unity environment expanded my knowledge of data
              management in game development. I look forward to building on
              these skills in future AR projects.
            </p>
          </MobileEntry>
        </div>
      ) : (
        <div>
          <Entry
            title={"ASL Battle"}
            onClick={() =>
              handleTransition(
                "ASL Battle",
                "Multiplayer Gamified ASL Learning",
                "https://github.com/DannyJiang1/xr_midwest_server",
                ["Unity", "Express", "SocketIO"],
                <>
                  <p>
                    DevPost Link:
                    <br />
                    <a
                      href="https://devpost.com/software/asl-battle"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{}}
                    >
                      https://devpost.com/software/asl-battle
                    </a>
                  </p>
                  <br />
                  <h3>Inspiration</h3>
                  <p>
                    Learning a visual language like American Sign Language (ASL)
                    can be intimidating, especially for beginners unfamiliar
                    with its unique gestures and expressions. The inspiration
                    for this project comes from our passion to create an
                    interactive learning experience that introduces players to
                    ASL in a fun and engaging way. We wanted to make learning
                    ASL more accessible by blending education with exciting
                    gameplay. Through this project, we aim to not only teach
                    players ASL but also foster a deeper connection to the
                    culture it represents, promoting inclusion and meaningful
                    communication that extends beyond just the game.
                  </p>
                  <br />
                  <h3>What it does</h3>
                  <p>
                    The game offers two modes: Singleplayer and Multiplayer. In
                    both modes, letters of the English alphabet are displayed
                    one at a time, and players attempt to perform the
                    corresponding ASL hand signs. If a player is unsure of a
                    hand sign, the system provides guidance with the correct
                    gesture. In Singleplayer, points are awarded for each
                    correct sign. In Multiplayer, two players race to see who
                    can complete 10 letters first, though this number can be
                    adjusted.
                  </p>
                  <br />
                  <h3>What I did</h3>
                  <p>
                    The project was developed in Unity, incorporating Meta's
                    Interaction SDK. I worked majorly on the multiplayer
                    component, a central API server was implemented using
                    Express.js, with Socket.IO facilitating real-time
                    communication between the player devices and the server.
                  </p>
                  <br />
                  <h3>Challenges I ran into</h3>
                  <p>
                    Throughout the development of ASL Battle, we encountered
                    several challenges. One of the key issues was UI rendering,
                    as ensuring smooth and intuitive visual element placements
                    required a lot of trial and error. Additionally,
                    implementing Passthrough in Unity presented difficulties in
                    getting it to successfully work. I also faced difficulties
                    with limited resources when connecting Unity to the Express
                    server through Socket.IO, requiring me to thoroughly go
                    through the documentation of barely maintained plugins.
                    Finally, networking posed a challenge, particularly in
                    connection issues between the server and player despite
                    being on the same network.
                  </p>
                  <br />
                  <h3>Accomplishments that I’m proud of</h3>
                  <p>
                    I am especially satisfied with the custom gesture detection
                    we implemented for all the ASL alphabet letters. This was a
                    key aspect of making the game both fun and educational, and
                    it felt great to see it working smoothly. Additionally,
                    integrating the multiplayer system and ensuring it
                    functioned in real-time was another significant
                    accomplishment, particularly in overcoming the technical
                    challenges that came with networking and communication.
                  </p>
                  <br />
                  <h3>What I learned</h3>
                  <p>
                    I learned how to build a real-time multiplayer system with
                    Unity and websockets, which was a major technical milestone
                    for us. Additionally, working with Meta's Interaction SDK
                    for mixed reality development helped me understand the
                    complexities and potential of creating immersive,
                    interactive experiences. These tools taught me valuable
                    skills that we'll be able to apply in future projects, and
                    they deepened our understanding of game development, hand
                    gesture recognition, and multiplayer architecture.
                  </p>
                </>,
                0
              )
            }
          >
            <h3>Multiplayer Gamified ASL Learning</h3>
            <p>Oct. 2024 - Oct. 2024</p>
          </Entry>
          <Entry
            title={"Stock Market Price Predictor"}
            onClick={() =>
              handleTransition(
                "Stock Market Price Predictor",
                "Fullstack ML Stock Price Predictor",
                "https://github.com/DannyJiang1/Stock_price_predictor",
                ["Python", "TensorFlow", "React", "Flask"],
                <>
                  <h3>Inspiration</h3>
                  <p>
                    The unpredictable nature of financial markets has always
                    intrigued me. I wanted to explore how machine learning could
                    help forecast stock price movements by analyzing both
                    technical indicators and macroeconomic factors. My goal was
                    to build a tool that empowers users to make informed
                    investment decisions by leveraging historical data and
                    advanced predictive models.
                  </p>
                  <br />
                  <h3>What it does</h3>
                  <p>
                    This project provides users with predictions of future stock
                    price movements based on historical data and macroeconomic
                    indicators. Through the React frontend, users can enter
                    stock tickers and receive predictions powered by the LSTM
                    model on the backend. The model processes multiple inputs,
                    including technical indicators and economic trends, to
                    forecast the stock's movement. It offers an interactive way
                    for users to experiment with predictions and gain insights
                    into potential market behavior, facilitating data-driven
                    decision-making.
                  </p>
                  <br />
                  <h3>What I did</h3>
                  <p>
                    I developed a robust LSTM-based machine learning model for
                    predicting stock price movements. The model incorporates
                    advanced technical indicators such as moving averages and
                    RSI, along with macroeconomic factors like interest rates,
                    unemployment rates, and consumer sentiment. I built the
                    model on the backend using Flask and integrated it with a
                    React-based frontend to create a seamless user interface for
                    interaction. To support the model’s operations, I
                    implemented a data preprocessing pipeline that collects
                    historical stock data using the Yahoo Finance API and
                    macroeconomic data from the FRED API. I ensured consistent
                    data handling by designing a feature scaling and
                    transformation process used during both the training and
                    prediction phases. Additionally, I automated the model’s
                    training, saving, and loading processes, making the workflow
                    efficient and production-ready.
                  </p>
                  <br />
                  <h3>Challenges I ran into</h3>
                  <p>
                    One of the most challenging aspects was managing
                    inconsistencies between data formats from different APIs,
                    which required additional preprocessing. Designing a
                    scalable architecture capable of incorporating both
                    technical indicators and macroeconomic factors without
                    causing the model to overfit also proved difficult.
                    Balancing training time with model accuracy on large
                    datasets required thoughtful optimization. Another
                    significant challenge arose when attempting to predict the
                    latest day’s stock movement, as opposed to just backtesting
                    with historical data. Predicting the latest day meant that
                    the 'last price movement' value was inherently unknown and
                    appeared as a NaN, representing tomorrow's price. To handle
                    this, I had to modify my function to account for the missing
                    value and ensure the prediction remained accurate even
                    without the final movement. Integrating the Flask backend
                    with the React frontend brought further challenges in
                    ensuring seamless communication between both components,
                    which required additional debugging and refinement to
                    streamline the user experience.
                  </p>
                  <br />
                  <h3>Accomplishments that I’m proud of</h3>
                  <p>
                    I am proud of successfully integrating multiple data sources
                    into a unified model that ensures smooth data flows without
                    sacrificing accuracy. Developing a complete and scalable
                    pipeline for automating feature engineering, training, and
                    inference demonstrated the effectiveness of my workflow.
                    Building an intuitive frontend in React that interacts
                    efficiently with the Flask backend also stands out as a
                    major achievement. Additionally, I achieved a 53% accuracy
                    in predicting stock price movement direction, which shows
                    the potential for future refinement. Finally, I gained
                    deeper insights into time-series forecasting and the
                    influence of macroeconomic factors on stock behavior.
                  </p>
                  <br />
                  <h3>What I learned</h3>
                  <p>
                    This project emphasized the importance of proper data
                    preprocessing and feature engineering for financial data. I
                    learned how to handle inconsistent data formats and missing
                    values when integrating multiple APIs. Developing the model
                    highlighted the value of combining technical indicators with
                    macroeconomic factors for improved prediction accuracy. I
                    also gained valuable experience in full-stack development by
                    integrating Flask with React and ensuring smooth
                    frontend-backend communication. Finally, addressing the
                    challenge of predicting the latest day’s price taught me how
                    to handle missing values gracefully, reinforcing the
                    importance of adaptability in machine learning workflows.
                  </p>
                </>,
                1
              )
            }
          >
            <h3>Fullstack ML Stock Price Predictor</h3>
            <p>May 2024 - Present</p>
          </Entry>
          <Entry
            title={"Nail Biting Detector"}
            onClick={() =>
              handleTransition(
                "Nail Biting Detector",
                "Real-time Detector For Nail Biting",
                "https://github.com/DannyJiang1/Nail_Biting_Detector",
                ["Python", "TensorFlow", "OpenCV"],
                <>
                  <h3>Inspiration</h3>
                  <p>
                    The inspiration behind this project came from the challenge
                    of addressing subconscious behaviors, such as nail-biting,
                    which many people struggle to recognize in themselves.
                    Nail-biting is a habit that often goes unnoticed, and
                    developing awareness is the first step toward breaking it.
                    This project aims to provide a practical solution by
                    leveraging technology to detect when someone is biting their
                    nails, making it easier for them to become conscious of the
                    habit and eventually reduce it.
                  </p>
                  <br />
                  <h3>What it does</h3>
                  <p>
                    The nail-biting detector identifies when a person in front
                    of the camera is biting their nails. It continuously
                    captures video input through the camera, processes it using
                    a convolutional neural network or CNN, and triggers a
                    notification whenever nail-biting is detected. By offering
                    real-time feedback, the system helps users recognize and
                    address their habit as it occurs.
                  </p>
                  <br />
                  <h3>What I did</h3>
                  <p>
                    I used OpenCV to create a preprocessing pipeline that
                    processes the live camera input before it is analyzed by the
                    CNN model. The preprocessing pipeline scales, crops, and
                    normalizes frames, ensuring consistent data for real-time
                    detection. To train the CNN, I built my own dataset by
                    asking friends and people around me to take pictures of
                    themselves both biting and not biting their nails. This was
                    a rewarding experience, as I gained hands-on experience in
                    data collection and curated a dataset tailored specifically
                    for this problem.
                  </p>
                  <br />
                  <h3>Challenges I ran into</h3>
                  <p>
                    One major challenge was collecting enough training data to
                    ensure the model could generalize effectively. Because I
                    relied heavily on my personal friend group which introduced
                    an inherent bias into the model towards Asians. This bias
                    meant that the model might not perform as well with
                    individuals of other ethnicities. Additionally, I
                    encountered technical challenges in handling variations in
                    lighting, camera angles, and positioning, which impacted
                    detection accuracy. Overcoming these challenges required
                    tuning the CNN and carefully testing the model to reduce
                    false positives and negatives.
                  </p>
                  <br />
                  <h3>Accomplishments that I’m proud of</h3>
                  <p>
                    I am proud of successfully building a tool that addresses a
                    meaningful problem faced by myself and others. Creating a
                    robust preprocessing pipeline using OpenCV allowed the
                    system to process live video input efficiently, making
                    real-time detection possible. Additionally, gathering my own
                    dataset from scratch was a significant accomplishment that
                    gave me practical experience in data collection. Finally,
                    developing a CNN-based solution that performs well under
                    various conditions reinforced my confidence in applying
                    machine learning to real-world challenges.
                  </p>
                  <br />
                  <h3>What I learned</h3>
                  <p>
                    This project taught me the importance of data diversity and
                    how biases in training data can affect model performance. I
                    also gained valuable experience in using OpenCV for
                    preprocessing live camera input and training CNNs for
                    behavioral recognition tasks. Working with real-world data
                    showed me how factors such as lighting and camera angles can
                    influence results, emphasizing the need for robust models.
                    Ultimately, this project highlighted how machine learning
                    can promote positive change by increasing awareness of
                    subconscious behaviors and helping users develop healthier
                    habits.
                  </p>
                </>,
                2
              )
            }
          >
            <h3>Real-time Detector For Nail Biting</h3>
            <p>May 2024 - Present</p>
          </Entry>
          <Entry
            title={"AR Mindfulness Tree App"}
            onClick={() =>
              handleTransition(
                "AR Mindfulness Tree App",
                "Task Manager Wellness App",
                "https://github.com/Alternate-Reality-Initiative/WellnessApp",
                ["Unity", "Git", "SQL"],
                <>
                  <h3>Inspiration</h3>
                  <p>
                    The inspiration for this project comes from the desire to
                    blend technology and wellness, creating a unique way to
                    motivate users to complete daily tasks through the immersive
                    medium of Augmented Reality. The idea was to design a task
                    manager that not only keeps users organized but also
                    provides a visual representation of their progress. By
                    projecting models of trees onto their palm and allowing
                    users to grow these trees by completing wellness-based
                    tasks, the application fosters a sense of accomplishment and
                    encourages healthy habits. The ability to set custom tasks
                    and track progress with persistent storage enhances the
                    overall user experience.
                  </p>
                  <br />
                  <h3>What it does</h3>
                  <p>
                    This AR-based task manager allows users to project models of
                    trees onto their palm, representing their task progress.
                    Users complete wellness-based tasks, like simple exercises
                    or hydration reminders, to water and grow their trees. The
                    application also enables users to set and track their own
                    tasks, offering a customizable experience. A persistent
                    SQL-based user-data storage system keeps track of each
                    user's trees and their growth levels, ensuring that progress
                    is saved even after the application is closed and reopened.
                  </p>
                  <br />
                  <h3>What I did</h3>
                  <p>
                    I specifically worked on developing the watering feature in
                    Unity and implementing the user-data storage system using
                    MySQL. For the watering feature, I had to experiment and
                    research extensively to understand how collisions between
                    water droplets and the tree model worked. This required
                    fine-tuning collision detection to make the watering system
                    feel intuitive and realistic. Additionally, I integrated the
                    MySQL database into the Unity application, enabling
                    persistent storage of user data, such as which trees a user
                    owns and their respective growth stages.
                  </p>
                  <br />
                  <h3>Challenges I ran into</h3>
                  <p>
                    One of the biggest challenges was getting the watering
                    system to function correctly. Initially, the system relied
                    purely on collision detection between the water droplets and
                    the tree, but this led to problems with over-watering. Users
                    could accidentally spawn additional droplets, causing the
                    tree to grow too quickly or inconsistently. To solve this,
                    we developed a system that invalidates all droplets in the
                    scene as soon as the first droplet makes contact with the
                    tree, preventing unintentional over-watering. Integrating
                    the MySQL database with Unity was also challenging, as it
                    required learning how to set up and manage persistent
                    storage within a game engine environment.
                  </p>
                  <br />
                  <h3>Accomplishments that I’m proud of</h3>
                  <p>
                    I am particularly proud of successfully integrating the
                    SQL-based persistent storage into the application. This was
                    my first time working on a Unity project, and seeing the
                    database integration come to life was a rewarding
                    experience. I’m also proud of my subteam and our
                    collaborative effort to solve the watering problem. Our
                    solution, which invalidates excess droplets after the first
                    collision, effectively improved the functionality and user
                    experience of the application.
                  </p>
                  <br />
                  <h3>What I learned</h3>
                  <p>
                    This project taught me a great deal about working with Unity
                    and understanding the complexities of AR interactions. I
                    gained valuable experience in researching and implementing
                    collision systems, as well as integrating SQL databases for
                    persistent data storage. The process of developing the
                    watering feature helped me understand the importance of user
                    interaction design, and working with MySQL in a Unity
                    environment expanded my knowledge of data management in game
                    development. I look forward to building on these skills in
                    future AR projects.
                  </p>
                </>,
                3
              )
            }
          >
            <>
              <h3>Task Manager Wellness App</h3>
              <p>Nov. 2022 - May 2023</p>
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
                role={popupRole}
                link={popupLink}
                skills={popupSkills}
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

export default Projects;
