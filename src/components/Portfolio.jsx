import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

const item = ["Ruby", "Ruby on Rails", "RSpec", "PostgreSQL"];

function Portfolio() {
  return (
    <div className="flex flex-col items-center lg:mx-20">
      <div className="flex flex-row my-20 items-start w-max lg:w-full lg:mb-5">
        <h1 className="text-text text-[40px] font-title border-b border-text py-6 lg:pr-4 lg:border-none">
          My Recent Works
        </h1>
        <div className="border-b border-text w-9/12 mt-14 lg:block hidden"></div>
      </div>
      <div className="lg:flex lg:flex-row lg:h-[32rem] lg:mb-20">
        <div className="container mx-auto bg-bgtext w-11/12 h-56 p-4 lg:w-fit lg:h-[32rem] lg:bg-contain sm:h-full">
          <img
            src="https://user-images.githubusercontent.com/68971295/194430936-e0684210-4d75-469e-b9f3-52023ba0c8fb.png"
            alt="portfolio"
            className="object-fill h-48 w-full cursor-pointer shadow-lg border-text border lg:object-contain lg:h-[30rem] lg:shadow-none lg:border-none sm:h-full"
          />
        </div>
        <div className="w-full p-4 lg:w-2/5 lg:self-center">
          <h3 className="text-text text-3xl mb-3 md:mb-3 font-semibold lg:text-4xl">
            Finance App
          </h3>
          <p className="text-text text-lg ">
          This is a finance app that allows users to create transactions and track their spending. It also allows users to create groups and add other users to the group. The app also allows users to track their spending in the group.
          </p>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs my-3 text-text lg:text-base">
            {item.map((items) => (
              <span className="inline-block px-2 py-1 font-semibold border-2 border-bordertech rounded-md">
                {items}
              </span>
            ))}
          </p>
          <a
            className="text-center inline-block px-8 py-3 w-max text-lg rounded-md text-white bg-orange font-inter font-semibold"
            href="#"
            target="_blank"
          >
            See Project
          </a>
        </div>
      </div>
      <div className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {portfolio.map((project) => (
          <PortfolioItem
            imgUrl={project.imgUrl}
            title={project.title}
            tech={project.tech}
            link={project.link}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
