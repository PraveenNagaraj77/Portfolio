// src/components/Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (section) => {
    setActiveSection(section === activeSection ? "" : section);
    setIsMenuOpen(false);
  };

  const handlePortfolioClick = () => {
    setActiveSection(""); // Clear the active section when Portfolio is clicked
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#161513] p-4 fixed w-full z-10 top-0 shadow" data-aos="fade-out" >
      <div className="container mx-auto flex justify-between items-center px-4">
        <a
          href=""
          className={`text-white font-bold text-xl cursor-pointer ${
            activeSection === "home" && "active"
          }`}
          onClick={handlePortfolioClick}
        >
          Portfolio
        </a>
        <div className="hidden md:flex space-x-4">
          {[ "about", "skills", "experience", "projects", "contact"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`text-white font-bold py-2 px-3 transition ${
                  activeSection === section
                    ? "border-b-2 border-green-500"
                    : "hover:border-black hover:text-[#32CD32]"
                }`}
                onClick={() => handleClick(section)}
              >
                {section.toUpperCase()}
              </a>
            )
          )}
        </div>
        <div className="md:hidden">
          {isMenuOpen ? (
            <FaTimes
              className="text-gray-600 text-2xl"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <FaBars
              className="text-white text-2xl"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>
        {/* <div className='hidden lg:block text-white hover:bg-[#1E90FF]  bg-orange-600  cursor-pointer px-3 py-3 rounded-3xl '>Connect With Me</div> */}
        <div className="hidden lg:block">
          <a
            href="https://github.com/PraveenNagaraj77?tab=repositories"
            target="_blank"
          >
            <FaGitAlt className="text-red-600 cursor-pointer text-5xl " />
          </a>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden py-4 px-2 bg-white">
          {[ "about", "skills", "experience", "projects", "contact"].map(
            (section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`block py-2 px-3 text-gray-600 bg-white font-bold transition ${
                  activeSection === section
                    ? "border-l-4 border-green-500"
                    : "hover:border-l-4  hover:text-black"
                }`}
                onClick={() => handleClick(section)}
              >
                {section.toUpperCase()}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
