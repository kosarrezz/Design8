import React from "react";
import Navbar from "./components/Navbar/Navbar"; 
import Hero from "./components/Hero/Hero";    
import CoursesSlider from "./components/Courses/CoursesSlider"; 
import TopInstructors from "./components/TopInstructors";
import WhyUsSection from "./components/WhyUsSection";
import RoadmapSection from "./components/RoadmapSection";
import BestCoursesSection from "./components/BestCoursesSection";
import PopularCategories from "./components/PopularCategories";

function App() {
  return (
<div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Navbar />
      <Hero />
      <CoursesSlider />
      <TopInstructors />
      <WhyUsSection />
      <RoadmapSection />
      <BestCoursesSection />
      <PopularCategories />
    </div>
    
  );
}

export default App;
