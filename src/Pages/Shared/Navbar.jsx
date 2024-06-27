import React, { useState } from "react";
import {
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = location.pathname === "/";

  return (
    <div className="border-b-2 border-black">
      <div className="navbar mt-5 flex items-center justify-between px-4">
        <div className="navbar-start flex items-center">
          <p className="font-extrabold text-lg">chic.stylin</p>
        </div>
        <div className="navbar-center hidden lg:flex space-x-10">
          <a className="font-semibold text-sm">
            {isHomePage ? (
              <ScrollLink to="home" smooth={true} duration={500}>
                Home
              </ScrollLink>
            ) : (
              <RouterLink to="/">Home</RouterLink>
            )}
          </a>
          <a className="font-semibold text-sm">
            {isHomePage ? (
              <ScrollLink to="collection" smooth={true} duration={500}>
                Collection
              </ScrollLink>
            ) : (
              <RouterLink to="/collection">Collection</RouterLink>
            )}
          </a>
          <a className="font-semibold text-sm">
            {isHomePage ? (
              <ScrollLink to="sell" smooth={true} duration={500}>
                Sell
              </ScrollLink>
            ) : (
              <RouterLink to="/sell">Sell</RouterLink>
            )}
          </a>
          <a className="font-semibold text-sm">
            {isHomePage ? (
              <ScrollLink to="discount" smooth={true} duration={500}>
                Discount
              </ScrollLink>
            ) : (
              <RouterLink to="/discount">Discount</RouterLink>
            )}
          </a>
          <a className="font-semibold text-sm">
            {isHomePage ? (
              <ScrollLink to="about" smooth={true} duration={500}>
                About
              </ScrollLink>
            ) : (
              <RouterLink to="/about">About</RouterLink>
            )}
          </a>
          <a className="font-semibold text-sm">
            {isHomePage ? (
              <ScrollLink to="contact" smooth={true} duration={500}>
                Contact
              </ScrollLink>
            ) : (
              <RouterLink to="/contact">Contact</RouterLink>
            )}
          </a>
          <a className="font-semibold text-sm">
            <ShoppingBagIcon className="h-6 w-6 text-black" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex space-x-4">
          <button className="btn btn-ghost">Customer Supports</button>
          <button className="btn btn-ghost">
            {isHomePage ? (
              <ScrollLink to="signup" smooth={true} duration={500}>
                Account
              </ScrollLink>
            ) : (
              <RouterLink to="/signup">Account</RouterLink>
            )}
          </button>
        </div>
        <div className="lg:hidden  flex items-center">
          <ShoppingBagIcon className="h-8 w-8 text-black mb-2 mr-5 " />
          <button onClick={toggleMenu} className="text-black">
            {isMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-5 px-4">
          <div className="flex flex-col space-y-4">
            <a className="font-semibold text-sm">
              {isHomePage ? (
                <ScrollLink to="home" smooth={true} duration={500}>
                  Home
                </ScrollLink>
              ) : (
                <RouterLink to="/">Home</RouterLink>
              )}
            </a>
            <a className="font-semibold text-sm">
              {isHomePage ? (
                <ScrollLink to="collection" smooth={true} duration={500}>
                  Collection
                </ScrollLink>
              ) : (
                <RouterLink to="/collection">Collection</RouterLink>
              )}
            </a>
            <a className="font-semibold text-sm">
              {isHomePage ? (
                <ScrollLink to="sell" smooth={true} duration={500}>
                  Sell
                </ScrollLink>
              ) : (
                <RouterLink to="/sell">Sell</RouterLink>
              )}
            </a>
            <a className="font-semibold text-sm">
              {isHomePage ? (
                <ScrollLink to="discount" smooth={true} duration={500}>
                  Discount
                </ScrollLink>
              ) : (
                <RouterLink to="/discount">Discount</RouterLink>
              )}
            </a>
            <a className="font-semibold text-sm">
              {isHomePage ? (
                <ScrollLink to="about" smooth={true} duration={500}>
                  About
                </ScrollLink>
              ) : (
                <RouterLink to="/about">About</RouterLink>
              )}
            </a>
            <a className="font-semibold text-sm">
              {isHomePage ? (
                <ScrollLink to="contact" smooth={true} duration={500}>
                  Contact
                </ScrollLink>
              ) : (
                <RouterLink to="/contact">Contact</RouterLink>
              )}
            </a>
            <a className="font-semibold text-sm">
              {isHomePage ? (
                <ScrollLink to="customer-support" smooth={true} duration={500}>
                  Customer Supports
                </ScrollLink>
              ) : (
                <RouterLink to="/customer-support">
                  Customer Supports
                </RouterLink>
              )}
            </a>
            <button className="btn btn-ghost w-20 font-bold primary-button">
              Login
            </button>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default Navbar;
