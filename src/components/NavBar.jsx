import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul className="bg-gray-800 text-white p-5 flex justify-center gap-6">
          <li>
            <Link className="text-xl font-semibold hover:text-blue-500" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-xl font-semibold hover:text-blue-500"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-xl font-semibold hover:text-blue-500"
              to="/services"
            >
              services
            </Link>
          </li>
          <li>
            <Link
              className="text-xl font-semibold hover:text-blue-500"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
