import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-center text-white/80 p-10 bg-black/40 backdrop-blur-md rounded-2xl my-12 border border-white/10">
      <aside>
        <h2 className="text-3xl font-bold text-white mb-2">MB Robotics</h2>
        <p className="max-w-md text-sm text-white/70">
          Pioneering the future with advanced AI-driven robotics solutions tailored for modern adaptability and autonomous precision.
        </p>
        <p className="font-semibold text-white/90 mt-4">
          Copyright © {new Date().getFullYear()} - All right reserved by MB Robotics
        </p>
      </aside> 
      <nav>
        <div className="grid grid-flow-col gap-6 text-base">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-indigo-400 font-bold" : "text-white hover:text-indigo-400 transition-colors"}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? "text-indigo-400 font-bold" : "text-white hover:text-indigo-400 transition-colors"}>Products</NavLink>
          <NavLink to="/resources" className={({ isActive }) => isActive ? "text-indigo-400 font-bold" : "text-white hover:text-indigo-400 transition-colors"}>Resources</NavLink>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;