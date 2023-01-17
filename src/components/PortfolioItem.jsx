import React from "react";

function PortfolioItem({ title, imgUrl, tech, link, description}) {
  return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-text bg-contain bg-no-repeat bg-center h-96 w-90 flex flex-col justify-end"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      >
        <div className="w-full p-4 bg-text bg-opacity-50">
          <h3 className="text-xl md:text-xl mb-2 md:mb-3 font-text">{title}</h3>
          <h3 className="text-sm font-inter mb-2">{description}</h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
            {tech.map((item) => (
              <span className="inline-block px-2 py-1 font-semibold border-2 border-bordertech rounded-md">
                {item}
              </span>
            ))}
          </p>
        </div>
      </a>
      <a
        className="flex flex-row justify-center px-8 py-3 text-lg rounded-b-sm text-white bg-orange font-inter font-semibold w-full"
        href={link}
        target="_blank"
      >
        See Project
      </a>
    </div>
  );
}

export default PortfolioItem;
