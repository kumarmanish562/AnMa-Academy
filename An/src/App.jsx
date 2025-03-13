import React from "react";
import Navbarm from "./components1/Navbar/Navbarm";
import NavbarBanner from "./components1/Navbar/NavbarBanner";
import Hero from "./components1/Hero/Hero";
import NumberCounter from "./components1/NumberCounter/NumberCounter";
import WhyChoose from "./components1/WhyChooseUS/WhyChoose";
import Img1 from "./assets/banner1.png";
import Img2 from "./assets/banner2.png";
import Banner from "./components1/Banner/Banner";
import SubjectCard from "./components1/SubjectCard/SubjectCard";
import Testimonial from "./components1/Testimonial/Testimonial";
import Footer from "./components1/Footer/Footer";

const BannerData = {
  image: Img1,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Personalized Professional Online Tutor on Your Schedule",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Talented and Qualified Tutors to Serve You for Help",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
  link: "#",
};

const App = () => {
  return (
    <main className="overflow-x-hidden bg-darkBlue text-white min-h-screen">
      <Navbarm />
      <NavbarBanner />
      <Hero />
      <NumberCounter />
      <WhyChoose />
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
      <SubjectCard />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default App;