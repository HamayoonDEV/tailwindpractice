import React from "react";

const Cta = () => {
  return (
    <div className=" w-full  bg-orange-500">
      <div className="flex flex-col container items-center justify-between mx-auto  mt-10  px-6 py-24 pt-6  space-y-12 md:py-12 md:flex-row md:space-y-0">
        {" "}
        <h2 className="text-4xl md:text-5xl lg:text-6xl  font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today
        </h2>
        <a
          href=""
          className="px-6 py-2 font-bold text-orange-800 bg-white rounded-full hover:bg-red-800 hover:text-white"
        >
          {" "}
          get started
        </a>
      </div>
    </div>
  );
};

export default Cta;
