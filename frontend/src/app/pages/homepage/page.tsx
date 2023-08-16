"use client";
import Footer from "@/app/components/footer/page";
import Navbar from "@/app/components/navbar/page";
import React from "react";
import { BsSuitHeart } from "react-icons/bs";
import { PiShoppingBagOpenLight } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";

function Homepage() {
  const navLinks = [
    "Home",
    "Shop",
    "Categories",
    "Sale",
    "Promotions",
    "Contact",
  ];
  return (
    <>
      <div className="flex items-center bg-white shadow-lg py-2">
        <h1 className="island-font text-6xl text-color px-4 hover:cursor-pointer">
          Dream Labs
        </h1>
        <div className="flex flex-grow justify-evenly items-center text-lg font-semibold inria-serif space-x-5">
          {navLinks.map((link, index) => (
            <Navbar
              key={index}
              className="hover:text-slate-400 hover:cursor-pointer"
            >
              {link}
            </Navbar>
          ))}
        </div>
        <div className="flex flex-grow items-center justify-end space-x-8 pr-10 font-semibold text-xl">
          <div className=" hover:text-slate-400 ">
            <VscAccount />
          </div>
          <div className=" hover:text-slate-400 ">
            <BsSuitHeart />
          </div>
          <div className=" hover:text-slate-400 ">
            <PiShoppingBagOpenLight />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
//
