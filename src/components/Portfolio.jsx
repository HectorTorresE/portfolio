import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <div className="flex flex-col items-center">
      <div className="">
        <h1 className="text-orange text-3xl font-bold">My Recent Works</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map((project) => (
          <PortfolioItem
            imgUrl={project.imgUrl}
            title={project.title}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
