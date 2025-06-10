import React from "react"; // Import React library
import { NavbarMenu } from "../../mockData/data.js"; // Import Navbar menu data
import { MdComputer, MdMenu, MdClose } from "react-icons/md"; // Import icons
import { motion } from "framer-motion"; // Import motion for animations
import ResponsiveMenu from "./ResponsiveMenu.jsx"; // Import ResponsiveMenu component

const Navbarm = () => { // Define Navbarm component
  const [isOpen, setIsOpen] = React.useState(false); // State for mobile menu open/close

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animate to visible
        transition={{ duration: 0.5 }} // Animation transition
        className="fixed w-full top-0 left-0 bg-white shadow-md backdrop-blur-lg z-50" // Navbar styling
      >
        <div className="container flex justify-between items-center py-4 px-6 lg:px-10"> {/* Navbar content container */}
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <MdComputer className="text-3xl text-secondary" /> {/* Computer icon */}
            <p className="text-gray-800">An Academy</p> {/* Brand name */}
          </div>

          {/* Menu section */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => ( // Map through menu items
                <li key={item.id}>
                  <a
                    href={item.path}
                    className="inline-block text-gray-700 text-sm xl:text-base py-1 px-3 hover:text-secondary transition-all duration-300 font-semibold"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* CTA Button section */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="font-semibold text-gray-700 hover:text-secondary transition-all">Sign in</button> {/* Sign in button */}
            <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2 shadow-lg hover:bg-opacity-90 transition-all">Register</button> {/* Register button */}
          </div>
          
          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}> {/* Hamburger menu for mobile */}
            {isOpen ? <MdClose className="text-4xl text-gray-800" /> : <MdMenu className="text-4xl text-gray-800" />}
          </div>
        </div>
      </motion.div>
      
      {/* Mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} /> {/* Responsive menu for mobile */}
    </>
  );
};

export default Navbarm; // Export Navbarm component as default