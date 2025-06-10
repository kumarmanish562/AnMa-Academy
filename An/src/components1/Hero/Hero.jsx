import React from "react"; // Import React library
import HeroImg from "../../assets/hero.png"; // Import hero image
import { FaPlay } from "react-icons/fa"; // Import play icon
import { motion } from "framer-motion"; // Import motion for animations
import { SlideRight } from "../../utility/animation"; // Import SlideRight animation utility

const Hero = () => { // Define Hero component
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative"> {/* Main grid container */}
        {/* brand info */}
        <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0"> {/* Brand info section */}
          <div className="text-center md:text-left space-y-6"> {/* Text container */}
            <motion.p
              variants={SlideRight(0.4)} // Animation variant
              initial="hidden" // Initial state
              animate="visible" // Animate to visible
              className="text-orange-600 uppercase font-semibold" // Styling for guarantee text
            >
              100% Satisfaction Guarantee
            </motion.p>
            <motion.h1
              variants={SlideRight(0.6)} // Animation variant
              initial="hidden" // Initial state
              animate="visible" // Animate to visible
              className="text-5xl font-semibold lg:text-6xl !leading-tight" // Styling for heading
            >
              Find Your Perfect <span className="text-primary">Tutor</span>
            </motion.h1>
            <motion.p
              variants={SlideRight(0.8)} // Animation variant
              initial="hidden" // Initial state
              animate="visible" // Animate to visible
            >
              We help you find perfect tutor for 1-on-1 lessons. It is
              completely free and private
            </motion.p>
            {/* button section */}
            <motion.div
              variants={SlideRight(1.0)} // Animation variant
              initial="hidden" // Initial state
              animate="visible" // Animate to visible
              className="flex gap-8 justify-center md:justify-start !mt-8 items-center" // Button container styling
            >
              <button className="primary-btn">Get Started</button> {/* Get Started button */}
              <button className="flex justify-end items-center gap-2 font-semibold"> {/* See how it works button */}
                <span className="w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center">
                  <FaPlay className="text-secondary" /> {/* Play icon */}
                </span>
                See how it works
              </button>
            </motion.div>
          </div>
        </div>
        {/* Hero image */}
        <div className="flex justify-center items-center"> {/* Image container */}
          <motion.img
            initial={{ opacity: 0, x: 200 }} // Initial animation state
            animate={{ opacity: 1, x: 0 }} // Animate to visible
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }} // Animation transition
            src={HeroImg} // Hero image source
            alt="" // Empty alt attribute
            className="w-[350px] md:w-[550px] xl:w-[700px]" // Image styling
          />
        </div>
      </div>
    </>
  );
};

export default Hero; // Export Hero component as default