// Footer.jsx

import React from "react";
import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + Description */}
          <div>
            <h2 className="text-xl font-bold text-white">MinifyMe</h2>
            <p className="mt-2 text-sm text-gray-400">
              Bringing innovation and creativity to the digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase">
              Follow Us
            </h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white text-gray-400">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white text-gray-400">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white text-gray-400">
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
          © 2025 MinifyMe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
