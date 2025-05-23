// Import necessary React libraries
import React from "react";
// Import specific icons for each programming language/skill from react-icons
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaLinux,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiMysql,
  SiFlask,
  SiPytorch,
  SiTensorflow,
  SiPostman,
  SiGithubactions,
  SiGnubash,
  SiHuggingface,
  SiOpencv,
} from "react-icons/si";
import {
  SiExpress,
  SiSocketdotio,
  SiUnity,
  SiNextdotjs, // Added for Next.js
  SiKubernetes, // Added for Kubernetes
} from "@icons-pack/react-simple-icons";
import "./Skills.css";

const Skills = ({ skills }) => {
  // This function returns the correct icon based on the skill name
  const getIcon = (skill) => {
    switch (skill) {
      // Programming Languages
      case "C++":
        return <SiCplusplus title="C++" />;
      case "Java":
        return <FaJava title="Java" />;
      case "Python":
        return <FaPython title="Python" />;
      case "JavaScript":
        return <FaJsSquare title="JavaScript" />;
      case "HTML":
        return <FaHtml5 title="HTML" />;
      case "Bash":
        return <SiGnubash title="Bash" />;
      case "SQL":
        return <SiMysql title="SQL" />;

      // Software Skills & Frameworks
      case "React":
        return <FaReact title="React" />;
      case "Express":
        return <SiExpress title="Express" />;
      case "SocketIO":
        return <SiSocketdotio title="Socket.IO" />;
      case "Flask":
        return <SiFlask title="Flask" />;
      case "REST API":
        return <SiPostman title="REST API" />;
      case "Linux":
        return <FaLinux title="Linux" />;
      case "Docker":
        return <FaDocker title="Docker" />;
      case "PyTorch":
        return <SiPytorch title="PyTorch" />;
      case "TensorFlow":
        return <SiTensorflow title="TensorFlow" />;
      case "Git":
        return <FaGitAlt title="Git" />;
      case "CI/CD":
        return <SiGithubactions title="CI/CD" />;
      case "HuggingFace":
        return <SiHuggingface title="HuggingFace" />;
      case "OpenCV":
        return <SiOpencv title="OpenCV" />;
      case "Unity":
        return <SiUnity title="Unity" />;
      case "Next": // Added case for Next.js
        return <SiNextdotjs title="Next.js" />;
      case "Kubernetes": // Added case for Kubernetes
        return <SiKubernetes title="Kubernetes" />;
      default:
        return <span>{skill}</span>; // Fallback for skills without an icon
    }
  };

  return (
    <div className="skills-row">
      <table>
        <tbody>
          <tr>
            {skills.map((skill, index) => (
              <td key={index} className="skill-icon">
                {getIcon(skill)}
              </td>
            ))}
          </tr>
        </tbody>  
      </table>
    </div>
  );
};

export default Skills;
