'use client'
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-green-800 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <p className="text-2xl font-bold">Avotein Farms</p>
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleNav}
            >
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          {/* Menu items */}
          <div className="hidden sm:flex sm:items-center">
            <div className="flex space-x-4">
              <Link href="/">
                <p className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </p>
              </Link>
              <Link href="/about">
                <p className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                  About Us
                </p>
              </Link>
              <Link href="/services">
                <p className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                  Our Services
                </p>
              </Link>
              <Link href="/projects">
                <p className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                  Projects
                </p>
              </Link>
              <Link href="/contact">
                <p className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium">
                  Contact Us
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {navOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/">
              <p className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">
                Home
              </p>
            </Link>
            <Link href="/about">
              <p className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">
                About Us
              </p>
            </Link>
            <Link href="/services">
              <p className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">
                Our Services
              </p>
            </Link>
            <Link href="/projects">
              <p className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">
                Projects
              </p>
            </Link>
            <Link href="/contact">
              <p className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-700">
                Contact Us
              </p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
