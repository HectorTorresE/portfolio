import React from "react";
import CV from "../data/CV.pdf";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Hector Torres
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I'm a full-stack developer I can help you build a product, feature or
        website.Take a look of my works. If you like what you see and have a
        project you need coded, don’t hesitate and contact me.
      </p>
      <a className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white" href={CV} target="_blank">
         Resume
      </a>
    </div>
  );
}

export default Intro;
