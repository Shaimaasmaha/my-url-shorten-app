import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="w-full mx-auto  sm:px-6 md:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo and menu */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8" />
            <ul className="hidden md:flex menu menu-horizontal p-0 space-x-4 ml-6">
              <li><a className="text-gray-600 hover:text-black" href="/">Feature</a></li>
              <li><a className="text-gray-600 hover:text-black" href="/Pricing">Pricing</a></li>
              <li><a className="text-gray-600 hover:text-black" href="/Resource">Resource</a></li>
            </ul>
          </div>
          {/* Desktop buttons */}
          <div className="hidden md:flex">
            <ul className="flex space-x-5 px-10">
              <li>
                <a href="/Login">
                  <button className="btn btn-ghost cursor-pointer text-gray-600 hover:text-black rounded-full py-2">Login</button>
                </a>
              </li>
              <li>
                <a href="/SignUp">
                  <button className="btn bg-cyan-400 cursor-pointer hover:bg-cyan-300 text-white rounded-full px-4 py-2">Sign Up</button>
                </a>
              </li>
            </ul>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-600 hover:text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-2 bg-violet-950 rounded-lg shadow-lg p-4">
            <ul className="flex flex-col space-y-2 text-center">
              <li><a className="text-white hover:text-gray-300" href="/">Feature</a></li>
              <li><a className="text-white hover:text-gray-300" href="/Pricing">Pricing</a></li>
              <li><a className="text-white hover:text-gray-300" href="/Resource">Resource</a></li>
              <li>
                <a href="/Login">
                  <button className="w-full btn btn-ghost text-white hover:text-gray-300 rounded-full py-2">Login</button>
                </a>
              </li>
              <li>
                <a href="/SignUp">
                  <button className="w-full btn bg-cyan-400 hover:bg-cyan-300 text-white rounded-full px-2 py-2">Sign Up</button>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


