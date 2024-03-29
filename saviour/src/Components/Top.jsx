import React, { useState } from "react";
import "../Styles/Top.css";
import logo from "../assets/Logo_ Savior.svg";
import arrowdown from "../assets/ep_arrow-down-bold.svg";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleNavbar = () => {
    setOpen(!open);
  };
  return (
    <>
      <main className="main h-1/2">
        <nav className="flex justify-around items-center pt-10 ">
          <button className="block md:hidden" onClick={handleNavbar}>
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <div className=" flex justify-center items-center mt-auto gap-5 ">
            <div className="flex justify-center items-center mt-auto  ">
              <img src={logo} alt="Navbar_logo" className="h-30px  absolute p-0 object-cover" />
              <div className="text-white text-[20px] font-ZCOOLKuaiLe relative left-20 -top-4 hidden md:block ">Saviour</div>
            </div>
            
          </div>
          <div
            className={`md:flex font-ZCOOLKuaiLe justify-between items-center pt-2 pb-2 pr-5 pl-5 gap-5  rounded-md bg-stone-800  text-white ${
              open ? "block" : "hidden"
            }`}
          >
            <a href="#">Home</a>
            <a href="#">IDO</a>
            <a href="#">Tokenamics</a>
            <a href="#">Roadmap</a>
            <div className="flex justify-around items-center">
              <a href="#">Coming Soon</a>
              <img src={arrowdown} alt="down-arrow" />
            </div>
          </div>
          <button className="walletbtn font-ZCOOLKuaiLe  pr-4 pl-4 pt-3 pb-3 rounded-full text-white bg-gradient-to-r from-red-600 to-red-700">
            Connect wallet
          </button>
        </nav>
        <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-2xl text-white font-shojumaru">
            Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
          </p>
        </div>
      </main>
    </>
  );
};
