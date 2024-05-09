import React from "react";
import heroImage from "../../img/illustration-intro.svg";

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row item-center px-6  mt-10 space-y-0 md:space-y-0">
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1 className="max-w-md text-center text-4xl font-bold md:text-5xl md:text-left">
          Bring everyone together to build better products
        </h1>
        <p className="max-w-sm text-center text-neutral-500 md:text-left">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger goals to view.
        </p>
        <div className="flex justify-center md:justify-start">
          <a
            href="#"
            className="p-3 px-6 pt-2 text-white bg-gradient-to-r from-orange-500 to-orange-800 hover:bg-gradient-to-l from-red-500 to-red-800 font-bold rounded-full"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src={heroImage} alt="heroImage" />
      </div>
    </div>
  );
};

export default Hero;
