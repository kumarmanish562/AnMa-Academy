import React from "react";
import CountUp from "react-countup";
import { FaChalkboardTeacher, FaClock, FaBookOpen, FaUsers } from "react-icons/fa";

const stats = [
  { id: 1, end: 898, label: "Expert Tutors", icon: <FaChalkboardTeacher /> },
  { id: 2, end: 20000, label: "Hours Content", icon: <FaClock />, suffix: "+" },
  { id: 3, end: 298, label: "Subjects & Courses", icon: <FaBookOpen /> },
  { id: 4, end: 72878, label: "Active Students", icon: <FaUsers />, suffix: "+" },
];

const NumberCounter = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center justify-center bg-white/10 rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300"
          >
            <div className="text-4xl mb-3 text-yellow-300">{stat.icon}</div>
            <p className="text-4xl font-bold">
              <CountUp
                end={stat.end}
                duration={3}
                separator="," 
                suffix={stat.suffix || ""}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </p>
            <p className="text-lg mt-2 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberCounter;