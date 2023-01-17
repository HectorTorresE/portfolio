import React, { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="text-white min-h-screen">
        <Header />
        <div className="bg-background">
          <Intro />
          <div className="bg-white">
            <Portfolio />
          </div>
          <div className="md:hidden">
            <AboutMe />
          </div>
          <Skills />
          <div className="bg-white">
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
