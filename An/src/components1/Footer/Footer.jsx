import React from "react"; // Import React library
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons
import { HiLocationMarker } from "react-icons/hi"; // Import location icon
import { MdComputer } from "react-icons/md"; // Import computer icon
import FooterImg from "../../assets/footer.jpg"; // Import footer image (not used in this component)

const Footer = () => { // Define Footer component
  return (
    <div
      className="rounded-t-3xl bg-gradient-to-b from-gray-900 to-gray-800 text-white" // Main footer container with gradient background
    >
      <div className="bg-black/30 backdrop-blur-md"> {/* Overlay with blur effect */}
        <div className="container py-10"> {/* Container with vertical padding */}
          <div className="grid md:grid-cols-4 gap-6 border-t border-gray-600/30 text-white"> {/* Grid layout for footer sections */}
            {/* Brand Info Section */}
            <div className="py-6 px-4 space-y-4"> {/* Brand info container */}
              <div className="text-2xl flex items-center gap-2 font-bold uppercase text-yellow-400"> {/* Brand name and icon */}
                <MdComputer className="text-4xl" /> {/* Computer icon */}
                <p>An Academy</p> {/* Brand name */}
              </div>
              <p className="text-gray-300 text-sm"> {/* Brand description */}
                Welcome to An Academy – your gateway to interactive and personalized learning! Our expert tutors make complex topics easy to understand through real-world examples and hands-on guidance.
              </p>
              <div className="flex items-center gap-5 mt-6"> {/* Social icons container */}
                <a href="#" className="hover:text-yellow-400 transition transform hover:scale-110"> {/* Location icon link */}
                  <HiLocationMarker className="text-3xl" />
                </a>
                <a href="#" className="hover:text-yellow-400 transition transform hover:scale-110"> {/* Instagram icon link */}
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="hover:text-yellow-400 transition transform hover:scale-110"> {/* Facebook icon link */}
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="hover:text-yellow-400 transition transform hover:scale-110"> {/* LinkedIn icon link */}
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
            {/* Footer Links Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 gap-6"> {/* Links grid */}
              {["Important Links", "Resources", "Company Links"].map((title, index) => ( // Map through link categories
                <div key={index} className="py-6 px-4"> {/* Each category container */}
                  <h1 className="text-lg font-bold text-yellow-400 mb-4">{title}</h1> {/* Category title */}
                  <ul className="space-y-3 text-gray-300 text-sm"> {/* Links list */}
                    {["Home", "About", "Services", "Login"].map((link, i) => ( // Map through links
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
          <div className="text-center py-6 border-t border-gray-600/20 text-gray-400 text-sm"> {/* Copyright */}
            &copy; 2025 Manish Kumar. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer; // Export Footer component as default