import React, { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import { BrowserRouter, Routes, Route  } from "react-router-dom";

function App() {
  return (
    <>
      <div className="text-white min-h-screen bg-navbar">
        <Header />
        <div className="bg-background" id="intro">
          <Intro />
          <div className="bg-white" id="portfolio">
            <Portfolio />
          </div>
          <div className="md:hidden" id="aboutme">
            <AboutMe />
          </div>
          <Skills id="skills"/>
          <div className="bg-white" id="contact">
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
