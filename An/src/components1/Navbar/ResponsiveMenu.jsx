import React from "react"; // Import React library
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence for animations

const ResponsiveMenu = ({ isOpen }) => { // Define ResponsiveMenu component with isOpen prop
  return (
    <AnimatePresence mode="wait"> {/* AnimatePresence for exit/enter animation */}
      {isOpen && ( // Render menu if isOpen is true
        <motion.div
          initial={{ opacity: 0, y: -100 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animate to visible
          exit={{ opacity: 0, y: -100 }} // Exit animation state
          transition={{ duration: 0.3 }} // Animation transition
          className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden" // Responsive menu styling
        >
          <div className="text-xl font-semibold uppercase bg-primary text-black py-10 m-6 rounded-3xl"> {/* Menu container styling */}
            <ul className="flex flex-col justify-center items-center gap-10"> {/* Menu list styling */}
              <li>Home</li> {/* Home link */}
              <li>About</li> {/* About link */}
              <li>Service</li> {/* Service link */}
              <li>Contact</li> {/* Contact link */}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu; // Export ResponsiveMenu component as default