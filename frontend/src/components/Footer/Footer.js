import React from "react";
import logo from "../../img/logo-white.svg";
import facebook from "../../img/icon-facebook.svg";
import instagram from "../../img/icon-instagram.svg";
import tweeter from "../../img/icon-twitter.svg";
import youtube from "../../img/icon-youtube.svg";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 ">
      <div className="flex flex-col-reverse justify-between item-center container mx-auto px-6 py-10 spcae-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col space-y-12 justify-between items-center">
          <img src={logo} alt="logo" />
          <div className="flex justify-center space-x-4">
            <a href="#">
              <img src={facebook} alt="social" />
            </a>
            <a href="#">
              <img src={instagram} alt="social" />
            </a>
            <a href="#">
              <img src={tweeter} alt="social" />
            </a>
            <a href="#">
              <img src={youtube} alt="social" />
            </a>
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col justify-center items-center text-white">
            <a href="">Home</a>
            <a href="">Products</a>
            <a href="">Pricing</a>
            <a href="">About us</a>
          </div>
          <div className="flex flex-col justify-center items-center text-white">
            <a href="">Careers</a>
            <a href="">Community</a>
            <a href="">Privacy policy</a>
          </div>
        </div>
        <div className="flex flex-col space-y-12 justify-between items-center ">
          <div className="flex justify-center space-x-4">
            <input
              className="px-12 py-3 bg-white text-gray-400 rounded-full font-bold outline-none text-xl"
              placeholder="updates in your inbox"
            />
            <a
              href="#"
              className="px-10 py-4 rounded-full text-white bg-orange-700"
            >
              Go
            </a>
          </div>
          <p className="text-white">copyright&copy; 2024 All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
