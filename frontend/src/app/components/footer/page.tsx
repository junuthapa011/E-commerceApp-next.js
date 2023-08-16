import React from "react";

function Footer() {
  return (
    <div className="">
      <div className="flex fixed bottom-0 bg-white w-full h-[25%] justify-evenly pt-4">
        <ul>
          <li className=" text-lg font-semibold">Shop</li>
          <div className="text-xs py-2">
            <li>Tops</li>
            <li>Bottoms</li>
            <li>Dresses</li>
            <li>Jeans</li>
            <li>Coats</li>
          </div>
        </ul>
        <ul>
          <li className=" text-lg font-semibold">Quick links</li>
          <div className="text-xs py-2">
            <li>Special Offers</li>
            <li>Gift Cards</li>
            <li>Blogs</li>
            <li>Privacy Policy</li>
            <li>Student Discount</li>
          </div>
        </ul>
        <ul>
          <li className=" text-lg font-semibold">Corporate Info</li>
          <div className="text-xs py-2">
            <li>Careers</li>
            <li>Sustainibility Group</li>
            <li>Corporate Governance</li>
            <li>Site Map</li>
            <li>Find a Store</li>
          </div>
        </ul>
        <ul>
          <li className="text-lg font-semibold">About</li>
          <div className="text-xs py-2">
            <li>Terms & conditions</li>
            <li>Responsibility</li>
            <li>Contact Us</li>
          </div>
        </ul>
        <ul>
          <li className=" text-lg font-semibold">Feedback</li>
          <div className="text-xs py-2">
            <li>Leave a Feedback</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
