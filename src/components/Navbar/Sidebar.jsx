import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import close from "/images/icon-close.svg";
function Sidebar({ isNavOpen, setIsNavOpen }) {
  return (
    <div className={`${isNavOpen ? "block" : "hidden"} lg:hidden`}>
      <div className="fixed bg-white top-0 left-0 h-full w-64 overflow-auto z-50">
        <div className="flex justify-start py-10 px-5">
          <img
            src={close}
            className=""
            onClick={() => setIsNavOpen(false)}
          ></img>
        </div>
        <div className="p-5">
          <ul className="font-bold text-[18px] leading-[26px]">
            <li className="mb-4">
              <a href="#" className="block text-gray-800 hover:text-green-500">
                Collections
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="block text-gray-800 hover:text-green-500">
                Men
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="block text-gray-800 hover:text-green-500">
                Women
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="block text-gray-800 hover:text-green-500">
                About
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="block text-gray-800 hover:text-green-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`fixed bg-black opacity-50 top-0 left-0 h-full w-full z-40 ${
          isNavOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsNavOpen(false)}
      ></div>
    </div>
  );
}

export default Sidebar;
