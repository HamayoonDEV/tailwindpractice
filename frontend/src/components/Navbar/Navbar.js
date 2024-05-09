import React from "react";
import logo from "../../img/logo.svg";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="pt-2">
          <img src={logo} alt="logo" />
        </div>
        {/* menu */}
        <div className=" hidden  md:flex space-x-6 font-bold ">
          <a href="/pricing" className=" hover:text-red-800">
            Pricing
          </a>
          <a href="/products" className=" hover:text-red-800">
            Products{" "}
          </a>
          <a href="/about us" className=" hover:text-red-800">
            About us
          </a>
          <a href="/careers" className=" hover:text-red-800">
            Careers
          </a>
          <a href="/community" className=" hover:text-red-800">
            Community
          </a>
        </div>
        {/* button */}
        <a
          href="#"
          className=" hidden md:block p-2 px-6 pt-2 text-white bg-gradient-to-r from-orange-500 to-orange-800 rounded-full hover:bg-gradient-to-l from-red-500 to-red-800 font-bold"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
