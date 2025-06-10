import React from "react"; // Import React library
import { GrYoga } from "react-icons/gr"; // Import yoga icon
import { FaDumbbell } from "react-icons/fa6"; // Import dumbbell icon
import { GiGymBag } from "react-icons/gi"; // Import gym bag icon
import { motion } from "framer-motion"; // Import motion for animations
import { SlideLeft } from "../../utility/animation"; // Import SlideLeft animation utility

const WhyChooseData = [ // Array of reasons to choose the service
  {
    id: 1,
    title: "One-on-One Teaching",
    desc: "All of our special education experts have a degree in special education.",
    icon: <GrYoga />,
    bgColor: "#0063ff",
    delay: 0.3,
  },
  {
    id: 2,
    title: "24/7 Tutor Availability",
    desc: "Our tutors are always available to respond as quickly as possible for you.",
    icon: <FaDumbbell />,
    bgColor: "#73bc00",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Interactive Whiteboard",
    desc: "Our digital whiteboard is equipped with audio and video chat features.",
    icon: <GiGymBag />,
    bgColor: "#fa6400",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Affordable Prices",
    desc: "Choose an expert tutor based on your budget and hourly rate.",
    icon: <GiGymBag />,
    bgColor: "#fe6baa",
    delay: 1.2,
  },
];

const WhyChoose = () => { // Define WhyChoose component
  return (
    <div className="bg-[#0a192f] text-white"> {/* Dark blue background */}
      <div className="container py-24">
        {/* Header Section */}
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-yellow-400">
            Why Choose Us
          </h1>
          <p className="font-semibold text-3xl">
            Benefits of Online Tutoring Services with Us
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {WhyChooseData.map((item) => (
            <motion.div
              key={item.id} // Unique key for each card
              variants={SlideLeft(item.delay)} // Animation variant with delay
              initial="hidden" // Initial animation state
              whileInView="visible" // Animate to visible when in view
              className="space-y-4 p-6 rounded-xl shadow-lg bg-[#1e293b] hover:scale-105 transition duration-300"
            >
              {/* Icon Section */}
              <div
                style={{ backgroundColor: item.bgColor }}
                className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
              >
                <div className="text-2xl">{item.icon}</div>
              </div>
              <p className="font-semibold">{item.title}</p> {/* Card title */}
              <p className="text-sm text-gray-300">{item.desc}</p> {/* Card description */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose; // Export WhyChoose component as default