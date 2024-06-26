import React, { useEffect, useRef } from "react";
import logo from "/images/logo.svg";
import menu from "/images/icon-menu.svg";
import close from "/images/icon-close.svg";
import cart from "/images/icon-cart.svg";
import avatar from "/images/image-avatar.png";
import CartWindow from "./CartWindow";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

function index({ isCartOpen, setIsCartOpen, isNavOpen, setIsNavOpen }) {
  const quantity = useSelector((state) => state.cart.items.length);
  const cartWindowRef = useRef(null);
  const cartIconRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        cartWindowRef.current &&
        !cartWindowRef.current.contains(event.target) &&
        cartIconRef.current &&
        !cartIconRef.current.contains(event.target)
      ) {
        setIsCartOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsCartOpen]);

  return (
    <div className="mx-4 flex justify-between relative lg:mx-0">
      <div className="flex items-center space-x-4 lg:space-x-0">
        <div className="lg:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
          {isNavOpen ? (
            <img src={close} alt="close " />
          ) : (
            <img src={menu} alt="menu" />
          )}{" "}
        </div>

        <img src={logo} alt="logo" />
        <div className="hidden text-gray leading-[26px] lg:flex items-center space-x-8 translate-x-16  lg:mt-3">
          <div className="lg:relative group">
            <p className="cursor-pointer group-hover:text-orange">
              Collections
            </p>
            <hr className="lg:absolute top-[62px] left-0 group-hover:border-2 group-hover:w-full text-orange" />
          </div>
          <div className="lg:relative group">
            <p className="cursor-pointer group-hover:text-orange">Men</p>
            <hr className="lg:absolute top-[62px] left-0 group-hover:border-2 group-hover:w-full text-orange" />
          </div>
          <div className="lg:relative group">
            <p className="cursor-pointer group-hover:text-orange">Women</p>
            <hr className="lg:absolute top-[62px] left-0 group-hover:border-2 group-hover:w-full text-orange" />
          </div>
          <div className="lg:relative group">
            <p className="cursor-pointer group-hover:text-orange">About</p>
            <hr className="lg:absolute top-[62px] left-0 group-hover:border-2 group-hover:w-full text-orange" />
          </div>
          <div className="lg:relative group">
            <p className="cursor-pointer group-hover:text-orange">
              Contact
            </p>
            <hr className="lg:absolute top-[62px] left-0 group-hover:border-2 group-hover:w-full text-orange" />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative" ref={cartIconRef}>
          {" "}
          <img
            src={cart}
            alt="cart"
            className="cursor-pointer"
            onClick={() => setIsCartOpen(!isCartOpen)}
          />
          <p
            className="absolute px-[7.5px] bg-orange rounded-full right-[-7px] top-[-8px] 
          text-xs text-white font-bold"
          >
            {quantity}
          </p>
        </div>

        <img src={avatar} alt="avatar" width={50} />
      </div>
      <CartWindow isCartOpen={isCartOpen} cartWindowRef={cartWindowRef} />
      <Sidebar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </div>
  );
}

export default index;
