import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-blue-500 w-full flex max-sm:flex-col mt-5 ">
      <div className="w-5/12 max-sm:w-full">
        <div>
          <div className="text-left p-5">
            <h1 className="text-5xl font-bold text-white">SeoLand</h1>
            <p className="text-white text-base mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laboriosam culpa atque porro. Laboriosam quam unde cumque
              obcaecati illo numquam, iste ducimus voluptatem qui tenetur modi
              aperiam recusandae.
            </p>
          </div>

          <div className="flex items-center space-x-4 p-5">
            <input
              type="email"
              placeholder="Enter email to search"
              className="border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Subscribe Now
            </button>
          </div>
        </div>
        
      </div>
      <div className="w-4/12 max-sm:w-full ">
      <h1 className="text-3xl text-white text-center font-bold mt-5">Contact SEOLAND</h1>
      <div className="flex items-center py-5">
      <FaLocationDot className="w-8 h-8 ml-5"/>
        <div className="ml-5 text-left ">
          <p className="text-slate-700 font-bold">Visit Our Location</p>
          <p className="text-white text-xl">5th Street,New York, USA</p>
        </div>
      </div>
      <div className="flex items-center py-5">
      <MdOutlineEmail className="w-8 h-8 ml-5"/>
        <div className="ml-5 text-left ">
          <p className="text-slate-700 font-bold">Visit Our Location</p>
          <p className="text-white text-xl">5th Street,New York, USA</p>
        </div>
      </div>
      <div className="flex items-center py-5">
      <FaPhone className="w-6 h-6 ml-6"/>
        <div className="ml-5 text-left ">
          <p className="text-slate-700 font-bold">Visit Our Location</p>
          <p className="text-white text-xl">5th Street,New York, USA</p>
        </div>
      </div>
      </div>
      <div className="w-3/12 max-sm:w-full text-left">
      <h1 className="text-3xl text-white text-center font-bold mt-5">Company</h1>
        <ul className="pl-5 py-5">
          <li className="text-xl font-bold text-slate-700 py-2 hover:text-white">About Us</li>
          <li className="text-xl font-bold text-slate-700 py-2 hover:text-white ">Contact Us</li>
          <li className="text-xl font-bold text-slate-700 py-2 hover:text-white">Price Table</li>
          <li className="text-xl font-bold text-slate-700 py-2 hover:text-white">Service One</li>
          <li className="text-xl font-bold text-slate-700 py-2 hover:text-white">Team Member</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
