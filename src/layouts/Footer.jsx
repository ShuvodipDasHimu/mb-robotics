import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center text-white/80 p-6 sm:p-10 bg-black/40 backdrop-blur-md rounded-2xl my-12 border border-white/10 space-y-6">
      <div className="max-w-md space-y-2">
        <h2 className="text-3xl font-bold text-white">MB Robotics</h2>
        <p className="text-sm text-white/70">
          Pioneering the future with advanced AI-driven robotics solutions tailored for modern adaptability and autonomous precision.
        </p>
      </div>

      {/* Centered navigation links placed directly above copyright */}
      <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm font-medium">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "text-indigo-400 font-bold" : "text-white/80 hover:text-indigo-400 transition-colors"}
        >
          Home
        </NavLink>
        <NavLink 
          to="/products" 
          className={({ isActive }) => isActive ? "text-indigo-400 font-bold" : "text-white/80 hover:text-indigo-400 transition-colors"}
        >
          Products
        </NavLink>
        <NavLink 
          to="/resources" 
          className={({ isActive }) => isActive ? "text-indigo-400 font-bold" : "text-white/80 hover:text-indigo-400 transition-colors"}
        >
          Resources
        </NavLink>
        <NavLink 
          to="/iconic-robots" 
          className={({ isActive }) => isActive ? "text-indigo-400 font-bold" : "text-white/80 hover:text-indigo-400 transition-colors"}
        >
          Iconic Robots
        </NavLink>
      </nav>

      {/* Copyright Notice */}
      <p className="text-xs text-white/60 pt-2 border-t border-white/10 w-full max-w-sm">
        Copyright © {new Date().getFullYear()} All rights reserved by MB Robotics
      </p>
    </footer>
  );
};

export default Footer;