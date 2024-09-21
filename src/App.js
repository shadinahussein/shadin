import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import "./styles/Global.css";
import Intro from "./components/Intro";
import About from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
      <div className="App">
        <NavBar></NavBar>
        
        <div id="content">
          <Intro></Intro>
          <About></About>
          <Experience></Experience>
          <Projects></Projects>
        </div>

        <footer>
          <p>Designed and created by Shadin Hussein </p>
          <p>© All rights reserved</p>
        </footer>
      </div>
  );
}

export default App;
