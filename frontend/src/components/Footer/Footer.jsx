import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="w-full max-w-screen-xl mx-auto p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Left Column */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h1 className='logo text-3xl font-bold mb-2'>Forkify</h1>
            <p className="text-gray-400 text-sm">
              Your premier destination for discovering and ordering delicious food.
            </p>
            <div className="flex mt-4 space-x-4">
              <img src={assets.facebook_icon} alt="Facebook" className="w-7 h-7 cursor-pointer" />
              <img src={assets.twitter_icon} alt="Twitter" className="w-7 h-7 cursor-pointer" />
              <img src={assets.linkedin_icon} alt="LinkedIn" className="w-7 h-7 cursor-pointer" />
            </div>
          </div>
          {/* Right Columns */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 md:w-auto">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-white uppercase">Company</h2>
              <ul className="text-gray-400 font-medium text-sm">
                <li className="mb-3">Home</li>
                <li className="mb-3">About us</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-white uppercase">Get in touch</h2>
              <ul className="text-gray-400 font-medium text-sm">
                <li className="mb-3">+91-734567-8910</li>
                <li>contact@forkify.app</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            Copyright © 2025 <a href="#" className="hover:underline">Forkify™</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
