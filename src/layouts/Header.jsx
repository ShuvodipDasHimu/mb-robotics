import React, { useState } from "react";
import { NavLink } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDropdown = () => setIsOpen(false);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={closeDropdown}
          className={({ isActive }) =>
            isActive 
              ? "text-indigo-400 font-bold bg-white/10 text-center justify-center" 
              : "text-white hover:text-indigo-400 focus:text-indigo-400 text-center justify-center"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          onClick={closeDropdown}
          className={({ isActive }) =>
            isActive 
              ? "text-indigo-400 font-bold bg-white/10 text-center justify-center" 
              : "text-white hover:text-indigo-400 focus:text-indigo-400 text-center justify-center"
          }
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/resources"
          onClick={closeDropdown}
          className={({ isActive }) =>
            isActive 
              ? "text-indigo-400 font-bold bg-white/10 text-center justify-center" 
              : "text-white hover:text-indigo-400 focus:text-indigo-400 text-center justify-center"
          }
        >
          Resources
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/iconic-robots"
          onClick={closeDropdown}
          className={({ isActive }) =>
            isActive 
              ? "text-indigo-400 font-bold bg-white/10 text-center justify-center" 
              : "text-white hover:text-indigo-400 focus:text-indigo-400 text-center justify-center"
          }
        >
          Iconic Robots
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar text-white py-4 relative">
      <div className="navbar-start">
        {/* Mobile Burger Toggle Button */}
        <button
          className="btn btn-ghost lg:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h8m-8 6h16"}
            />
          </svg>
        </button>

        <NavLink to="/" className="btn btn-ghost text-2xl font-bold tracking-wider hover:text-indigo-400">
          MB Robotics
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg gap-2">{navLinks}</ul>
      </div>

      {/* Desktop Get Started Button */}
      <div className="navbar-end hidden lg:flex">
        <NavLink 
          to="/products" 
          className="btn bg-indigo-500 hover:bg-indigo-600 text-white border-none btn-lg px-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 focus:ring-2 focus:ring-indigo-400"
        >
          Get Started
        </NavLink>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 w-full h-screen bg-slate-950/95 backdrop-blur-2xl z-40 flex flex-col justify-center items-center p-6 lg:hidden">
          {/* Close button top right */}
          <button 
            onClick={closeDropdown}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl p-2"
          >
            ✕
          </button>

          {/* Links list perfectly centered */}
          <ul className="menu text-center text-2xl gap-6 w-full max-w-xs flex flex-col items-center justify-center p-0 m-0">
            {navLinks}
            <li className="w-full mt-4">
              <NavLink
                to="/products"
                onClick={closeDropdown}
                className="btn bg-indigo-500 hover:bg-indigo-600 text-white border-none text-lg py-3 rounded-2xl shadow-lg w-full flex justify-center items-center text-center"
              >
                Get Started
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;