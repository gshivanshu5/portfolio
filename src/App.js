import React from "react";
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contactt";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";
import Skills from "./components/skill/s";
import Nav from "./components/nav";


function App() {
  return (
    <div className="App">
      <Router basename="/portfolio">
        <Nav />
        <div className="main_content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
