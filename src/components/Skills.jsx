import React from "react";
import "../styles/skills.css";

function Skills() {
  return (
    <div className="flex flex-col py-20 border-t-2 border-white md:flex-row">
      <ul className="bullet-list text-center md:w-1/3">
        <li className="bullet-list-diamond text-4xl font-bold font-inter my-10">
          Language
        </li>
        <ul>
          <li className="my-4 font-inter text-xl">Javascript</li>
          <li className="my-4 font-inter text-xl">Ruby</li>
          <li className="my-4 font-inter text-xl">HTML</li>
          <li className="my-4 font-inter text-xl">CSS</li>
        </ul>
      </ul>
      <ul className="bullet-list text-center md:w-1/3">
        <li className="bullet-list-square text-4xl font-bold font-inter my-10">
          Frameworks
        </li>
        <ul>
          <li className="my-4 font-inter text-xl">BootStrap</li>
          <li className="my-4 font-inter text-xl">Ruby on Rails</li>
          <li className="my-4 font-inter text-xl">RSPec</li>
          <li className="my-4 font-inter text-xl">CapyBara</li>
          <li className="my-4 font-inter text-xl">Selenium</li>
        </ul>
      </ul>
      <ul className="bullet-list text-center md:w-1/3">
        <li className="bullet-list-circle text-4xl font-bold font-inter my-10">
          Skills
        </li>
        <ul>
          <li className="my-4 font-inter text-xl">Codepen</li>
          <li className="my-4 font-inter text-xl">Github</li>
          <li className="my-4 font-inter text-xl">Gitlab</li>
          <li className="my-4 font-inter text-xl">Terminal</li>
          <li className="my-4 font-inter text-xl">VS Code</li>
        </ul>
      </ul>
    </div>
  );
}

export default Skills;
