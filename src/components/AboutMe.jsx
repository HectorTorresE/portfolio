import React from "react";
import CV from "../data/CV.pdf";

const Logo = () => {
  return (
    <svg
      width="160"
      height="259"
      viewBox="0 0 160 259"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
    >
      <path
        d="M65.1059 241.266H117.284V245.306H65.1059V241.266Z"
        fill="white"
        stroke="#262626"
        stroke-width="0.577193"
        stroke-miterlimit="10"
      />
      <path
        d="M96.736 221.18C96.736 221.18 90.0406 227.067 81.3827 224.412C72.7248 221.757 45.9431 213.099 45.9431 213.099L54.2547 205.711C54.2547 205.711 82.5371 205.711 96.0434 204.326L102.97 210.79L96.736 221.18Z"
        fill="white"
        stroke="#262626"
        stroke-width="0.577193"
        stroke-miterlimit="10"
      />
      <path
        d="M62.3357 142.797C62.3357 142.797 55.1785 153.302 66.1451 167.732C77.1118 182.162 93.2732 201.786 93.2732 201.786C93.2732 201.786 101.354 214.485 96.7364 221.065L128.713 190.704L62.3357 142.797Z"
        fill="white"
        stroke="#262626"
        stroke-width="0.577193"
        stroke-miterlimit="10"
      />
      <path
        d="M179.391 135.41L245.652 210.56C245.652 210.56 266.431 234.802 258.351 248.655C250.27 262.507 232.031 259.275 219.794 253.965C207.558 248.655 62.3359 142.913 62.3359 142.913L181.815 40.6344L238.726 83.4621L179.391 135.41Z"
        fill="white"
        stroke="#262626"
        stroke-width="0.577193"
        stroke-miterlimit="10"
      />
      <path
        d="M145.566 107.936L119.939 92.6978L82.5369 125.598L106.894 144.53L145.566 107.936Z"
        fill="#FF6B00"
        stroke="#262626"
        stroke-width="0.577193"
        stroke-miterlimit="10"
      />
      <path
        d="M161.267 107.936L97.5445 64.5308L58.8726 98.5852L122.595 144.53L161.267 107.936Z"
        fill="white"
        stroke="#262626"
        stroke-width="0.577193"
        stroke-miterlimit="10"
      />
      <path
        d="M113.359 87.7334L99.2758 99.6236L137.14 130.561L161.959 107.127L113.359 87.7334Z"
        fill="#262626"
      />
      <path
        d="M233.3 240.575L125.596 153.88L149.838 129.754L233.3 240.575Z"
        fill="#262626"
      />
      <path
        d="M271.856 203.864L138.64 48.5994L99.8529 82.6538L233.3 240.574L271.856 203.864Z"
        fill="white"
        stroke="#262626"
        stroke-width="0.577193"
        stroke-miterlimit="10"
      />
      <path
        d="M181.815 86.2316L265.508 18.2383C267.24 36.1313 274.859 54.2551 274.859 54.2551L356.358 131.137L328.307 155.495L330.154 156.996C343.545 170.386 330.154 186.548 330.154 186.548L255.003 252.579C264.469 239.534 253.041 221.064 253.041 221.064L179.16 135.293C157.458 109.088 181.815 86.2316 181.815 86.2316Z"
        fill="white"
        stroke="#262626"
        stroke-width="0.577193"
        stroke-miterlimit="10"
      />
      <path
        d="M65.1072 205.712L78.498 245.307H14.8914L0.346085 205.712H65.1072Z"
        fill="white"
        stroke="#262626"
        stroke-width="0.577193"
        stroke-miterlimit="10"
      />
      <path
        d="M113.013 205.712C113.013 205.712 115.437 202.941 108.973 190.589C102.508 178.122 84.6153 161.499 84.6153 161.499C84.6153 161.499 77.3427 154.226 76.0729 152.956L128.713 190.935L113.013 205.712Z"
        fill="#262626"
      />
    </svg>
  );
};

function AboutMe() {
  return (
    <div className="flex flex-col my-20 md:flex-row">
      <div className="md:flex-col md:w-1/2">
        <h1 className="text-center text-orange text-7xl mb-1 md:mb-3 font-title lg:text-8xl md:text-left md:pl-4">
          About me
        </h1>
        <p className="text-sm pt-2 font-text mx-4 text-justify">
          Hello I’m a software developer! I can help you build a product ,
          feature or website Look through some of my work and experience! If you
          like what you see and have a project you need coded, don’t hestiate to
          contact me.
        </p>
        <div className="mt-10">
          <a
            className="px-8 py-3 text-lg text-white bg-orange font-inter font-semibold w-fit ml-4"
            href={CV}
            target="_blank"
          >
            Get My Resume
          </a>
        </div>
      </div>
      <div className="self-end -translate-y-16 md:hidden">
        <Logo />
      </div>
    </div>
  );
}

export default AboutMe;