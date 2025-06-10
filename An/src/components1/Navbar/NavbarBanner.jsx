import React from "react"; // Import React library
import { motion } from "framer-motion"; // Import motion for animations

const NavbarBanner = () => { // Define NavbarBanner component
  const [isOpen, setIsOpen] = React.useState(true); // State to control banner visibility
  return (
    isOpen && ( // Render banner if isOpen is true
      <motion.div
        initial={{ opacity: 0 }} // Initial animation state
        animate={{ opacity: 1 }} // Animate to visible
        transition={{ duration: 0.5, delay: 0.7 }} // Animation transition
        className="bg-primary text-sm text-center font-semibold p-1 hidden lg:block relative" // Banner styling
      >
        Are you a university or school student for an online tutoring
        partnership?
        <a href="#" className="text-secondary ml-2"> {/* Link to talk to us */}
          Talk to us
        </a>
        <div
          className="absolute top-1/2 right-10 cursor-pointer -translate-y-1/2" // Close button styling
          onClick={() => setIsOpen(false)} // Close banner on click
        >
          X
        </div>
      </motion.div>
    )
  );
};
export default NavbarBanner; // Export NavbarBanner component as default