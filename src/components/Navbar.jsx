import React, { useEffect, useState } from "react";
import logo from '../assets/final.png';
import { Link } from "react-scroll";
import { GrLanguage } from "react-icons/gr";
import { FaTimes, FaBars } from "react-icons/fa";
import LoginModal from './LoginModal'; // Import your modal component
import SignupModal from './SignupModal'; // Import your modal component
import Modal from 'react-modal';

// Set app element for accessibility
Modal.setAppElement('#root');

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
        setIsMenuOpen(false);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openLoginModal = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setIsLoginModalOpen(true);
    setIsSignupModalOpen(false); // Close signup modal if open
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openSignupModal = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setIsSignupModalOpen(true);
    setIsLoginModalOpen(false); // Close login modal if open
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "services" },
    { link: "Membership", path: "product" },
    { link: "About", path: "about" },
    { link: "Contact", path: "faq" },
    { link: "Admission", path: "admission" },
  ];

  return (
    <header className="bg-white md:bg-transparent fixed top-0 left-0 right-0 z-50">
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 right-0 left-0 border bg-white transition-all duration-300" : ""}`}>
        <div className="flex justify-between items-center text-base gap-8">
          <a href="" className="text-2xl font-semibold flex items-center space-x-3">
            <img src={logo} alt="ARS Kreedashala Logo" className="w-10 inline-block items-center" />
            <span>ARS Kreedashala</span>
          </a>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={link}
                className="block text-base text-gray900 hover:text-brandPrimary first:font-medium cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <a href="#" onClick={openLoginModal} className="text-brandPrimary hover:text-gray900">Login</a>
            <button onClick={openSignupModal} className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">Register</button>
          </div>

          {/* menu btn, visible on mobile screen */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray900 focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6 text-primary" />
              ) : (
                <FaBars className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-90}
              key={link}
              onClick={toggleMenu}
              className="block text-white hover:text-gray-500 cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>

      {/* Modals */}
      <LoginModal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal} />
      <SignupModal isOpen={isSignupModalOpen} onRequestClose={closeSignupModal} />
    </header>
  );
};

export default Navbar;
