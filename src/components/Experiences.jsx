import React, { useState } from "react";
import EntryPopUp from "./EntryPopUp";
import Entry from "./Entry";
import MobileEntry from "./MobileEntry";
import EntryBodyContainer from "./EntryBodyContainer";
import "./Experiences.css";

function Experiences({ mobile }) {
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
  const handleTransition = (
    newTitle,
    newRole,
    newLink,
    newSkills,
    newText,
    newID
  ) => {
    if (showPopup) {
      // If the popup is already open, do the transition
      if (newID === currID) return;
      if (isTransitioning) return;
      setIsTransitioning(true); // Start transition

      setTimeout(() => {
        setPopupTitle(newTitle);
        setPopupText(newText);
        setCurrID(newID);
        setPopupRole(newRole);
        setPopupSkills(newSkills);
        setPopupLink(newLink);
        setIsContentVisible(true); // Update content
      }, 500); // Update content after green box covers it

      setTimeout(() => {
        setIsTransitioning(false); // End transition after the green box slides out
      }, 1000); // Complete after the green box slides out
    } else {
      // If the popup is not open, handle it like a normal open
      if (isTransitioning) return;
      handleOpen(newTitle, newRole, newLink, newSkills, newText, newID);
    }
  };

  return (
    <div
      id="exp-page"
      style={{
        minHeight: mobile ? "auto" : `calc(100vh - 80px)`,
        height: mobile ? "100%" : "auto",
        overflowY: mobile ? "auto" : "hidden",
      }}
    >
      {mobile ? (
        <div>
          <MobileEntry
            title={"SUSE"}
            role={"Software Engineer Intern"}
            link={"https://github.com/openSUSE/iguana"}
            date={"Jun. 2023 - Aug. 2023"}
            skills={["Python", "Docker", "Bash", "Linux", "CI/CD"]}
          >
            <h3>Inspiration</h3>
            <p>
              The Iguana project was initiated to solve the broader challenge of
              creating a flexible and universal system initialization process.
              Setting up environments across different hardware platforms often
              required manual interventions and system-specific configurations,
              which could be time-consuming and inconsistent. The goal of Iguana
              was to develop a universal initrd that leverages containerization
              to handle a variety of system setup tasks—such as partitioning
              hard drives, configuring file systems, initializing network
              settings, and more—automatically. This approach aimed to reduce
              the complexity of environment setup, making it adaptable to a wide
              range of hardware while ensuring consistency and reliability
              across deployments.
            </p>
            <br />
            <h3>What it does</h3>
            <p>
              The Iguana project creates a universal initrd that simplifies the
              process of setting up environments using containers. It enables
              flexible configuration and system setup by leveraging
              containerized environments. One key component of Iguana is the use
              of specific containers for different system setup tasks, such as
              partitioning hard drives, creating file systems, and configuring
              various hardware parameters. The project aims to provide a
              streamlined, container-based solution for handling these tasks in
              a consistent and efficient way.
            </p>
            <br />
            <h3>What I did</h3>
            <p>
              During my time on the project, I was responsible for designing
              several key containers that are used for system setup tasks. One
              notable example was a container that partitioned hard drives and
              set up file systems based on a configuration file. This involved
              probing devices, determining the partition layout, and using tools
              like libstorage-ng to access and modify partition tables. I also
              worked closely with SUSE's internal systems to deploy (more
              accurately, integrate and test) these containers on the company's
              servers. Additionally, I collaborated with the team on writing
              tests to ensure the robustness of the containers I developed,
              following the project's established testing protocols.
            </p>
            <br />
            <h3>Challenges I ran into</h3>
            <p>
              One of the biggest challenges I faced was becoming familiar with
              the workflow of a large, open-source project like Iguana. I had to
              quickly adapt to writing tests, navigating SUSE’s internal
              deployment processes, and working with the documentation of
              complex libraries like libstorage-ng. Accessing and modifying
              partition tables through probing required significant research and
              trial-and-error, but I eventually became more comfortable with the
              tools and methodologies involved.
            </p>
            <br />
            <h3>Accomplishments that I’m proud of</h3>
            <p>
              I’m proud of several technical achievements during my internship.
              The container I designed for partitioning devices based on a
              configuration file was tested on <b>5</b> different devices, each
              with <b>5</b> unique configuration files, resulting in a total of{" "}
              <b>25</b> successful tests. This ensured that the solution worked
              across various hardware setups. Additionally, I implemented
              optimizations that lowered partitioning runtime by <b>8%</b>{" "}
              through regex input parsing, improving the overall performance.
            </p>
            <br />
            <h3>What I learned</h3>
            <p>
              Throughout the project, I gained hands-on experience with
              containerization tools like Docker and expanded my knowledge of
              operating systems concepts such as the initial ramdisk and
              partition tables. I also learned the intricacies of working with
              libraries like libstorage-ng. However, one of the most valuable
              aspects of my experience was working with my team, led by Petr
              Ostadal and Ondrej Holecek. Their welcoming and supportive
              leadership fostered a collaborative environment that significantly
              enhanced both productivity and my personal growth as a software
              engineer.
            </p>
          </MobileEntry>
          <MobileEntry
            title={"University of Michigan SIM Multidisciplinary Research Team"}
            role={"Student Software Engineer"}
            link={"https://github.com/UmichSIM/SIM_MDP_GUI"}
            date={"Jan. 2023 - Jan. 2024"}
            skills={["C++", "Python", "Git"]}
          >
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
            <br />
            <h3>What it does</h3>
            <p>
              The project itself is a two-part system: one part focused on the
              scenario creator, and the other on the automated driving
              simulation. The scenario creator has both frontend and backend
              components. The frontend is a GUI designed to enable easy and
              intuitive scenario creation, while the backend handles the actual
              generation and rendering of the scenarios. The second component
              simulates automated driving, achieved through connecting a
              hardware wheel to Unreal Engine. This simulation uses a "wizard of
              oz" strategy, which gives the illusion of autonomous driving while
              human input is hidden behind the scenes.
            </p>
            <br />
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
            <br />
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
            <br />
            <h3>Accomplishments that I was proud of</h3>
            <p>
              I’m particularly proud of both my technical contributions and
              leadership within the team. On the technical side, I successfully
              refactored the backend connection and optimized the API, improving
              data processing speed by nearly 14%. Additionally, the refactor
              led to a 12% reduction in memory consumption, improving overall
              system performance. I also implemented a key feature in C++ that
              allowed users to toggle between third-person and first-person
              views in approximately 180 milliseconds, significantly enhancing
              the simulator’s responsiveness and immersion. On the leadership
              side, when the team faced productivity challenges, I stepped up by
              improving communication, delegating tasks effectively, and
              motivating my peers, ensuring that we stayed on track and met our
              deadlines.
            </p>
            <br />
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
          <MobileEntry
            title={"University of Michigan College of Engineering"}
            role={"Research Assistant"}
            link={""}
            date={"Jun. 2024 - Jan. 2025"}
            skills={["C++", "Python", "PyTorch", "HuggingFace", "Git"]}
          >
            <h3>Inspiration</h3>
            <p>
              The motivation behind this research stems from the increasing
              reliance on large language models in critical applications and the
              need to optimize their performance while maintaining security.
              PowerInfer, a method for accelerating inference by offloading
              certain neurons to the GPU, presents a unique opportunity to boost
              efficiency, but it also opens up potential vulnerabilities.
              Understanding how neuron allocation impacts performance and
              identifying possible points of exploitation through adversarial
              attacks is crucial for ensuring the robustness of this
              acceleration method. This research aims to explore these
              vulnerabilities and improve the reliability and security of
              PowerInfer.
            </p>
            <br />
            <h3>What it does</h3>
            <p>
              PowerInfer accelerates model inference by distributing specific
              neurons between the CPU and GPU, optimizing performance during
              inference. My research focuses on analyzing how these neurons are
              allocated to the GPU and understanding the patterns of neuron
              activation during the inference process. By studying how this
              system functions, I aim to identify potential vulnerabilities in
              neuron allocation that could be exploited in adversarial attacks.
            </p>
            <br />
            <h3>What I did</h3>
            <p>
              I worked on analyzing the PowerInfer codebase, a modification of
              llama.cpp, to understand how tensors and neurons are allocated
              between the CPU and GPU. This involved diving into the ggml and
              gguf libraries to learn how tensors are managed within
              PowerInfer's architecture. I also conducted tests to determine
              which neurons are allocated to the GPU and what factors influence
              this allocation. These tests allowed me to observe which neurons
              are activated during inference and how their placement affects
              model performance.
            </p>
            <br />
            <h3>Challenges I ran into</h3>
            <p>
              A significant challenge I faced was understanding the complexity
              of the codebase, particularly because PowerInfer is a modified
              version of llama.cpp. To make sense of it, I had to study
              extensive documentation on ggml and gguf, which manage tensor
              operations and memory allocation. Another challenge was designing
              tests that could accurately reveal the conditions under which
              neurons are allocated to the GPU, requiring careful analysis of
              both the code and the results.
            </p>
            <br />
            <h3>Accomplishments that I’m proud of</h3>
            <p>
              I am particularly proud of being able to gain a solid
              understanding of the PowerInfer codebase, despite its complexity.
              This allowed me to successfully identify which neurons are being
              allocated to the GPU during inference, marking an important step
              forward in my research. Additionally, I wrote and implemented
              tests that clarified the conditions affecting neuron allocation,
              providing key insights into how PowerInfer manages resource
              distribution between the CPU and GPU.
            </p>
            <br />
            <h3>What I learned</h3>
            <p>
              Through this research, I learned a great deal about navigating and
              comprehending large, complex codebases, particularly those
              involving modified versions of established models like llama.cpp.
              I also gained experience in testing different features within the
              code, especially around neuron allocation and tensor management.
              Writing tests to observe GPU vs. CPU allocation has provided
              valuable insights into how PowerInfer optimizes model inference,
              and I look forward to expanding on this knowledge as my research
              progresses.
            </p>
          </MobileEntry>
          <MobileEntry
            title={"YIWEI Medical"}
            role={"Deep Learning Research Engineer (Remote)"}
            link={""}
            date={"Aug. 2024 - Jan. 2025"}
            skills={["Java", "Python", "Kubernetes", "Next", "TensorFlow"]}
          >
            <h3>Inspiration</h3>
            <p>
              The inspiration for this project came from the critical need to
              improve early diagnosis of autism spectrum disorder (ASD). Early
              detection can significantly impact the lives of children with ASD
              by enabling timely interventions. However, diagnosing ASD can be
              challenging due to the variability in symptoms and the reliance on
              behavioral observations. I saw an opportunity to leverage advanced
              technologies like machine learning and eye-tracking data to create
              a more objective and accurate diagnostic tool.
            </p>
            <br />
            <h3>What it does</h3>
            <p>
              This project involves a hybrid machine learning model that
              predicts ASD by analyzing eye-tracking data. The model integrates
              temporal patterns from time-series data and spatial features from
              scan path images to achieve high diagnostic accuracy. The system
              is deployed as a scalable web application, providing healthcare
              professionals with an intuitive interface to upload data, receive
              predictions, and manage patient information.
            </p>
            <br />
            <h3>What I did</h3>
            <p>
              In this project, I developed a hybrid machine learning model using
              TensorFlow to predict autism spectrum disorder (ASD). The model is
              a combination of LSTM and CNN architectures, which allowed me to
              integrate temporal patterns from time-series eye-tracking data and
              spatial features from scan path images. This integration
              significantly enhanced the diagnostic accuracy of the model. To
              prepare the data for the model, I preprocessed diverse
              eye-tracking datasets using Pandas and NumPy. This preprocessing
              included normalization, augmentation, and feature extraction,
              ensuring that the data was suitable for the multimodal input
              required by the model. With the model and data ready, I then
              focused on building the application. I created a robust backend
              using Java and Spring Boot to handle API requests and manage data
              flow efficiently. For the frontend, I chose Next.js to design an
              intuitive and user-friendly interface tailored for healthcare
              professionals. This interface aims to facilitate early ASD
              diagnostics by providing easy access to the model's predictions.
              Finally, to make the application accessible and scalable, I
              deployed it on Alibaba Cloud. I utilized Kubernetes for container
              orchestration, which ensured that the application could maintain
              high availability across a multi-node cluster, ready to handle
              real-world usage.
            </p>
            <br />
            <h3>Challenges I ran into</h3>
            <p>
              One of the main challenges was integrating the temporal and
              spatial data effectively within the model. Ensuring that the LSTM
              and CNN components worked harmoniously required extensive
              experimentation and tuning. Another challenge was achieving the
              high level of accuracy necessary for a medical diagnostic tool,
              which involved rigorous testing and validation with diverse
              datasets. Additionally, deploying the model in a cloud environment
              while maintaining scalability and high availability presented its
              own set of complexities, particularly with container orchestration
              using Kubernetes.
            </p>
            <br />
            <h3>Accomplishments that I’m proud of</h3>
            <p>
              I am particularly proud of developing a sophisticated machine
              learning model that successfully integrates different types of
              data to predict ASD with high accuracy. Building a full-stack web
              application that is both functional and user-friendly for
              healthcare professionals is another significant achievement.
              Successfully deploying the application on Alibaba Cloud using
              Kubernetes, ensuring it can handle real-world usage, is also a
              point of pride.
            </p>
            <br />
            <h3>What I learned</h3>
            <p>
              Throughout this project, I gained deep insights into machine
              learning model development, particularly in handling multimodal
              data. I learned advanced techniques in data preprocessing and
              feature extraction using Pandas and NumPy. Developing the backend
              with Spring Boot and the frontend with Next.js enhanced my skills
              in full-stack development. Additionally, deploying the application
              on Alibaba Cloud with Kubernetes taught me valuable lessons in
              cloud computing and container orchestration.
            </p>
          </MobileEntry>
        </div>
      ) : (
        <div>
          <Entry
            title={"SUSE"}
            onClick={() =>
              handleTransition(
                "SUSE",
                "Software Engineer Intern",
                "https://github.com/openSUSE/iguana",
                ["Python", "Docker", "Bash", "Linux", "CI/CD"],
                <>
                  <h3>Inspiration</h3>
                  <p>
                    The Iguana project was initiated to solve the broader
                    challenge of creating a flexible and universal system
                    initialization process. Setting up environments across
                    different hardware platforms often required manual
                    interventions and system-specific configurations, which
                    could be time-consuming and inconsistent. The goal of Iguana
                    was to develop a universal initrd that leverages
                    containerization to handle a variety of system setup
                    tasks—such as partitioning hard drives, configuring file
                    systems, initializing network settings, and
                    more—automatically. This approach aimed to reduce the
                    complexity of environment setup, making it adaptable to a
                    wide range of hardware while ensuring consistency and
                    reliability across deployments.
                  </p>
                  <br />
                  <h3>What it does</h3>
                  <p>
                    The Iguana project creates a universal initrd that
                    simplifies the process of setting up environments using
                    containers. It enables flexible configuration and system
                    setup by leveraging containerized environments. One key
                    component of Iguana is the use of specific containers for
                    different system setup tasks, such as partitioning hard
                    drives, creating file systems, and configuring various
                    hardware parameters. The project aims to provide a
                    streamlined, container-based solution for handling these
                    tasks in a consistent and efficient way.
                  </p>
                  <br />
                  <h3>What I did</h3>
                  <p>
                    During my time on the project, I was responsible for
                    designing several key containers that are used for system
                    setup tasks. One notable example was a container that
                    partitioned hard drives and set up file systems based on a
                    configuration file. This involved probing devices,
                    determining the partition layout, and using tools like
                    libstorage-ng to access and modify partition tables. I also
                    worked closely with SUSE's internal systems to deploy (more
                    accurately, integrate and test) these containers on the
                    company's servers. Additionally, I collaborated with the
                    team on writing tests to ensure the robustness of the
                    containers I developed, following the project's established
                    testing protocols.
                  </p>
                  <br />
                  <h3>Challenges I ran into</h3>
                  <p>
                    One of the biggest challenges I faced was becoming familiar
                    with the workflow of a large, open-source project like
                    Iguana. I had to quickly adapt to writing tests, navigating
                    SUSE’s internal deployment processes, and working with the
                    documentation of complex libraries like libstorage-ng.
                    Accessing and modifying partition tables through probing
                    required significant research and trial-and-error, but I
                    eventually became more comfortable with the tools and
                    methodologies involved.
                  </p>
                  <br />
                  <h3>Accomplishments that I’m proud of</h3>
                  <p>
                    I’m proud of several technical achievements during my
                    internship. The container I designed for partitioning
                    devices based on a configuration file was tested on <b>5</b>{" "}
                    different devices, each with <b>5</b> unique configuration
                    files, resulting in a total of <b>25</b> successful tests.
                    This ensured that the solution worked across various
                    hardware setups. Additionally, I implemented optimizations
                    that lowered partitioning runtime by <b>8%</b> through regex
                    input parsing, improving the overall performance.
                  </p>
                  <br />
                  <h3>What I learned</h3>
                  <p>
                    Throughout the project, I gained hands-on experience with
                    containerization tools like Docker and expanded my knowledge
                    of operating systems concepts such as the initial ramdisk
                    and partition tables. I also learned the intricacies of
                    working with libraries like libstorage-ng. However, one of
                    the most valuable aspects of my experience was working with
                    my team, led by Petr Ostadal and Ondrej Holecek. Their
                    welcoming and supportive leadership fostered a collaborative
                    environment that significantly enhanced both productivity
                    and my personal growth as a software engineer.
                  </p>
                </>,
                0
              )
            }
          >
            <h3>Software Engineer Intern</h3>
            <p>Jun. 2023 - Aug. 2023</p>
          </Entry>
          <Entry
            title={"University of Michigan SIM Multidisciplinary Research Team"}
            onClick={() =>
              handleTransition(
                "University of Michigan SIM Multidisciplinary Research Team",
                "Student Software Engineer",
                "https://github.com/UmichSIM/SIM_MDP_GUI",
                ["C++", "Python", "Git"],
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
                  <br />
                  <h3>What it does</h3>
                  <p>
                    The project itself is a two-part system: one part focused on
                    the scenario creator, and the other on the automated driving
                    simulation. The scenario creator has both frontend and
                    backend components. The frontend is a GUI designed to enable
                    easy and intuitive scenario creation, while the backend
                    handles the actual generation and rendering of the
                    scenarios. The second component simulates automated driving,
                    achieved through connecting a hardware wheel to Unreal
                    Engine. This simulation uses a "wizard of oz" strategy,
                    which gives the illusion of autonomous driving while human
                    input is hidden behind the scenes.
                  </p>
                  <br />
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
                  <br />
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
                  <br />
                  <h3>Accomplishments that I was proud of</h3>
                  <p>
                    I’m particularly proud of both my technical contributions
                    and leadership within the team. On the technical side, I
                    successfully refactored the backend connection and optimized
                    the API, improving data processing speed by nearly 14%.
                    Additionally, the refactor led to a 12% reduction in memory
                    consumption, improving overall system performance. I also
                    implemented a key feature in C++ that allowed users to
                    toggle between third-person and first-person views in
                    approximately 180 milliseconds, significantly enhancing the
                    simulator’s responsiveness and immersion. On the leadership
                    side, when the team faced productivity challenges, I stepped
                    up by improving communication, delegating tasks effectively,
                    and motivating my peers, ensuring that we stayed on track
                    and met our deadlines.
                  </p>
                  <br />
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
                "Research Assistant",
                "",
                ["C++", "Python", "PyTorch", "HuggingFace", "Git"],
                <>
                  <h3>Inspiration</h3>
                  <p>
                    The motivation behind this research stems from the
                    increasing reliance on large language models in critical
                    applications and the need to optimize their performance
                    while maintaining security. PowerInfer, a method for
                    accelerating inference by offloading certain neurons to the
                    GPU, presents a unique opportunity to boost efficiency, but
                    it also opens up potential vulnerabilities. Understanding
                    how neuron allocation impacts performance and identifying
                    possible points of exploitation through adversarial attacks
                    is crucial for ensuring the robustness of this acceleration
                    method. This research aims to explore these vulnerabilities
                    and improve the reliability and security of PowerInfer.
                  </p>
                  <br />
                  <h3>What it does</h3>
                  <p>
                    PowerInfer accelerates model inference by distributing
                    specific neurons between the CPU and GPU, optimizing
                    performance during inference. My research focuses on
                    analyzing how these neurons are allocated to the GPU and
                    understanding the patterns of neuron activation during the
                    inference process. By studying how this system functions, I
                    aim to identify potential vulnerabilities in neuron
                    allocation that could be exploited in adversarial attacks.
                  </p>
                  <br />
                  <h3>What I did</h3>
                  <p>
                    I worked on analyzing the PowerInfer codebase, a
                    modification of llama.cpp, to understand how tensors and
                    neurons are allocated between the CPU and GPU. This involved
                    diving into the ggml and gguf libraries to learn how tensors
                    are managed within PowerInfer's architecture. I also
                    conducted tests to determine which neurons are allocated to
                    the GPU and what factors influence this allocation. These
                    tests allowed me to observe which neurons are activated
                    during inference and how their placement affects model
                    performance.
                  </p>
                  <br />
                  <h3>Challenges I ran into</h3>
                  <p>
                    A significant challenge I faced was understanding the
                    complexity of the codebase, particularly because PowerInfer
                    is a modified version of llama.cpp. To make sense of it, I
                    had to study extensive documentation on ggml and gguf, which
                    manage tensor operations and memory allocation. Another
                    challenge was designing tests that could accurately reveal
                    the conditions under which neurons are allocated to the GPU,
                    requiring careful analysis of both the code and the results.
                  </p>
                  <br />
                  <h3>Accomplishments that I’m proud of</h3>
                  <p>
                    I am particularly proud of being able to gain a solid
                    understanding of the PowerInfer codebase, despite its
                    complexity. This allowed me to successfully identify which
                    neurons are being allocated to the GPU during inference,
                    marking an important step forward in my research.
                    Additionally, I wrote and implemented tests that clarified
                    the conditions affecting neuron allocation, providing key
                    insights into how PowerInfer manages resource distribution
                    between the CPU and GPU.
                  </p>
                  <br />
                  <h3>What I learned</h3>
                  <p>
                    Through this research, I learned a great deal about
                    navigating and comprehending large, complex codebases,
                    particularly those involving modified versions of
                    established models like llama.cpp. I also gained experience
                    in testing different features within the code, especially
                    around neuron allocation and tensor management. Writing
                    tests to observe GPU vs. CPU allocation has provided
                    valuable insights into how PowerInfer optimizes model
                    inference, and I look forward to expanding on this knowledge
                    as my research progresses.
                  </p>
                </>,
                2
              )
            }
          >
            <>
              <h3>Research Assistant</h3>
              <p>Jun. 2024 - Jan. 2025</p>
            </>
          </Entry>
          <Entry
            title={"YIWEI Medical"}
            onClick={() =>
              handleTransition(
                "YIWEI Medical",
                "Deep Learning Research Engineer (Remote)",
                "",
                ["Java", "Python", "Kubernetes", "Next", "TensorFlow"],
                <>
                  <h3>Inspiration</h3>
                  <p>
                    The inspiration for this project came from the critical need
                    to improve early diagnosis of autism spectrum disorder
                    (ASD). Early detection can significantly impact the lives of
                    children with ASD by enabling timely interventions. However,
                    diagnosing ASD can be challenging due to the variability in
                    symptoms and the reliance on behavioral observations. I saw
                    an opportunity to leverage advanced technologies like
                    machine learning and eye-tracking data to create a more
                    objective and accurate diagnostic tool.
                  </p>
                  <br />
                  <h3>What it does</h3>
                  <p>
                    This project involves a hybrid machine learning model that
                    predicts ASD by analyzing eye-tracking data. The model
                    integrates temporal patterns from time-series data and
                    spatial features from scan path images to achieve high
                    diagnostic accuracy. The system is deployed as a scalable
                    web application, providing healthcare professionals with an
                    intuitive interface to upload data, receive predictions, and
                    manage patient information.
                  </p>
                  <br />
                  <h3>What I did</h3>
                  <p>
                    In this project, I developed a hybrid machine learning model
                    using TensorFlow to predict autism spectrum disorder (ASD).
                    The model is a combination of LSTM and CNN architectures,
                    which allowed me to integrate temporal patterns from
                    time-series eye-tracking data and spatial features from scan
                    path images. This integration significantly enhanced the
                    diagnostic accuracy of the model. To prepare the data for
                    the model, I preprocessed diverse eye-tracking datasets
                    using Pandas and NumPy. This preprocessing included
                    normalization, augmentation, and feature extraction,
                    ensuring that the data was suitable for the multimodal input
                    required by the model. With the model and data ready, I then
                    focused on building the application. I created a robust
                    backend using Java and Spring Boot to handle API requests
                    and manage data flow efficiently. For the frontend, I chose
                    Next.js to design an intuitive and user-friendly interface
                    tailored for healthcare professionals. This interface aims
                    to facilitate early ASD diagnostics by providing easy access
                    to the model's predictions. Finally, to make the application
                    accessible and scalable, I deployed it on Alibaba Cloud. I
                    utilized Kubernetes for container orchestration, which
                    ensured that the application could maintain high
                    availability across a multi-node cluster, ready to handle
                    real-world usage.
                  </p>
                  <br />
                  <h3>Challenges I ran into</h3>
                  <p>
                    One of the main challenges was integrating the temporal and
                    spatial data effectively within the model. Ensuring that the
                    LSTM and CNN components worked harmoniously required
                    extensive experimentation and tuning. Another challenge was
                    achieving the high level of accuracy necessary for a medical
                    diagnostic tool, which involved rigorous testing and
                    validation with diverse datasets. Additionally, deploying
                    the model in a cloud environment while maintaining
                    scalability and high availability presented its own set of
                    complexities, particularly with container orchestration
                    using Kubernetes.
                  </p>
                  <br />
                  <h3>Accomplishments that I’m proud of</h3>
                  <p>
                    I am particularly proud of developing a sophisticated
                    machine learning model that successfully integrates
                    different types of data to predict ASD with high accuracy.
                    Building a full-stack web application that is both
                    functional and user-friendly for healthcare professionals is
                    another significant achievement. Successfully deploying the
                    application on Alibaba Cloud using Kubernetes, ensuring it
                    can handle real-world usage, is also a point of pride.
                  </p>
                  <br />
                  <h3>What I learned</h3>
                  <p>
                    Throughout this project, I gained deep insights into machine
                    learning model development, particularly in handling
                    multimodal data. I learned advanced techniques in data
                    preprocessing and feature extraction using Pandas and NumPy.
                    Developing the backend with Spring Boot and the frontend
                    with Next.js enhanced my skills in full-stack development.
                    Additionally, deploying the application on Alibaba Cloud
                    with Kubernetes taught me valuable lessons in cloud
                    computing and container orchestration.
                  </p>
                </>,
                0
              )
            }
          >
            <h3>Deep Learning Research Engineer (Remote)</h3>
            <p>Aug. 2024 - Jan. 2025</p>
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

export default Experiences;
