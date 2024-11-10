import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed top-0 w-full z-10 shadow-lg transition-all duration-300 ease-in-out hover:bg-teal-600">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AI World</h1>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#home"
              className="hover:text-teal-400 transition-all duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-teal-400 transition-all duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-teal-400 transition-all duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-teal-400 transition-all duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
