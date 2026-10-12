import React from "react";
import Navbar from "./components/Navbar/Navbar"; 
import Hero from "./components/Hero/Hero";    
import CoursesSlider from "./components/Courses/CoursesSlider"; 
import TopInstructors from "./components/TopInstructors";
import WhyUsSection from "./components/WhyUsSection";
import RoadmapSection from "./components/RoadmapSection";
import BestCoursesSection from "./components/BestCoursesSection/BestCoursesSection";
import PopularCategories from "./components/PopularCategories";
import StudentReviewsSection from "./components/StudentReviewsSection";
import LatestNewsSection from "./components/LatestNewsSection";
import Footer from "./Footer";

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-white dark:bg-[#212121] transition-colors duration-300">
      <Navbar />
      <Hero />
      <CoursesSlider />
      <TopInstructors />
      <WhyUsSection />
      <RoadmapSection />
      <BestCoursesSection />
      <PopularCategories />
      <StudentReviewsSection />
      <LatestNewsSection />
      <Footer />
    </div>
  );
}

export default App;
