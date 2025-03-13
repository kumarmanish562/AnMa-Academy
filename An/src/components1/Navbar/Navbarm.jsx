import React from "react";
import { NavbarMenu } from "../../mockData/data.js";
import { MdComputer, MdMenu, MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu.jsx";

const Navbarm = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full top-0 left-0 bg-white shadow-md backdrop-blur-lg z-50"
      >
        <div className="container flex justify-between items-center py-4 px-6 lg:px-10">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <MdComputer className="text-3xl text-secondary" />
            <p className="text-gray-800">An Academy</p>
          </div>

          {/* Menu section */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => (
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
            <button className="font-semibold text-gray-700 hover:text-secondary transition-all">Sign in</button>
            <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2 shadow-lg hover:bg-opacity-90 transition-all">Register</button>
          </div>
          
          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdClose className="text-4xl text-gray-800" /> : <MdMenu className="text-4xl text-gray-800" />}
          </div>
        </div>
      </motion.div>
      
      {/* Mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbarm;