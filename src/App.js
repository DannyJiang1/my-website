import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";

function App() {
  const [activePage, setActivePage] = useState("home");

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "experiences":
        return <Experiences />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Router>
        <Navbar setActivePage={setActivePage} />
        <div className="content">{renderContent()}</div>
      </Router>
    </>
  );
}

export default App;
