import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import ContactPage from "./components/ContactPage";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [mobile, setMobile] = useState(false);

  const checkMobile = () => {
    if (window.innerWidth <= 960) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    checkMobile();
    const handleResize = () => {
      checkMobile();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <Home mobile={mobile} />;
      case "about":
        return <About mobile={mobile} />;
      case "projects":
        return <Projects mobile={mobile} />;
      case "experiences":
        return <Experiences mobile={mobile} />;
      case "contact":
        return <ContactPage mobile={mobile}></ContactPage>;
      default:
        return <Home mobile={mobile} />;
    }
  };

  return (
    <>
      <Router>
        <Navbar setActivePage={setActivePage} mobile={mobile} />
        <div className="content">{renderContent()}</div>
      </Router>
    </>
  );
}

export default App;
