import React from "react";

const NavBar = () => {
  return (
    <header>
      <nav className="bg-gray-800 text-white p-5">
        <ul className="flex justify-center gap-6 font-medium">
          <li>
            <a href="/" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-blue-500">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
