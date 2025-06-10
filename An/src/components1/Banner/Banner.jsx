// Import React library
import React from "react";
// Import motion from framer-motion for animations
import { motion } from "framer-motion";
// Import SlideUp animation utility
import { SlideUp } from "../../utility/animation";

// Define Banner component with props
const Banner = ({ image, title, subtitle, link, tag, reverse }) => {
  // Return JSX for Banner
  return (
    // Main container with gradient background and padding
    <div className="bg-gradient-to-r from-[#0a192f] to-[#1e293b] pb-14 text-white"> {/* Dark Gradient Background */}
      {/* Content container */}
      <div className="container">
        {/* Grid layout for image and text */}
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
          {/* Banner Image Section */}
          <div
            // Flex container for image, reverses order if reverse is true
            className={`flex justify-start items-center ${
              reverse && "md:order-last md:justify-end"
            }`}
          >
            {/* Animated image using framer-motion */}
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }} // Initial animation state
              whileInView={{ opacity: 1, scale: 1 }} // Animation when in view
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }} // Animation transition
              src={image} // Image source from props
              alt="" // Empty alt attribute
              className="w-[400px] h-full object-cover rounded-xl shadow-lg" // Styling for image
            />
          </div>
          {/* Banner Text Section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
            {/* Animated tag text */}
            <motion.p
              variants={SlideUp(0.5)} // Animation variant
              initial="hidden" // Initial state
              whileInView={"visible"} // State when in view
              className="text-sm text-yellow-400 font-semibold capitalize" // Styling for tag
            >
              {tag} {/* Tag text from props */}
            </motion.p>
            {/* Animated title text */}
            <motion.p
              variants={SlideUp(0.7)} // Animation variant
              initial="hidden" // Initial state
              whileInView={"visible"} // State when in view
              className="text-xl lg:text-2xl font-semibold capitalize" // Styling for title
            >
              {title} {/* Title text from props */}
            </motion.p>
            {/* Animated subtitle text */}
            <motion.p
              variants={SlideUp(0.9)} // Animation variant
              initial="hidden" // Initial state
              whileInView={"visible"} // State when in view
              className="text-sm text-gray-300" // Styling for subtitle
            >
              {subtitle} {/* Subtitle text from props */}
            </motion.p>
            {/* Animated button container */}
            <motion.div
              variants={SlideUp(1.1)} // Animation variant
              initial="hidden" // Initial state
              whileInView={"visible"} // State when in view
              className="flex justify-center md:justify-start" // Styling for button container
            >
              {/* Get Started button */}
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg shadow-md transition duration-300">
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export Banner component as default
export default Banner;