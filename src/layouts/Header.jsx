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
              ? "text-indigo-400 font-bold bg-white/10" 
              : "text-white hover:text-indigo-400 focus:text-indigo-400"
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
              ? "text-indigo-400 font-bold bg-white/10" 
              : "text-white hover:text-indigo-400 focus:text-indigo-400"
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
              ? "text-indigo-400 font-bold bg-white/10" 
              : "text-white hover:text-indigo-400 focus:text-indigo-400"
          }
        >
          Resources
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar text-white py-4">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-slate-900 border border-white/10 text-white rounded-box z-50 mt-3 w-52 p-3 shadow-2xl"
          >
            {navLinks}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-2xl font-bold tracking-wider hover:text-indigo-400">
          MB Robotics
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg gap-2">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        <NavLink to="/products" className="btn btn-primary bg-indigo-400 border-none btn-md lg:btn-lg px-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
          Get Started
        </NavLink>
      </div>
    </div>
  );
};

export default Header;