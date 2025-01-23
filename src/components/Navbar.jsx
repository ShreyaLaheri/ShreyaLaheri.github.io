import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/bitmoji.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex justify-between h-14 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-2xl font-bold text-primary cursor-pointer"
            >
              <img src={Logo} alt="logo" class="h-12"/>
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-primary focus:outline-none focus:text-primary"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 absolute md:relative bg-white md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 z-10 md:z-auto shadow-md md:shadow-none p-4 md:p-0`}
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-primary font-semibold"
              className="text-gray-dark hover:text-primary block px-4 py-2 text-lg cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-primary font-semibold"
              className="text-gray-dark hover:text-primary block px-4 py-2 text-lg cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              to="resume"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-primary font-semibold"
              className="text-gray-dark hover:text-primary block px-4 py-2 text-lg cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              RESUME
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-primary font-semibold"
              className="text-gray-dark hover:text-primary block px-4 py-2 text-lg cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              PROJECTS
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-primary font-semibold"
              className="text-gray-dark hover:text-primary block px-4 py-2 text-lg cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;