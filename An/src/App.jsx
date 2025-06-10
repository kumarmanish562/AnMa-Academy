import React from "react"; // Import React library
import Navbarm from "./components1/Navbar/Navbarm"; // Import Navbarm component
import NavbarBanner from "./components1/Navbar/NavbarBanner"; // Import NavbarBanner component
import Hero from "./components1/Hero/Hero"; // Import Hero component
import NumberCounter from "./components1/NumberCounter/NumberCounter"; // Import NumberCounter component
import WhyChoose from "./components1/WhyChooseUS/WhyChoose"; // Import WhyChoose component
import Img1 from "./assets/banner1.png"; // Import banner1 image
import Img2 from "./assets/banner2.png"; // Import banner2 image
import Banner from "./components1/Banner/Banner"; // Import Banner component
import SubjectCard from "./components1/SubjectCard/SubjectCard"; // Import SubjectCard component
import Testimonial from "./components1/Testimonial/Testimonial"; // Import Testimonial component
import Footer from "./components1/Footer/Footer"; // Import Footer component

const BannerData = { // Banner data for first banner
  image: Img1,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Personalized Professional Online Tutor on Your Schedule",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
  link: "#",
};

const BannerData2 = { // Banner data for second banner
  image: Img2,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Talented and Qualified Tutors to Serve You for Help",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
  link: "#",
};

const App = () => { // Define App component
  return (
    <main className="overflow-x-hidden bg-darkBlue text-white min-h-screen"> {/* Main wrapper */}
      <Navbarm /> {/* Navbar */}
      <NavbarBanner /> {/* Top banner */}
      <Hero /> {/* Hero section */}
      <NumberCounter /> {/* Number counter section */}
      <WhyChoose /> {/* Why choose us section */}
      <Banner {...BannerData} /> {/* First banner */}
      <Banner {...BannerData2} reverse={true} /> {/* Second banner with reverse layout */}
      <SubjectCard /> {/* Subject cards section */}
      <Testimonial /> {/* Testimonials section */}
      <Footer /> {/* Footer */}
    </main>
  );
};

export default App; // Export App component as default