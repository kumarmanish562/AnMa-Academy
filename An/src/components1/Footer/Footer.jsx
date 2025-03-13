import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import FooterImg from "../../assets/footer.jpg";

const Footer = () => {
  return (
    <div
      className="rounded-t-3xl bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="bg-black/30 backdrop-blur-md">
        <div className="container py-10">
          <div className="grid md:grid-cols-4 gap-6 border-t border-gray-600/30 text-white">
            {/* Brand Info Section */}
            <div className="py-6 px-4 space-y-4">
              <div className="text-2xl flex items-center gap-2 font-bold uppercase text-yellow-400">
                <MdComputer className="text-4xl" />
                <p>An Academy</p>
              </div>
              <p className="text-gray-300 text-sm">
                Welcome to An Academy – your gateway to interactive and personalized learning! Our expert tutors make complex topics easy to understand through real-world examples and hands-on guidance.
              </p>
              <div className="flex items-center gap-5 mt-6">
                <a href="#" className="hover:text-yellow-400 transition transform hover:scale-110">
                  <HiLocationMarker className="text-3xl" />
                </a>
                <a href="#" className="hover:text-yellow-400 transition transform hover:scale-110">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="hover:text-yellow-400 transition transform hover:scale-110">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="hover:text-yellow-400 transition transform hover:scale-110">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
            {/* Footer Links Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 gap-6">
              {["Important Links", "Resources", "Company Links"].map((title, index) => (
                <div key={index} className="py-6 px-4">
                  <h1 className="text-lg font-bold text-yellow-400 mb-4">{title}</h1>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    {["Home", "About", "Services", "Login"].map((link, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="hover:text-yellow-400 transition"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Copyright Section */}
          <div className="text-center py-6 border-t border-gray-600/20 text-gray-400 text-sm">
            &copy; 2025 Manish Kumar. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;